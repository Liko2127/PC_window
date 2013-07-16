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

imageTypes : array // ['png','jpg','jpeg','gif'] d�fini les extensions de fichier �tant des images et devant �tre trait� comme tel. Defaut : ['png','jpg','jpeg','gif']

anim : boolean, // anime l'ouverture de la fen�tre. Defaut : false

fermein: boolean, // affiche la croix permettant la fermeture dans la fenetre elle m�me. False positionne le bouton en haut � droite de l'�cran. Defaut : true

fermehide: boolean, // affiche ou non la croix permettant la fermeture. Defaut : false

fermeoverlay: boolean, // defini un clic en dehors de la fen�tre ferme ou non la fen�tre. Defaut : true

callback: function, // fonction execut� une fois la fen�tre ouverte.

ajax: string, // URL de la page � charger en AJAX en GET

image: string, // URL de l'image � charger dans la fen�tre

html: string // Code HTML � afficher dans la fen�tre

---------------------------------------------------------


---------------------------------------------------------
EVENEMENTS PROGRAMMABLES
---------------------------------------------------------

$(document).trigger('ferme.PC_window'); // ferme la fen�tre

$(document).trigger('centre.PC_window'); // centre la fen�tre
