function carga() {
    if (a_str_scmaux.postback) {
        window.scrollTo(0, a_str_scmaux.ypos); a_str_scmaux.postback = false;
    };
};
function devolucion() {
    document.getElementById("ypos").value = window.pageYOffset;
};
function volver() {
    if(!confirm('" & web.f_str_textoDesdeArchivoRecurso("res_mensajes", "deseaCancelar") & "')){return false;};
};