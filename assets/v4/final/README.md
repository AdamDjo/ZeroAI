# Zéro V4 — package final unifié

Ce dossier contient l’unique version V4 à intégrer dans l’application.

## Runtime

- `spritesheet.webp` — atlas unique contenant les 13 animations et les 16 directions de regard, soit 97 poses utilisées.
- `pet.json` — position, nombre de frames, durée des animations et correspondance des directions.

L’atlas utilise une grille de 8 colonnes × 15 lignes, avec des cellules de 192 × 208 pixels. Sa taille finale est de 1536 × 3120 pixels.

Les lignes 0 à 8 conservent le contrat Hatch Pet standard :

- ligne 0 : `idle`
- ligne 1 : `running-right`
- ligne 2 : `running-left`
- ligne 3 : `waving`
- ligne 4 : `jumping`
- ligne 5 : `failed`
- ligne 6 : `waiting`
- ligne 7 : `running`
- ligne 8 : `review`

Les animations additionnelles de l’application restent inchangées :

- ligne 9 : `sleeping`
- ligne 10 : `happy`
- ligne 11 : `petting-reaction`
- ligne 12 : `eating-data`

Les directions de regard validées sont ajoutées à la fin :

- ligne 13 : `000` à `157.5`
- ligne 14 : `180` à `337.5`

Les degrés progressent dans le sens horaire en coordonnées écran : `000` regarde en haut, `090` à droite, `180` en bas et `270` à gauche. Quand aucune cible n’est active, le runtime doit revenir à `idle`.

Les GIF ne sont pas nécessaires au runtime. `qa/look-directions-preview.gif` sert uniquement à vérifier le mouvement.

## Identité et QA

- `ZERO_MASTER_V1.png` — master transparent officiel.
- `ZERO_CANONICAL_BASE.png` — base canonique.
- `ZERO_SOURCE_REFERENCE.png` — source de vérité.
- `qa/complete-contact-sheet.png` — contrôle visuel des 15 lignes.
- `qa/complete-atlas-validation.json` — validation géométrique, conservation des sources et transparence.
- `qa/look-directions.png` — contrôle détaillé des 16 regards.
- `qa/direction-semantics.json` — validation sémantique des directions.
- `qa/direction-blind-validation.json` — validation indépendante à l’aveugle.
