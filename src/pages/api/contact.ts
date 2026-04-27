import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const contactSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(1),
  message: z.string().min(20),
  rgpd: z.boolean().refine((val) => val === true),
  website: z.string().optional(), // Honeypot
});

// Admin Supabase client with service role for backend operations
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Parse and validate request body
    const body = contactSchema.parse(req.body);

    // Honeypot check - if filled, silently reject (looks like success to bot)
    if (body.website) {
      return res.status(200).json({ success: true });
    }

    // Get client IP for rate limiting
    const clientIp =
      (req.headers["x-forwarded-for"] as string)?.split(",")[0] ||
      req.socket.remoteAddress ||
      "unknown";

    // Rate limiting: check submissions from this IP in the last hour
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { count } = await supabaseAdmin
      .from("contact_requests")
      .select("*", { count: "exact", head: true })
      .eq("ip_address", clientIp)
      .gte("created_at", oneHourAgo);

    if (count && count >= 5) {
      return res.status(429).json({
        error: "Trop de demandes. Veuillez réessayer dans une heure.",
      });
    }

    // Save to Supabase
    const { error: dbError } = await supabaseAdmin.from("contact_requests").insert({
      first_name: body.firstName,
      last_name: body.lastName,
      email: body.email,
      phone: body.phone || null,
      subject: body.subject,
      message: body.message,
      status: "new",
      ip_address: clientIp,
    });

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Erreur lors de l'enregistrement de votre demande");
    }

      // Envoi des emails via Resend
      if (process.env.RESEND_API_KEY) {
          const resend = new Resend(process.env.RESEND_API_KEY);

          // Email de notification à l'avocate
          await resend.emails.send({
              from: `Cabinet NEMORIN <${process.env.RESEND_FROM_EMAIL}>`,
              to: process.env.RESEND_TO_EMAIL!,
              subject: `[Nouveau contact] ${body.subject} — ${body.firstName} ${body.lastName}`,
              html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #FAFAF8;">
        <div style="border-top: 3px solid #C9A96E; padding-top: 30px; margin-bottom: 30px;">
          <h1 style="font-size: 24px; color: #0F1B2D; margin: 0 0 8px 0;">Nouvelle demande de contact</h1>
          <p style="color: #6B6B7A; font-size: 14px; margin: 0;">Reçue le ${new Date().toLocaleDateString("fr-FR", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #E2DDD6; color: #6B6B7A; width: 140px; font-size: 14px;">Prénom</td><td style="padding: 10px 0; border-bottom: 1px solid #E2DDD6; color: #1A1A2E; font-size: 14px;">${body.firstName}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #E2DDD6; color: #6B6B7A; font-size: 14px;">Nom</td><td style="padding: 10px 0; border-bottom: 1px solid #E2DDD6; color: #1A1A2E; font-size: 14px;">${body.lastName}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #E2DDD6; color: #6B6B7A; font-size: 14px;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #E2DDD6; color: #1A1A2E; font-size: 14px;"><a href="mailto:${body.email}" style="color: #C9A96E;">${body.email}</a></td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #E2DDD6; color: #6B6B7A; font-size: 14px;">Téléphone</td><td style="padding: 10px 0; border-bottom: 1px solid #E2DDD6; color: #1A1A2E; font-size: 14px;">${body.phone || "Non renseigné"}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #E2DDD6; color: #6B6B7A; font-size: 14px;">Objet</td><td style="padding: 10px 0; border-bottom: 1px solid #E2DDD6; color: #1A1A2E; font-size: 14px;">${body.subject}</td></tr>
        </table>
        <div style="margin-top: 24px;">
          <p style="color: #6B6B7A; font-size: 14px; margin-bottom: 8px;">Message :</p>
          <div style="background: #F4F2EE; padding: 20px; border-left: 3px solid #C9A96E; color: #1A1A2E; font-size: 15px; line-height: 1.6;">${body.message}</div>
        </div>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E2DDD6;">
          <a href="mailto:${body.email}" style="display: inline-block; background: #0F1B2D; color: #C9A96E; padding: 12px 24px; text-decoration: none; font-size: 14px; letter-spacing: 0.05em;">Répondre à ${body.firstName}</a>
        </div>
        <p style="color: #6B6B7A; font-size: 12px; margin-top: 30px;">Cabinet Maître Stéphanie NEMORIN — Avocate au Barreau de Paris</p>
      </div>
    `,
          });

          // Email de confirmation au client
          await resend.emails.send({
              from: `Maître Stéphanie NEMORIN <${process.env.RESEND_FROM_EMAIL}>`,
              to: body.email,
              subject: `Votre demande a bien été reçue — Cabinet Maître NEMORIN`,
              html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #FAFAF8;">
        <div style="border-top: 3px solid #C9A96E; padding-top: 30px; margin-bottom: 30px;">
          <h1 style="font-size: 24px; color: #0F1B2D; margin: 0 0 8px 0;">Votre demande a bien été reçue</h1>
          <p style="color: #6B6B7A; font-size: 14px; margin: 0;">Cabinet Maître Stéphanie NEMORIN — Avocate au Barreau de Paris</p>
        </div>
        <p style="color: #1A1A2E; font-size: 16px; line-height: 1.7;">Maître ${body.firstName},</p>
        <p style="color: #1A1A2E; font-size: 15px; line-height: 1.7;">Nous avons bien reçu votre demande concernant <strong>${body.subject}</strong>. Maître NEMORIN prendra connaissance de votre message dans les meilleurs délais.</p>
        <div style="background: #F4F2EE; padding: 20px; margin: 24px 0; border-left: 3px solid #C9A96E;">
          <p style="color: #1A1A2E; font-size: 15px; margin: 0 0 8px 0;"><strong>Délai de réponse :</strong> sous 48 heures ouvrées</p>
          <p style="color: #1A1A2E; font-size: 15px; margin: 0;"><strong>Horaires du cabinet :</strong> Lundi–Vendredi, 9h–19h</p>
        </div>
        <p style="color: #6B6B7A; font-size: 14px; line-height: 1.6;">Toute communication entre vous et le cabinet est strictement confidentielle et couverte par le secret professionnel.</p>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E2DDD6;">
          <p style="color: #1A1A2E; font-size: 14px; margin: 0;">Cordialement,</p>
          <p style="color: #0F1B2D; font-size: 16px; font-weight: bold; margin: 4px 0;">Maître Stéphanie NEMORIN</p>
          <p style="color: #6B6B7A; font-size: 13px; margin: 0;">Avocate au Barreau de Paris — Toque E1119</p>
          <p style="color: #6B6B7A; font-size: 13px; margin: 4px 0;">Paris 75116</p>
        </div>
      </div>
    `,
          });
      }

      return res.status(200).json({
          success: true,
          message: "Votre demande a bien été enregistrée. Nous vous répondons sous 48h ouvrées.",
      });
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: "Données invalides",
        details: error.errors,
      });
    }

    return res.status(500).json({
      error: error instanceof Error ? error.message : "Erreur interne du serveur",
    });
  }
}