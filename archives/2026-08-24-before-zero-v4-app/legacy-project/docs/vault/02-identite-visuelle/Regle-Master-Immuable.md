---
title: Références visuelles versionnées
type: regle
tags: [identite, reference, iteration]
statut: actif
maj: 2026-08-24
---

# Références visuelles versionnées

Le nom historique de ce fichier est conservé pour ne pas casser les liens du
vault. Le master n'est plus considéré comme immuable.

## Principe

Une référence protège la cohérence d'un candidat pendant sa génération. Elle
n'interdit pas de changer de créature ou de direction artistique lors de
l'itération suivante.

```text
référence du candidat
→ génération de ses animations
→ QA de cohérence interne
→ candidat conservé, réparé ou remplacé
```

## Rôle du master actuel

```text
design/reference/CHIMI_MASTER_V1.png
```

Ce fichier documente un candidat historique. Son checksum garantit sa
traçabilité, pas sa supériorité artistique.

## Nouveau candidat

Un nouveau run `hatch-pet` peut utiliser :

- la référence actuelle ;
- une version retouchée ;
- plusieurs références ;
- une description entièrement nouvelle.

Le résultat sélectionné devient la référence canonique de ce run uniquement.
On ne modifie pas silencieusement les fichiers d'un ancien candidat : on crée
une nouvelle version afin de pouvoir comparer et revenir en arrière.

Voir [[Gouvernance-Visuelle]], [[Versioning-Character]] et
[[Animations-MVP]].
