Create one horizontal animation strip for Codex pet `z-ro`, state `idle`.

Use the attached canonical base for identity. Use the attached layout guide only for slot count, spacing, centering, and padding; do not draw the guide.

Output exactly 6 full-body frames in one left-to-right row on flat pure cyan #00FFFF. Treat the row as 6 invisible equal-width slots: one centered complete pose per slot, evenly spaced, with no overlap, clipping, empty slots, labels, or borders.

Identity: same pet in every frame: ZERO_MASTER_V1. Reproduire fidèlement le personnage central assis de la planche de référence, sans le redessiner: très grande tête ronde crème, corps minuscule compact assis, exactement quatre membres anatomiques, pattes courtes, oreilles triangulaires noires avec détail numérique lime, grand visor facial noir arrondi, yeux pixels lime curieux, minuscule bouche pixel lime, moustaches minimales, collier technologique noir, cœur IA circulaire lime centré, queue noire courbe relevée, grosse orbe IA lime brillante au bout. Adorable créature vivante d'abord, technologie intégrée ensuite. Aucun accessoire, couronne, texte, décor ou effet détaché.. Preserve silhouette, face, proportions, markings, palette, material, style, and props.
Style: Pet-safe sprite: compact full-body mascot, readable in a 192x208 cell, clear silhouette, simple face, stable palette/materials, and crisp edges for chroma-key extraction. Style `pixel`: Pixel-art-adjacent digital mascot with a chunky silhouette, simple dark outline, limited palette, flat cel shading, and visible stepped edges. User style notes: Pixel art 2D net 8/16-bit, arêtes dures, palette limitée crème chaud/charbon/lime, silhouette simple lisible à petite taille, proportions strictement identiques à la référence, fond chroma uni destiné à la transparence..
Animation continuity: keep apparent pet scale and baseline stable within the row unless the state itself intentionally changes vertical position, such as `jumping`. Move the pose within the slot instead of redrawing the pet larger or smaller frame to frame.

State action: Calm low-distraction resting loop: subtle breathing, tiny blink, slight head/body bob, and only quiet persona-preserving motion.

State requirements:
- CRITICAL: idle is the low-distraction baseline state and the first frame is also used as the reduced-motion static pet.
- Use only subtle idle motion: gentle breathing, a tiny blink, a slight head or body bob, a very small material sway, or another quiet motion that fits the pet persona.
- Keep the pet essentially in the same pose, facing direction, silhouette, markings, palette, and prop state across all 6 frames.
- Idle variation must stay calm but still read as animation; do not repeat effectively identical copies across the loop.
- Do not show waving, walking, running, jumping, talking, working, reviewing, emotional reactions, large gestures, item interactions, or new props.
- Feet, base, body, or object anchor should remain planted or nearly planted.
- The first and last frames should be very close visually so the loop feels calm and does not pop.

Clean extraction: crisp opaque edges, safe padding, no scenery, text, guide marks, checkerboard, shadows, glows, motion blur, speed lines, dust, detached effects, stray pixels, or chroma-key colors inside the pet.
