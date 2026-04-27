export interface Expertise {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string; // Lucide icon name
  cases: string[];
  benefits: string[];
  keywords: string[];
}

export const expertises: Expertise[] = [
  {
    slug: "droit-des-affaires",
    title: "Droit des Affaires",
    subtitle: "Contentieux & Conseil",
    description: "Accompagnement juridique complet des entreprises, du conseil préventif à la défense de vos intérêts en contentieux commercial. Protection de votre activité et de vos relations commerciales.",
    icon: "Briefcase",
    cases: [
      "Contentieux commercial entre entreprises",
      "Recouvrement de créances et impayés",
      "Rupture de contrats commerciaux",
      "Litiges avec fournisseurs ou clients",
      "Responsabilité contractuelle",
    ],
    benefits: [
      "Analyse stratégique de votre dossier",
      "Négociation amiable privilégiée",
      "Défense de vos intérêts en justice si nécessaire",
      "Accompagnement de A à Z",
    ],
    keywords: [
      "avocat contentieux commercial Paris",
      "avocat recouvrement créances Paris",
      "litige commercial avocat Paris 16",
    ],
  },
  {
    slug: "droit-penal-des-affaires",
    title: "Droit Pénal des Affaires",
    subtitle: "Défense des Dirigeants",
    description: "Défense des dirigeants et entreprises face aux infractions économiques et financières. Accompagnement dès les premières investigations jusqu'à l'issue de la procédure.",
    icon: "Shield",
    cases: [
      "Abus de biens sociaux",
      "Fraude fiscale",
      "Corruption et trafic d'influence",
      "Travail dissimulé",
      "Délit d'initié",
      "Blanchiment de capitaux",
    ],
    benefits: [
      "Réactivité immédiate en cas d'urgence",
      "Stratégie de défense personnalisée",
      "Présence à vos côtés lors des auditions",
      "Discrétion absolue",
    ],
    keywords: [
      "avocat pénal des affaires Paris",
      "défense dirigeant abus de biens sociaux",
      "avocat fraude fiscale Paris",
    ],
  },
  {
    slug: "droit-des-societes",
    title: "Droit des Sociétés",
    subtitle: "Création & Restructuration",
    description: "Conseil et accompagnement juridique des sociétés à chaque étape de leur vie : création, développement, restructuration, transmission. Résolution des conflits entre associés.",
    icon: "Building2",
    cases: [
      "Création de société (SARL, SAS, SA)",
      "Rédaction et révision de pactes d'associés",
      "Conflits entre associés",
      "Cession de parts sociales",
      "Fusion, scission, transformation",
      "Dissolution et liquidation",
    ],
    benefits: [
      "Sécurisation juridique de votre structure",
      "Prévention des conflits futurs",
      "Solutions sur-mesure adaptées à votre activité",
      "Vision long terme de votre développement",
    ],
    keywords: [
      "avocat conflit associés Paris",
      "avocat création société Paris",
      "avocat pacte associés Paris 16",
    ],
  },
  {
    slug: "droit-des-contrats",
    title: "Droit des Contrats",
    subtitle: "Rédaction & Litiges",
    description: "Rédaction, négociation et exécution de tous types de contrats commerciaux. Résolution des litiges liés à l'inexécution ou la rupture contractuelle.",
    icon: "FileText",
    cases: [
      "Rédaction de contrats commerciaux",
      "Négociation de conditions générales",
      "Litiges d'inexécution contractuelle",
      "Rupture abusive de contrat",
      "Responsabilité contractuelle",
      "Révision et résiliation de contrats",
    ],
    benefits: [
      "Contrats clairs et équilibrés",
      "Anticipation des risques juridiques",
      "Protection de vos intérêts à long terme",
      "Négociation efficace",
    ],
    keywords: [
      "avocat contrats commerciaux Paris",
      "avocat rédaction contrat Paris",
      "litige contractuel avocat Paris 16",
    ],
  },
  {
    slug: "droit-immobilier",
    title: "Droit Immobilier",
    subtitle: "Transactions & Litiges",
    description: "Accompagnement juridique complet des opérations immobilières commerciales et résidentielles. Résolution des litiges locatifs et de copropriété.",
    icon: "Home",
    cases: [
      "Baux commerciaux et professionnels",
      "Vente et acquisition immobilière",
      "Litiges locatifs",
      "Litiges de copropriété",
      "Expulsion et récupération de locaux",
      "Servitudes et troubles de voisinage",
    ],
    benefits: [
      "Sécurisation de vos transactions",
      "Résolution rapide des litiges",
      "Expertise du marché parisien",
      "Conseil en amont pour éviter les contentieux",
    ],
    keywords: [
      "avocat baux commerciaux Paris 16",
      "avocat droit immobilier Paris",
      "litige locatif avocat Paris",
    ],
  },
  {
    slug: "droit-bancaire-financier",
    title: "Droit Bancaire & Financier",
    subtitle: "Accompagnement Institutionnels",
    description: "Conseil et contentieux en droit bancaire et financier. Accompagnement des établissements financiers et de leurs clients dans leurs opérations et litiges.",
    icon: "Landmark",
    cases: [
      "Financement d'entreprise et garanties",
      "Responsabilité bancaire",
      "Litiges entre banque et client",
      "Surendettement des entreprises",
      "Crédit et cautionnement",
      "Instruments financiers",
    ],
    benefits: [
      "Expertise reconnue auprès d'institutionnels",
      "Compréhension fine des enjeux financiers",
      "Défense de vos droits face aux banques",
      "Accompagnement stratégique",
    ],
    keywords: [
      "avocat droit bancaire Paris",
      "avocat litige financier Paris",
      "responsabilité bancaire avocat Paris 16",
    ],
  },
];

export const getExpertiseBySlug = (slug: string): Expertise | undefined => {
  return expertises.find((exp) => exp.slug === slug);
};