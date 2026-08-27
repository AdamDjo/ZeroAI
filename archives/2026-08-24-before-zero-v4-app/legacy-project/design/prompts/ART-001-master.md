# ART-001 — Prompt master Chimi

Référence visuelle : `design/reference/master_source_crop.png`
Cible : `design/reference/CHIMI_MASTER_V1.png` — 96×96, RGBA, fond transparent

---

## Réglages de l'éditeur PixelLab

```text
Taille          96 x 96
Fond            transparent  (no background)
Vue             side / front
Outline         single color black outline
Shading         flat shading
Detail          low detail
```

La taille compte : 96×96 est sous le plafond de 200×200 du gratuit.

## Prompt principal

```text
small round cream white cat sitting, front view, large head, small paws,
black triangular ears, black tail curled to the side with a glowing green
orb at the tip, green glowing collar with a circular core at the neck,
green pixel eyes, small coral blush on both cheeks, cute chibi proportions,
flat colors, no anti-aliasing, clean pixel art, transparent background
```

## Negative prompt

```text
anti-aliasing, blurry, gradient, soft shading, realistic, 3d render,
noisy, text, watermark, background, shadow, grey outline
```

---

## Les 4 marqueurs à vérifier à l'œil

Avant de télécharger, vérifie que l'image a bien :

1. **l'orbe vert au bout de la queue** — non négociable
2. **le collier vert** avec son noyau circulaire — non négociable
3. les **oreilles noires** triangulaires
4. le **blush corail** sur les deux joues

Sans 1 ou 2, la validation d'identité échoue ([[Validators]]).
Régénère plutôt que d'accepter une image approximative.

## Ce qu'on ne cherche PAS

Le master est **assis**, de face, queue relevée sur la droite.
Pas debout, pas de profil, pas en marche. Une seule pose.

## Après téléchargement

```bash
.venv/bin/python tools/asset_factory/scripts/validate_master.py <fichier.png>
```

Le script dit ce qui va et ce qui ne va pas. Il ne modifie rien.

---

Règle applicable : `Regle-Master-Immuable` — une fois ce fichier validé
et approuvé (Gate 1, `MASTER APPROVED`), il ne se redessine plus.
