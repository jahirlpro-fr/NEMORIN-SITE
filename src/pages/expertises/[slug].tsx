import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { SEO } from "@/components/SEO";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { GoldDivider } from "@/components/shared/GoldDivider";
import { Button } from "@/components/shared/Button";
import { expertises, getExpertiseBySlug, type Expertise } from "@/data/expertises";
import { faqByDomain, type FAQItem } from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ExpertisePageProps {
  expertise: Expertise;
  faqItems: FAQItem[];
}

export default function ExpertisePage({ expertise, faqItems }: ExpertisePageProps) {
  const IconComponent = LucideIcons[expertise.iconName as keyof typeof LucideIcons] as React.ComponentType<{ className?: string; strokeWidth?: number }>;

  // JSON-LD Schema for LegalService
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": `${expertise.title} — Maître Stéphanie NEMORIN`,
    "description": expertise.description,
    "provider": {
      "@type": "Attorney",
      "name": "Maître Stéphanie NEMORIN",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Paris",
        "postalCode": "75116",
        "addressCountry": "FR"
      },
      "telephone": "+33-X-XX-XX-XX-XX",
      "email": "contact@nemorin-avocat.fr"
    },
    "areaServed": "France",
    "serviceType": expertise.title
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://nemorin-avocat.fr/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Expertises",
        "item": "https://nemorin-avocat.fr/expertises"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": expertise.title,
        "item": `https://nemorin-avocat.fr/expertises/${expertise.slug}`
      }
    ]
  };

  return (
    <>
      <SEO
        title={`${expertise.title} — Maître Stéphanie NEMORIN, Avocate Paris`}
        description={`${expertise.subtitle}. ${expertise.description} Conseil et contentieux à Paris.`}
      />

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
          <div className="absolute top-20 left-0 right-0 z-20 px-4 sm:px-6 lg:px-8">
              <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Expertises", href: "/expertises" },
            { label: expertise.title },
          ]}
        />
      </div>

{/* Hero Section */}
          <section className="relative min-h-[500px] py-32 md:py-48 overflow-hidden">
  {/* Image de fond */}
  <div className="absolute inset-0 z-0">
    <Image
      src={`/images/expertises/banniere-${expertise.slug}.webp`}
      alt={expertise.title}
      fill
      className="object-cover object-center"
      priority
    />
    {/* Overlay navy semi-transparent pour lisibilité */}
    <div className="absolute inset-0 bg-primary/75" />
  </div>

  {/* Contenu */}
  <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="mb-6 flex justify-center"
    >
      <div className="w-20 h-20 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center border border-gold/30">
        <IconComponent className="w-10 h-10 text-gold" strokeWidth={1.5} />
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-4">
        {expertise.title}
      </h1>
      <p className="font-body text-xl text-gold-light">
        {expertise.subtitle}
      </p>
    </motion.div>

    {/* Decorative gold element */}
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-24 h-1 bg-gold mx-auto mt-8"
    />
  </div>
</section>

      <GoldDivider />

      {/* Introduction */}
      <section className="bg-bg py-section-mobile md:py-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {expertise.introduction.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="font-body text-text leading-relaxed mb-6"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Situations */}
      <section className="bg-bg-alt py-section-mobile md:py-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-4">
              Quand faire appel à Maître NEMORIN ?
            </h2>
            <p className="font-body text-text-muted leading-relaxed">
              Situations typiques où notre expertise peut vous être utile :
            </p>
          </motion.div>

          <ul className="space-y-4">
            {expertise.situations.map((situation, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-white p-4 rounded-sm shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <LucideIcons.Check className="w-4 h-4 text-gold" strokeWidth={2} />
                </div>
                <span className="font-body text-text leading-relaxed">
                  {situation}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <GoldDivider />

      {/* Actions */}
      <section className="bg-bg py-section-mobile md:py-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-4">
              Ce que nous faisons ensemble
            </h2>
            <p className="font-body text-text-muted leading-relaxed">
              Actions concrètes pour résoudre votre problématique juridique :
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.actions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-white p-6 rounded-sm shadow-sm border-l-2 border-gold/30"
              >
                <LucideIcons.ArrowRight className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="font-body text-text leading-relaxed">
                  {action}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* FAQ Section */}
      {faqItems && faqItems.length > 0 && (
        <>
          <section className="bg-bg-alt py-section-mobile md:py-section">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center"
              >
                <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-4">
                  Questions fréquentes
                </h2>
                <p className="font-body text-text-muted">
                  Réponses aux questions courantes concernant {expertise.title.toLowerCase()}
                </p>
              </motion.div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white rounded-sm shadow-sm border border-border overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gold/5 transition-colors">
                      <span className="font-heading text-lg text-primary text-left">
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 border-t border-border">
                      <p className="font-body text-text-muted leading-relaxed">
                        {item.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
          <GoldDivider />
        </>
      )}

      {/* CTA Banner */}
      <section className="bg-gold py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-4">
              Discutons de votre situation
            </h2>
            <p className="font-body text-primary/80 text-lg mb-8 max-w-2xl mx-auto">
              Besoin d'un conseil juridique ou d'une représentation en {expertise.title.toLowerCase()} ? Contactons-nous pour étudier ensemble votre dossier.
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = expertises.map((expertise) => ({
    params: { slug: expertise.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ExpertisePageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const expertise = getExpertiseBySlug(slug);

  if (!expertise) {
    return {
      notFound: true,
    };
  }

  const faqItems = faqByDomain[slug] || [];

  return {
    props: {
      expertise,
      faqItems,
    },
  };
};