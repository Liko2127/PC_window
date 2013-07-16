PC_window
=========

Jquery plugin : Fenetre modale

Plugin simple permettant d'afficher du contenu dans une fenetre en surimpression.

---------------------------------------------------------
ACTIVATION
---------------------------------------------------------

$(document).ready(function() {
	$("A").PC_window();
});

---------------------------------------------------------
OPTIONS
---------------------------------------------------------

imageTypes : array // ['png','jpg','jpeg','gif'] défini les extensions de fichier étant des images et devant être traité comme tel. Defaut : ['png','jpg','jpeg','gif']

anim : boolean, // anime l'ouverture de la fenêtre. Defaut : false

fermein: boolean, // affiche la croix permettant la fermeture dans la fenetre elle même. False positionne le bouton en haut à droite de l'écran. Defaut : true

fermehide: boolean, // affiche ou non la croix permettant la fermeture. Defaut : false

fermeoverlay: boolean, // defini un clic en dehors de la fenêtre ferme ou non la fenêtre. Defaut : true

callback: function, // fonction executé une fois la fenêtre ouverte.

ajax: string, // URL de la page à charger en AJAX en GET

image: string, // URL de l'image à charger dans la fenêtre

html: string // Code HTML à afficher dans la fenêtre

---------------------------------------------------------


---------------------------------------------------------
EVENEMENTS PROGRAMMABLES
---------------------------------------------------------

$(document).trigger('ferme.PC_window'); // ferme la fenêtre

$(document).trigger('centre.PC_window'); // centre la fenêtre
