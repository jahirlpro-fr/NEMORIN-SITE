# PROMPT FINAL — SOFTGEN.AI
# Site Vitrine — Cabinet Maître Stéphanie NEMORIN, Avocate au Barreau de Paris
# Version 2.0 — Révisé et optimisé

---

## 🎯 RÔLE & MISSION

Tu es un développeur web full-stack senior spécialisé dans les sites juridiques haut de gamme, doublé d'un designer UI/UX expert en identités visuelles de prestige. Ta mission est de générer la V1 complète, fonctionnelle et déployable du site vitrine de Maître Stéphanie NEMORIN, avocate au Barreau de Paris.

**Règle absolue** : chaque décision technique et visuelle doit servir un objectif précis — crédibilité, conversion (leads), et référencement Google. Rien ne doit être décoratif sans fonction.

**Avant de coder**, vérifie mentalement pour chaque composant :
1. Est-ce que ça renforce la crédibilité de l'avocate ?
2. Est-ce que ça pousse le visiteur vers une prise de contact ?
3. Est-ce que ça aide Google à comprendre et référencer la page ?

---

## 👤 PROFIL CLIENT — DONNÉES RÉELLES (ne pas utiliser de placeholders)

- **Nom** : Maître Stéphanie NEMORIN
- **Titre officiel** : Avocate au Barreau de Paris
- **Numéro de toque** : E1119
- **Inscrite au Barreau de Paris depuis** : Mars 2019
- **Cabinet** : Paris 75116 (16ème arrondissement)
- **Langues** : Français (natif), Anglais (courant), Espagnol / Castillan (courant)
- **Formations** :
  - Master 2 Droit des sociétés — Université de Cergy-Pontoise
  - Master 2 Droit pénal des affaires — Université Paris-Est Créteil
- **Domaines d'expertise** :
  - Droit des affaires (contentieux & conseil)
  - Droit pénal des affaires
  - Droit des sociétés (conflits entre associés, création, restructuration)
  - Droit des contrats (rédaction, négociation, exécution, litiges)
  - Droit immobilier (transactions, baux commerciaux, litiges)
  - Droit bancaire & financier (accompagnement institutionnels)
- **Cible client** : Dirigeants de société, chefs d'entreprise, PME, institutionnels financiers — sur l'ensemble du territoire français
- **Positionnement** : Avocate rigoureuse, moderne, accessible, trilingue, accompagnement personnalisé et sur-mesure
- **Expérience notable** : Plus de 4 ans de collaboration dans un cabinet parisien auprès d'institutionnels bancaires et financiers avant de créer son propre cabinet

---

## 🏗️ STACK TECHNIQUE — V1 (calibrée pour être générée proprement)

### Frontend
- **Framework** : Next.js 14+ avec App Router
- **Langage** : TypeScript strict
- **Styling** : Tailwind CSS + variables CSS custom pour le design system
- **Composants UI** : shadcn/ui — MAIS intégralement personnalisé (couleurs, typographie, radius, shadows remplacés par le design system du cabinet). Ne jamais utiliser les styles shadcn par défaut.
- **Animations** : Framer Motion
- **Icônes** : Lucide React (uniquement) — pas de Font Awesome, pas d'Heroicons

