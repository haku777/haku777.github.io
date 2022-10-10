var g_str_recargaFiltro;
function revelarComentario(a_int_comentarios, t_int_usrAct, t_str_fechaAct, t_str_recargaFiltro) {
    g_str_recargaFiltro = t_str_recargaFiltro;
    var tabla = a_int_comentarios.Table;
    var ids = bloquePrincipal(tabla);
    comentarios(tabla, ids, t_int_usrAct, t_str_fechaAct);
}

function bloquePrincipal(a_int_comentarios) {
    $("#caja_comentarios").empty();
    var url = window.location.host + window.location.pathname;
    url = url.split("/", 2).toString();
    url = url.replace(",", "/").toString();
    var bloque = ""
    var bloquesPadre = "";
    $.each(a_int_comentarios, function(key, value) {
        if (value.id_documentocomentario == 0) {
            bloque += "<section class='caja_comentarioG'>";
            bloque += "<div id='caja_comentariosCabecera_" + value.id + "' class='caja_comentariosCabecera'>";
            bloque += "<div class='grid' style='grid-template-columns: 4fr 2fr 0.25fr;'>";
            bloque += "<p class='grid' style='margin:auto;'><b>" + value.doc_documentocomentario_documentocomentario + value.cliente + "</b></p>";
            bloque += "<div>";
                if (value.docPadre != "") {
                    bloque += " <a href='http://" + url + "/forms/doc/doc_documento.aspx?id=" + value.id_docPadre + "'>" + value.docPadre + " ";
                }
                bloque += "<a href='http://" + url + "/forms/doc/doc_documento.aspx?id=" + value.id_doc + "'>" + value.doc + "</a>";
                bloque += "</div>";
                bloque += "<div class='grid' style='margin:auto;'><span class='btn_ocultar' style='display:none' id='btn_ocultar_" + value.id + "' onclick='ocultarContenido(" + value.id + ")'><i class='far fa-minus-square fa-2x'></i></span><span class='btn_ocultar' id='btn_mostrar_" + value.id + "' onclick='mostrarContenido(" + value.id + ")'><i class='far fa-plus-square fa-2x'></i><span></div>";
            bloque += "</div>";
            bloque += "</div>";
            bloque += "<div id='caja_comentariosCuerpo_" + value.id + "' class='caja_comentariosCuerpo'></div>";
            bloque += "</section>";
            
            bloquesPadre += value.id + "-";
        }
    });
    $("#caja_comentarios").append(bloque);
    return bloquesPadre;
}

