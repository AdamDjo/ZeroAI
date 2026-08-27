---
title: Previews
type: procedure
tags: [validation, preview, outillage]
statut: actif
maj: 2026-08-24
---

# Previews

Artefacts visuels produits pour l'audit et la traçabilité
([[Human-Gates]]). Ils accompagnent les validateurs automatiques mais ne les
remplacent pas.

## Types

| Preview | Pour quoi | Quand |
|---------|-----------|-------|
| Contact sheet | Voir un set d'un coup d'œil | Expressions |
| GIF | Juger le mouvement | Animations |
| MP4 60 s | Juger la présence composée | Pack vivant |
| Zoom 300 % | Vérifier le pixel | Master |

## Contact sheet

Toutes les images d'un set sur une grille, avec leur nom sous chaque
vignette. Sert à juger la **cohérence** entre assets — ce qu'aucun score
individuel ne mesure.

## GIF preview

Généré après [[Validation-Animation]], au timing réel de l'animation.
Permet de rejouer et diagnostiquer une couture de boucle ou un jitter signalé
par le validateur.

## Zoom

Le pixel art se juge à deux échelles : 100 % (usage réel) et 300 %
(qualité du tracé, anti-aliasing parasite). Voir [[Style-Bible]].

## Preview de présence

Le MP4 de 60 secondes vérifie la composition réelle des clips, avec respiration
entre les micro-actions et retour au neutre. Il est accompagné de
`timeline.json`, `validation-report.json`, `poster.png` et
`contact-sheet.png`. Voir [[Living-Mascot-System]].

## Où

```text
asset-factory/previews/
```

Les previews sont des artefacts **régénérables** : ne pas les traiter comme
des sources. Voir [[Git-Strategy]].

---
Source : §63, §124
