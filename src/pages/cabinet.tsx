"use client";

import { motion } from "framer-motion";
import { Scale, Shield, FileText, DollarSign, MapPin, Heart, CheckCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { GoldDivider } from "@/components/shared/GoldDivider";
import { Button } from "@/components/shared/Button";

const honorairesOptions = [
  {
    icon: DollarSign,
    title: "Taux horaire",
    description: "Facturation transparente à l'heure pour les consultations et le suivi de dossiers. Un devis précis vous est systématiquement communiqué.",
  },
  {
    icon: FileText,
    title: "Honoraires forfaitaires",
    description: "Pour les missions définies à l'avance (création de société, rédaction de contrats, etc.), un forfait clair est établi dès le départ.",
  },
  {
    icon: CheckCircle,
    title: "Honoraires de résultat",
    description: "En complément d'un forfait ou d'un taux horaire, selon la nature du dossier et dans le respect des règles déontologiques.",
  },
];

const deontologieValues = [
  {
    icon: Shield,
    title: "Confidentialité absolue",
    description: "Secret professionnel garanti sur tous les échanges et documents confiés.",
  },
  {
    icon: Scale,
    title: "Indépendance",
    description: "Conseil objectif et impartial, sans conflit d'intérêts.",
  },
  {
    icon: Heart,
    title: "Aide juridictionnelle",
    description: "Accompagnement possible dans le cadre de l'aide juridictionnelle selon les conditions légales.",
  },
];

export default function CabinetPage() {
  return (
    <>
      <SEO
        title="Le Cabinet — Maître Stéphanie NEMORIN"
        description="Cabinet d'avocats à taille humaine à Paris. Honoraires transparents, confidentialité absolue, interlocuteur unique pour chaque dossier."
      />

      {/* Hero Section */}
      <section className="relative bg-navy text-white pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-montserrat text-xs md:text-sm tracking-[0.15em] uppercase text-gold mb-4">
              LE CABINET
            </p>
            <h1 className="text-cormorant text-4xl md:text-6xl font-light mb-6">
              Un Cabinet à Taille Humaine au Cœur de Paris
            </h1>
            <p className="text-dm-sans text-lg md:text-xl text-white/80 leading-relaxed">
              Maître Stéphanie NEMORIN vous accompagne personnellement, du premier rendez-vous jusqu'à la résolution de votre dossier, avec rigueur, discrétion et disponibilité.
            </p>
          </motion.div>
        </div>
      </section>

      <GoldDivider />

      {/* Notre Approche */}
      <section className="bg-white py-section-mobile md:py-section">
        <div className="container-custom">
          <SectionTitle
            label="NOTRE APPROCHE"
            title="Un Interlocuteur Unique, Une Relation de Confiance"
            align="center"
          />

          <AnimatedSection className="mt-12 md:mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Proximité",
                  description: "Un avocat dédié qui connaît votre dossier et vos enjeux sur le bout des doigts.",
                },
                {
                  title: "Réactivité",
                  description: "Disponibilité pour échanger à chaque étape, réponse garantie sous 48h ouvrées.",
                },
                {
                  title: "Confidentialité",
                  description: "Secret professionnel absolu sur tous les échanges et documents confiés.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="text-playfair text-2xl font-semibold text-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-dm-sans text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <GoldDivider />

      {/* Honoraires */}
      <section className="bg-bg-alt py-section-mobile md:py-section">
        <div className="container-custom">
          <SectionTitle
            label="HONORAIRES"
            title="Une Tarification Transparente et Adaptée"
            align="center"
          />

          <AnimatedSection className="mt-12 md:mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {honorairesOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-8 border border-border hover:border-gold transition-all duration-300"
                  >
                    <Icon className="w-12 h-12 text-gold mb-4" strokeWidth={1.5} />
                    <h3 className="text-playfair text-xl font-semibold text-navy mb-3">
                      {option.title}
                    </h3>
                    <p className="text-dm-sans text-text-muted leading-relaxed">
                      {option.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 max-w-3xl mx-auto bg-gold/10 border border-gold/30 p-6 text-center"
            >
              <p className="text-dm-sans text-navy font-medium">
                ⚖️ Une convention d'honoraires est systématiquement signée avant toute intervention
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <GoldDivider />

      {/* Modes de Paiement */}
      <section className="bg-white py-section-mobile md:py-section">
        <div className="container-custom max-w-4xl">
          <SectionTitle
            label="MODES DE PAIEMENT"
            title="Flexibilité et Simplicité"
            align="center"
          />

          <AnimatedSection className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { label: "Chèque", icon: "✓" },
                { label: "Virement bancaire", icon: "✓" },
                { label: "Espèces (dans les limites légales)", icon: "✓" },
              ].map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-bg-alt border border-border"
                >
                  <span className="text-4xl text-gold mb-2 block">{method.icon}</span>
                  <p className="text-dm-sans text-navy font-medium">{method.label}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <GoldDivider />

      {/* Zone d'Intervention */}
      <section className="bg-bg-alt py-section-mobile md:py-section">
        <div className="container-custom max-w-4xl">
          <SectionTitle
            label="ZONE D'INTERVENTION"
            title="Paris, France et International"
            align="center"
          />

          <AnimatedSection className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 border border-border"
              >
                <MapPin className="w-10 h-10 text-gold mb-4" strokeWidth={1.5} />
                <h3 className="text-playfair text-xl font-semibold text-navy mb-3">
                  France Entière
                </h3>
                <p className="text-dm-sans text-text-muted leading-relaxed">
                  Interventions sur l'ensemble du territoire français, avec une présence régulière devant les juridictions parisiennes et franciliennes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 border border-border"
              >
                <svg className="w-10 h-10 text-gold mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-playfair text-xl font-semibold text-navy mb-3">
                  International
                </h3>
                <p className="text-dm-sans text-text-muted leading-relaxed">
                  Dossiers transfrontaliers grâce à la maîtrise du français, de l'anglais et de l'espagnol (castillan).
                </p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <GoldDivider />

      {/* Déontologie */}
      <section className="bg-white py-section-mobile md:py-section">
        <div className="container-custom">
          <SectionTitle
            label="DÉONTOLOGIE"
            title="Engagements et Valeurs"
            align="center"
          />

          <AnimatedSection className="mt-12 md:mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {deontologieValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 border border-gold/30 mb-4">
                      <Icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-playfair text-xl font-semibold text-navy mb-3">
                      {value.title}
                    </h3>
                    <p className="text-dm-sans text-text-muted leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <GoldDivider />

      {/* CTA Section */}
      <section className="bg-gold py-16 md:py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-cormorant text-3xl md:text-4xl font-semibold text-navy mb-4">
              Parlons de Votre Situation
            </h2>
            <p className="text-dm-sans text-navy/80 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour un premier échange confidentiel et sans engagement.
            </p>
            <Button href="/contact" variant="secondary">
              Prendre rendez-vous
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}