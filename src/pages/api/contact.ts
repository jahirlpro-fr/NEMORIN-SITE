import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { createClient } from "@supabase/supabase-js";

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

    // TODO: Send emails via Resend when RESEND_API_KEY is configured
    // 1. Email to lawyer (stephanie.nemorin@avocat.fr)
    // 2. Confirmation email to client

    // For now, just return success
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