"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/shared/Button";

export function CtaBanner() {
  return (
    <section className="bg-gold py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary">
            Un dossier ? Une question juridique ?
          </h2>

          {/* Subtitle */}
          <p className="font-body text-lg text-primary/80 max-w-2xl mx-auto">
            Bénéficiez d'un premier échange pour évaluer ensemble votre situation et identifier les solutions adaptées.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              href="/contact"
              variant="secondary"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              Contactez-nous
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}