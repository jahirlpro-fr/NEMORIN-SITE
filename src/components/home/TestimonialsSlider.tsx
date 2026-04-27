"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionTitle } from "@/components/shared/SectionTitle";

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="bg-bg py-section-mobile md:py-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="TÉMOIGNAGES"
          title="Ce que disent nos clients"
          align="center"
        />

        <div className="mt-16 relative">
          {/* Decorative quote mark */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-gold opacity-20">
            <Quote className="w-16 h-16" fill="currentColor" />
          </div>

          {/* Testimonial content */}
                  <div className="relative min-h-[280px] flex items-center justify-center pt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center max-w-3xl"
              >
                {/* Quote */}
                              <blockquote className="font-display font-light text-2xl md:text-3xl text-text italic leading-relaxed mb-12">
                                  "{current.quote}"
                              </blockquote>

                              {/* Author */}
                              <div className="space-y-2 mb-8">
                  <p className="font-body font-medium text-primary">
                    {current.name}
                  </p>
                  <p className="font-label text-sm text-text-muted uppercase tracking-wider">
                    {current.role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={handlePrev}
              className="group p-3 rounded-full border border-gold hover:bg-gold transition-colors"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-5 h-5 text-gold group-hover:text-white transition-colors" />
            </button>

            {/* Dots indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-gold w-8"
                      : "bg-border hover:bg-gold/50"
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="group p-3 rounded-full border border-gold hover:bg-gold transition-colors"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-5 h-5 text-gold group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}