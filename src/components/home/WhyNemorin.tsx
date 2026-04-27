"use client";

import { motion } from "framer-motion";
import { Scale, Users, Heart } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const arguments = [
  {
    number: "01",
    icon: Scale,
    title: "Double expertise",
    description: "Droit des affaires & pénal des affaires — une vision complète des enjeux stratégiques et judiciaires de votre entreprise.",
  },
  {
    number: "02",
    icon: Users,
    title: "Présence terrain",
    description: "Présente à vos côtés à chaque étape, de la stratégie initiale à l'audience, pour une défense personnalisée et engagée.",
  },
  {
    number: "03",
    icon: Heart,
    title: "Cabinet à taille humaine",
    description: "Un interlocuteur unique, disponible et réactif, qui connaît parfaitement votre dossier et vos enjeux spécifiques.",
  },
];

export function WhyNemorin() {
  return (
    <section className="bg-bg py-section-mobile md:py-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="POURQUOI ME CHOISIR"
          title="Un accompagnement sur-mesure à chaque étape"
          align="center"
        />

        <AnimatedSection className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {arguments.map((arg, index) => {
              const Icon = arg.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -4 }}
                  className="group relative bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {/* Number watermark */}
                  <div className="absolute top-6 right-6 font-display text-7xl font-semibold text-gold-light opacity-20">
                    {arg.number}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 mb-6">
                    <Icon className="w-10 h-10 text-gold" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 font-heading text-2xl font-semibold text-primary mb-4">
                    {arg.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 font-body text-text-muted leading-relaxed">
                    {arg.description}
                  </p>

                  {/* Bottom border on hover */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gold origin-left"
                  />
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}