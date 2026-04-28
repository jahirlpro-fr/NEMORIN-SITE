export interface Expertise {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  introduction: string[];
  situations: string[];
  actions: string[];
  benefits: string[];
}

export const expertises: Expertise[] = [
  {
    slug: "droit-des-affaires",
    title: "Droit des Affaires",
    subtitle: "Contentieux commercial et conseil stratégique",
    description: "Accompagnement des entreprises dans leurs litiges commerciaux et leur stratégie juridique",
    iconName: "Briefcase",
    introduction: [
      "Le droit des affaires constitue le socle de l'activité entrepreneuriale. Maître NEMORIN accompagne dirigeants et entreprises dans la prévention et la résolution de leurs contentieux commerciaux, avec une approche pragmatique qui allie rigueur juridique et compréhension des réalités économiques.",
      "De la négociation amiable à la représentation devant les tribunaux de commerce, notre cabinet intervient à chaque étape pour défendre vos intérêts avec détermination et stratégie.",
    ],
    situations: [
      "Litige avec un partenaire commercial ou un fournisseur",
      "Rupture abusive ou contestation d'un contrat commercial",
      "Recouvrement de créances impayées",
      "Concurrence déloyale ou parasitisme commercial",
      "Responsabilité du fait des produits défectueux",
      "Contentieux de distribution (franchise, concession, agent commercial)",
      "Litiges entre professionnels (BtoB)",
    ],
    actions: [
      "Analyse juridique approfondie de votre situation",
      "Négociation amiable et recherche de solutions transactionnelles",
      "Rédaction de mises en demeure et actes de procédure",
      "Représentation devant le Tribunal de Commerce",
      "Exécution des décisions et recouvrement judiciaire",
      "Conseil en prévention des risques contentieux",
    ],
    benefits: [
      "Double expertise contentieux et conseil",
      "Stratégie adaptée à vos enjeux économiques",
      "Réactivité et disponibilité",
      "Approche orientée résultat",
    ],
  },
  {
    slug: "droit-penal-des-affaires",
    title: "Droit Pénal des Affaires",
    subtitle: "Défense pénale des dirigeants et des entreprises",
    description: "Assistance et représentation en matière pénale économique et financière",
    iconName: "Scale",
    introduction: [
      "Le droit pénal des affaires requiert une expertise pointue et une disponibilité sans faille. Maître NEMORIN défend dirigeants, cadres et entreprises dans les procédures pénales économiques avec discrétion, stratégie et pugnacité.",
      "De la garde à vue à l'audience correctionnelle, notre cabinet assure une présence constante à vos côtés, avec une parfaite maîtrise des enjeux juridiques et réputationnels.",
    ],
    situations: [
      "Abus de biens sociaux ou abus de confiance",
      "Fraude fiscale ou travail dissimulé",
      "Escroquerie ou faux et usage de faux",
      "Corruption active ou passive",
      "Blanchiment de fraude fiscale",
      "Délit d'initié ou manipulation de cours",
      "Infractions au droit des sociétés",
      "Mise en examen ou convocation devant le juge d'instruction",
    ],
    actions: [
      "Assistance en garde à vue (24h/24, 7j/7)",
      "Représentation devant le juge d'instruction",
      "Demande de mise en liberté et contestation du contrôle judiciaire",
      "Défense devant le Tribunal Correctionnel",
      "Rédaction de conclusions et plaidoiries",
      "Conseil en prévention des risques pénaux",
    ],
    benefits: [
      "Disponibilité immédiate en cas d'urgence",
      "Discrétion absolue et confidentialité renforcée",
      "Expérience en matière bancaire et financière",
      "Stratégie de défense personnalisée",
    ],
  },
  {
    slug: "droit-des-societes",
    title: "Droit des Sociétés",
    subtitle: "Structuration juridique et gouvernance d'entreprise",
    description: "Conseil et contentieux en droit des sociétés, de la création à la transmission",
    iconName: "Building",
    introduction: [
      "Le droit des sociétés accompagne la vie de l'entreprise, de sa création à sa transmission. Maître NEMORIN conseille dirigeants et associés dans leurs choix stratégiques et intervient en cas de conflits internes avec pragmatisme et efficacité.",
      "Notre cabinet maîtrise l'ensemble des formes sociétaires (SAS, SARL, SA, SCI) et intervient tant en conseil qu'en contentieux pour sécuriser vos opérations et résoudre vos litiges.",
    ],
    situations: [
      "Création de société (SAS, SARL, SA, SCI)",
      "Rédaction et négociation de pactes d'associés",
      "Augmentation de capital et opérations sur titres",
      "Cession de parts sociales ou d'actions",
      "Conflits entre associés ou avec les dirigeants",
      "Révocation de dirigeant ou responsabilité des mandataires sociaux",
      "Dissolution, liquidation amiable ou judiciaire",
      "Transformation de société",
    ],
    actions: [
      "Conseil en structuration juridique et choix de forme sociale",
      "Rédaction de statuts et pactes d'associés sur-mesure",
      "Assistance lors des assemblées générales",
      "Représentation en cas de conflit entre associés",
      "Sécurisation des opérations de cession ou transmission",
      "Contentieux de la responsabilité des dirigeants",
    ],
    benefits: [
      "Approche personnalisée selon vos objectifs",
      "Anticipation des risques juridiques",
      "Rédaction contractuelle rigoureuse",
      "Médiation et recherche de solutions amiables",
    ],
  },
  {
    slug: "droit-des-contrats",
    title: "Droit des Contrats",
    subtitle: "Rédaction, négociation et contentieux contractuel",
    description: "Sécurisation juridique de vos relations contractuelles",
    iconName: "FileText",
    introduction: [
      "Le contrat est l'outil juridique central de toute relation d'affaires. Maître NEMORIN accompagne entreprises et professionnels dans la négociation, la rédaction et l'exécution de leurs contrats, avec une exigence de précision et d'efficacité.",
      "En cas de litige, notre cabinet défend vos intérêts avec détermination, que ce soit devant les tribunaux ou dans le cadre de négociations amiables.",
    ],
    situations: [
      "Rédaction ou relecture de contrats commerciaux",
      "Négociation de conditions générales de vente ou d'achat",
      "Inexécution, retard ou mauvaise exécution contractuelle",
      "Responsabilité contractuelle et dommages-intérêts",
      "Résiliation ou résolution de contrat",
      "Contestation de clauses abusives ou déséquilibrées",
      "Litiges sur garanties contractuelles",
    ],
    actions: [
      "Audit de vos contrats existants",
      "Rédaction sur-mesure de contrats sécurisés",
      "Négociation de clauses stratégiques",
      "Conseil en cas d'inexécution contractuelle",
      "Représentation en contentieux contractuel",
      "Mise en œuvre de clauses résolutoires ou pénales",
    ],
    benefits: [
      "Rédaction précise et adaptée à votre activité",
      "Anticipation des risques et clauses de protection",
      "Conseil stratégique en négociation",
      "Réactivité en cas de litige",
    ],
  },
  {
    slug: "droit-immobilier",
    title: "Droit Immobilier",
    subtitle: "Conseil et contentieux immobilier professionnel",
    description: "Accompagnement juridique dans vos opérations et litiges immobiliers",
    iconName: "Home",
    introduction: [
      "Le droit immobilier régit un secteur aux enjeux économiques majeurs. Maître NEMORIN conseille professionnels et entreprises dans leurs opérations immobilières et les représente en cas de litiges, avec une connaissance approfondie des spécificités du droit immobilier commercial.",
      "Notre cabinet intervient à tous les stades : acquisition, location, exploitation, cession, et règlement des contentieux.",
    ],
    situations: [
      "Négociation et rédaction de baux commerciaux",
      "Révision de loyer ou déplafonnement",
      "Renouvellement, cession ou résiliation de bail commercial",
      "Litiges avec le bailleur ou le locataire",
      "Acquisition ou cession d'immeubles professionnels",
      "Litiges de copropriété",
      "Contentieux de construction (garanties, vices cachés)",
      "Expulsion commerciale",
    ],
    actions: [
      "Rédaction et négociation de baux commerciaux",
      "Conseil en stratégie locative",
      "Représentation devant le Tribunal Judiciaire",
      "Assistance en procédure de révision de loyer",
      "Sécurisation des acquisitions immobilières",
      "Résolution des litiges de copropriété",
    ],
    benefits: [
      "Expertise en bail commercial",
      "Défense de vos intérêts locatifs",
      "Anticipation des risques immobiliers",
      "Accompagnement de bout en bout",
    ],
  },
  {
    slug: "droit-bancaire-financier",
    title: "Droit Bancaire & Financier",
    subtitle: "Contentieux bancaire et conseil en opérations financières",
    description: "Défense et conseil en matière bancaire, financière et de crédit",
      iconName: "Euro",
    introduction: [
      "Le droit bancaire et financier est un domaine technique qui exige une parfaite maîtrise des mécanismes juridiques et économiques. Forte de son expérience auprès d'institutionnels bancaires, Maître NEMORIN accompagne entreprises et dirigeants dans leurs relations avec les établissements financiers.",
      "Notre cabinet intervient en conseil comme en contentieux pour défendre vos intérêts face aux banques et sécuriser vos opérations de financement.",
    ],
    situations: [
      "Litiges relatifs à des crédits professionnels",
      "Contestation de garanties bancaires (caution, hypothèque)",
      "Responsabilité de la banque (soutien abusif, rupture abusive de crédit)",
      "Litiges sur moyens de paiement (chèque, virement, prélèvement)",
      "Contentieux d'ouverture de crédit ou de découvert",
      "Recouvrement de créances bancaires",
      "Conseil en structuration de financement",
      "Négociation avec les établissements de crédit",
    ],
    actions: [
      "Analyse de la responsabilité bancaire",
      "Représentation devant les juridictions compétentes",
      "Contestation de garanties disproportionnées",
      "Négociation de réaménagement de dettes",
      "Conseil en montage financier",
      "Défense en cas de procédures collectives",
    ],
    benefits: [
      "Expérience en contentieux bancaire",
      "Connaissance du secteur financier",
      "Stratégie adaptée aux enjeux économiques",
      "Médiation avec les établissements bancaires",
    ],
  },
];

export const getExpertiseBySlug = (slug: string): Expertise | undefined => {
  return expertises.find((exp) => exp.slug === slug);
};