function comentarios(a_int_comentarios, ids, t_int_usrAct, t_str_fechaAct) {
    var arrayId = ids.split("-");
    var caja_respuesta = "";
    for (var i = 0; i < arrayId.length; i++) {
        if (arrayId[i] != "") {
            //var bloque = "<div id='bloqueGrid'>";
            //console.log(a_int_comentarios);
            $.each(a_int_comentarios, function(key, value) {
                var a_str_recordarA = "";
                var bloque = "<div id='bloqueGrid'>";
                if (value.id_documentocomentario == arrayId[i] && value.id_documentosComentarios == 0) {
                    bloque += "<div style='padding: 5px;'>";
                    bloque += "<p style='over-flow:hidden;'><b>Creado por:</b> " + value.seg_usuario_nombre + "</p>";  // Resource
                    bloque += "<p><b>fecha: </b>" + value.fechaCreacion.split("T")[0] + " - " + value.fechaCreacion.split("T")[1].split(":")[0] + ":" + value.fechaCreacion.split("T")[1].split(":")[1] + "</p>";  // Resource
                    bloque += "<p class='pRecordar_" + arrayId[i] + "_" + value.id + "' id='lbl_recordarA_" + arrayId[i] + "_" + value.id + "'></p>";
                    consultarNombre(arrayId[i], value.id, value.id_usuario);
                    bloque += "<p class='fRecordar_" + arrayId[i] + "_" + value.id + "'><b>fecha: </b>" + value.fecha.split("T")[0] + " - " + value.fecha.split("T")[1].split(":")[0] + ":" + value.fecha.split("T")[1].split(":")[1] + "</p>";  // Resource
                    bloque += "<p class='txtSammComentario' style='white-space: nowrap;'><i class='fas fa-pen-square'></i> " + value.detalle.replace(/(<br>)*/g, ''); +"</p>"
                    bloque += "<div id='tool-box-comment'>";
                    bloque += "<span><i class='fas fa-paperclip fa-2x pointer' title='Archivos' onclick='cargarDocumento(" + value.id + ");'></i></span> ";
                    bloque += "<span><i class='fas fa-pencil-alt fa-2x pointer' title='Editar comentario' onclick='editarComentario(" + value.id + ");'></i></span> ";
                    if (value.conRespuesta == 0) {
                        bloque += "<span><i class='fas fa-sign-in-alt fa-2x pointer' title='Responder comentario' onclick='responderComentario(" + value.id + ");'></i></span> ";
                    }
                    bloque += "<span id='btnModal'><i class='fas fa-book fa-2x pointer'  name='historico' title='Historico' onclick='verHistorico(" + value.id + ");'></i></span> ";
                    bloque += "</div>";
                    bloque += "</div>";
                }
                else
                    if (value.id_documentocomentario == arrayId[i] && value.id_documentosComentarios > 0 && value.relevante == 1) {
                    bloque += "<section class='contenedorComentariosHijo'><div  id='caja_comentarioHijo_" + arrayId[i] + "_" + value.id + "' class='caja_comentarioHijo_" + arrayId[i] + " cajaHijo grid'>";
                    bloque += "<div>"
                    bloque += "<div id='caja_informacion_" + value.id + "' class='txtSammComentario grid' style='line-height:2px;font-size:1.0em;'>";
                    bloque += "<div>";
                    bloque += "<p><b>Creado por:</b> " + value.seg_usuario_nombre + "</p>";  // Resource
                    bloque += "<p><b>fecha: </b>" + value.fechaCreacion.split("T")[0] + " - " + value.fechaCreacion.split("T")[1].split(":")[0] + ":" + value.fechaCreacion.split("T")[1].split(":")[1] + "</p>";  // Resource
                    bloque += "</div>";
                    bloque += "<div>";
                    bloque += "<p class='pRecordar_" + arrayId[i] + "_" + value.id + "' id='lbl_recordarA_" + arrayId[i] + "_" + value.id + "'></p>";
                    consultarNombre(arrayId[i], value.id, value.id_usuario);
                    bloque += "<p class='fRecordar_" + arrayId[i] + "_" + value.id + "'><b>fecha: </b>" + value.fecha.split("T")[0] + " - " + value.fecha.split("T")[1].split(":")[0] + ":" + value.fecha.split("T")[1].split(":")[1] + "</p>";  // Resource
                    bloque += "</div>";
                    bloque += "</div>";
                    /* Campanas de estados */
                    bloque += "<div class='grid'>";
                    t_str_fechas = arreglarFechas(value.fecha, t_str_fechaAct.replace(" ", "T"));
                    var fecha_recordar = t_str_fechas["fecha_1"];
                    var hora_recordar = t_str_fechas["hora_1"].substr(0, 5);
                    var fecha_actual = t_str_fechas["fecha_2"];
                    var hora_actual = t_str_fechas["hora_2"].substr(0, 5);
                    fecha_actual = fecha_actual.replace("/", "-");
                    fecha_actual = fecha_actual.replace("/", "-");
                    fecha_actual = fecha_actual.split('-').reverse().join('-');
                    if (value.conRespuesta == 1 && value.cerrada == 1 && value.id_usuario > 0) {
                        bloque += "<img class='campanaEstado' title='Comentario respondido' src='../../images/iconos/campanaGris.png' />";
                    } else
                        if ((t_int_usrAct == value.id_usuario && t_int_usrAct == value.id_usuarioOriginal) || (t_int_usrAct == value.id_usuario && t_int_usrAct != value.id_usuarioOriginal)) {
                        if (new Date(fecha_recordar) > new Date(fecha_actual)) {
                            bloque += "<img class='campanaEstado' title='Recordatorio propio sin vencer' src='../../images/iconos/campanaNaranja.gif' />";
                        } else if (new Date(fecha_recordar) < new Date(fecha_actual)) {
                            bloque += "<img class='campanaEstado' title='Recordatorio propio vencido' src='../../images/iconos/campanaRoja.gif' />";
                        } else {
                            if (validarHora(hora_actual, hora_recordar)) {
                                bloque += "<img class='campanaEstado' title='Recordatorio propio sin vencer' src='../../images/iconos/campanaNaranja.gif' />";
                            } else {
                                bloque += "<img class='campanaEstado' title='Recordatorio propio vencido' src='../../images/iconos/campanaRoja.gif' />";
                            }
                        }
                    } else if (t_int_usrAct != value.id_usuario && t_int_usrAct != value.id_usuarioOriginal) {
                        if (new Date(fecha_recordar) > new Date(fecha_actual)) {
                            bloque += "<img class='campanaEstado' title='Comentario hecho por otro usuario para otra persona, sin vencer' src='../../images/iconos/campanaNaranja.png' />";
                        } else if (new Date(fecha_recordar) < new Date(fecha_actual)) {
                            bloque += "<img class='campanaEstado' title='Comentario hecho por otro usuario para otra persona, vencido' src='../../images/iconos/campanaRoja.png' />";
                        } else {
                            if (validarHora(hora_actual, hora_recordar)) {
                                bloque += "<img class='campanaEstado' title='Comentario hecho por otro usuario para otra persona, sin vencer' src='../../images/iconos/campanaNaranja.png' />";
                            } else {
                                bloque += "<img class='campanaEstado' title='Comentario hecho por otro usuario para otra persona, vencido' src='../../images/iconos/campanaRoja.png' />";
                            }
                        }
                    } else if (t_int_usrAct != value.id_usuario && t_int_usrAct == value.id_usuarioOriginal) {
                        if (new Date(fecha_recordar) > new Date(fecha_actual)) {
                            bloque += "<img class='campanaEstado' title='Comentario para otra persona hecho por mi sin vencer' src='../../images/iconos/campanaNaranjaCirculo.png' />";
                        } else if (new Date(fecha_recordar) < new Date(fecha_actual)) {
                            bloque += "<img class='campanaEstado' title='Comentario para otra persona hecho por mi vencido' src='../../images/iconos/campanaRojaCirculo.png' />";
                        } else {
                            if (validarHora(hora_actual, hora_recordar)) {
                                bloque += "<img class='campanaEstado' title='Comentario para otra persona hecho por mi sin vencer' src='../../images/iconos/campanaNaranjaCirculo.png' />";
                            } else {
                                bloque += "<img class='campanaEstado' title='Comentario para otra persona hecho por mi vencido' src='../../images/iconos/campanaRojaCirculo.png' />";
                            }
                        }
                    }
                    bloque += "</div>";
                    /* Fin Campanas de estados */
                    bloque += "</div>"
                    bloque += "<div class='' style='display:block;'>"
                    bloque += "<div style='width:40%;display:inline-block;'><p class='txtSammComentario'><i class='fas fa-sign-out-alt'></i> " + value.detalle + "</p></div>"


                    bloque += "<div id='tool-box-comment' style='width:40%;display:inline-block;float: right;color:#28679D; text-align:right;' class=''>";
                    bloque += "<span><i class='fas fa-paperclip fa-2x pointer' title='Archivos' onclick='cargarDocumento(" + value.id + ");'></i></span> ";
                    bloque += "<span><i class='fas fa-pencil-alt fa-2x pointer' title='Editar comentario' onclick='editarComentario(" + value.id + ");'></i></span> ";
                    if (value.conRespuesta == 0) {
                        bloque += "<span><i class='fas fa-sign-in-alt fa-2x pointer' title='Responder comentario' onclick='responderComentario(" + value.id + ");'></i></span> ";
                    }
                    bloque += "</div>";
                    bloque += "</div>";
                    if (value.conRespuesta == 0) {
                        caja_respuesta += "#caja_comentarioHijo_" + arrayId[i] + "_" + value.id + "//";
                        bloque += "<div class='grid'><textarea class='form-control textbox_comentario' id='txt_" + arrayId[i] + "' style=' resize: vertical; '></textarea></div>";
                        bloque += "<button type='submit' class='btn-primary' id='btn_" + arrayId[i] + "' onclick='respuestaRapida(" + arrayId[i] + ")'>Enviar</button>";
                    }
                    bloque += "</div>"
                    bloque += "</section>"
                }
            });
            bloque += "</div>";
            $("#caja_comentariosCuerpo_" + arrayId[i]).append(bloque);
        }
    }
     
    var arrayTexto = caja_respuesta.split("//");
    for (var i = 0; i < arrayTexto.length; i++) {
        var idAct = "";
        var controles = "";
        console.log(arrayTexto[i]);
        if (arrayTexto[i] != "") {
            var id = arrayTexto[i].split("_");
            if (arrayTexto[i].includes("Padre")) {
                idAct = id[id.length - 1];
                
                controles = "<div class='grid' style='padding:10px 0px;'><textarea class='form-control textbox_comentario' placeholder='Ingrese respuesta a comentario' id='txt_" + idAct + "' style=' resize: vertical; '></textarea>"
                controles += "<div style='display:block; text-align:right; margin:5px 0px;'><button type='submit' class='btn-primary' id='btn_" + idAct + "' onclick='respuestaRapida(" + idAct + ")'>Enviar</button></div></div>"
            } else if (arrayTexto[i].includes("Hijo")) {
                idAct = id[id.length - 1];
                
                controles = "<div class='grid' style='padding:10px 0px;'><textarea class='form-control textbox_comentario' placeholder='Ingrese respuesta a comentario' id='txt_" + idAct + "' style=' resize: vertical; '></textarea>"
                controles += "<div style='display:block; text-align:right; margin:5px 0px;'><button type='submit' class='btn-primary' id='btn_" + idAct + "' onclick='respuestaRapida(" + idAct + ")'>Enviar</button></div></div>"
            }
            
            $(arrayTexto[i]).append(controles);
        }
    }
}

