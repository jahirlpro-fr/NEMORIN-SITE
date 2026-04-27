export interface NavLink {
  label: string;
  href: string;
  subLinks?: NavLink[];
}

export const mainNavigation: NavLink[] = [
  {
    label: "Accueil",
    href: "/",
  },
  {
    label: "À propos",
    href: "/a-propos",
  },
  {
    label: "Expertises",
    href: "/expertises",
    subLinks: [
      { label: "Droit des Affaires", href: "/expertises/droit-des-affaires" },
      { label: "Droit Pénal des Affaires", href: "/expertises/droit-penal-des-affaires" },
      { label: "Droit des Sociétés", href: "/expertises/droit-des-societes" },
      { label: "Droit des Contrats", href: "/expertises/droit-des-contrats" },
      { label: "Droit Immobilier", href: "/expertises/droit-immobilier" },
      { label: "Droit Bancaire & Financier", href: "/expertises/droit-bancaire-financier" },
    ],
  },
  {
    label: "Cabinet",
    href: "/cabinet",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const footerLinks = {
  quick: [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/a-propos" },
    { label: "Expertises", href: "/expertises" },
    { label: "Cabinet", href: "/cabinet" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
    { label: "Politique de cookies", href: "/politique-cookies" },
  ],
};