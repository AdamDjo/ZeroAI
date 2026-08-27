---
title: Breeding
type: spec
tags: [assets, breeding, differe]
statut: differe
maj: 2026-08-20
---

# Breeding

Phase 10. **Hors MVP** — voir les prérequis en bas.

## Principe fondateur

> Le breeding ne doit **pas** générer un PNG complet à chaque naissance.
> Il doit produire une **configuration**.

C'est ce qui rend la fonctionnalité viable : la naissance est une
combinaison de traits existants, composée à l'exécution
([[Layers]], [[Anchors]]), pas un appel de génération.

## Genome

```json
{
  "bodyColor": "cream",
  "earShape": "triangle_standard",
  "earPattern": "black_full",
  "eyeStyle": "pixel_round",
  "tailType": "curve_long",
  "tailPattern": "black",
  "orbColor": "lime",
  "faceMark": "none",
  "mutation": "data_spark"
}
```

## Héritage

```text
45 % parent A
45 % parent B
10 % mutation / variation
```

Chiffres susceptibles d'évoluer.

## Prérequis bloquants

Le breeding arrive **seulement après** :

```text
[ ] master stable
[ ] layers stables
[ ] accessories stables
[ ] plusieurs traits visuels disponibles
```

Tant qu'il n'existe qu'un jeu de traits, le genome ne produit qu'une seule
combinaison : la fonctionnalité n'a rien à mélanger.

Voir [[Roadmap]] et [[Issues-BREED]].

---
Source : §70, §71, §72, §73
