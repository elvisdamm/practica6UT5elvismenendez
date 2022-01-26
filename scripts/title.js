
var cuenta = 0;
var texto = " Diseño Interfaces Web ";
function scrolltexto() {
    document.title = texto.substring(cuenta, texto.length) + texto.substring(0, cuenta);
    if (cuenta < texto.length) { cuenta++ } else { cuenta = 0 }
    setTimeout("scrolltexto()", 150);
}
scrolltexto();
