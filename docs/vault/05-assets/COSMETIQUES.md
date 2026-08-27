---
title: Cosmétiques
type: source-verite
tags: [assets, cosmetics, inventory]
statut: actif
maj: 2026-08-26
source_archive: legacy-project/docs/vault/05-assets/Cosmetiques.md
---

# Cosmétiques

Un cosmétique est un asset versionné, attaché à un anchor et déclaré compatible avec certains stades et états.

```json
{
  "id": "cap-zero-01",
  "schemaVersion": 1,
  "anchor": "headTop",
  "stageCompatibility": ["baby", "adolescent", "adult"],
  "animationCompatibility": ["idle", "happy", "waiting"],
  "preserveSignatures": ["visor", "collarCore", "tailOrb"]
}
```

Un cosmétique n’est pas simplement redimensionné entre les âges : ses offsets et, si nécessaire, son dessin sont validés par stade. Les accessoires ne doivent pas masquer durablement les trois signatures de Zéro.
