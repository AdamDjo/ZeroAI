# Zéro V4 — package final unifié

Ce dossier contient l’unique version V4 à intégrer dans l’application.

## Runtime

- `spritesheet.webp` — atlas unique contenant les 13 animations et 81 frames.
- `pet.json` — position, nombre de frames et durée de chaque animation.

L’atlas utilise une grille de 8 colonnes × 13 lignes, avec des cellules de 192 × 208 pixels. Sa taille finale est de 1536 × 2704 pixels.

Les lignes 0 à 8 conservent le contrat Hatch Pet standard. Les anciennes animations additionnelles sont intégrées directement dans le même atlas :

- ligne 9 : `sleeping`
- ligne 10 : `happy`
- ligne 11 : `petting-reaction`
- ligne 12 : `eating-data`

Les GIF et strips séparés ne font plus partie du package actif. Ils restent récupérables dans `archives/assets4/zero-v4-workbench-2026-08-24/`.

## Identité et QA

- `ZERO_MASTER_V1.png` — master transparent officiel.
- `ZERO_CANONICAL_BASE.png` — base canonique.
- `ZERO_SOURCE_REFERENCE.png` — source de vérité.
- `qa/complete-contact-sheet.png` — contrôle visuel des 13 lignes.
- `qa/complete-atlas-validation.json` — validation géométrique et transparence.