### Backend / API
- **API** : Next.js API Routes (serverless)
- **Formulaires** : React Hook Form + validation Zod (client & serveur)
- **Email** : Resend (simple, fiable, gratuit jusqu'à 3000 emails/mois)
- **Base de données** : Supabase (PostgreSQL managé) — pour stocker les demandes de contact et les inscriptions newsletter uniquement en V1
- **ORM** : Prisma

### Sécurité
- Headers HTTP : Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, HSTS (via next.config.js)
- Rate limiting : Upstash Redis (middleware Next.js) — max 5 requêtes / minute / IP sur les endpoints de contact
- Anti-spam : honeypot (champ caché) + reCAPTCHA v3 sur le formulaire de contact
- Protection CSRF : token par session sur tous les formulaires

### SEO & Performance
- **next-seo** pour les métadonnées dynamiques
- **next-sitemap** pour sitemap.xml et robots.txt automatiques
- **Schema.org JSON-LD** : LegalService, Person, LocalBusiness, FAQPage, BreadcrumbList
- Images : next/image avec format WebP automatique, lazy loading, blur placeholder
- Police : Google Fonts via next/font (optimisation automatique, zéro layout shift)
- Objectif : Score Lighthouse > 90 sur toutes les métriques

### RGPD
- Bandeau cookies : consentement granulaire (nécessaires / analytiques / marketing)
- Intégration analytics : Google Analytics 4 — activé uniquement après consentement
- Pages légales générées avec le vrai contenu RGPD

### Déploiement
- Prêt pour Vercel (vercel.json configuré)
- Variables d'environnement documentées dans .env.example
- README.md complet

---

## 📁 ARBORESCENCE EXACTE DU PROJET

```
nemorin-avocat/
├── app/
│   ├── (site)/                        # Groupe de routes — site public
│   │   ├── page.tsx                   # Page d'accueil
│   │   ├── a-propos/
│   │   │   └── page.tsx
│   │   ├── expertises/
│   │   │   ├── page.tsx               # Vue d'ensemble expertises
│   │   │   ├── droit-des-affaires/page.tsx
│   │   │   ├── droit-penal-des-affaires/page.tsx
│   │   │   ├── droit-des-societes/page.tsx
│   │   │   ├── droit-des-contrats/page.tsx
│   │   │   ├── droit-immobilier/page.tsx
│   │   │   └── droit-bancaire-financier/page.tsx
│   │   ├── cabinet/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── mentions-legales/
│   │   │   └── page.tsx
│   │   ├── politique-de-confidentialite/
│   │   │   └── page.tsx
│   │   └── politique-cookies/
│   │       └── page.tsx
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts               # Endpoint formulaire de contact
│   │   └── newsletter/
│   │       └── route.ts               # Endpoint inscription newsletter
│   ├── layout.tsx                     # Layout racine (fonts, metadata, providers)
│   ├── not-found.tsx                  # Page 404 personnalisée
│   └── sitemap.ts                     # Sitemap dynamique Next.js
├── components/
│   ├── layout/
│   │   ├── Header.tsx                 # Navigation sticky avec scroll behavior
│   │   ├── Footer.tsx
│   │   └── CookieBanner.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── TrustBadges.tsx
│   │   ├── WhyNemorin.tsx
│   │   ├── ExpertisePreview.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── TestimonialsSlider.tsx
│   │   └── CtaBanner.tsx
│   ├── expertise/
│   │   ├── ExpertiseCard.tsx
│   │   └── ExpertiseHero.tsx
│   ├── about/
│   │   ├── BiographySection.tsx
│   │   └── TimelineSection.tsx
│   ├── contact/
│   │   ├── ContactForm.tsx
│   │   └── MapEmbed.tsx
│   ├── shared/
│   │   ├── AnimatedSection.tsx        # Wrapper réutilisable pour les animations au scroll
│   │   ├── GoldDivider.tsx            # Séparateur filet doré
│   │   ├── SectionTitle.tsx           # Titre de section avec style uniforme
│   │   ├── Button.tsx                 # Bouton custom (variantes primary/secondary/ghost)
│   │   ├── CounterAnimation.tsx       # Compteur animé pour les chiffres clés
│   │   └── SchemaMarkup.tsx           # Injection JSON-LD Schema.org
│   └── ui/                            # Composants shadcn/ui CUSTOMISÉS (pas les défauts)
│       ├── accordion.tsx
│       ├── dialog.tsx
│       ├── toast.tsx
│       └── tooltip.tsx
├── data/                              # ⚠️ TOUTES les données statiques ici — jamais dans les composants
│   ├── expertises.ts                  # Liste des domaines avec slug, titre, description, cas types
│   ├── navigation.ts                  # Liens de navigation
│   ├── testimonials.ts                # Témoignages (placeholders structurés)
│   ├── faq.ts                         # Questions fréquentes par domaine
│   └── siteConfig.ts                  # Config globale (nom, adresse, tel, email, réseaux)
├── lib/
│   ├── utils.ts                       # Utilitaires (cn, formatDate, etc.)
│   ├── resend.ts                      # Client Resend configuré
│   ├── supabase.ts                    # Client Supabase
│   ├── rateLimit.ts                   # Middleware rate limiting Upstash
│   └── schemas/
│       ├── contactSchema.ts           # Schéma Zod formulaire contact
│       └── newsletterSchema.ts        # Schéma Zod newsletter
├── prisma/
│   └── schema.prisma                  # Modèles ContactRequest + NewsletterSubscriber
├── public/
│   ├── images/
│   │   ├── avatar-placeholder.jpg     # Placeholder photo avocate (élégant, sobre)
│   │   └── og-image.jpg               # Image Open Graph (1200x630)
│   ├── robots.txt
│   └── favicon.ico
├── styles/
│   └── globals.css                    # Variables CSS design system + reset
├── types/
│   └── index.ts                       # Types TypeScript globaux
├── middleware.ts                       # Rate limiting + headers sécurité
├── next.config.js                     # Config Next.js (headers sécurité, images)
├── tailwind.config.ts                 # Config Tailwind avec design system custom
├── .env.example                       # Variables d'environnement documentées
├── vercel.json                        # Config Vercel
└── README.md                          # Documentation complète
```

---

## 🎨 DESIGN SYSTEM — DIRECTION ARTISTIQUE

### Concept
**"Autorité Bienveillante"** — Un cabinet parisien du 16ème qui inspire confiance dès le premier regard. Sobre, élégant, jamais froid. La modernité au service de la tradition juridique. Penser Hermès ou Cartier appliqué au droit — pas un cabinet américain agressif, pas un cabinet vieillot.

### Ce qu'il ne faut JAMAIS faire
- Gradients violets ou bleus flashy sur fond blanc
- Polices Inter, Roboto, Arial, system-ui
- Cards avec border-radius excessif (> 8px)
- Icônes Font Awesome ou Heroicons génériques
- Photos stock de tribunal, balance de justice, marteau de juge
- Layout en colonnes identiques et symétriques partout
- Boutons avec effets de "glow" néon

### Palette de couleurs (variables CSS)
```css
:root {
  --color-primary: #0F1B2D;        /* Bleu nuit profond — autorité, confiance */
  --color-gold: #C9A96E;           /* Or champagne — prestige, excellence */
  --color-gold-light: #E8D5B0;     /* Or clair — hover states, accents */
  --color-bg: #FAFAF8;             /* Blanc cassé — chaleur, lisibilité */
  --color-bg-alt: #F4F2EE;         /* Gris perle — sections alternées */
  --color-text: #1A1A2E;           /* Anthracite — texte principal */
  --color-text-muted: #6B6B7A;     /* Gris moyen — textes secondaires */
  --color-accent: #C27D5A;         /* Terracotta doux — CTA secondaires */
  --color-border: #E2DDD6;         /* Bordures subtiles */
  --color-white: #FFFFFF;
}
```

### Typographie
```css
/* Titres H1/H2 — éditorial, tradition juridique */
font-family: 'Cormorant Garamond', Georgia, serif;
/* Poids utilisés : 300 (Light), 400 (Regular), 600 (SemiBold) */

/* Sous-titres H3/H4 — présence, lisibilité */
font-family: 'Playfair Display', Georgia, serif;
/* Poids : 500, 600 */

/* Corps de texte — moderne, propre */
font-family: 'DM Sans', sans-serif;
/* Poids : 300, 400, 500 */

/* Labels, capslock, catégories */
font-family: 'Montserrat', sans-serif;
/* Poids : 300, 400 — toujours en letter-spacing: 0.15em */
```

### Éléments visuels signature
- **Filet doré** : `border: 1px solid var(--color-gold)` — utilisé comme séparateur de section et accent sur les cartes au hover
- **Texture papier** : overlay SVG noise très subtil (opacity 0.03) sur les fonds clairs
- **Whitespace** : sections avec padding vertical minimum de 100px sur desktop
- **Photo** : prévoir un rectangle élégant avec un placeholder en `--color-bg-alt` avec initiales "S.N." centrées en Cormorant Garamond taille large
- **Aucun élément décoratif sans fonction** — chaque détail visuel renforce le message

---

## ✨ ANIMATIONS (Framer Motion) — Spécifications précises

### Variants réutilisables à définir dans `/lib/animations.ts`
```typescript
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}

export const clipReveal = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}
```

### Animations par composant
- **Hero H1** : clipReveal sur le texte (révélation gauche → droite)
- **Hero sous-titre** : fadeInUp avec delay 0.3s
- **Hero CTA** : fadeInUp avec delay 0.5s
- **Header au scroll** : background passe de `transparent` à `--color-primary` (0.3s ease), logo change de couleur or → blanc
- **Sections au scroll** : `AnimatedSection` wrapper utilisant `useInView` de Framer Motion, déclenche `staggerContainer` sur les enfants
- **Cartes expertise** : au hover → `translateY(-4px)` + apparition du filet doré en bas (`scaleX: 0 → 1`, 0.3s)
- **Compteurs chiffres clés** : `useEffect` + `useInView`, comptage de 0 à la valeur cible en 1.5s (easing ease-out)
- **CTA shimmer** : pseudo-élément avec gradient doré animé en `keyframes` CSS (pas Framer Motion pour les performances)
- **Page transitions** : `AnimatePresence` + `opacity: 0→1` + `y: 10→0` (0.2s) dans le layout racine
- **Formulaire** : champs apparaissent en cascade (stagger 0.08s) au montage du composant
- **Feedback envoi** : spinner → checkmark animé SVG (stroke dashoffset) au succès

---

## 📄 PAGES — CONTENU DÉTAILLÉ

### Page d'accueil (/)

**Hero Section**
- Titre H1 : `"Votre Avocate d'Affaires\nà Paris"`
- Sous-titre : `"Maître Stéphanie NEMORIN accompagne dirigeants et entreprises avec rigueur et discrétion, en français, anglais et espagnol."`
- CTA primaire : `"Prendre rendez-vous"` → /contact
- CTA secondaire : `"Découvrir mes expertises"` → /expertises
- Visuel droit : photo professionnelle (placeholder élégant avec initiales)
- Fond : `--color-primary` avec texture subtile, texte blanc et or

**Trust Badges** (bande horizontale sobre)
- `⚖ Barreau de Paris`
- `📋 Depuis 2019`
- `🌍 Français · English · Español`
- `🏛 Paris 16ème`

**Pourquoi Me NEMORIN** (3 arguments, icônes Lucide customisées)
- `Expertise double` : Droit des affaires & pénal des affaires — une vision complète des enjeux
- `Accompagnement terrain` : Présente à vos côtés à chaque étape, de la stratégie à l'audience
- `Cabinet à taille humaine` : Un interlocuteur unique, disponible, qui connaît votre dossier

**Domaines d'expertise** (6 cartes avec hover animé)
Voir section `/data/expertises.ts`

**Comment ça marche** (3 étapes numérotées)
1. `Premier contact` — Échangeons sur votre situation par téléphone ou email
2. `Consultation` — Analysons ensemble votre dossier et définissons la stratégie
3. `Accompagnement` — Je vous défends et vous conseille à chaque étape

**Témoignages** (slider — structure prête, contenu placeholder)
- 3 placeholders avec nom masqué, domaine et citation fictive mais réaliste

**Section chiffres clés**
- `5+` ans d'expérience
- `3` langues de travail
- `6` domaines d'expertise
- `100%` d'engagement sur chaque dossier

**CTA final** (bandeau `--color-primary`)
- Titre : `"Un dossier ? Une question juridique ?"`
- Sous-titre : `"Chaque situation est unique. Prenons le temps d'en parler."`
- Bouton : `"Contactez-nous"` → /contact

**Footer**
- Logo + accroche courte
- Liens rapides : Accueil, À propos, Expertises, Cabinet, Contact
- Coordonnées : Paris 75116, email, tel
- Réseaux : LinkedIn
- Mentions légales, Politique de confidentialité, Politique cookies
- Copyright : `© 2024 Maître Stéphanie NEMORIN — Avocate au Barreau de Paris`

---

### Page À propos (/a-propos)

- **Hero** : Photo pleine hauteur gauche + biographie droite
- **Biographie complète** :
  `"Maître Stéphanie NEMORIN est avocate au Barreau de Paris depuis mars 2019. Titulaire d'un double Master 2 en Droit des sociétés (Université de Cergy-Pontoise) et en Droit pénal des affaires (Université Paris-Est Créteil), elle a bâti son expertise au sein de cabinets parisiens de référence, notamment auprès d'institutionnels de la sphère bancaire et financière. Après plus de quatre ans d'expérience en tant que collaboratrice, elle intervient aujourd'hui en droit des affaires, aussi bien en conseil qu'en contentieux, aux côtés de dirigeants et d'entreprises sur l'ensemble du territoire français. Rigoureuse, disponible et trilingue (français, anglais, espagnol), Maître NEMORIN s'engage personnellement dans chaque dossier avec discrétion et efficacité."`
- **Timeline animée** : 2015 (formations) → 2019 (barreau) → 2019-2023 (collaboration cabinet parisien) → 2024 (cabinet propre)
- **Section langues** : 3 drapeaux animés avec niveau de maîtrise
- **Valeurs** : Rigueur · Discrétion · Disponibilité · Sur-mesure
- **Barreau** : Numéro de toque E1119 — Barreau de Paris

---

### Pages Expertise (/expertises/[slug])

Structure identique pour chaque page :
- H1 : Nom du domaine
- Introduction : 2-3 phrases définissant le domaine
- **Quand faire appel à Maître NEMORIN ?** : liste de situations types (4-5 items)
- **Ce que nous pouvons faire ensemble** : liste d'actions concrètes
- **Pourquoi Maître NEMORIN ?** : argument de différenciation
- CTA : `"Discuter de votre situation"` → /contact
- Accordion FAQ : 3-4 questions fréquentes sur ce domaine (bon pour le SEO)

Contenu par domaine à générer avec ces mots-clés :
- `droit-des-affaires` : contentieux commercial, recouvrement de créances, rupture de contrats
- `droit-penal-des-affaires` : abus de biens sociaux, fraude fiscale, corruption, défense dirigeants
- `droit-des-societes` : création de société, pacte d'associés, conflits entre associés, dissolution
- `droit-des-contrats` : rédaction, négociation, inexécution, responsabilité contractuelle
- `droit-immobilier` : baux commerciaux, vente, copropriété, litiges locatifs
- `droit-bancaire-financier` : financement, garanties, responsabilité bancaire, litiges financiers

---

### Page Cabinet (/cabinet)

- **Notre approche** : Cabinet à taille humaine, interlocuteur unique, transparence
- **Honoraires** :
  - Consultation initiale : tarif horaire
  - Honoraires forfaitaires : pour les missions définies
  - Honoraires de résultat (success fee) : en complément selon les dossiers
  - Convention d'honoraires : systématique, transparente, signée avant toute intervention
  - Aide juridictionnelle : acceptée selon conditions
- **Modes de paiement** : Chèque, virement, espèces (dans la limite légale)
- **Zone d'intervention** : Ensemble du territoire français + international (langues)
- **Déontologie** : Confidentialité absolue, indépendance, secret professionnel

---

### Page Contact (/contact)

- **Formulaire** (React Hook Form + Zod + Resend) :
  - Prénom * (text)
  - Nom * (text)
  - Email * (email, validé)
  - Téléphone (tel, optionnel)
  - Objet * (select : Droit des affaires / Droit pénal des affaires / Droit des sociétés / Droit des contrats / Droit immobilier / Droit bancaire / Autre)
  - Message * (textarea, min 20 caractères)
  - Case RGPD * : `"J'accepte que mes données soient utilisées pour traiter ma demande"`
  - Champ honeypot caché : `website` (si rempli → rejet silencieux)
  - reCAPTCHA v3 invisible
  - Bouton : `"Envoyer ma demande"` avec état loading et succès animé

- **Sidebar informations** :
  - Adresse : Paris 75116
  - Horaires : Lundi–Vendredi 9h–19h (sur RDV)
  - LinkedIn : lien vers le profil
  - Réponse garantie sous 48h ouvrées

- **Google Maps embed** : carte centrée Paris 16ème

---

## ⚙️ FONCTIONNALITÉS CORE — V1

| # | Fonctionnalité | Priorité | Notes |
|---|---|---|---|
| 1 | Formulaire de contact sécurisé | 🔴 Critique | Honeypot + reCAPTCHA + rate limiting |
| 2 | Email transactionnel | 🔴 Critique | Via Resend — notif avocat + confirmation client |
| 3 | SEO on-page complet | 🔴 Critique | Meta, OG, JSON-LD, sitemap, robots |
| 4 | RGPD complet | 🔴 Critique | Bandeau cookies + pages légales |
| 5 | Responsive mobile-first | 🔴 Critique | Testé sur 375px, 768px, 1280px, 1920px |
| 6 | Headers sécurité HTTP | 🔴 Critique | Via next.config.js et middleware |
| 7 | Page 404 custom | 🟠 Important | Élégante, avec liens utiles |
| 8 | Animations scroll | 🟠 Important | Framer Motion — voir spécifications |
| 9 | FAQ par domaine | 🟠 Important | Accordéon — SEO FAQPage Schema.org |
| 10 | Newsletter inscription | 🟡 Utile | Endpoint simple + stockage Supabase |

---

## 🚀 FONCTIONNALITÉS DIFFÉRENCIANTES — ARCHITECTURE PRÊTE EN V1, DÉPLOIEMENT V2

Les features suivantes doivent être **architecturalement prévues** (routes créées, composants scaffoldés, données structurées) mais **non activées en production V1** :

| Feature | Pourquoi c'est différenciant | Préparation V1 |
|---|---|---|
| **Prise de RDV en ligne** (Calendly embed) | Très rare chez avocats — conversion x3 | Créer `/rendez-vous/page.tsx` avec placeholder Calendly |
| **Site multilingue FR/EN/ES** (next-intl) | Reflet des 3 langues — clientèle internationale | Structurer les textes dans `/data/` avec clés i18n |
| **Calculateur honoraires indicatif** | Unique sur le marché — transparence = confiance | Créer composant `HonorairesCalculator.tsx` (désactivé) |
| **Blog juridique** | SEO long terme — autorité de domaine | Créer `/blog/page.tsx` scaffoldée, sans articles actifs |
| **Chat WhatsApp Business** | Contact immédiat mobile | Prévoir le widget dans le Footer (commenté) |

---

## 🔒 BACKEND — SPÉCIFICATIONS TECHNIQUES

### API Route : POST /api/contact
```typescript
// Validation entrée : ContactSchema (Zod)
// 1. Vérifier honeypot (champ "website" vide)
// 2. Vérifier reCAPTCHA v3 score > 0.5
// 3. Rate limiting : 5 req/min/IP (Upstash Redis)
// 4. Valider données (Zod)
// 5. Insérer en base (Supabase : table contact_requests)
// 6. Envoyer email notif à l'avocate (Resend — template HTML pro)
// 7. Envoyer email confirmation au client (Resend)
// 8. Répondre 200 OK
// Toujours répondre le même message d'erreur générique (pas d'info sur la raison du rejet)
```

### Modèle Prisma
```prisma
model ContactRequest {
  id        String   @id @default(cuid())
  firstName String
  lastName  String
  email     String
  phone     String?
  subject   String
  message   String
  ipHash    String   // IP hashée (RGPD)
  status    String   @default("new") // new | read | treated
  createdAt DateTime @default(now())
}

model NewsletterSubscriber {
  id          String   @id @default(cuid())
  email       String   @unique
  confirmedAt DateTime?
  createdAt   DateTime @default(now())
}
```

### Templates email (HTML responsive)
- **Email avocate** : Objet `[Nouveau contact] {sujet} — {nom}`, corps avec toutes les infos, bouton "Répondre"
- **Email client** : Objet `Votre demande a bien été reçue — Cabinet Maître NEMORIN`, corps chaleureux confirmant la réception, délai de réponse (48h), signature professionnelle

---

## 🔍 SEO — IMPLÉMENTATION TECHNIQUE

### Schema.org JSON-LD (à injecter via `SchemaMarkup.tsx`)
```json
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Cabinet Maître Stéphanie NEMORIN",
  "description": "Avocate au Barreau de Paris spécialisée en droit des affaires, droit pénal des affaires et droit des sociétés.",
  "url": "https://nemorin-avocat.fr",
  "telephone": "[TEL]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[ADRESSE]",
    "addressLocality": "Paris",
    "postalCode": "75116",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.8712073,
    "longitude": 2.2893127
  },
  "openingHours": "Mo-Fr 09:00-19:00",
  "priceRange": "€€",
  "areaServed": "France",
  "knowsLanguage": ["fr", "en", "es"],
  "founder": {
    "@type": "Person",
    "name": "Stéphanie NEMORIN",
    "jobTitle": "Avocate au Barreau de Paris",
    "alumniOf": [
      "Université de Cergy-Pontoise",
      "Université Paris-Est Créteil"
    ]
  }
}
```

### Mots-clés cibles par page
- **Accueil** : "avocat droit des affaires Paris", "avocate barreau Paris 16"
- **Droit des affaires** : "avocat contentieux commercial Paris", "avocat recouvrement créances Paris"
- **Droit pénal affaires** : "avocat pénal des affaires Paris", "défense dirigeant abus de biens sociaux"
- **Droit des sociétés** : "avocat conflit associés Paris", "avocat création société Paris"
- **Droit des contrats** : "avocat contrats commerciaux Paris", "avocat rédaction contrat Paris"
- **Droit immobilier** : "avocat baux commerciaux Paris 16", "avocat droit immobilier Paris"
- **Droit bancaire** : "avocat droit bancaire Paris", "avocat litige financier Paris"

---

## ✅ CHECKLIST FINALE AVANT LIVRAISON

Avant de considérer la V1 terminée, vérifier :

- [ ] Toutes les pages sont générées et accessibles
- [ ] Le formulaire de contact envoie bien les emails (tester avec une vraie adresse)
- [ ] Le honeypot et reCAPTCHA fonctionnent
- [ ] Le rate limiting est actif sur /api/contact
- [ ] Le bandeau cookies s'affiche et enregistre le consentement
- [ ] Les pages légales contiennent du vrai contenu RGPD (pas de placeholders)
- [ ] Les balises meta et JSON-LD sont présentes sur toutes les pages
- [ ] Le sitemap.xml est accessible et valide
- [ ] Le site est parfaitement responsive sur mobile (375px)
- [ ] Les animations ne se déclenchent pas si `prefers-reduced-motion: reduce`
- [ ] Le score Lighthouse est > 90 sur toutes les métriques
- [ ] Le .env.example documente toutes les variables nécessaires
- [ ] Le README.md explique comment installer, configurer et déployer

---

## 📝 REMARQUES FINALES

- **Aucun placeholder générique** : toutes les informations réelles de la cliente sont intégrées
- **shadcn/ui** : utilisé pour les composants complexes (accordéon, dialog, toast) mais ENTIÈREMENT re-stylé selon le design system — les valeurs par défaut shadcn ne doivent jamais apparaître
- **Données centralisées** : tous les textes et contenus statiques dans `/data/` — jamais en dur dans les composants
- **Blog** : architecture prête mais page vide (pas de contenu actif en V1 pour éviter le contenu thin qui nuit au SEO)
- **Multilingue** : textes structurés en préparation mais routing i18n pas activé en V1
- **Performance** : ne jamais importer une librairie entière — toujours utiliser les imports nommés
- **Accessibilité** : tous les éléments interactifs ont des attributs ARIA, les images ont des alt descriptifs, le contraste répond aux normes WCAG AA minimum

---

*Prompt V2.0 — Cabinet Maître Stéphanie NEMORIN — Optimisé pour Softgen.AI*
