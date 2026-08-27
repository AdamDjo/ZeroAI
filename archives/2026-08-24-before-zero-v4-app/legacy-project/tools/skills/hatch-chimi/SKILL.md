---
name: hatch-chimi
description: Crée, répare et valide les animations pixel-art de la mascotte Chimi à partir de son master immuable. Utiliser pour produire des key poses, corriger une coupure ou un jitter, construire un sprite sheet, générer un manifest ou vérifier qu'un clip conserve l'identité, la palette, la baseline et une boucle propre.
---

# Hatch Chimi

Produire des clips vivants sans redessiner Chimi au hasard et sans déplacer des rectangles de pixels. L'image générative propose des poses complètes ; les scripts ne font que préparer, contrôler et assembler.

## Workflow obligatoire

1. Trouver la racine du projet contenant `design/reference/CHIMI_MASTER_V1.png`.
2. Lire `references/animation-contract.md` avant de créer ou modifier un clip.
3. Inspecter le master et le profil demandé dans `tools/asset_factory/config/chimi-animation-profiles.json`.
4. Créer l'espace de travail avec :

   ```bash
   python "$SKILL_DIR/scripts/hatch_chimi.py" scaffold \
     --project-root "$PROJECT_ROOT" \
     --profile idle-breathe \
     --output "$PROJECT_ROOT/assets/chimi/generated/idle-breathe-v2"
   ```

5. Produire chaque pose intermédiaire comme une image complète. Avec ImageGen, fournir le master en référence et demander une seule pose précise, fond transparent, pixel art net, caméra et proportions identiques. Ne jamais demander une sprite sheet directement.
6. Normaliser chaque source avec `tools/asset_factory/scripts/normalize_asset.py`. Ne jamais interpoler ; employer nearest-neighbor uniquement.
7. Remplacer les frames intermédiaires préparées par `scaffold`, sans toucher aux endpoints neutres lorsque le profil les impose.
8. Valider, puis construire le candidat :

   ```bash
   python "$SKILL_DIR/scripts/hatch_chimi.py" validate --spec "$CLIP_DIR/clip-spec.json"
   python "$SKILL_DIR/scripts/hatch_chimi.py" build \
     --spec "$CLIP_DIR/clip-spec.json" \
     --output "$CLIP_DIR/candidate"
   ```

9. Si la validation échoue, régénérer uniquement la pose concernée en reprenant les erreurs comme contraintes. Limiter à trois essais par pose, puis réduire l'amplitude du mouvement.
10. Promouvoir vers `assets/chimi/production/` seulement lorsque `build` réussit. Conserver les rejets sous `assets/chimi/generated/rejected/`.

## Règles non négociables

- Le master `CHIMI_MASTER_V1` reste immuable et son checksum doit correspondre à ses métadonnées.
- Une frame est un sprite complet de 96×96, jamais un morceau recollé ou une transformation rectangulaire.
- La palette opaque doit être un sous-ensemble exact de la palette du master.
- Les pattes et la baseline restent fixes sauf si le profil autorise explicitement un saut.
- La première et la dernière frame d'une boucle à fermeture exacte doivent être identiques.
- Un clip statique, une nouvelle composante opaque ou une dérive hors zone autorisée est un échec.
- Les scripts déterministes valident les pixels ; le moteur d'application compose ensuite respiration, regard, oreilles et queue à des rythmes séparés.

## Réparation d'un clip coupé

Ne jamais combler la couture à la main. Déplacer le clip défectueux vers `generated/rejected`, recréer son dossier avec `scaffold`, puis refaire les poses complètes. Exécuter le test de validation et inspecter le GIF candidat avant promotion automatisée.
