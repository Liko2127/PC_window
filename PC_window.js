/*

$("A[data-zoom]").PC_window();

$(document).trigger('ferme.PC_window');

$(document).trigger('centre.PC_window');

*/

(function($) {
	$.fn.PC_window = function(params) {
		params = $.extend({
			imageTypes : [ 'png', 'jpg', 'jpeg', 'gif' ],
			anim: false,
			fermein: true,
			fermehide: false,
			fermeoverlay: true,
			callback: function() {}
		}, params);

		if (params.ajax) {
			PC_window_popup(params.ajax,"ajax");
			return false;
		}
		else if (params.image) {
			PC_window_popup(params.image,"image");
			return false;
		}
		else if (params.html) {
			PC_window_popup(params.html,"html");
			return false;
		}
	
		$(document).bind('centre.PC_window', function() {
			PC_window_popup_centre();
		});
		$(document).bind('ferme.PC_window', function() {
			PC_window_popup_ferme();
		});

		
		this.on("click",function() {
			if($(this).attr("href") || $(this).attr("data-href")) {
				if($(this).attr("data-href")) {
					var href = $(this).attr("data-href");
				}
				if($(this).attr("href")) {
					var href = $(this).attr("href");
				}
				if (href.match(/#/)) {
					var url = window.location.href.split('#')[0];
					var target = href.replace(url,'');
					var contenu = $(target).html();
					PC_window_popup(contenu,"html");
					return false;
				} 
				else if (est_image(href)) {
					PC_window_popup(href,"image");
					return false;
				} 
				else {
					PC_window_popup(href,"ajax");
					return false;
				}
				return false;
			}
		});	
		
		function est_image(chaine) {
			var imageTypes = params.imageTypes.join('|');
			var expression = new RegExp('\.' + imageTypes + '$', 'i');
			return chaine.match(expression);
		}
		
		function PC_window_popup(quoi,type) {
			$("BODY").css("overflow","hidden");
			$("*[data-groupe='PC_window']").remove();
			var content = "<div class='PC_window_loader'>Chargement en cours...</div>";
			var btn_ferme = "<div data-groupe='PC_window' class='PC_window_ferme PC_window_ferme_in' title='Fermer' data-role='PC_window_ferme'></div>";
			if(params.fermehide) {
				btn_ferme = "";
			}
			if(params.fermein == true) {				
				$("BODY").prepend("<div data-groupe='PC_window' class='PC_window_overlay'><div data-groupe='PC_window' class='PC_window_content'>"+btn_ferme+"<div data-groupe='PC_window' class='PC_window_content_in'>"+content+"</div></div></div>");
			}
			else {
				$("BODY").prepend(btn_ferme+"<div data-groupe='PC_window' class='PC_window_overlay'><div data-groupe='PC_window' class='PC_window_content'><div data-groupe='PC_window' class='PC_window_content_in'>"+content+"</div></div></div>");				
			}
			
			PC_window_popup_centre();
			
			$("*[data-role='PC_window_ferme'], *[data-groupe='PC_window']").off();	
			$("*[data-role='PC_window_ferme']").click(function() {
				PC_window_popup_ferme();
			});	
			$("*[data-groupe='PC_window']").click(function(e) {
				if(e.target.className == "PC_window_overlay" && params.fermeoverlay == true) {
					PC_window_popup_ferme();
				}
			});
			
			if(type == "html") {
				$(".PC_window_content_in").html(quoi);
				PC_window_popup_centre();
				params.callback.call(this);
			}
			if(type == "image") {
				var img = new Image();
				$(img).load(function() {
					var larg_max = $(".PC_window_content_in").css("max-width");
					$(".PC_window_content_in").html("<img src=\""+quoi+"\" border='0' style='max-width: "+larg_max+";' />");
					PC_window_popup_centre();
					params.callback.call(this);
				}).error(function() {
					alert("L'image demandée ne peut pas être chargée");
					PC_window_popup_ferme();
				}).attr('src', quoi);
			}
			if(type == "ajax") {
				$.get(quoi,function(data) { 
					$(".PC_window_content_in").html(data);
					PC_window_popup_centre();
					params.callback.call(this);
				});
			}
			PC_window_popup_centre();
		}
		function PC_window_popup_centre() {
			var hauteur_overflow = $(".PC_window_overlay").outerHeight();
			var largeur_overflow = $(".PC_window_overlay").outerWidth();
			var hauteur_content = $(".PC_window_content").outerHeight();
			var largeur_content = $(".PC_window_content").outerWidth();
			
			var anim = params.anim;
			
			var top = Math.round(hauteur_overflow / 2) - Math.round(hauteur_content / 2);
			if(top < 50) {
				top = 50;
			}	
			var left = Math.round(largeur_overflow / 2) - Math.round(largeur_content / 2);
			if(!anim) {
				$(".PC_window_content").css({
					"top": top,
					"left": left
				});
			}
			if(anim) {
				$(".PC_window_content").animate({
					"top": top,
					"left": left
				},500);
			}
		}
		
		function PC_window_popup_ferme() {
			$("BODY").css("overflow","auto");
			$("*[data-groupe='PC_window']").remove();
		}
					
        return this;
	};
})(jQuery);