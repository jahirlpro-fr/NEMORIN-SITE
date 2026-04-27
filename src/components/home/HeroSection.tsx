"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/shared/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* LEFT SIDE — 60% */}
          <div className="lg:col-span-3 space-y-8">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="label-caps text-gold-light text-xs">
                AVOCATE AU BARREAU DE PARIS
              </span>
            </motion.div>

            {/* Title with clip reveal */}
            <div className="space-y-2">
              <motion.h1
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-light text-white"
                style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1.1 }}
              >
                Votre Avocate
              </motion.h1>
              <motion.h1
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-light"
                style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1.1 }}
              >
                <span className="text-gold">d'Affaires</span>{" "}
                <span className="text-white">à Paris</span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-body font-light text-white/80 text-lg max-w-2xl leading-relaxed"
            >
              Maître Stéphanie NEMORIN accompagne dirigeants et entreprises avec rigueur et discrétion, en français, anglais et espagnol.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button href="/contact" variant="primary">
                Prendre rendez-vous
              </Button>
              <Button href="/expertises" variant="ghost">
                Découvrir mes expertises
              </Button>
            </motion.div>
          </div>

          {/* RIGHT SIDE — 40% Professional Photo Placeholder */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full max-w-md aspect-[3/4] bg-primary border-2 border-gold rounded-sm shadow-2xl flex items-center justify-center"
            >
              <span className="font-display font-semibold text-gold text-8xl tracking-wider">
                S.N.
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold-light"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}