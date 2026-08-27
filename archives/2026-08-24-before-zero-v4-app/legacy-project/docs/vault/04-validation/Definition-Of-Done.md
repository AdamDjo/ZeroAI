---
title: Niveaux de validation
type: regle
tags: [validation, process, qualite]
statut: actif
maj: 2026-08-24
---

# Niveaux de validation

Un essai, un candidat et un livrable final n'ont pas les mêmes exigences.

## Exploration

```text
[ ] l'idée est visible et comparable
[ ] les fichiers restent hors production
[ ] le résultat peut être abandonné sans migration
```

La créature et la direction artistique peuvent changer librement.

## Candidat animé

```text
[ ] le candidat a une identité cohérente dans ses propres frames
[ ] les mouvements principaux sont lisibles
[ ] la contact sheet et les GIFs existent
[ ] les défauts connus sont identifiés
```

Un candidat peut être testé, réparé ou remplacé. Le candidat V2 se trouve à ce
niveau.

## Livrable final

```text
[ ] la créature et le rendu sont convaincants dans le produit
[ ] le manifest correspond exactement à la sheet
[ ] transparence, dimensions et cellules sont valides
[ ] aucune coupure, dérive interne, boucle cassée ou transition gênante
[ ] la QA visuelle et technique passe
[ ] le remplacement ou le retour arrière est possible
```

## Règle

Les étapes, états, styles et nombres de frames peuvent évoluer. La qualité
finale ne peut pas être contournée : un rapport vert ne suffit pas si le rendu
est mauvais, et une belle image ne suffit pas si l'animation est inutilisable.

Voir [[Validation-Animation]], [[Generated-Vs-Production]] et
[[Ordre-De-Developpement]].
