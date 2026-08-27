# Zéro — look-direction mechanics

Zéro is the approved compact seated cream pixel-art AI cat. His face is a fixed black digital visor displaying two lime pixel-eye glyphs and a tiny lime pixel mouth. This is a screen-face mascot, not a creature with physical eyeballs or white sclera.

## Stable anchors and identity

- Keep all four anatomical limbs and the seated lower body anchored to one shared feet baseline.
- Preserve the oversized rounded cream head, small body, black triangular ears, lime ear accents, black collar, centered circular lime AI core, curved black tail and lime tail orb.
- Keep the tail and orb attached on Zéro's canonical screen-right side in every frame; never flip sides or introduce detached effects.
- Keep the same pixel grid, warm cream/charcoal/lime palette, scale, head/body ratio and full-body silhouette as the approved idle sprite.
- Never rotate, skew, tilt, warp, or re-center the whole sprite. Never add replacement eyes, googly eyes, eye whites, floating pupils, extra paws, new accessories, labels, arrows, shadows, or chroma-colored pixels.

## Natural gaze mechanism

The lime digital eye glyphs lead each gaze by shifting as coherent screen graphics inside the existing black visor. The visor remains attached to the head. A restrained head yaw or nod follows the eye direction; the ears and upper head follow by a small consistent amount. The neck, shoulders, collar, core, paws, lower body, tail root and tail orb remain effectively anchored.

The face should feel attentive and alive without changing Zéro's identity. Each 22.5-degree step advances the eye glyphs and subtle head orientation by one even increment. Preserve one continuous clockwise motion family across both rows, including 157.5° → 180° and 337.5° → 000°.

## Cardinal pose families

- `000 up`: eye glyphs move toward the upper edge of the black visor; the head nods slightly upward while remaining broadly frontal.
- `090 screen-right`: eye glyphs move decisively toward the viewer's right edge of the visor; the head yaws slightly to screen-right and the face center shifts right while paws, collar and tail remain anchored.
- `180 down`: eye glyphs move toward the bottom edge of the black visor; the head nods slightly downward while remaining broadly frontal.
- `270 screen-left`: eye glyphs move decisively toward the viewer's left edge of the visor; the head yaws slightly to screen-left and the face center shifts left while paws, collar and tail remain anchored.

Intermediate directions interpolate between these four pose families. Diagonals must visibly contain both their horizontal and vertical gaze components. Directions are always viewer/screen coordinates, never character-relative.
