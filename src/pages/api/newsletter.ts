import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const newsletterSchema = z.object({
  email: z.string().email("Adresse email invalide"),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  try {
    const data = newsletterSchema.parse(req.body);

    // Insert into Supabase
    const { error: dbError } = await supabase
      .from("newsletter_subscribers")
      .insert([
        {
          email: data.email,
        },
      ]);

    if (dbError) {
      if (dbError.code === '23505') {
        return res.status(400).json({ error: "Cette adresse email est déjà inscrite." });
      }
      throw new Error("Erreur lors de l'enregistrement en base de données");
    }

    return res.status(200).json({ 
      success: true, 
      message: "Inscription réussie à la newsletter." 
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors[0].message });
    }
    
    console.error("Newsletter error:", error);
    return res.status(500).json({ 
      error: "Une erreur est survenue lors de l'inscription." 
    });
  }
}