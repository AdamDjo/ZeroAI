# ART-002 — Idle breathe ImageGen

Mode : outil ImageGen intégré, édition `precise-object-edit` avec
`CHIMI_MASTER_V1.png` comme cible et référence d'identité.

## Tentative 1 — inhale organique

Demande : pose complète d'inspiration, torse élargi d'un pixel visuel,
pattes, visage, oreilles, collier, queue, palette et transparence verrouillés.

Résultat : rejeté. Damier matérialisé, source RGB sans alpha et dérive forte
des proportions.

Source conservée :
`assets/chimi/generated/idle-breathe-v2/sources/inhale-attempt-01.png`.

## Tentative 2 — retouche de contour verrouillée

Demande : copier le master et ne modifier que quelques pixels du contour du
torse, sans zoom, antialiasing, translation ni redessin.

Résultat : rejeté par `hatch-chimi` : IoU 0,8783, bbox +3 px, 208 pixels de
pattes et 183 pixels de visage modifiés.

Source conservée :
`assets/chimi/generated/idle-breathe-v2/sources/inhale-attempt-02.png`.

## Tentative 3 — grille 96×96 explicite

Demande : exhale de 4 à 8 pixels, grille, bbox, baseline, zones immuables et
cinq couleurs indiquées explicitement.

Résultat : rejeté visuellement. ImageGen a de nouveau réinterprété le sprite
et matérialisé le damier au lieu de conserver la grille.

Source conservée :
`assets/chimi/generated/idle-breathe-v2/sources/exhale-attempt-03.png`.

## Repli retenu

Après trois échecs, `hatch-chimi` a réduit l'amplitude et appliqué une recette
`contour-pixel-paint` traçable. Seuls 16 à 28 pixels de contour/remplissage
changent selon la pose. Le clip final passe avec un IoU minimal de 0,995847,
zéro changement du visage et des pattes, et aucune coupure.
