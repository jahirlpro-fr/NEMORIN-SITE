# Refonte du site → Maître Anissa BERGER (avocate pénaliste, Barreau de Paris)

Site Next.js (Pages Router) + TypeScript + Tailwind + shadcn/ui, généré à l'origine avec Softgen
pour Maître Stéphanie NEMORIN, en cours d'adaptation pour Maître Anissa BERGER.

## Règles de travail
- Travailler UNIQUEMENT sur la branche `refonte-anissa-berger`. Ne jamais pousser sur `main`.
- Commit + push après chaque modification validée, avec un message clair en français.
- Phase actuelle : **graphique uniquement**. Ne pas toucher au contenu texte (témoignages, FAQ,
  expertises, coordonnées) sauf demande explicite.
- Classes de couleur : utiliser `primary` (jamais `navy`, non défini dans la config).

## Décisions déjà appliquées (étape 1)
- Nom remplacé partout : Stéphanie NEMORIN → Anissa BERGER (composant WhyNemorin → WhyBerger).
- Palette : bordeaux profond + or
  - primary #4A1520 (HSL 348 56% 19%), dégradé vers #5E1B28
  - or #C9A96E / #E8D5B0
  - texte #1F1A1A, texte secondaire #6E6767, fond #FAF8F6
  - ombres rgba(74, 21, 32, …)
- Dépendance `resend` ajoutée à package.json (sinon le build échoue).

## Reste à faire plus tard (NE PAS traiter maintenant)
- Coordonnées de Nemorin encore présentes : téléphone, toque, adresse, emails/domaine
  nemorin-avocat, LinkedIn, diplômes, timeline, langues, GPS.
- Contenu droit des affaires à réécrire en droit pénal : hero, expertises, FAQ, SEO.
- Témoignages à supprimer (déontologie).
- Déontologie : pas de « spécialisée / spécialiste » sans certificat CNB → « Avocate pénaliste ».
- Configuration Resend (clé API, emails).
