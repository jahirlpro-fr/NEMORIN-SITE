Parfait, bonne décision ! Le code est déjà protégé par le `if (process.env.RESEND_API_KEY)` donc si la clé n'est pas dans le `.env.local`, les emails sont simplement ignorés sans erreur. **Rien ne bloque.** ✅

On attaque le README directement !

---

## FICHIER 7 — Créer `README.md`

**Action :** Crée le fichier `README.md` à la **racine du projet** et colle ce contenu :

```markdown
# Cabinet Maître Stéphanie NEMORIN — Site Vitrine

Site vitrine professionnel pour Maître Stéphanie NEMORIN, Avocate au Barreau de Paris (toque E1119), spécialisée en droit des affaires, droit pénal des affaires et droit des sociétés.

---

## Stack Technique

- **Framework** : Next.js (Pages Router) + TypeScript
- **Styling** : Tailwind CSS + CSS Variables (design system custom)
- **UI Components** : shadcn/ui (personnalisé)
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **Backend** : Supabase (PostgreSQL + RLS)
- **Emails** : Resend
- **Formulaires** : React Hook Form + Zod
- **Fonts** : Google Fonts via next/font
- **Déploiement** : Vercel

---

## Prérequis

- Node.js 18+
- npm ou yarn
- Un compte [Supabase](https://supabase.com)
- Un compte [Resend](https://resend.com)
- Un compte [Vercel](https://vercel.com)

---

## Installation en local

### 1. Cloner le repo

```bash
git clone https://github.com/TON_USERNAME/nemorin-avocat.git
cd nemorin-avocat
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer les variables d'environnement

Copie le fichier exemple et remplis les valeurs :

```bash
cp .env.example .env.local
```

Ouvre `.env.local` et renseigne toutes les variables (voir section ci-dessous).

### 4. Lancer en développement

```bash
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000)

---

## Variables d'environnement

Toutes les variables sont documentées dans `.env.example`.

| Variable | Description | Obligatoire |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | URL de ton projet Supabase | ✅ |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Clé publique Supabase | ✅ |
| `SUPABASE_SERVICE_ROLE_KEY` | Clé service Supabase (backend uniquement) | ✅ |
| `RESEND_API_KEY` | Clé API Resend pour les emails | ⚠️ Optionnel en dev |
| `RESEND_FROM_EMAIL` | Email expéditeur (ex: contact@nemorin-avocat.fr) | ⚠️ Optionnel en dev |
| `RESEND_TO_EMAIL` | Email de réception de l'avocate | ⚠️ Optionnel en dev |
| `NEXT_PUBLIC_SITE_URL` | URL publique du site (ex: https://nemorin-avocat.fr) | ✅ en prod |

> ⚠️ Ne jamais committer `.env.local` — il est déjà dans `.gitignore`

---

## Configuration Supabase

### 1. Créer un projet Supabase

- Va sur [supabase.com](https://supabase.com)
- Crée un nouveau projet
- Récupère l'URL et les clés dans **Settings > API**

### 2. Créer les tables

Dans l'éditeur SQL de Supabase (**SQL Editor > New Query**), colle et exécute ce script :

```sql
-- Table des demandes de contact
CREATE TABLE contact_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved', 'spam')),
  ip_address TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index pour le rate limiting par IP
CREATE INDEX idx_contact_requests_ip_created 
ON contact_requests(ip_address, created_at);

-- RLS : INSERT public autorisé, pas de SELECT public
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon_insert_contact" ON contact_requests 
  FOR INSERT WITH CHECK (true);

-- Table des abonnés newsletter
CREATE TABLE newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  confirmed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS : INSERT public autorisé
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon_insert_newsletter" ON newsletter_subscribers 
  FOR INSERT WITH CHECK (true);
