var toggle_flag = 0;
$(document).on("click", ".bti_recordatorio2", function() {
    var posicion = $(".bti_recordatorio2").position();
    var $panel = $(".panelNotificaciones");
    $panel.css({ "left": posicion.left + "px" });
    if (toggle_flag == 0) {
        $panel.slideDown();
        toggle_flag = 1;
    } else {
        $panel.slideUp();
        toggle_flag = 0;
    }
});
$(document).on("click", ".cerrarNotif", function() {
    $('.panelNotificaciones').slideUp("slow");
    toggle_flag = 0;
});
$(document).mouseup(function(e) {
    var container = $(".panelNotificaciones");
    var boton = $(".bti_recordatorio2");
    if (!container.is(e.target) && container.has(e.target).length === 0 && !boton.is(e.target)) {
        container.hide();
        toggle_flag = 0;
    }
});
