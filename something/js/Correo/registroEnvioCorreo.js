function inicializar(){
//    consumirEnviarCorreoAlquileres(1, "#grl_registroEnvioCorreo");
    get_recursos("res_etiquetas_gen", "gen_correosFaltantes", "#btn_reintentarEnvioCorreo", 1);
    get_recursos("res_etiquetas_gen", "gen_registroEnvioIntentos", "#grl_intentosRegistroEnvio", 2);
    get_recursos("res_etiquetas_gen", "gen_detallesRegistroEnvio", "#grl_detalleIntentosRegistroEnvio", 2);
    listarRegistrosIniciales(0);
}

function listarRegistrosIniciales(pagina){
    var camposI = "id, fechaCreacion, fechaModificacion, registroEnvio, tabla, reintentar, id_envioCorreo, REPLACE(REPLACE(gen_envioCorreo_envioCorreo,'[',''),']','') as gen_envioCorreo_envioCorreo,gen_envioCorreo_envioCorreo_codigo,id_registroEnvio";//,emailFaltante";
    var filtroI = "active = 1 and id_registroEnvio = 0";
    var tablaCompleja = "declare @tablaCompleja table (id int, fechaCreacion smalldatetime, fechaModificacion datetime, registroEnvio varchar(300), tabla varchar(200), reintentar bit, id_envioCorreo int, gen_envioCorreo_envioCorreo varchar(405), emailFaltante int, id_registroEnvio int);insert into @tablaCompleja SELECT view_gen_registroEnvio.id as id, view_gen_registroEnvio.fechaCreacion as fechaCreacion, view_gen_registroEnvio.fechaModificacion as fechaModificacion, view_gen_registroEnvio.registroEnvio as registroEnvio, view_gen_registroEnvio.tabla as tabla, view_gen_registroEnvio.reintentar as reintentar, view_gen_registroEnvio.id_envioCorreo as id_envioCorreo, view_gen_registroEnvio.gen_envioCorreo_envioCorreo as gen_envioCorreo_envioCorreo, COUNT(enviado) as emailFaltante, view_gen_registroEnvio.id_registroEnvio as id_registroEnvio FROM view_gen_registroEnvio left JOIN gen_detalleRegistroEnvio ON view_gen_registroEnvio.id = gen_detalleRegistroEnvio.id_registroEnvio where view_gen_registroEnvio.active = 1 and enviado = 0 and enviar = 1 group by view_gen_registroEnvio.id, view_gen_registroEnvio.fechaCreacion, view_gen_registroEnvio.fechaModificacion, view_gen_registroEnvio.registroEnvio, view_gen_registroEnvio.tabla, view_gen_registroEnvio.reintentar, view_gen_registroEnvio.id_envioCorreo, view_gen_registroEnvio.gen_envioCorreo_envioCorreo, view_gen_registroEnvio.id_registroEnvio;";
    listarRegistrosEnvio("tbl_inicialRegistros", camposI, filtroI, "gen_registroEnvio", pagina, "", "id desc", "");
}

function listarIntentos(id_registroEnvio, pagina){
    $("#VisualizadorIntentosRegistrosEnvio").show().addClass('animated fadeInRight');
    $("#VisualizarRegistrosEnvios").hide().removeClass('animated fadeInRight');

    var campos = "id, fechaCreacion, fechaModificacion, registroEnvio, reintentar, id_registroEnvio";
    var filtro = "active = 1 and (id = " +  id_registroEnvio + " and id_registroEnvio = 0) or id_registroEnvio = " +  id_registroEnvio;
    var tabla = "gen_registroEnvio";
    listarRegistrosEnvio("tbl_intentos", campos, filtro, tabla, pagina,id_registroEnvio, "", "");
}

function listarDetalles(id_registroEnvio, pagina){
    $("#mod_tbl_detalle_envioCorreo").show(); 
    //$("#VisualizadorIntentosRegistrosEnvio").show().addClass('animated fadeInRight');
    //$("#tbl_visualizar_intentos > tbody ").children().remove();
    
    var campos = "id, fechaModificacion, fechaCreacion, detalleRegistroEnvio, email, enviado, enviar, idObjeto ";
    var filtro = "active = 1 and id_registroEnvio = " +  id_registroEnvio;
    var tabla = "gen_detalleRegistroEnvio";
    listarRegistrosEnvio("tbl_intentosDetalles", campos, filtro, tabla, pagina,id_registroEnvio, "idObjeto", "");
}

