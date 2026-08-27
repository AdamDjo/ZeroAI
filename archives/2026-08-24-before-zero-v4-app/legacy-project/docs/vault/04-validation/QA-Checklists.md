---
title: QA d'un candidat animé
type: procedure
tags: [validation, qa, hatch-pet]
statut: actif
maj: 2026-08-24
---

# QA d'un candidat animé

## Base canonique

```text
[ ] créature complète et lisible
[ ] direction visuelle claire
[ ] fond compatible avec l'extraction
[ ] aucun élément parasite
```

## Animations

```text
[ ] nombre de frames conforme au manifest du candidat
[ ] même identité à l'intérieur du run
[ ] poses complètes, sans coupure ni chevauchement
[ ] mouvement lisible dans le GIF
[ ] pas de jitter ou changement de taille accidentel
[ ] boucle propre lorsque loop: true
[ ] transparence sans chroma ni halo
```

## Sprite sheet

```text
[ ] dimensions conformes au package
[ ] cellules utilisées non vides
[ ] cellules inutilisées transparentes
[ ] frames dans le bon ordre
[ ] manifest à jour
```

## Décision artistique

```text
[ ] le candidat est attachant et reconnaissable
[ ] les états servent le scénario réel
[ ] aucune animation n'existe seulement pour remplir une checklist
[ ] changer de créature reste possible si le concept ne convainc pas
```

Les trois premières sections vérifient la qualité du candidat. La dernière
guide la comparaison entre plusieurs directions sans imposer l'ancien chat.

Voir [[Human-Gates]], [[Sprite-Sheets]] et [[Manifests]].
