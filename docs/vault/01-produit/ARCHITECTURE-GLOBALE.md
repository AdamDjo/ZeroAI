---
title: Architecture globale
type: source-verite
tags: [architecture, produit, runtime]
statut: actif
maj: 2026-08-26
source_archive: legacy-project/docs/vault/01-produit/Architecture-Globale.md
---

# Architecture globale

## Couches

| Couche | Responsabilité |
|---|---|
| Application | navigation, conversation, profil, inventaire et affichage du pet |
| Pet runtime | lecture des atlas, machine d’états, regards, touch et transitions |
| Domaine | croissance, humeur, énergie, mémoire, génome et inventaire |
| Persistance | sauvegarde locale, synchronisation, versions et migrations |
| Backend IA | conversation, extraction de préférences et services nécessitant le réseau |
| Pipeline assets | masters, Hatch Pet, rangées supplémentaires, manifests et QA |

## Frontière importante

Le runtime ne dépend jamais des fichiers de workbench archivés. Il consomme uniquement un package final versionné : atlas, manifest, anchors, calques et rapports QA approuvés.

## Flux d’un pet

`PetGenome + stage + état + inventaire` → sélection des assets compatibles → composition des calques → animation → affichage.

La génération sert à fabriquer le catalogue officiel. Elle n’est pas exécutée pour chaque utilisateur ou chaque naissance.

## Choix encore ouvert

Le framework mobile n’est pas verrouillé. Si Flutter est retenu, Flame pourra gérer la boucle de rendu et les sprites. Le contrat d’assets reste indépendant de ce choix.