function get_consultaNoPag(filtro, campos, tabla, pagina, orden, tablaCompleja) {
    var url = window.location.host + window.location.pathname;
    url = url.split("/", 2).toString();
    url = url.replace(",", "/").toString();

    return $.ajax({
        method: "POST",
        url: "http://" + url + "/servicios/cli/ws_requestData.asmx/consultarBaseDatosNoPag",
        data: "p_str_filtro=" + filtro + "&p_str_orden=" + orden + "&p_str_campos=" + campos + "&p_str_tabla=" + tabla + "&p_int_pagina=" + pagina + "&p_str_tablaCompleja=" + tablaCompleja
    }).done(function(data) {
    }).fail(function(data) {
        console.log("Fallo al consumir | data: " + data + " | js/Documento/EstadoDocumentos.js/get_consulta");
    });
}

function consultarNombre(caja,id,consulta) {
    var a_str_recordarA="";
    get_consultaNoPag("id=" + consulta, "nombre", "seg_usuario", 0, "", "", "").done(function(data) {
        var html_botones = "";
        var dataIni = data;
        data = JSON.parse(jQuery(data).text());
        $.each(data.Table, function(key, value) {
            if (value.nombre != "") {
                if (value.nombre != null) {
                    $("#lbl_recordarA_" + caja + "_" + id).html("<b>Recordar a: </b>" + value.nombre);  // Resource
                } else {
                    $(".pRecordar_" + caja + "_" + id + "").css("display", "none");
                    $(".fRecordar_" + caja + "_" + id + "").css("display", "none");
                }
            }
        });
    }); 
}

