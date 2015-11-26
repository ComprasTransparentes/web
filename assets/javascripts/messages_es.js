(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "../jquery.validate"], factory );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ES (Spanish; Español)
 */
$.extend($.validator.messages, {
	required: "<span class='fa fa-exclamation-triangle'></span> Este campo es obligatorio.",
	remote: "<span class='fa fa-exclamation-triangle'></span> Por favor, rellena este campo.",
	email: "<span class='fa fa-exclamation-triangle'></span> Por favor, escribe una dirección de correo válida.",
	url: "<span class='fa fa-exclamation-triangle'></span> Por favor, escribe una URL válida.",
	date: "<span class='fa fa-exclamation-triangle'></span> Por favor, escribe una fecha válida.",
	dateISO: "<span class='fa fa-exclamation-triangle'></span> Por favor, escribe una fecha (ISO) válida.",
	number: "<span class='fa fa-exclamation-triangle'></span> Por favor, escribe un número válido.",
	digits: "<span class='fa fa-exclamation-triangle'></span> Por favor, escribe sólo dígitos.",
	creditcard: "<span class='fa fa-exclamation-triangle'></span> Por favor, escribe un número de tarjeta válido.",
	equalTo: "<span class='fa fa-exclamation-triangle'></span> Por favor, escribe el mismo valor de nuevo.",
	extension: "<span class='fa fa-exclamation-triangle'></span> Por favor, escribe un valor con una extensión aceptada.",
	maxlength: $.validator.format("<span class='fa fa-exclamation-triangle'></span> Por favor, no escribas más de {0} caracteres."),
	minlength: $.validator.format("<span class='fa fa-exclamation-triangle'></span> Por favor, no escribas menos de {0} caracteres."),
	rangelength: $.validator.format("<span class='fa fa-exclamation-triangle'></span> Por favor, escribe un valor entre {0} y {1} caracteres."),
	range: $.validator.format("<span class='fa fa-exclamation-triangle'></span> Por favor, escribe un valor entre {0} y {1}."),
	max: $.validator.format("<span class='fa fa-exclamation-triangle'></span> Por favor, escribe un valor menor o igual a {0}."),
	min: $.validator.format("<span class='fa fa-exclamation-triangle'></span> Por favor, escribe un valor mayor o igual a {0}."),
	nifES: "<span class='fa fa-exclamation-triangle'></span> Por favor, escribe un NIF válido.",
	nieES: "<span class='fa fa-exclamation-triangle'></span> Por favor, escribe un NIE válido.",
	cifES: "<span class='fa fa-exclamation-triangle'></span> Por favor, escribe un CIF válido."
});

}));