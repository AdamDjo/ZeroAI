---
title: Stack Outils
type: reference
tags: [produit, outils]
statut: actif
maj: 2026-08-20
---

# Stack Outils — rôle de chacun

## PixelLab
Générateur de pixel-art pilotable par IA (personnage, directions,
variations, animations, assets, environnements), via MCP.

> [!warning] Ce n'est PAS la source de vérité du design.
> La source de vérité est `ZERO_MASTER` + [[Style-Bible]] + [[Palette-Officielle]].

Quand l'appeler ou non : [[Quand-Utiliser-Quoi]]

## Agents de code (Codex / Claude Code / Gemini CLI)
Envoient les demandes à PixelLab, enregistrent, valident, construisent les
sprite sheets, génèrent les manifests, intègrent dans Flutter, implémentent
Flame, créent les tests, lancent les captures, font le pixel-perfect du site.

## Pixelorama
**Facultatif.** Ouvrir, inspecter, corriger exceptionnellement, retoucher
une frame, visualiser une animation.
Le pipeline ne doit jamais dépendre d'une intervention humaine ici.

## Flame
Moteur 2D dans Flutter : sprites, animations, états, particules, réaction
au toucher, couches, accessoires. Voir [[Flame-Architecture]].

## Flutter
L'application. Flame n'est qu'une partie :

```text
Flutter
├── navigation ├── home ├── chat ├── souvenirs
├── missions   ├── boutique ├── profil
└── ZeroStage → Flame
```

## Playwright
Screenshots, comparaison à une baseline, détection de différences
visuelles, tests multi-viewports. Voir [[Landing-Pixel-Perfect]].

## Documentation officielle
Voir [[Documentation-Officielle]].

---
Source : §1.1 à §1.6
