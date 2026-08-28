# Package website v1

Package versionné des références et assets consommés par la landing.

## Contenu

- `zero-landing-reference.png` : maquette de référence ;
- `zero-master-v1.png` : copie inchangée de `assets/v4/final/ZERO_MASTER_V1.png` ;
- `zero-master-v1.webp` : dérivé transparent optimisé consommé par la landing ;
- `illustrations/` : compositions WebP transparentes générées depuis le master canonique
  et la maquette (héros, streetwear et CTA), dont la scène horizontale v2 du héros et
  la scène v3 du footer conçues pour recevoir les calques animés React ;
- `avatars/` : portraits WebP optimisés des témoignages de la landing ;
- `animations/` : copies versionnées des GIFs validés du package bébé final ;
- `asset-manifest.json` : rôles, dimensions, provenance et empreintes SHA-256 ;
- `qa/asset-validation.json` : validation minimale du package.

Toute nouvelle ressource runtime de la landing doit être ajoutée ici, déclarée dans le
manifest et validée avant d'être consommée par l'application.