function mostrarContenido(id) {
    $(".caja_comentarioHijo_" + id).fadeIn("slow");
    $("#btn_mostrar_" + id).css("display", "none");
    $("#btn_ocultar_" + id).css("display", "block");
    $("#caja_btn_" + id).css("display", "block");
    $("#bloqueGrid").addClass("bloqueGrid");
}

function ocultarContenido(id) {
    $(".caja_comentarioHijo_" + id).fadeOut("slow");
    $("#btn_mostrar_" + id).css("display", "block");
    $("#btn_ocultar_" + id).css("display", "none");
    $("#caja_btn_" + id).css("display", "none");
    $("#bloqueGrid").removeClass("bloqueGrid");
}

function cargarDocumento(id) {
    var url = window.location.host + window.location.pathname;
    url = url.split("/", 2).toString();
    url = url.replace(",", "/").toString();
    var urlCargar = "http://" + url + "/forms/general/formNuevo.aspx?nc=-&t=arc&tab=doc_documentoComentario&id=" + id
    window.open(urlCargar, "_blank", "toolbar=no,scrollbars=no,resizable=0,top=500,left=500,width=400,height=460");
}

function editarComentario(id) {
    var url = window.location.host + window.location.pathname;
    url = url.split("/", 2).toString();
    url = url.replace(",", "/").toString();
    var urlCargar = "http://" + url + "/forms/general/formNuevo.aspx?nc=doc_documentoComentario&id=" + id
    window.open(urlCargar, "_blank", "toolbar=no,scrollbars=no,resizable=0,top=500,left=500,width=400,height=460");
}

function responderComentario(id) {
    var url = window.location.host + window.location.pathname;
    url = url.split("/", 2).toString();
    url = url.replace(",", "/").toString();
    var urlCargar = "http://" + url + "/forms/general/formNuevo.aspx?nc=doc_responderConversacion&d=" + id
    window.open(urlCargar, "_blank", "toolbar=no,scrollbars=no,resizable=0,top=500,left=500,width=400,height=460");
}

