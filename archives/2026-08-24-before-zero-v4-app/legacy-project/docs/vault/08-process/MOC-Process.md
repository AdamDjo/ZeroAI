---
title: MOC Process
type: moc
tags: [process, iteration]
statut: actif
maj: 2026-08-24
---

# MOC — Process

## Méthode

- [[Ordre-De-Developpement]] — boucle adaptative par preuve visible ;
- [[Definition-Of-Done]] — exploration, candidat et livrable ;
- [[Retry-Et-Escalade]] — réparation ciblée ou changement de direction ;
- [[Human-Gates]] — QA automatique et visuelle sans gates artistiques figées.

## Workflow

```text
demande ou critique
→ plus petite modification utile
→ génération ou réparation avec hatch-pet
→ QA
→ comparaison
→ intégration quand le candidat est assez fort
```

L'agent peut générer les variantes, réparer, comparer, valider et intégrer sans
demander une validation à chaque micro-étape. La direction reste réversible :
si le résultat ne convainc pas, on change l'animation, le style ou la créature.

Les familles d'issues restent des outils d'organisation : [[Issues-PIPE]],
[[Issues-ART]], [[Issues-ENGINE]], [[Issues-SHOP]], [[Issues-WEB]] et
[[Issues-BREED]].

Les règles Git restent décrites dans [[Git-Strategy]].
