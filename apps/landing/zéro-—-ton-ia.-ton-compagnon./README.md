# Landing Zéro

Landing React/Vite de Zéro, reconstruite depuis la maquette versionnée dans
`assets/website/v1/zero-landing-reference.png`.

## Architecture

- `src/components/` contient les sections et interactions de la page ;
- `src/components/ui/` contient les primitives partagées ;
- `src/data/landing-content.ts` centralise le contenu statique ;
- `src/assets/zero-assets.ts` expose les assets versionnés du package web ;
- les modales sont chargées à la demande pour limiter le bundle initial ;
- GSAP/ScrollTrigger anime la progression uniquement lorsque le mouvement est autorisé ;
- les illustrations de section et GIFs utilisés sont déclarés dans le manifest web v1.

Le personnage reste dérivé du master canonique. La landing consomme uniquement le
package versionné `assets/website/v1/` et ne dépend d'aucun workbench ou dossier
d'archives à l'exécution.

## Commandes

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

La landing ne collecte aucune donnée et n'utilise aucune variable d'environnement.
