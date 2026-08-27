---
title: ÉTAT ACTUEL
type: etat
tags: [index, suivi, hatch-pet]
statut: actif
maj: 2026-08-24
---

# Où en est le personnage

## Ce qui est validé

Le workflow officiel `hatch-pet` fonctionne de bout en bout : génération,
extraction, sprite sheet, transparence, GIFs, contact sheet et QA visuelle.

## Candidat disponible

Un candidat V2 complet existe ici :

```text
assets/v2/chimi/final/spritesheet.webp
assets/v2/chimi/qa/contact-sheet.png
assets/v2/chimi/qa/previews/
assets/v2/chimi/package/chimi/
```

Il contient `idle`, les courses gauche et droite, `waving`, `jumping`,
`failed`, `waiting`, `running` et `review`.

Sa validation technique passe. Cela prouve que le pipeline fonctionne, pas que
la créature ou la direction artistique sont définitives.

## Décision ouverte

La créature est à revoir. Elle peut être conservée, retouchée ou entièrement
remplacée. Son espèce, son style, ses proportions, sa palette et ses animations
restent libres.

La V1 est archivée et ne doit pas limiter les prochaines recherches.

## Prochaine preuve utile

Produire ou sélectionner le prochain candidat avec `hatch-pet`, puis comparer
son rendu animé au candidat V2. Une fois une direction suffisamment forte, on
créera son manifest d'application et un lecteur minimal.

## Méthode

```text
hatch-pet
→ candidat animé complet
→ QA technique et visuelle
→ garder, réparer ou changer de créature
→ répéter jusqu'au rendu souhaité
```

Il n'existe pas de liste obligatoire de micro-animations. On ajoute uniquement
ce qui améliore visiblement le personnage.

Voir [[Animations-MVP]], [[Ordre-De-Developpement]] et
[[Flame-Architecture]].
