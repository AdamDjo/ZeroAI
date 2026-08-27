# Contrat d'animation Chimi

## Architecture

Le pipeline sépare trois responsabilités :

1. ImageGen produit des sources de poses complètes en s'appuyant sur le master.
2. `normalize_asset.py` convertit une source en sprite 96×96, transparent et sans interpolation.
3. `hatch_chimi.py` refuse les dérives puis assemble sheet, GIF et manifest.

Un script ne doit jamais inventer le mouvement en déplaçant, étirant ou effaçant une région du master. Cette méthode crée des coutures et transforme les volumes en blocs rigides.

## Critères objectifs

- dimensions et mode RGBA identiques pour toutes les frames ;
- pixels opaques limités aux cinq couleurs du master ;
- checksum du master conforme à `CHIMI_MASTER_V1.json` ;
- intersection de silhouette minimale avec le master ;
- nombre de composantes opaques stable ;
- baseline et bbox dans la tolérance du profil ;
- changements limités aux régions mutables ;
- régions d'identité dans leur budget de pixels modifiés ;
- nombre minimal de poses réellement distinctes ;
- fermeture exacte pour les boucles qui reviennent au neutre.

## Direction des poses

Toujours conserver la caméra, l'échelle, le centre, l'épaisseur des contours, les cinq couleurs et les proportions du master. Décrire un seul changement anatomique principal par pose. Pour une respiration, compresser et relâcher le volume du torse de façon organique avec une amplitude visuelle maximale d'un pixel ; ne pas translater tout le haut du corps.

Pour `blink`, `look-left`, `look-right`, `ear-twitch` et `tail-sway`, modifier uniquement la zone indiquée par le profil. Les endpoints neutres proviennent directement du master lorsqu'ils sont imposés.

## Sorties

Le dossier de travail reste sous `assets/chimi/generated/<clip>/` :

```text
clip-spec.json
frames/frame-01.png
frames/frame-02.png
...
candidate/<clip>-sheet.png
candidate/<clip>-preview.gif
candidate/manifest.json
candidate/validation-report.json
```

Seul le contenu de `candidate/` produit par une validation réussie peut être copié sous `assets/chimi/production/<clip>/`.
