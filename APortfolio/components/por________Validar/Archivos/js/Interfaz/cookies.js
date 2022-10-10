function getCurrentPage() {
    var url = window.location.host + window.location.pathname;
    url = url.split("/",2).toString();
    url = url.replace(",","/").toString();
    return "http://" + url;
}

function setCookie() {
    var fecha = new Date();
    fecha.setTime(fecha.getTime() + (365 * 24 * 60 * 60 * 1000));
    document.cookie = "utilizarCookies=" + true + ";expires=" + fecha.toGMTString() + ";path=" + getCurrentPage();
    document.getElementById('cookies').setAttribute("class", "ocultarCookie");
}

function getCookie(cookieName) {
    var nombreCookie = cookieName + "=";
    var cookiesArray = decodeURIComponent(document.cookie).split(';');
    for(var i = 0; i < cookiesArray.length; i++) {
        var cookie = cookiesArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(nombreCookie) == 0) {
            return cookie.substring(nombreCookie.length, cookie.length);
        }
    }
    return "";
}

function checkUtilizarCookies() {
    var usarCookies = getCookie("utilizarCookies");
    if (usarCookies === "") {
        //document.getElementById('btn_aceptarUsoCookies').value = p_valorBoton;
    } else {
        document.getElementById('cookies').setAttribute("class", "ocultarCookie");
    }
}