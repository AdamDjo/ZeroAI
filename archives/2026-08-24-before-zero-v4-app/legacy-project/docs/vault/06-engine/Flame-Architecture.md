---
title: Architecture animation adaptable
type: spec
tags: [engine, animation, flutter, flame, manifest]
statut: actif
maj: 2026-08-24
---

# Architecture animation adaptable

## Principe

Le moteur d'application doit s'adapter au candidat produit par `hatch-pet`.
Il ne doit pas imposer une créature, une direction artistique ou une liste
d'animations définitive.

Flame est une option de moteur 2D dans Flutter. Il peut charger la sprite sheet
et contrôler les transitions, mais il n'est pas une contrainte de création.

## Frontière asset / application

Chaque candidat fournit :

```text
spritesheet.webp
animation-manifest.json
```

Le manifest décrit les lignes, frames, vitesses et boucles. Le lecteur utilise
ces données au lieu de coder en dur la géométrie d'une version particulière.

## États du candidat V2

```dart
enum ChimiAnimation {
  idle,
  runningRight,
  runningLeft,
  waving,
  jumping,
  failed,
  waiting,
  working,
  review,
}
```

Cet enum est un exemple correspondant à la V2 actuelle. Il peut être généré,
remplacé ou étendu avec le prochain manifest.

## Contrôleur minimal

Le contrôleur doit :

1. jouer l'état demandé ;
2. respecter son rythme et sa boucle ;
3. revenir vers un état neutre après une action ponctuelle ;
4. éviter les répétitions mécaniques ;
5. accepter un nouveau pack sans réécrire tout le moteur.

Un scheduler de micro-animations est optionnel. Il est ajouté seulement si le
rendu dans l'application en bénéficie réellement.

## Organisation proposée

```text
lib/
└── pet_engine/
    ├── pet_component.dart
    ├── pet_animation_manifest.dart
    ├── pet_animation_controller.dart
    └── pet_state.dart
```

Les noms restent génériques afin de permettre le remplacement de Chimi par un
autre candidat sans reconstruire l'architecture.

Voir [[Animations-MVP]], [[Sprite-Sheets]] et [[Manifests]].
