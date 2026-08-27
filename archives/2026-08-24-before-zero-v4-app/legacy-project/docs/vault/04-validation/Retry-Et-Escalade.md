---
title: Itération et réparation
type: procedure
tags: [validation, retry, iteration]
statut: actif
maj: 2026-08-24
---

# Itération et réparation

## Boucle

```text
générer
→ valider
→ identifier le défaut principal
→ réparer la plus petite zone utile
→ revalider
```

Il n'existe pas de nombre maximal universel de tentatives. Une itération doit
toutefois apporter une correction ou une information nouvelle.

## Choisir la bonne action

- défaut local sur une animation : régénérer uniquement sa ligne ;
- halo, découpe ou packing : corriger le traitement déterministe ;
- identité instable : renforcer la base canonique et les références ;
- concept global peu convaincant : changer de direction ou de créature ;
- répétition du même échec : revoir la méthode au lieu de relancer le même prompt.

Un candidat abandonné reste hors production avec sa QA afin d'éviter de répéter
les mêmes erreurs.

Voir [[Human-Gates]], [[Cycle-Vie-Asset]] et [[Animations-MVP]].
