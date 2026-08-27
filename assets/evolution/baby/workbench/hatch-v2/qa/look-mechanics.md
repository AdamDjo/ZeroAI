# Zéro Baby — look mechanics

## Construction

Zéro Baby possède un visor noir fixe affichant des glyphes lime. Le bas du corps en forme de petit haricot, les pattes avant et la baseline restent ancrés. Une patte arrière peut rester naturellement occultée par la pose accroupie ; aucune patte supplémentaire ne doit apparaître.

## Mouvement naturel

- Les yeux numériques mènent le regard en se déplaçant et en changeant légèrement de forme dans le visor.
- La petite bouche peut se déplacer de quelques pixels avec la direction, sans quitter le visor.
- La tête suit subtilement par un turn/tilt lisible ; elle ne tourne jamais comme un objet rigide complet.
- Les oreilles suivent la tête avec un léger retard et conservent leurs détails lime.
- Le minuscule torse reste stable ; seule la partie haute peut accompagner légèrement.
- La queue reste attachée et l’orbe peut suivre avec un retard très discret, sans flotter.
- Le cœur du collier reste centré et visible ; il ne saute pas entre les cellules.

## Cardinaux en coordonnées écran

- `000 up` : glyphes hauts dans le visor, paupières ouvertes vers le haut, tête légèrement relevée, oreilles plus attentives.
- `090 screen-right` : glyphes, bouche et visor/head lisent clairement vers le bord droit de l’image ; le côté droit du visage devient un peu plus visible.
- `180 down` : glyphes bas, tête légèrement rentrée vers le cœur, oreilles plus souples.
- `270 screen-left` : glyphes, bouche et visor/head lisent clairement vers le bord gauche de l’image ; le côté gauche du visage devient un peu plus visible.

Les cardinaux gauche et droite doivent être opposés sans ambiguïté à la taille réelle du pet.

## Continuité

Chaque pas de 22,5 degrés déplace les mêmes éléments d’une quantité comparable. La baseline, le volume de la tête, la taille du visor, le cœur, les pattes et la connexion de la queue restent stables. Les passages `157.5 → 180` et `337.5 → 000` ne doivent produire ni saut, ni changement d’identité.

Interdits : rotation, skew ou tilt du sprite entier ; remplacement des yeux ; pupilles flottantes ; pose adulte ; patte ajoutée ; queue ou orbe détachée ; ombre, décor, degré, flèche ou repère visible.
