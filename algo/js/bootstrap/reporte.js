
$(document).ready(function() {
    $('.validecimal').bind('contextmenu', function(e) {
        return false;
    });
    $('.validecimal').keyup(function() {
        var a_str_cadena = this.value;
        a_str_cadena = a_str_cadena.replace(".", ",");
        a_str_cadena = (a_str_cadena).replace(/[-+]?([^0-9,-]*\.[^0-9,-]+|[^0-9,-]+)/, '');
        a_str_cadena = a_str_cadena.replace(/,{2,}/, "");
        if (a_str_cadena.startsWith(",")) {
            var a_str_cadena = a_str_cadena.split(",");
            a_str_cadena = a_str_cadena[1];
        }
        if (a_str_cadena.endsWith(",")) {
            if (a_str_cadena.split(",").length > 2) {
                a_str_cadena = a_str_cadena.substring(0, a_str_cadena.length - 1);
            }
        }

        this.value = a_str_cadena;
    });
    $(".form_datetime").keypress(function() {
        return false;
    });
    $('.time').clockpicker({
        donetext: "Seleccionar",
        align: "left",
        autoclose: true
    });
    $('.time').keyup(function() {
        var a_str_cadena = this.value;
        if (a_str_cadena[3] == ":") {
            a_str_cadena = this.value.substring(0, 1)
        } else
            if (a_str_cadena.length == 2 && a_str_cadena[1] == ":") {
            a_str_cadena = "0" + a_str_cadena;
        } else
            if (a_str_cadena.length == 2) {
            a_str_cadena = a_str_cadena + ":";
        } else if (a_str_cadena.length > 5) {
            a_str_cadena = a_str_cadena.substring(0, 4);
        }
        this.value = a_str_cadena;
    })
    
});
$(".form_datetime").datetimepicker({
    language:'es',
    pickTime: true,
    pickDate:false,
    minView: 2,
    format: 'dd/mm/yyyy',
    todayBtn: true,
    todayHighlight:true,
    autoclose: true,
});


$(document).ready(function(){
    $('[data-toggle="popover"]').popover({ html : true });
});

function validateHhMm(Hora) {
    var esValido = /^(10|11|12|13|14|15|16|17|18|19|20|21|22|23|0?[0-9]):[0-5][0-9]$/.test(Hora.value);
    if (esValido) {
        
    } else {
        Hora.value = "00:00"
    }
    return esValido;
}


// Textos de recomendacion para txt_trabajos
var toggle_flag_tra = 0;
    $('#txt_defecto').on('click',function(){
        var posicion = $(".icon-def").position();
        var $panel = $(".div_defecto");
        $panel.css({ "left": (posicion.left-50) + "px" });
        if (toggle_flag_tra == 0) {
            $panel.fadeIn();
            toggle_flag_tra = 1;
        } else {
            $panel.fadeOut();
            toggle_flag_tra = 0;
        }
});

$(document).mouseup(function(e) {
    var container = $(".div_defecto");
    var boton = $(".div_defectoSec");
    if (!container.is(e.target) && container.has(e.target).length === 0 && !boton.is(e.target)) {
        container.hide();
        toggle_flag = 0;
    }
    var container = $(".div_defectoCom");
    var boton = $(".div_defectoCom");
    if (!container.is(e.target) && container.has(e.target).length === 0 && !boton.is(e.target)) {
        container.hide();
        toggle_flag = 0;
    }
    
    var container = $(".div_defectoRec");
    var boton = $(".div_defectoRec");
    if (!container.is(e.target) && container.has(e.target).length === 0 && !boton.is(e.target)) {
        container.hide();
        toggle_flag = 0;
    }
});

// Textos de recomendacion para txt_compromisos
var toggle_flag_com = 0;
$('#txt_defectoCom').on('click',function(){
        var posicion = $(".icon-def").position();
        var $panel = $(".div_defectoCom");
        $panel.css({ "left": (posicion.left-50) + "px" });
        if (toggle_flag_com == 0) {
            $panel.fadeIn();
            toggle_flag_com = 1;
        } else {
            $panel.fadeOut();
            toggle_flag_com = 0;
        }
});



// Textos de recomendacion para txt_recomendaciones
var toggle_flag_com = 0;
$('#txt_defectoRec').on('click',function(){
        var posicion = $(".icon-def").position();
        var $panel = $(".div_defectoRec");
        $panel.css({ "left": (posicion.left-50) + "px" });
        if (toggle_flag_com == 0) {
            $panel.fadeIn();
            toggle_flag_com = 1;
        } else {
            $panel.fadeOut();
            toggle_flag_com = 0;
        }
});