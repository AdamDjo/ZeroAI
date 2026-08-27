---
title: Validateurs hatch-pet
type: spec
tags: [validation, pipeline, hatch-pet]
statut: actif
maj: 2026-08-24
---

# Validateurs hatch-pet

## Bloquants techniques

- fichier lisible et format compatible ;
- dimensions conformes au manifest du package ;
- canal alpha présent ;
- cellules utilisées non vides ;
- cellules inutilisées transparentes ;
- aucune couleur résiduelle dans les pixels totalement transparents ;
- aucune frame coupée ou hors cellule.

## Contrôles visuels

- cohérence du candidat entre les états ;
- action lisible ;
- absence de halo, jitter, artefact ou élément parasite ;
- cadence directionnelle correcte ;
- boucle convaincante lorsqu'elle est demandée.

## Outils

Le workflow `hatch-pet` produit `review.json`, `validation.json`, une contact
sheet et les GIFs. Les rapports automatiques sont nécessaires, puis la planche
et les mouvements sont vérifiés visuellement.

Un contrôle visuel peut rejeter un résultat techniquement valide. Il ne peut
pas accepter un fichier techniquement cassé.

Voir [[Seuils-Qualite]], [[Human-Gates]] et [[Validation-Animation]].
