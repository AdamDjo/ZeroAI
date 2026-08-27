---
title: Animations évolutives
type: spec
tags: [assets, animation, hatch-pet, iteration]
statut: actif
maj: 2026-08-24
---

# Animations évolutives

## Principe

Le projet utilise `hatch-pet` comme méthode de génération, d'assemblage et de
validation. Cette méthode garantit un résultat exploitable ; elle ne fixe pas
la direction artistique.

La créature, son espèce, son style, ses proportions, sa palette, ses états et
son nombre de frames peuvent changer jusqu'à obtenir un résultat convaincant.

> La qualité finale est fixe. La solution artistique reste ouverte.

## Candidat V2 actuel

La V2 est un candidat complet et une preuve technique, pas le personnage
définitif.

| État | Frames | Lecture proposée |
|---|---:|---|
| `idle` | 6 | boucle |
| `running-right` | 8 | boucle |
| `running-left` | 8 | boucle |
| `waving` | 4 | ponctuelle |
| `jumping` | 5 | ponctuelle |
| `failed` | 8 | ponctuelle |
| `waiting` | 6 | boucle |
| `running` | 6 | boucle |
| `review` | 6 | boucle |

```text
assets/v2/chimi/final/spritesheet.webp
assets/v2/chimi/qa/previews/*.gif
assets/v2/chimi/qa/contact-sheet.png
```

Cette liste décrit ce qui existe aujourd'hui. Elle n'impose pas la prochaine
version.

## Animations vivantes

Une micro-animation n'a pas besoin d'un fichier séparé si elle est déjà lisible
dans une animation principale. Clignement, regard, oreille, queue, bouche ou
lever peuvent être :

- intégrés à `idle` ou à un autre état ;
- produits comme clips indépendants ;
- remplacés par une pose plus expressive ;
- supprimés s'ils n'améliorent pas le rendu réel.

Le choix se fait après observation, pas à partir d'une checklist abstraite.

## Liberté d'itération

On peut à tout moment :

- revoir complètement la créature ;
- générer plusieurs candidats avec `hatch-pet` ;
- changer de style visuel ;
- ajouter, retirer, fusionner ou renommer un état ;
- modifier le nombre de frames ou le rythme ;
- remplacer uniquement une ligne de la sheet ;
- changer le mapping entre émotion et animation.

La cohérence est évaluée à l'intérieur d'un candidat. Deux candidats peuvent
explorer des créatures ou des styles très différents.

## Garanties conservées

Pour chaque candidat livré :

- identité cohérente entre ses propres frames ;
- silhouette lisible à la taille d'utilisation ;
- transparence propre, sans halo ni découpe ;
- mouvement perceptible et sans jitter accidentel ;
- boucles propres lorsqu'elles sont nécessaires ;
- contact sheet, GIFs et validation technique disponibles.

## Boucle d'amélioration

```text
générer un candidat avec hatch-pet
→ regarder les animations
→ garder ce qui fonctionne
→ changer la créature ou les lignes faibles
→ reconstruire et valider
→ répéter jusqu'au rendu souhaité
```

La V1 reste un historique et n'est pas une dépendance de la V2 ou des futurs
candidats.

Voir [[Sprite-Sheets]], [[Validation-Animation]] et [[Flame-Architecture]].
