---
title: Prompts Bootstrap
type: reference
tags: [process, prompts, agents]
statut: actif
maj: 2026-08-20
---

# Prompts de référence

Prompts réutilisables pour piloter les agents. Texte intégral en
§164-§170 du plan source ; ci-dessous les **invariants** à ne pas perdre.

## Génération master (§165)

```text
Generate a contact sheet.
Do not promote anything to production.
Return the candidate files for human approval.
```

## Après validation master (§166)

```text
Promote this exact asset to design/reference/ZERO_MASTER_V1.png

Create: metadata JSON · SHA256 · palette report · bounding box report
Update ZERO_STYLE_BIBLE.md with measured properties.

Do not regenerate the character.
```

Le style bible est mis à jour avec les propriétés **mesurées**, pas
supposées. Voir [[Style-Bible]].

## Animation (§167)

```text
Sources of truth:
- ZERO_MASTER_V1.png
- ZERO_STYLE_BIBLE.md
- zero_palette.json

Generate at most 3 attempts.
Run the full asset validator after each attempt.

If an attempt passes:
- generate GIF preview
- generate contact sheet
- generate QA report
- stop and request human approval

Do not add the asset to production before approval.
```

## Accept (§168)

```text
Promote the approved animation to production.
Update: sprite sheet · animation manifest · asset manifest · changelog
Run all asset tests.
Do not modify other animations.
```

## Reject (§169)

```text
Keep ZERO_MASTER_V1 unchanged.
Generate one new attempt addressing ONLY this feedback.
Do not change unrelated traits.
```

C'est le retry avec feedback de [[Retry-Et-Escalade]] : **une** tentative
ciblée, pas une relance globale.

## Web hero (§170)

```text
The visual reference is the source of truth.
Do not redesign.

1. run exact reference viewport
2. screenshot → compare → implement
3. screenshot → compare → correct
```

## Invariants communs

```text
- ne jamais promouvoir sans rapport automatique `passed`
- ne jamais régénérer le master
- ne jamais toucher à ce qui n'est pas demandé
- toujours valider après chaque tentative
- toujours bloquer la promotion si une gate échoue
```

Voir [[Human-Gates]], [[Regle-Master-Immuable]], [[Protocole-Agent]].

---
Source : §164, §165, §166, §167, §168, §169, §170
