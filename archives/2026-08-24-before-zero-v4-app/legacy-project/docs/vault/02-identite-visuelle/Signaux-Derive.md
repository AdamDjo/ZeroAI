---
title: Signaux Dérive
type: procedure
tags: [identite, qa, gouvernance]
statut: actif
maj: 2026-08-20
---

# Signaux Dérive — l'IA est-elle trop libre ?

## Mauvais signes

Si, entre deux générations :

- les oreilles changent
- la queue change de taille
- le visage change
- le corps change de hauteur
- le collier disparaît
- l'orbe change d'endroit

## Que faire

```text
tighten master constraints
```

Concrètement :

1. Renforcer la formulation du prompt (référence explicite au master, liste
   des traits à préserver)
2. Durcir les seuils dans [[Seuils-Qualite]]
3. Relancer via [[Retry-Et-Escalade]] avec le feedback précis

## Ne PAS faire

Ne jamais changer tout le pipeline parce qu'**une** animation est
difficile. Voir [[Fallback-PixelLab]] pour la marche à suivre graduée.

## Checklist quotidienne (humain)

Quand un agent te montre un résultat, cinq questions suffisent :

- Est-ce encore lui ?
- Est-ce plus vivant ?
- Est-ce cohérent avec notre marque ?
- Est-ce réutilisable ?
- Est-ce que ça enrichit vraiment le produit ?

Tu n'as pas besoin de juger le code ligne par ligne.

---
Source : §149, §177, §185
