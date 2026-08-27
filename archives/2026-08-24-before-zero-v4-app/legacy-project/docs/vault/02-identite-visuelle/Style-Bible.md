---
title: Direction visuelle par candidat
type: spec
tags: [identite, style, iteration]
statut: actif
maj: 2026-08-24
---

# Direction visuelle par candidat

## Principe

Il n'existe pas encore de style bible définitive. Chaque run `hatch-pet`
déclare une direction courte, génère une base canonique, puis vérifie la
cohérence des animations avec cette base.

La direction peut être pixel-art, illustration, sticker, jouet 3D, peluche ou
tout autre style lisible dans les cellules du pet.

## Fiche minimale d'un candidat

```text
concept de créature
silhouette principale
palette dominante
visage et expression neutre
éléments signature éventuels
style et niveau de détail
éléments à éviter
```

Cette fiche doit aider la génération sans dicter chaque pixel.

## Candidat actuel

Le candidat V2 actuel est un chat pixel-art crème et noir avec accents verts.
Ces propriétés sont descriptives et révisables. Elles ne deviennent des
contraintes finales que si cette direction est retenue.

## Règle de qualité

Une direction est réussie quand elle reste cohérente dans ses animations et
fonctionne à la taille réelle. Elle peut être remplacée si elle est propre mais
peu attachante, trop générique ou simplement moins bonne qu'un autre candidat.

Voir [[Identite-Personnage]], [[Gouvernance-Visuelle]] et
[[Regle-Master-Immuable]].
