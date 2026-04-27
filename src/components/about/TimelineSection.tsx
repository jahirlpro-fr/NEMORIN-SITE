"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    year: "2015-2017",
    title: "Formation juridique d'excellence",
    description: "Double Master 2 en Droit des sociétés (Université de Cergy-Pontoise) et en Droit pénal des affaires (Université Paris-Est Créteil)",
  },
  {
    year: "2019",
    title: "Inscription au Barreau de Paris",
    description: "Assermentée avocate au Barreau de Paris — Numéro de toque E1119",
  },
  {
    year: "2019-2023",
    title: "Expertise en cabinet parisien",
    description: "Collaboration auprès d'institutionnels de la sphère bancaire et financière — contentieux et conseil en droit des affaires",
  },
  {
    year: "2024",
    title: "Cabinet indépendant",
    description: "Création de son propre cabinet pour offrir un accompagnement personnalisé et sur-mesure aux dirigeants et entreprises",
  },
];

export function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="bg-bg-alt py-section-mobile md:py-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="label-caps text-gold mb-3 block">PARCOURS</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary">
            Un parcours au service de l'excellence
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gold origin-top hidden md:block"
          />

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col`}
                >
                  {/* Content */}
                  <div className={`md:w-5/12 ${isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12"} text-left`}>
                    <span className="font-display text-3xl md:text-4xl font-semibold text-gold block mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-primary mb-3">
                      {milestone.title}
                    </h3>
                    <p className="font-body text-text-muted leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Center dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                    className="absolute left-1/2 top-0 md:relative md:left-auto md:top-auto w-4 h-4 bg-gold rounded-full border-4 border-bg-alt hidden md:block"
                  />

                  {/* Mobile dot */}
                  <div className="md:hidden w-3 h-3 bg-gold rounded-full mb-3" />

                  {/* Empty space for alternating layout */}
                  <div className="md:w-5/12 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}