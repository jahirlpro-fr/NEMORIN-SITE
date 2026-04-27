export interface Testimonial {
  id: string;
  name: string; // Anonymisé
  role: string;
  company?: string;
  domain: string; // Domaine d'intervention
  quote: string;
  rating: number; // 1-5
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "M. D.",
    role: "Dirigeant",
    company: "PME industrielle",
    domain: "Droit des affaires",
    quote: "Maître NEMORIN a su gérer notre litige commercial avec réactivité et efficacité. Sa connaissance du droit des affaires et sa capacité à négocier nous ont permis d'obtenir un règlement amiable très favorable. Je recommande vivement.",
    rating: 5,
  },
  {
    id: "2",
    name: "C. L.",
    role: "Directrice Financière",
    company: "ETI",
    domain: "Droit bancaire",
    quote: "Une avocate rigoureuse et disponible. Maître NEMORIN a accompagné notre entreprise dans un dossier complexe de financement. Son expertise en droit bancaire et sa maîtrise de l'anglais ont été déterminantes dans nos échanges avec nos partenaires internationaux.",
    rating: 5,
  },
  {
    id: "3",
    name: "J-P. M.",
    role: "Associé",
    company: "SAS",
    domain: "Droit des sociétés",
    quote: "Grâce à Maître NEMORIN, nous avons pu résoudre un conflit entre associés qui menaçait la pérennité de notre société. Son approche à la fois juridique et humaine nous a permis de trouver une solution équilibrée et de préserver notre activité.",
    rating: 5,
  },
];