function listarRegistrosEnvio(tbl,campos,filtro,tabla,pagina,id_registroEnvio,orden,tablaCompleja){
    get_consulta(filtro,campos,tabla, pagina, orden, tablaCompleja).done(function(data){
        var dataIni = data;
        data = JSON.parse(jQuery(data).text());
        dataBtn = data.Table;
        html_botones_registroEnvioCorreo = "";
        html_info_ejecucionEnvioCorreo = "";
        
        if (tbl === "tbl_inicialRegistros"){
        //consumirEnviarCorreoAlquileres(1, "#grl_registroEnvioCorreo");
            var nuevaTabla = "";
            operarRegistrosCorreo(jQuery(dataIni).text()).done(function(dataNueva){
                nuevaTabla = jQuery(dataNueva).text();
            });
            data = JSON.parse(nuevaTabla);
            dataBtn = data.Table;
            for(var i = 0; i < dataBtn.length; i++){
                if(dataBtn[i].gen_envioCorreo_envioCorreo_codigo.substring(0, 2) === "7_") {
                    html_botones_registroEnvioCorreo += "<button class='btn btn-xs pull-right btn_correos_intentosEnvioCorreo' type='button' style='display:block;' onclick='listarIntentos(" + dataBtn[i].id + ",0)'><i class='fa fa-plus btn_intentosEnvioCorreo'></i></button>" + "<br/>";
                } else {
                    html_botones_registroEnvioCorreo += "<button class='btn btn-xs pull-right btn_correos_intentosEnvioCorreo' type='button' style='display:block;' onclick='listarDetalles(" + dataBtn[i].id + ",0)'><i class='fa fa-plus btn_intentosEnvioCorreo'></i></button>" + "<br/>";
                }
            } 
            var funcion = "listarRegistrosIniciales(";
            $("#grillaRegistrosIniciales").html(construirFormato(data,pagina,funcion, filtro,campos,tabla,html_botones_registroEnvioCorreo,"grillaRegistrosIniciales",false,tablaCompleja));
            //alert("finally");
            consumirEnviarCorreoAlquileres(1, "#grl_registroEnvioCorreo");
            $('#tbl_visualizar_grilla_grillaRegistrosIniciales').DataTable();
            
          
        } else if (tbl === "tbl_intentos"){                  
            for(var i = 0; i < dataBtn.length; i++){
                html_botones_registroEnvioCorreo += "<button class='btn btn-xs pull-right btn_correos_intentosEnvioCorreo' type='button' style='display:block;' onclick='listarDetalles(" + dataBtn[i].id + ",0)'><i class='fa fa-plus btn_intentosEnvioCorreo'></i></button>" + "<br/>";
            } 
            var funcion = "listarIntentos(" + id_registroEnvio + ",";
            $("#grillaRegistrosIntentos").html(construirFormato(data,pagina,funcion, filtro,campos,tabla,html_botones_registroEnvioCorreo,"grillaRegistrosIntentos",false,tablaCompleja));
        
        } else if (tbl === "tbl_intentosDetalles"){ 
            var funcion = "listarDetalles(" + id_registroEnvio + ",";
            $("#grillaPOPDetalles").html(construirFormato(data,pagina,funcion, filtro,campos,tabla,"","grillaPOPDetalles",true,tablaCompleja));
        }
    });
}

function get_consulta(filtro,campos,tabla, pagina, orden, tablaCompleja) {
    var url = window.location.host + window.location.pathname;
    url = url.split("/",2).toString();
    url = url.replace(",","/").toString();
    
    return $.ajax({
               method: "POST",
               url: "http://" + url + "/servicios/cli/registroEnvio.asmx/consultarBaseDatos",
               data: "p_str_filtro=" + filtro + "&p_str_orden=" + orden + "&p_str_campos=" + campos + "&p_str_tabla=" + tabla + "&p_int_pagina=" + pagina + "&p_str_tablaCompleja=" + tablaCompleja
           }).done(function (data) {
              //alert(data);
           }).fail(function (data) {
             alert("Fallo al consumir | data: " + data + " | js/Correo/registroEnvioCorreo.js/get_consulta");
           });
}

