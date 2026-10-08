# Site de Maître Anissa BERGER — avocate pénaliste

Site Next.js (Pages Router) + TypeScript + Tailwind + shadcn/ui. La maquette d'origine a été
générée avec Softgen pour une autre avocate (Stéphanie NEMORIN, projet abandonné) ; on garde
sa structure et on l'adapte progressivement à l'identité d'Anissa BERGER, avocate pénaliste.

## Contexte
- Site préparé à l'avance : Anissa a son diplôme et recherche une collaboration. Le site n'est
  PAS en production. Les informations factices (téléphone, adresse, toque, emails…) sont
  acceptables pour l'instant.
- Mise en ligne et nom de domaine : plus tard, une fois le site terminé.

## Façon de travailler
- Développement en local : `npm run dev` → http://localhost:3000, aperçu en temps réel.
- Avancer petit à petit, des éléments simples vers le contenu :
  1. Couleurs, polices, détails visuels
  2. Textes et informations pour coller à l'identité d'Anissa BERGER (droit pénal)
- Commit + push sur `main` quand une étape est validée par Jahir, message clair en français.
- Ne pas modifier le contenu texte tant que Jahir ne l'a pas demandé.
- Classes de couleur : utiliser `primary` (jamais `navy`, non défini dans la config).

## Déjà fait
- Nom remplacé partout : Stéphanie NEMORIN → Anissa BERGER (composant WhyNemorin → WhyBerger).
- Palette bordeaux profond + or :
  - primary #4A1520 (HSL 348 56% 19%), dégradé vers #5E1B28
  - or #C9A96E / #E8D5B0
  - texte #1F1A1A, texte secondaire #6E6767, fond #FAF8F6
  - ombres rgba(74, 21, 32, …)
- Dépendance `resend` ajoutée (sinon le build échoue).

## Reste à faire (quand Jahir le demandera)
- Coordonnées héritées de Nemorin : téléphone, toque, adresse, emails/domaine nemorin-avocat,
  LinkedIn, diplômes, timeline, langues, GPS.
- Contenu droit des affaires à réécrire en droit pénal : hero, expertises, FAQ, SEO.
- Témoignages : à supprimer avant toute mise en ligne (déontologie).
- Déontologie : pas de « spécialisée / spécialiste » sans certificat CNB → « Avocate pénaliste ».
- Avant la mise en ligne : remplacer toutes les données factices, configurer Resend/Supabase.