function verHistorico(id) {
    console.log(asignarRecursos("historialComentario", "res_etiquetas_doc"));
    var a_str_Historico = "";
    get_consultaNoPag("id_documentoComentario=" + id + " and relevante = 0 and active= 1", "", "doc_documentoComentario", 0, "", "", "").done(function(data) {
        var html_botones = "";
        var dataIni = data;
        data = JSON.parse(jQuery(data).text());
        console.log(data);
        $("#tbl_historico").empty();
        a_str_Historico = "<tr>";
        a_str_Historico += "<th>Documento Comentario</th>";  // Resource
        a_str_Historico += "<th>Comentario</th>";  // Resource
        a_str_Historico += "<th>Fecha</th>";  // Resource
        a_str_Historico += "<th>Nombre</th>";  // Resource
        a_str_Historico += "<th>Fecha a Recordar</th>";  // Resource
        a_str_Historico += "<th>Usuario</th>";  // Resource
        a_str_Historico += "<th></th>";
        a_str_Historico += "</tr>";
        $.each(data.Table, function(key, value) {
            a_str_Historico += "<tr>";
            a_str_Historico += "<td>" + value.documentoComentario + "</td>";
            a_str_Historico += "<td>" + value.comentario + "</td>";
            a_str_Historico += "<td>" + value.comentario + "</td>";
            a_str_Historico += "<td>" + value.comentario + "</td>";
            a_str_Historico += "<td>" + value.comentario + "</td>";
            a_str_Historico += "<td>" + value.comentario + "</td>";
            a_str_Historico += "<td><button class='btn-primary'>Enviar Consulta</button></td>"; // Resource
            a_str_Historico += "</tr>";
        });
        $("#tbl_historico").html(a_str_Historico);
        cajahistorico.style.display = "block";
    });
}

//window.onclick = function(event) {
//        if (event.target == cajahistorico) {
//            cajahistorico.style.display = "none";
//        } else if (event.target == cerrarModal) {
//            cajahistorico.style.display = "none";
//        }
//}
function asignarRecursos(p_str_archivoRecurso, p_str_tabla) {
    var url = window.location.host + window.location.pathname;
    url = url.split("/", 2).toString();
    url = url.replace(",", "/").toString();

    return $.ajax({
        async: false,
        method: "POST",
        url: "http://" + url + "/servicios/cli/ws_requestData.asmx/capturarRecursosGrilla",
        data: "p_nombre_columna=" + p_str_archivoRecurso + "&p_nombre_tabla=" + p_str_tabla
    }).done(function(data) {
        alert(data.Table);
    }).fail(function(data) {
        alert("No Consumido: js/Correo/grilla.js/generarEstilosTitulos");
    });
}

function arreglarFechas(f1, f2) {
    var fecha = new Object();
    fecha['fecha_1'] = f1.split("T")[0];
    fecha['hora_1'] = f1.split("T")[1];
    fecha['fecha_2'] = f2.split("T")[0];
    fecha['hora_2'] = f2.split("T")[1];
    return fecha;
}

function validarHora(horaActual, horaRecordar) {
    var estado = false;
    var hAct = horaActual.split(":");
    var hRec = horaRecordar.split(":");
    if (hAct[0] < hRec[0]) {
        estado = true;
    } else if (hAct[0] > hRec[0]) {
        estado = false;
    } else if (hAct[1] < hRec[1]) {
        estado = true;
    } else if (hAct[1] > hRec[1]) {
        estado = false;
    }
    return estado;
}

function respuestaRapida(t_str_id) {
    //g_str_recargaFiltro
    var p_str_comentario = $("#txt_" + t_str_id).val();
    var p_bool_finalizar = false;
    var url = window.location.host + window.location.pathname;
    url = url.split("/", 2).toString();
    url = url.replace(",", "/").toString();

    return $.ajax({
        method: "POST",
        url: "http://" + url + "/servicios/cli/ws_requestData.asmx/comentarioRapido",
        data: "p_int_id=" + t_str_id + "&p_str_comentario=" + p_str_comentario + "&p_bol_finaliza=" + p_bool_finalizar + "&p_str_recargaFiltro=" + g_str_recargaFiltro
    }).done(function(data) {
    alert(data.Table);
    }).fail(function(data) {
    console.log("Fallo al consumir | data: " + data + " | js/Documento/comentarios.js/respuestaRapida");
    });
}
function habilitarBusqueda() {
    if ($(".contenidoBusqueda").css("display") == "block") {
        $(".contenidoBusqueda").css("display", "none");
    } else {
        $(".contenidoBusqueda").css("display", "block");
    }
}

//$(document).ready(function() {
//    $(".img_busqueda").click(function() {
//        var estado = $(".contenidoBusqueda").css("display");
//    });
//});