---
title: Atlas Zéro Bébé
type: source-verite
tags: [assets, baby, atlas, hatch-pet, evolution]
statut: validé
maj: 2026-08-26
---

# Atlas Zéro Bébé

Le package runtime canonique du stade bébé se trouve dans `assets/evolution/baby/final/`.

## Contrat

- grille : 8 × 15 ;
- cellule : 192 × 208 ;
- atlas : 1536 × 3120 WebP RGBA ;
- 13 animations ;
- 16 directions de regard ;
- 97 cellules utilisées ;
- cellules hors contrat transparentes.

## Rangées

| Index | État | Frames |
|---:|---|---:|
| 0 | `idle` | 6 |
| 1 | `running-right` | 8 |
| 2 | `running-left` | 8 |
| 3 | `waving` | 4 |
| 4 | `jumping` | 5 |
| 5 | `failed` | 8 |
| 6 | `waiting` | 6 |
| 7 | `running` | 6 |
| 8 | `review` | 6 |
| 9 | `sleeping` | 6 |
| 10 | `happy` | 6 |
| 11 | `petting-reaction` | 6 |
| 12 | `eating-data` | 6 |
| 13–14 | 16 regards | 16 |

## Sources de vérité

- `ZERO_BABY_SOURCE_REFERENCE.png` définit l’intention approuvée ;
- `ZERO_BABY_MASTER_V1.png` définit la silhouette bébé détourée ;
- `pet.json` définit les rangées, durées, boucles et regards ;
- `stage.json` définit le contrat morphologique ;
- `asset-manifest.json` vérifie l’intégrité du package ;
- `qa/contact-sheet.png` et `qa/previews/` servent à la revue visuelle.

## Règle anatomique

Zéro possède exactement quatre membres anatomiques. En position accroupie sur le ventre, une patte peut être naturellement masquée : quatre pattes visibles ne sont pas obligatoires. Une patte levée remplace toujours la patte au repos correspondante ; aucune duplication n’est autorisée.

## QA

La structure 8 × 15, les cellules utilisées, la transparence, les extras et l’anatomie passent. La lecture aveugle de 000° et 270° reste imparfaite mais a été explicitement conservée par décision utilisateur ; la dérogation est enregistrée dans `qa/core/user-approved-direction-waiver.json`.

Voir [[EVOLUTION-STAGES]], [[HATCH-ZERO-EVOLUTION]] et [[QA-CHECKLISTS]].
