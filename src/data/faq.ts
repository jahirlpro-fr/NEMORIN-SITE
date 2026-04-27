export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQByDomain {
  [domain: string]: FAQItem[];
}

export const faqByDomain: FAQByDomain = {
  "droit-des-affaires": [
    {
      question: "Quand faire appel à un avocat en droit des affaires ?",
      answer: "Dès qu'un différend commercial apparaît ou qu'une situation conflictuelle se profile avec un client, fournisseur ou partenaire. L'intervention précoce d'un avocat permet souvent de résoudre le litige à l'amiable et d'éviter une procédure judiciaire longue et coûteuse.",
    },
    {
      question: "Combien de temps dure une procédure de recouvrement ?",
      answer: "La durée varie selon la complexité du dossier. Une mise en demeure peut suffire (quelques semaines). Si une procédure judiciaire est nécessaire, compter entre 6 mois et 2 ans selon la juridiction et les éventuels recours.",
    },
    {
      question: "Peut-on éviter le contentieux ?",
      answer: "Oui, la négociation amiable est toujours privilégiée. Un protocole d'accord bien négocié permet de gagner du temps et de maîtriser les coûts. Le contentieux reste une solution de dernier recours quand aucun accord n'est possible.",
    },
  ],
  "droit-penal-des-affaires": [
    {
      question: "Que faire en cas de convocation par la police ou la gendarmerie ?",
      answer: "Ne vous rendez jamais seul(e) à une audition. Contactez immédiatement un avocat spécialisé en droit pénal des affaires qui vous assistera et veillera au respect de vos droits tout au long de la procédure.",
    },
    {
      question: "Qu'est-ce que l'abus de biens sociaux ?",
      answer: "C'est le fait pour un dirigeant d'utiliser les biens, le crédit ou les pouvoirs de la société à des fins personnelles, contrairement à l'intérêt social. C'est un délit pénal passible de sanctions lourdes (prison et amende).",
    },
    {
      question: "Peut-on négocier avec le parquet ?",
      answer: "Oui, dans certains cas, des alternatives aux poursuites existent : CJIP (convention judiciaire d'intérêt public), plaider-coupable, transaction pénale. Votre avocat évalue la stratégie la plus adaptée selon votre situation.",
    },
  ],
  "droit-des-societes": [
    {
      question: "Quelle forme juridique choisir pour créer mon entreprise ?",
      answer: "Le choix dépend de nombreux critères : nombre d'associés, apports, fiscalité, responsabilité, gouvernance souhaitée. SARL, SAS, SA… chaque statut a ses avantages. Un accompagnement juridique permet de sécuriser ce choix structurant.",
    },
    {
      question: "Un pacte d'associés est-il obligatoire ?",
      answer: "Non, mais il est fortement recommandé dès lors qu'il y a plusieurs associés. Il permet d'organiser les relations entre associés, d'anticiper les situations de blocage et de prévoir les modalités de sortie ou de transmission.",
    },
    {
      question: "Comment résoudre un conflit entre associés ?",
      answer: "Plusieurs solutions existent : médiation, négociation amiable, rachat de parts, dissolution, ou en dernier recours, saisine du tribunal. L'intervention d'un avocat spécialisé permet de trouver la solution la plus adaptée et de préserver l'activité.",
    },
  ],
  "droit-des-contrats": [
    {
      question: "Pourquoi faire rédiger un contrat par un avocat ?",
      answer: "Un contrat bien rédigé protège vos intérêts, prévient les litiges et sécurise vos relations commerciales. Les modèles gratuits ou génériques ne sont jamais adaptés à votre situation particulière et exposent à des risques juridiques importants.",
    },
    {
      question: "Peut-on modifier un contrat déjà signé ?",
      answer: "Oui, par avenant signé par toutes les parties. Toute modification unilatérale sans accord écrit est nulle. Il est essentiel de formaliser par écrit tout changement des conditions initiales.",
    },
    {
      question: "Que faire en cas de rupture abusive de contrat ?",
      answer: "Vous pouvez obtenir réparation du préjudice subi (manque à gagner, frais engagés…). L'intervention rapide d'un avocat permet de préserver les preuves et d'engager une action en responsabilité contractuelle.",
    },
  ],
  "droit-immobilier": [
    {
      question: "Quelle est la différence entre bail commercial et bail professionnel ?",
      answer: "Le bail commercial concerne les activités commerciales, artisanales ou industrielles et offre le statut des baux commerciaux (durée 9 ans minimum, droit au renouvellement). Le bail professionnel concerne les professions libérales (durée 6 ans minimum, pas de droit au renouvellement).",
    },
    {
      question: "Peut-on expulser un locataire sans passer par la justice ?",
      answer: "Non, l'expulsion forcée sans décision de justice est interdite et constitue un délit. Même en cas d'impayés, il faut obligatoirement saisir le tribunal et obtenir un jugement avant de faire procéder à l'expulsion par huissier.",
    },
    {
      question: "Comment fixer le loyer d'un bail commercial ?",
      answer: "Le loyer est librement fixé à la signature. Au renouvellement, il peut être révisé en fonction de la valeur locative (critères : localisation, état, surface…) et plafonné selon l'indice ILC. Un avocat vous aide à négocier un loyer juste.",
    },
  ],
  "droit-bancaire-financier": [
    {
      question: "Qu'est-ce que la responsabilité bancaire ?",
      answer: "La banque a un devoir de conseil et de mise en garde envers ses clients, notamment lors de l'octroi de crédits. Si elle manque à ses obligations, elle peut être tenue responsable des préjudices subis (surendettement, pertes financières…).",
    },
    {
      question: "Puis-je contester un refus de crédit ?",
      answer: "La banque n'est pas obligée d'accorder un crédit, mais elle doit motiver son refus. Si vous estimez que le refus est abusif ou discriminatoire, vous pouvez contester la décision et saisir le médiateur bancaire ou la justice.",
    },
    {
      question: "Quels recours en cas de saisie bancaire ?",
      answer: "Plusieurs recours existent selon la situation : contestation de la créance, demande de mainlevée, protection du solde bancaire insaisissable. Un avocat spécialisé évalue rapidement vos options et engage les démarches adaptées.",
    },
  ],
};

export const generalFAQ: FAQItem[] = [
  {
    question: "Quels sont les honoraires d'un avocat ?",
    answer: "Les honoraires dépendent de la nature et de la complexité de votre dossier. Ils peuvent être forfaitaires (mission définie), au temps passé (taux horaire), ou partiellement au résultat. Une convention d'honoraires claire et transparente est systématiquement signée avant toute intervention.",
  },
  {
    question: "La première consultation est-elle payante ?",
    answer: "Oui, la consultation initiale est facturée au taux horaire. C'est un moment essentiel pour analyser votre situation, évaluer vos options et définir la stratégie à adopter.",
  },
  {
    question: "Puis-je bénéficier de l'aide juridictionnelle ?",
    answer: "L'aide juridictionnelle est accordée sous conditions de ressources par l'État. Elle peut couvrir tout ou partie des frais de justice et d'avocat. Si vous remplissez les conditions, nous acceptons l'aide juridictionnelle.",
  },
  {
    question: "Intervenez-vous en dehors de Paris ?",
    answer: "Oui, le cabinet intervient sur l'ensemble du territoire français, ainsi qu'à l'international grâce à la maîtrise du français, de l'anglais et de l'espagnol.",
  },
];