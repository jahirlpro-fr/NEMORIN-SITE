"use client";

import { motion } from "framer-motion";
import { Phone, FileText, Briefcase } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const steps = [
  {
    number: 1,
    icon: Phone,
    title: "Premier contact",
    description: "Prise de contact par email ou téléphone. Échange initial sur votre situation et vos besoins juridiques.",
  },
  {
    number: 2,
    icon: FileText,
    title: "Consultation",
    description: "Rendez-vous approfondi pour analyser votre dossier, clarifier les enjeux et définir une stratégie adaptée.",
  },
  {
    number: 3,
    icon: Briefcase,
    title: "Accompagnement",
    description: "Mise en œuvre de la stratégie, suivi personnalisé et présence à vos côtés jusqu'à la résolution complète.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-primary text-white py-section-mobile md:py-section relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-[#1a2d45] opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          label="NOTRE DÉMARCHE"
          title="Comment se déroule notre collaboration ?"
          align="center"
          className="text-white"
        />

        <AnimatedSection className="mt-16">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative pt-10">
                      {/* Connecting line (desktop only) */}
                      <div className="hidden md:block absolute top-[72px] left-[10%] right-[10%] h-px bg-gold opacity-30" />

            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative text-center"
                >
                  {/* Number badge */}
                      <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-8 mt-2">
                    <span className="font-display text-2xl font-semibold text-primary">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <Icon className="w-10 h-10 text-gold-light" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-2xl font-semibold text-gold mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-white/80 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}