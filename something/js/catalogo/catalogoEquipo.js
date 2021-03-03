function sugerirNombrePosicion(controlX, controlY, controlZ, posicion) {

    var x = document.getElementById(controlX).options[document.getElementById(controlX).selectedIndex].text;
    var y = document.getElementById(controlY).options[document.getElementById(controlY).selectedIndex].text;
    var z = document.getElementById(controlZ).options[document.getElementById(controlZ).selectedIndex].text;
    var textoPosicion="";

    if (x != "-seleccione-") {
        textoPosicion = textoPosicion + "-" + x;
    }
    if (y != "-seleccione-") {
        textoPosicion = textoPosicion + "-" + y;
    }
    if (z != "-seleccione-") {
        textoPosicion = textoPosicion + "-" + z;
    }
    
    document.getElementById(posicion).value = textoPosicion.substring(1);
}