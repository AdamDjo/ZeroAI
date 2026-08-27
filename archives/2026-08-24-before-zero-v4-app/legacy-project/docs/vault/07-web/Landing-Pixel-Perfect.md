---
title: Landing Pixel Perfect
type: procedure
tags: [web, landing, playwright, qa]
statut: actif
maj: 2026-08-20
---

# Landing — Pixel Perfect

## Le problème

> Un agent peut produire un joli site qui n'est **pas fidèle**.

## La boucle

```text
reference → code → screenshot → visual diff → correction
```

Et surtout : **ne pas s'arrêter après une itération**.

## Référence

> [!important] La référence existe déjà
> `Landing.png`, à la racine du repo, est la maquette validée.
> `WEB-002` consiste à la copier ici, pas à la créer.
> Détail des 8 sections : [[Maquettes-Reference]].

```text
Landing.png                          ← source validée (racine du repo)
apps/landing/public/reference/
└── landing_reference.png            ← copie de travail
```

Mesurer **exactement** la largeur de la référence. La première
reproduction se fait à cette largeur ; le responsive vient ensuite.

## Overlay dev

`PixelPerfectOverlay.tsx` :

```text
P = toggle
opacity slider
difference mode
reference / current
```

### Pourquoi

Sans overlay :

> « ça semble presque pareil »

Avec overlay :

> hero 38 px trop bas · title 42 px trop large · phone 14 % trop petit

L'overlay transforme une impression en mesure. C'est ce qui rend le
critère opposable à un agent.

## Playwright

```text
tests/visual/landing.spec.ts
```

Animations désactivées pendant les tests :

```css
html.visual-test *,
html.visual-test *::before,
html.visual-test *::after {
  animation: none !important;
  transition: none !important;
}
```

## Automatisation

```bash
npm run visual:landing
```

```text
1. lancer serveur
2. désactiver animations
3. screenshot
4. comparer
5. écrire diff
```

## Travail par section

Une seule section à la fois, sans toucher aux autres. Points comparés :

```text
x/y · width · height · whitespace · typography · line height
image scale · radius · border · shadow · background
```

Prompt complet : §106 du plan source.

## Visual report — livrable de chaque issue web

```text
SECTION: Hero

Reference viewport: 1440×...

Changes:
- title width -24px
- phone scale +9%
- hero padding-top -18px

Remaining:
- small font mismatch
- sparkle positions approximate
```

La section `Remaining` est obligatoire : une issue web qui prétend n'avoir
aucun reliquat n'a probablement pas été mesurée.

## Portée du pixel-perfect

| Cible | Exigence |
|-------|----------|
| Reference viewport | pixel-perfect strict |
| Mobile | design fidelity + bonne composition responsive |

Le pixel-perfect responsive absolu n'est **pas** un objectif.

Voir [[Definition-Of-Done]] et [[QA-Checklists]].

---
Source : §81-§88, §106, §107, §108, §109
