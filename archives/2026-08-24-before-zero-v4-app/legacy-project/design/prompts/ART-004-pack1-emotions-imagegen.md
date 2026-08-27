# ART-004 — Références ImageGen `happy` et `thinking`

Mode : ImageGen intégré, édition de `CHIMI_MASTER_V1.png`.

## Happy — pose centrale

> Use case: precise-object-edit. Create one complete happy jump peak pose from
> the exact Chimi master. Lift Chimi about three pixels, close both eyes into
> tiny joyful arcs and open a cute small smile. Preserve the 96×96 transparent
> canvas, exact five-color palette, camera, proportions, outline, collar, tail,
> glowing orb and identity. One full sprite only; no sheet, crop, background,
> anti-aliasing, new color or seam.

Référence conservée :
`assets/chimi/generated/happy-v1/sources/imagegen-happy-reference.png`.

## Thinking — pose centrale

> Use case: precise-object-edit. Keep Chimi seated on the exact baseline. Move
> only the gaze slightly upward-left, brighten the existing collar medallion and
> tail orb, and keep a focused tiny mouth. Preserve the full 96×96 sprite,
> silhouette, paws, tail contour, exact five-color palette and identity. No
> particles, detached components, background, blur, new color or body movement.

Référence conservée :
`assets/chimi/generated/thinking-v1/sources/imagegen-thinking-reference.png`.

Les sorties ImageGen ont servi de direction artistique. Leur damier était
opaque et leur géométrie dérivait du master ; elles n'ont donc pas été promues.
Les poses finales réemploient uniquement le master et les micro-expressions
déjà validées, puis passent le pipeline `hatch-chimi`.
