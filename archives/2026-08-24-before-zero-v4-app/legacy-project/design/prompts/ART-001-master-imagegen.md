# ART-001 — Prompt ImageGen du master Chimi

Mode : ImageGen intégré à Codex  
Référence : `design/reference/master_source_crop.png`  
Sortie approuvée : `design/reference/CHIMI_MASTER_V1.png`

## Génération

```text
Use case: stylized-concept
Asset type: production game character master sprite, designed to become a
96x96 pixel-art sprite
Input images: Image 1 is the strict identity and silhouette reference for Chimi
Primary request: recreate Chimi alone as a clean front-facing seated pixel-art
production sprite, faithfully preserving the reference character rather than
redesigning it
Scene/backdrop: genuinely transparent background, no floor, no shadow, no
plants, no particles, no frame
Subject: one small round cream-white chibi cat with an oversized circular head,
compact seated body, tiny front paws, symmetrical black triangular ears, thick
black tail rising on the viewer's right, lime-green glowing orb exactly at the
tail tip, black collar with a centered circular lime-green core, vertical black
eyes with small lime-green outer accents, tiny black mouth and nose, subtle
coral blush on both cheeks
Style/medium: true crisp low-resolution pixel art, deliberate square pixel
clusters, flat colors, hard dark outlines, no antialiasing, no gradients, no
soft painting, suitable for nearest-neighbor reduction to 96x96
Composition/framing: exactly one full-body character centered, front view,
generous transparent padding, paws aligned to one baseline, tail and orb fully
visible, strong readable silhouette at thumbnail size
Color palette: #FFF7EA, #1A1A1A, #A6E22E, #FFBC7A, #EAF3E1
Constraints: preserve identity, proportions, ear size, head roundness, collar,
tail thickness and orb; no text, watermark, extra objects, clothing,
perspective, 3D, background or cast shadow
```

## Correction ciblée

```text
Remove only the pale checkerboard background and replace it with genuine
transparent alpha. Keep Chimi exactly unchanged in appearance, proportions,
colors, face, ears, collar, paws, tail, orb, composition and scale. Preserve
crisp hard pixel edges; no halo, shadow, added pixels, restyling or cropping.
```

## Post-traitement déterministe

```text
fit 68×78 dans un canevas 96×96
NEAREST uniquement
baseline y=86
quantification sur les 5 couleurs officielles
corail réservé aux deux joues
```
