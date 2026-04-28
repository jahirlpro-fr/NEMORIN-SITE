"use client";

import { motion } from "framer-motion";
import { Scale, Shield, Users, Zap, Check } from "lucide-react";
import { SEO } from "@/components/SEO";
import { TimelineSection } from "@/components/about/TimelineSection";
import { GoldDivider } from "@/components/shared/GoldDivider";

const values = [
  {
    icon: Scale,
    title: "Rigueur",
    description: "Une analyse juridique précise et approfondie, fondée sur une double expertise en droit des affaires et pénal des affaires.",
  },
  {
    icon: Shield,
    title: "Discrétion",
    description: "Le secret professionnel absolu et la confidentialité garantis à chaque étape de votre dossier.",
  },
  {
    icon: Users,
    title: "Disponibilité",
    description: "Un interlocuteur unique et réactif, joignable pour répondre à vos questions et suivre l'avancement de vos dossiers.",
  },
  {
    icon: Zap,
    title: "Sur-mesure",
    description: "Des solutions juridiques adaptées à vos enjeux spécifiques, sans approche standardisée.",
  },
];

const languages = [
  {
    flag: "🇫🇷",
    name: "Français",
    level: "Langue maternelle",
  },
  {
    flag: "🇬🇧",
    name: "English",
    level: "Courant — Négociations et rédaction",
  },
  {
    flag: "🇪🇸",
    name: "Español",
    level: "Courant (Castillan) — Communication professionnelle",
  },
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="À propos — Maître Stéphanie NEMORIN, Avocate Paris"
        description="Maître Stéphanie NEMORIN, avocate au Barreau de Paris depuis 2019 (toque E1119). Double Master 2 en Droit des sociétés et Droit pénal des affaires. Expertise bancaire et financière."
      />

      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-section-mobile md:pb-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT: Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/4] bg-primary border-2 border-gold rounded-sm flex items-center justify-center"
            >
              <span className="font-display text-8xl md:text-9xl font-semibold text-gold opacity-40">
                S.N.
              </span>
            </motion.div>

            {/* RIGHT: Biography */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <span className="label-caps text-gold-light mb-3 block">
                  MAÎTRE STÉPHANIE NEMORIN
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                  Avocate au Barreau de Paris depuis 2019
                </h1>
              </div>

              <p className="font-body text-lg text-white/90 leading-relaxed">
                Maître Stéphanie NEMORIN est avocate au Barreau de Paris depuis mars 2019 (toque E1119). Titulaire d'un double Master 2 en Droit des sociétés et en Droit pénal des affaires, elle a bâti son expertise au sein de cabinets parisiens de référence, notamment auprès d'institutionnels de la sphère bancaire et financière.
              </p>

              <p className="font-body text-lg text-white/80 leading-relaxed">
                Rigoureuse, disponible et trilingue, Maître NEMORIN s'engage personnellement dans chaque dossier avec discrétion et efficacité.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Timeline */}
      <TimelineSection />

      <GoldDivider />

      {/* Values Section */}
      <section className="bg-bg py-section-mobile md:py-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="label-caps text-gold mb-3 block">NOS VALEURS</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary">
              Les piliers de mon exercice
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <Icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-text-muted leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Languages Section */}
      <section className="bg-bg-alt py-section-mobile md:py-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="label-caps text-gold mb-3 block">LANGUES DE TRAVAIL</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary">
              Un accompagnement trilingue
            </h2>
            <p className="font-body text-text-muted mt-4 max-w-2xl mx-auto">
              Conseil et représentation en français, anglais et espagnol pour vos dossiers nationaux et internationaux.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white p-8 rounded-sm text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-6xl mb-4">{lang.flag}</div>
                <h3 className="font-heading text-2xl font-semibold text-primary mb-2">
                  {lang.name}
                </h3>
                <p className="font-body text-sm text-text-muted">
                  {lang.level}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Credentials Section */}
      <section className="bg-bg py-section-mobile md:py-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="label-caps text-gold mb-3 block">ACCRÉDITATIONS</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary">
              Inscription officielle
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border-2 border-gold/20 p-8 rounded-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-gold" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-primary mb-1">
                    Barreau de Paris
                  </h3>
                  <p className="font-body text-text-muted text-sm">
                    Inscrite depuis mars 2019
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border-2 border-gold/20 p-8 rounded-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-gold" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-primary mb-1">
                    Numéro de toque
                  </h3>
                  <p className="font-body text-gold font-semibold text-lg">
                    E1119
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}