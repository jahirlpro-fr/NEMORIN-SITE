"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Mail, Linkedin } from "lucide-react";
import { SEO } from "@/components/SEO";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/data/siteConfig";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact — Maître Stéphanie NEMORIN"
        description="Contactez Maître Stéphanie NEMORIN, avocate au Barreau de Paris. Réponse sous 48h ouvrées. Cabinet situé dans le 16ème arrondissement."
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
              CONTACT
            </p>
            <h1 className="text-cormorant text-4xl md:text-6xl font-light mb-6">
              Parlons de Votre Situation
            </h1>
            <p className="text-dm-sans text-lg md:text-xl text-white/80 leading-relaxed">
              Contactez-nous pour un premier échange confidentiel. Nous étudions chaque demande avec attention et vous répondons sous 48h ouvrées.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-bg-alt py-section-mobile md:py-section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form - 2 columns */}
            <div className="lg:col-span-2">
              <SectionTitle
                label="FORMULAIRE DE CONTACT"
                title="Décrivez-nous votre besoin"
                align="left"
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Sidebar Info - 1 column */}
            <div className="space-y-6">
              <div className="bg-white border border-border p-6">
                <h3 className="text-playfair text-xl font-semibold text-navy mb-6">
                  Informations pratiques
                </h3>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" strokeWidth={1.5} />
                    <div>
                      <p className="text-dm-sans text-sm font-medium text-navy mb-1">Adresse</p>
                      <p className="text-dm-sans text-sm text-text-muted">
                        {siteConfig.contact.address.street}<br />
                        {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-1" strokeWidth={1.5} />
                    <div>
                      <p className="text-dm-sans text-sm font-medium text-navy mb-1">Horaires</p>
                      <p className="text-dm-sans text-sm text-text-muted">
                        {siteConfig.contact.hours}<br />
                        <span className="text-xs">(Sur rendez-vous)</span>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-1" strokeWidth={1.5} />
                    <div>
                      <p className="text-dm-sans text-sm font-medium text-navy mb-1">Email</p>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-dm-sans text-sm text-gold hover:text-gold/80 transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-start gap-3">
                    <Linkedin className="w-5 h-5 text-gold flex-shrink-0 mt-1" strokeWidth={1.5} />
                    <div>
                      <p className="text-dm-sans text-sm font-medium text-navy mb-1">LinkedIn</p>
                      <a
                        href={siteConfig.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dm-sans text-sm text-gold hover:text-gold/80 transition-colors"
                      >
                        Voir le profil
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="bg-gold/10 border border-gold/30 p-6 text-center">
                <p className="text-dm-sans text-sm font-semibold text-navy mb-1">
                  ⏱️ Réponse garantie
                </p>
                <p className="text-dm-sans text-xs text-navy/70">
                  Sous 48h ouvrées
                </p>
              </div>

              {/* Confidentiality Note */}
              <div className="bg-navy text-white p-6">
                <p className="text-dm-sans text-sm leading-relaxed">
                  <span className="font-semibold">Confidentialité assurée.</span> Tous vos échanges sont protégés par le secret professionnel de l'avocat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}