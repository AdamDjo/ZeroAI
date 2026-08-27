---
title: Assets Landing
type: spec
tags: [web, landing, assets]
statut: actif
maj: 2026-08-20
---

# Assets de la landing

## Règle

La landing utilise le **même master**. Pas de « Chimi marketing »
différent — voir [[Regle-Master-Immuable]].

## Ce qui est généré en image — ~14 assets

```text
zero_hero.png
zero_stage_baby.png
zero_stage_child.png
zero_stage_teen.png
zero_stage_young_adult.png
zero_stage_adult.png
zero_customization.png
zero_cta.png

grass_a.png
grass_b.png
sparkle_a.png
sparkle_b.png
heart.png
data_pixel.png
```

Les 5 portraits d'évolution viennent de [[Evolution-Stages]].

## Ce qui est en code — jamais en image

```text
boutons · titres · cartes · fond · nav · footer
labels · badges · contours téléphones · bulles simples
```

## Pourquoi cette frontière

Une image de bouton n'est ni traduisible, ni accessible, ni responsive, ni
modifiable sans régénération. Tout ce qui est texte ou forme simple reste
du code ; l'image est réservée au **personnage et aux effets pixel-art**.

C'est aussi ce qui garde le diff visuel exploitable
([[Landing-Pixel-Perfect]]) : un écart de bouton devient un écart de CSS,
pas un ré-appel de PixelLab.

---
Source : §78, §79, §80, §137