```

### 3. Vérifier les RLS

Dans **Authentication > Policies**, vérifie que les 2 tables ont bien leurs policies actives.

---

## Configuration Resend

> ⚠️ À faire uniquement avant la mise en production

### 1. Créer un compte et une clé API

- Va sur [resend.com](https://resend.com)
- Crée une clé API avec accès **Full access**
- Ajoute-la dans `.env.local` : `RESEND_API_KEY=re_xxx`

### 2. Vérifier le domaine expéditeur

- Dans Resend > **Domains**, ajoute `nemorin-avocat.fr`
- Suis les instructions pour ajouter les enregistrements DNS
- Une fois vérifié, utilise `contact@nemorin-avocat.fr` comme `RESEND_FROM_EMAIL`

> En développement, utilise `onboarding@resend.dev` comme expéditeur temporaire

---

## Déploiement sur Vercel

### 1. Connecter le repo GitHub

- Va sur [vercel.com](https://vercel.com)
- Clique **"Add New Project"**
- Importe le repo GitHub `nemorin-avocat`
- Vercel détecte automatiquement Next.js

### 2. Configurer les variables d'environnement

Dans Vercel > **Settings > Environment Variables**, ajoute toutes les variables de `.env.example` avec leurs vraies valeurs de production.

### 3. Déployer

Clique **"Deploy"** — Vercel build et déploie automatiquement.

Chaque `git push` sur `main` déclenche un nouveau déploiement automatique.

### 4. Connecter le domaine

- Dans Vercel > **Settings > Domains**
- Ajoute `nemorin-avocat.fr`
- Suis les instructions DNS fournies par Vercel
- Consulte aussi : [academy.softgen.ai/guides/domain-connection](https://academy.softgen.ai/guides/domain-connection)

---

## Structure du projet

```
src/
├── components/
│   ├── about/          # Composants page À propos
│   ├── contact/        # Formulaire de contact
│   ├── home/           # Sections de la homepage
│   ├── layout/         # Header, Footer, CookieBanner
│   └── shared/         # Composants réutilisables
├── data/               # ⭐ Toutes les données statiques
│   ├── expertises.ts   # Les 6 domaines d'expertise
│   ├── navigation.ts   # Liens de navigation
│   ├── siteConfig.ts   # Config globale (nom, adresse, etc.)
│   ├── testimonials.ts # Témoignages
│   └── faq.ts          # FAQ par domaine
├── lib/
│   └── animations.ts   # Variants Framer Motion réutilisables
├── pages/
│   ├── api/            # Routes API (contact, newsletter)
│   ├── expertises/     # Pages dynamiques par domaine
│   └── ...             # Pages statiques
├── styles/
│   └── globals.css     # Design system CSS variables
└── types/              # Types TypeScript globaux
```

---

## Mettre à jour le contenu

Tout le contenu statique est centralisé dans `/src/data/` — **pas besoin de toucher aux composants**.

### Modifier les informations du cabinet
→ Ouvre `src/data/siteConfig.ts`

### Modifier un domaine d'expertise
→ Ouvre `src/data/expertises.ts` et trouve le domaine par son `slug`

### Modifier les témoignages
→ Ouvre `src/data/testimonials.ts`

### Modifier la FAQ
→ Ouvre `src/data/faq.ts`

### Modifier la navigation
→ Ouvre `src/data/navigation.ts`

---

## Ajouter un article de blog (V2)

L'architecture blog est prévue pour la V2. Pour l'activer :

1. Créer la table `blog_posts` dans Supabase
2. Créer la page `src/pages/blog/index.tsx`
3. Créer la page dynamique `src/pages/blog/[slug].tsx`
4. Ajouter le lien dans `src/data/navigation.ts`

---

## Roadmap V2

- [ ] Site multilingue FR / EN / ES (next-intl)
- [ ] Prise de RDV en ligne (Calendly ou natif)
- [ ] Blog juridique avec CMS
- [ ] Calculateur d'honoraires indicatif
- [ ] Chat WhatsApp Business
- [ ] Espace client sécurisé (Supabase Auth)

---

## Licence

Projet privé — © 2024 Maître Stéphanie NEMORIN. Tous droits réservés.
```

---

Dis-moi quand c'est fait, on finit avec le `vercel.json` et on aura terminé ! 🏁