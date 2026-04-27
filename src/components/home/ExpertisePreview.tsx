"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { expertises } from "@/data/expertises";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function ExpertisePreview() {
  return (
    <section className="bg-bg-alt py-section-mobile md:py-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="NOS DOMAINES"
          title="Une expertise complète en droit des affaires"
          align="center"
        />

        <AnimatedSection className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertises.map((expertise, index) => {
              const IconComponent = (LucideIcons as any)[expertise.iconName];
              
              return (
                <motion.div
                  key={expertise.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {/* Gold left border on hover */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gold origin-top"
                  />

                  {/* Icon */}
                  <div className="mb-4">
                    {IconComponent && (
                      <IconComponent className="w-8 h-8 text-gold" strokeWidth={1.5} />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                    {expertise.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm text-text-muted mb-4 line-clamp-2">
                    {expertise.description}
                  </p>

                  {/* Link */}
                  <Link
                    href={`/expertises/${expertise.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light transition-colors group"
                  >
                    Découvrir
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}