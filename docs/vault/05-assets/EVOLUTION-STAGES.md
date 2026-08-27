---
title: Stades d’évolution
type: spec
tags: [assets, evolution, baby, adolescent, adult]
statut: actif
maj: 2026-08-26
---

# Stades officiels

Zéro possède trois stades :

| Identifiant | Statut | Rôle |
|---|---|---|
| `baby` | validé | naissance, dépendance et découverte |
| `adolescent` | à produire | énergie, curiosité et personnalité émergente |
| `adult` | validé | modèle V4 actuel |

## Identité commune

Les trois stades conservent le visor noir, les yeux lime, le cœur IA et l’orbe de queue. La croissance change les proportions et le langage corporel, pas l’identité.

## Règle de production

Le bébé et l’adolescent ne sont jamais obtenus en réduisant l’adulte. Chaque stade exige :

1. un master canonique distinct ;
2. une validation d’identité face à l’adulte ;
3. un atlas complet compatible avec le runtime ;
4. une QA des membres, de la silhouette, des boucles et des regards ;
5. un manifest de stade.

## Direction morphologique

- **Bébé** : tête proportionnellement plus grande, corps plus rond et plus court, pattes très courtes, gestes doux et hésitants.
- **Adolescent** : corps légèrement plus élancé, oreilles et queue plus expressives, énergie plus vive, proportions intermédiaires.
- **Adulte** : Zéro V4 actuel, stable et canonique.

Les seuils d’âge et les conditions d’évolution appartiennent à la logique produit et seront versionnés séparément.

## Package bébé validé

- master : `assets/evolution/baby/final/ZERO_BABY_MASTER_V1.png` ;
- atlas : `assets/evolution/baby/final/spritesheet.webp` ;
- contrat runtime : `assets/evolution/baby/final/pet.json` ;
- contrat de stade : `assets/evolution/baby/final/stage.json` ;
- manifeste d’intégrité : `assets/evolution/baby/final/asset-manifest.json` ;
- QA et 13 GIFs : `assets/evolution/baby/final/qa/`.

Le bébé est accroupi sur le ventre. Il possède toujours quatre membres anatomiques, mais une patte peut être masquée naturellement selon l’angle et la pose.
