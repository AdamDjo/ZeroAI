---
title: Validation adaptative
type: procedure
tags: [validation, automation, iteration]
statut: actif
maj: 2026-08-24
---

# Validation adaptative

Le nom historique du fichier est conservé pour ne pas casser les liens. Le
workflow ne s'arrête plus sur des gates artistiques prédéfinies.

## Deux validations complémentaires

### Technique

Automatique pour chaque candidat `hatch-pet` : dimensions, alpha, cellules,
frames, transparence, fichiers et manifest.

### Visuelle

Évalue la cohérence interne, la lisibilité, les boucles, les coupures, le
jitter et les artefacts. Elle détermine si le candidat est techniquement
présentable, pas s'il doit devenir la créature finale.

## Décision

```text
QA en échec → réparer la plus petite zone ou abandonner le candidat
QA réussie → candidat comparable et intégrable
rendu insuffisant → changer l'animation, le style ou la créature
rendu convaincant → promouvoir la version retenue
```

Il n'y a pas de limite arbitraire de trois essais. On continue tant que chaque
itération apporte une information ou une amélioration utile.

## Ce qui reste bloquant pour un livrable

- fichiers invalides ou incomplets ;
- transparence sale ;
- parties coupées ;
- dérive involontaire entre les frames d'un même candidat ;
- boucle ou mouvement visiblement cassé.

Un ancien master, une palette historique ou une liste fixe d'émotions ne sont
pas des gates bloquantes pour explorer une meilleure direction.

Voir [[Validation-Animation]], [[Generated-Vs-Production]] et
[[Gouvernance-Visuelle]].
