---
title: Sprite sheets
type: source-verite
tags: [pipeline, spritesheet, atlas]
statut: actif
maj: 2026-08-26
source_archive: legacy-project/docs/vault/03-pipeline/Sprite-Sheets.md
---

# Sprite sheets

## Contrat application Zéro

- 8 colonnes × 15 rangées ;
- cellule 192 × 208 ;
- atlas 1536 × 3120 ;
- transparence réelle ;
- filtres nearest-neighbor au rendu ;
- cellules non utilisées entièrement transparentes.

## Rangées

| Rangée | État | Images |
|---:|---|---:|
| 0 | idle | 6 |
| 1 | running-right | 8 |
| 2 | running-left | 8 |
| 3 | waving | 4 |
| 4 | jumping | 5 |
| 5 | failed | 8 |
| 6 | waiting | 6 |
| 7 | running | 6 |
| 8 | review | 6 |
| 9 | sleeping | 6 |
| 10 | happy | 6 |
| 11 | petting-reaction | 6 |
| 12 | eating-data | 6 |
| 13–14 | 16 directions de regard | 16 |

Total : 97 poses utilisées. Le skill `hatch-zero-evolution` assemble ce format à partir du package Hatch Pet V2 et des quatre rangées propres à l’app.
