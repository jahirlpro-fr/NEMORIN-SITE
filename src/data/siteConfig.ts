export const siteConfig = {
  name: "Cabinet Maître Stéphanie NEMORIN",
  legalName: "Maître Stéphanie NEMORIN",
  title: "Avocate au Barreau de Paris",
  
  bar: {
    name: "Barreau de Paris",
    number: "E1119",
    registeredSince: "Mars 2019",
  },
  
  contact: {
    address: {
      street: "[ADRESSE EXACTE]", // À compléter avec l'adresse réelle
      city: "Paris",
      postalCode: "75116",
      country: "France",
      countryCode: "FR",
    },
    phone: "[TÉLÉPHONE]", // Format: +33 1 XX XX XX XX
    email: "[EMAIL]", // contact@nemorin-avocat.fr
    hours: "Lundi–Vendredi 9h–19h (sur rendez-vous)",
  },
  
  geo: {
    latitude: 48.8712073,
    longitude: 2.2893127,
  },
  
  languages: [
    { code: "fr", name: "Français", level: "Natif" },
    { code: "en", name: "Anglais", level: "Courant" },
    { code: "es", name: "Espagnol", level: "Courant" },
  ],
  
  social: {
    linkedin: "[URL LINKEDIN]", // https://www.linkedin.com/in/...
  },
  
  education: [
    {
      degree: "Master 2 Droit des sociétés",
      institution: "Université de Cergy-Pontoise",
    },
    {
      degree: "Master 2 Droit pénal des affaires",
      institution: "Université Paris-Est Créteil",
    },
  ],
  
  experience: {
    years: 5,
    notable: "Plus de 4 ans de collaboration dans un cabinet parisien auprès d'institutionnels bancaires et financiers avant de créer son propre cabinet",
  },
  
  seo: {
    title: "Maître Stéphanie NEMORIN — Avocate au Barreau de Paris",
    titleTemplate: "%s | Maître Stéphanie NEMORIN",
    description: "Avocate au Barreau de Paris spécialisée en droit des affaires, droit pénal des affaires et droit des sociétés. Cabinet à Paris 16ème, accompagnement en français, anglais et espagnol.",
    keywords: [
      "avocat droit des affaires Paris",
      "avocate barreau Paris 16",
      "avocat pénal des affaires Paris",
      "avocat droit des sociétés Paris",
      "avocat droit des contrats Paris",
      "avocat droit immobilier Paris",
      "avocat droit bancaire Paris",
    ],
    ogImage: "/og-image.jpg",
    twitterHandle: "@nemorin_avocat", // Si applicable
  },
  
  legal: {
    siret: "[SIRET]", // À compléter
    tva: "[TVA INTRACOMMUNAUTAIRE]", // À compléter
  },
} as const;

export type SiteConfig = typeof siteConfig;