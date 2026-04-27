"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { SEO } from "@/components/SEO";
import { expertises } from "@/data/expertises";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export default function ExpertisesPage() {
  return (
    <>
      <SEO
        title="Nos Domaines d'Expertise — Maître Stéphanie NEMORIN"
        description="Expertise complète en droit des affaires : contentieux commercial, droit pénal des affaires, droit des sociétés, droit des contrats, droit immobilier, droit bancaire et financier."
      />

      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="label-caps text-gold-light mb-4 block">
              NOS EXPERTISES
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Nos Domaines d'Expertise
            </h1>
            <p className="font-body text-lg text-white/80 leading-relaxed">
              Une expertise complète en droit des affaires pour accompagner dirigeants et entreprises dans tous leurs enjeux juridiques, du conseil stratégique à la défense contentieuse.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Cards Grid */}
      <section className="bg-bg py-section-mobile md:py-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertises.map((expertise, index) => {
                const IconComponent = LucideIcons[expertise.iconName as keyof typeof LucideIcons] as React.ComponentType<{ className?: string; strokeWidth?: number }>;
                
                return (
                  <motion.div
                    key={expertise.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link href={`/expertises/${expertise.slug}`}>
                      <div className="group bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                        {/* Gold left border on hover */}
                        <motion.div
                          initial={{ scaleY: 0 }}
                          whileHover={{ scaleY: 1 }}
                          transition={{ duration: 0.3 }}
                          className="absolute left-0 top-0 bottom-0 w-1 bg-gold origin-top"
                        />

                        {/* Icon */}
                        <div className="mb-6">
                          <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                            <IconComponent className="w-7 h-7 text-gold" strokeWidth={1.5} />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="font-heading text-2xl font-semibold text-primary mb-3 group-hover:text-gold transition-colors">
                          {expertise.title}
                        </h3>

                        {/* Subtitle */}
                        <p className="font-body text-sm text-gold mb-4">
                          {expertise.subtitle}
                        </p>

                        {/* Description */}
                        <p className="font-body text-text-muted leading-relaxed mb-6 flex-grow">
                          {expertise.description}
                        </p>

                        {/* Link */}
                        <div className="flex items-center gap-2 text-sm font-medium text-gold group-hover:gap-3 transition-all">
                          <span>Découvrir</span>
                          <LucideIcons.ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}