function get_recursos(p_archivoRecurso, p_recurso, p_html, p_tipoElemento) {
    var url = window.location.host + window.location.pathname;
    url = url.split("/",2).toString();
    url = url.replace(",","/").toString();
    
    $.ajax({
        method: "POST",
        url: "http://" + url + "/servicios/cli/registroEnvio.asmx/capturarRecursos",
        data: "p_str_archivoRecurso=" + p_archivoRecurso + "&p_str_recurso=" + p_recurso
    }).done(function (data) {
        if (p_tipoElemento === 1)  {//Elemento en línea
            $(p_html).val(jQuery(data).text());
        } else if (p_tipoElemento === 2) {//Elemento en bloque
            $(p_html).html(jQuery(data).text());
        }
    }).fail(function (data) {
        if (p_tipoElemento === 1)  {//Elemento en línea
            $(p_html).val("js/Correo/registroEnvioCorreo.js/get_recursos | data: " + data);
        } else if (p_tipoElemento === 2) {//Elemento en bloque
            $(p_html).html("js/Correo/registroEnvioCorreo.js/get_recursos | data: " + data);
        }
    });
}

$(document).ready(function(){
    $(".cerrar_modal_detalle_envioCorreo").click(function(){
        $("#mod_tbl_detalle_envioCorreo").hide().addClass('animated fadeInRight');
    });
    
    $(".cerrarVentanita").click(function(){
        $("#VisualizadorIntentosRegistrosEnvio").hide().addClass('animated fadeInRight');
        $("#VisualizarRegistrosEnvios").show().addClass('animated fadeInRight');    
    });
}); 

function consumirEnviarCorreoAlquileres(p_tipoPeticion, p_html) {
    var url = window.location.host + window.location.pathname;
    url = url.split("/",2).toString();
    url = url.replace(",","/").toString();
    
    $.ajax({
        method: "POST",
        url: "http://" + url + "/servicios/cli/envioCorreo.asmx/enviarCorreoAlquileres",
        data: "p_str_tipoPeticion=" + p_tipoPeticion
    }).done(function (data) {
        var a_resp = jQuery(data).text();
        if(p_tipoPeticion === 1){ 
            data = JSON.parse(jQuery(data).text());
            dataBtn = data.Table;
            if (dataBtn[0].estaEnviando === "True"){
                $('#btn_reintentarEnvioCorreo').attr("disabled", true);
                $('#btn_reintentarEnvioCorreo').attr("disabled");
            } else {
                $('#btn_reintentarEnvioCorreo').removeAttr("disabled");
            }
            $(p_html).html(dataBtn[0].mensaje);
        }
    }).fail(function (data) {
        alert("No Consumido: js/Correo/registroEnvioCorreo.js/consumirEnviarCorreoAlquileres");
    });
}

function operarRegistrosCorreo(p_tabla) {
    var url = window.location.host + window.location.pathname;
    url = url.split("/",2).toString();
    url = url.replace(",","/").toString();
    
    return $.ajax({
                method: "POST",
                async:false,
                url: "http://" + url + "/servicios/cli/envioCorreo.asmx/calcularCorreosFaltantes",
                data: "p_str_tabla=" + p_tabla
            }).done(function (data) {
        
            }).fail(function (data) {
                alert("envioCorreo No Consumido: js/Correo/registroEnvioCorreo.js/operarRegistrosCorreo");
            });
}

function reintentarEnvio() {
    var url = window.location.host + window.location.pathname;
    url = url.split("/",2).toString();
    url = url.replace(",","/").toString();
    
    return $.ajax({
                method: "POST",
                url: "http://" + url + "/servicios/cli/envioCorreo.asmx/enviarCorreoAlquileres",
                data: "p_str_tipoPeticion=2-0"
            }).done(function (data) {
                //alert("reintento correo provocado");
            }).fail(function (data) {
                alert("envioCorreo No Consumido: js/Correo/registroEnvioCorreo.js/reintentarEnvio");
            });
}