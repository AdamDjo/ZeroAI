---
title: DEC-002 — Ordre Web vs Shop
type: decision
tags: [decision, process, ordre]
statut: a-trancher
maj: 2026-08-20
---

# DEC-002 — Ordre Web vs Shop

## Question

La landing (`WEB-*`) vient-elle **avant** ou **après** la boutique
(`SHOP-*`) ?

## Les deux positions du plan source

### §158 — ordre de développement exact

```text
… SHOP-001 → SHOP-009
   WEB-001  → WEB-020
   BREED later
```

Shop d'abord, web ensuite.

### §163 + §197 — roadmap

§163, conditions de démarrage de la landing :

```text
candidat visuel sélectionné
hero pose available
evolution portraits available
```

§197, roadmap simplifiée :

```text
WEEK 4  Accessories + shop prototype
WEEK 5  Landing pixel-perfect
```

## Lecture

Les deux sources ne sont pas franchement incompatibles : §197 place bien
la semaine 4 (shop) avant la semaine 5 (landing), donc **dans le même
ordre que §158**.

La tension réelle est ailleurs :

- §162/§197 parlent d'un **shop prototype** en semaine 4, pas des 9 issues
  `SHOP-*` complètes
- §163 ne conditionne la landing qu'au **master + hero + portraits**, pas à
  la boutique

Autrement dit : rien dans les prérequis de la landing ne dépend de la
boutique. L'ordre §158 est une séquence de confort, pas une dépendance
technique.

## Options

| Option | Description |
|--------|-------------|
| A | Suivre §158 littéralement : SHOP complet, puis WEB |
| B | Shop prototype (SHOP-001/002) → WEB complet → reste du SHOP |
| C | WEB dès que master + hero + portraits sont prêts, en parallèle |

## Recommandation

**Option B.** Elle respecte l'esprit de §197 (prototype en semaine 4,
landing en semaine 5) sans bloquer la landing derrière 9 issues dont elle
ne dépend pas. Elle sort aussi plus tôt l'artefact public du projet.

L'option C est écartée : le travail séquentiel est une préférence
explicite du projet.

## Impact

- [[Ordre-De-Developpement]]
- [[Issues-SHOP]], [[Issues-WEB]]
- [[Roadmap]]

## Statut

**À trancher.** Décision non bloquante avant la fin de `ENGINE-011`.

---
Source : §158, §162, §163, §197
