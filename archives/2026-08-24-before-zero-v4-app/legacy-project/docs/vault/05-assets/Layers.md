---
title: Layers
type: spec
tags: [assets, composition, layers]
statut: actif
maj: 2026-08-20
---

# Layers

Ordre de composition recommandé. La valeur est un `z` : plus haut = plus
devant.

```text
  0  environment
 10  shadow
 20  back item
 30  tail
 40  body
 50  body outfit
 60  face
 70  neck
 80  face accessory
 90  head
100  particles
```

## Lecture

- la **queue** passe derrière le corps (30 < 40) — mais l'orbe reste
  visible, c'est un marqueur d'identité ([[Identite-Personnage]])
- le **body outfit** couvre le corps mais pas le visage (50 < 60)
- les **particules** sont toujours devant (thinking, eat_data)

## Pas d'intercalaire improvisé

L'échelle avance par 10 pour laisser de la place. Un nouvel item se place
dans un intervalle existant, il ne redéfinit pas l'ordre.

## Lien

Chaque calque est positionné via [[Anchors]] et déclaré dans le manifest de
l'item ([[Cosmetiques]]).

---
Source : §65
