function construirFormato(data,pagina,funcion,filtro,campos,tabla,adicional,ul,pop,tablaCompleja){
    var style = "";
    if (pop === true){
        style = "height: 400px; overflow-y: scroll;";
    }
    //'<div class="input-group" style="padding-top: 0.5%; padding-left: 1%; padding-right: 1%;">'+
        //                '<input type="text" placeholder="Buscar hitos" id="busquedamultiple" class="input form-control input-search-dt">'+
      //                  '<span class="input-group-btn">'+
    //                        '<button type="button" class="btn btn btn-primary"> <i class="fa fa-search"></i> Buscar</button>'+
  //                      '</span>'+
//                     '</div>'+
                     
    var htmlGrilla = '<div id="dv_visualizarGrilla" class="" style="' + style + '">' +
                        '<table class="table table-striped" id="tbl_visualizar_grilla_' + ul + '">'+
                            '<style>.selected td{ background-color: #1c84c6; color: White;}</style>'+
                            '<thead>' + generarTitulosColumna(data,tabla) + '</thead>'+
                            '<tbody>' + crearGrilla(data,adicional) + '</tbody>'+
                        '</table>'+
                     '</div>'+
                     '<div id="dv_visualizarGrillaPag" style="text-align: center;" class="">' +
                        '<ul id="pag_' + ul + '" class="pagination"></ul>' +
                     '</div>';
                     
    get_consulta(filtro,campos,tabla, -1, "",tablaCompleja).done(function(respuesta){
        document.getElementById("pag_" + ul).innerHTML = paginacion(data,pagina,funcion,jQuery(respuesta).text());   
    });
    return htmlGrilla;
}

function generarTitulosColumna(p_data, p_tabla){
    var tabla = "<tr>";
    for(var a_column = 0; a_column < Object.keys(p_data["Table"][0]).length; a_column++){
        generarEstilosTitulos(Object.keys(p_data["Table"][0])[a_column], p_tabla).done(function(data){
            var a_titulo = jQuery(data).text();
          //  if (a_titulo !== ""){
                tabla += "<th>" + a_titulo + "</th>";
            //}
        });
    }
    return tabla + "</tr>";
}

function generarEstilosTitulos(p_columna, p_tabla){

    var url = window.location.host + window.location.pathname;
    url = url.split("/",2).toString();
    url = url.replace(",","/").toString();
    
    return $.ajax({
               async:false,
               method: "POST",
               url: "http://" + url + "/servicios/cli/registroEnvio.asmx/capturarRecursosGrilla",
               data: "p_nombre_columna=" + p_columna + "&p_nombre_tabla=" + p_tabla
           }).done(function (data) {
              //alert(data);
           }).fail(function (data) {
              alert("No Consumido: js/Correo/grilla.js/generarEstilosTitulos");
           });
}

function crearGrilla(p_data,p_adicional){
    var html_botones_ocultos_contactos ="";
        var td_tabla_registrosEnvios = "";
        var html_botones_registroEnvioCorreo ="";
        var html_tbl_registroEnvios = "";
        
        var data = p_data;
        data = data.Table;
                
        var tabla = "";
        var columnaAdicional = "";
        
        for(var a_obj = 0; a_obj < data.length; a_obj++){
            tabla += "<tr id='dtl" + data[a_obj].id + "' class='tr_tabla_contactos'>";
            for(var a_column = 0; a_column < Object.keys(p_data["Table"][0]).length; a_column++){
                //alert(data[a_obj][Object.keys(p_data["Table"][0])[a_column]]);
                tabla += "<td>" + determinarFormato(data[a_obj][Object.keys(p_data["Table"][0])[a_column]], Object.keys(p_data["Table"][0])[a_column]) + "</td>";
            }
            if (p_adicional !== ""){
                columnaAdicional = "<td>" + p_adicional.split("<br/>")[a_obj] + "</td>";
            }
            tabla += columnaAdicional + "</tr>";
        }
        return tabla;
}

function determinarFormato(p_valor, p_nombreColumna){
    var a_tipoVariable = typeof (p_valor);
    
    switch (a_tipoVariable) {
        case "number":
            if (p_valor - Math.floor(p_valor) == 0) {
                //alert ("Es un numero entero");
                //https://www.w3schools.com/code/tryit.asp?filename=FJT1TOILIVMU
            }
            else{
                //alert ("Es un numero decimal");
            }
            break;
        case "string":
            if ((p_valor.substring(4, 5) === "-" && p_valor.substring(7, 8) === "-" && p_valor.substring(10, 11) === "T" && p_valor.substring(13, 14) === ":" && p_valor.substring(16, 17) === ":" && p_valor.substring(19, 20) === "-" && p_valor.substring(22, 23) === ":")  || (p_valor.substring(4, 5) === "-" && p_valor.substring(7, 8) === "-" && p_valor.substring(10, 11) === "T" && p_valor.substring(13, 14) === ":" && p_valor.substring(16, 17) === ":" && p_valor.substring(19, 20) === ".")){
                //alert("fecha");
                switch (p_nombreColumna.substring(p_nombreColumna.length-2, p_nombreColumna.length)) {
                    case "ff":
                        p_valor = p_valor.substring(8, 10) + "/" + p_valor.substring(5, 7) + "/" + p_valor.substring(0, 4);
                        break;
                    case  "hh":
                        p_valor = p_valor.substring(11, 16);
                        break;
                    default:
                        p_valor = p_valor.substring(8, 10) + "/" + p_valor.substring(5, 7) + "/" + p_valor.substring(0, 4) + " " + p_valor.substring(11, 16);
                }
            } else if (p_valor === "true"){
                p_valor = "Si";
            } else if (p_valor === "false"){
                p_valor = "No";
            }
    
            break;
        case "boolean":
            if (p_valor === true){
                p_valor = "Si";
            } else {
                p_valor = "No";
            }
            break;
        case  6:
            day = "Saturday";
    }
    return p_valor;
}

function paginacion(p_data, pagina, funcion, cantRegistros){
    var data = p_data;
    data = data.Table;
    
    var botonesMostrar = cantRegistros.split("-")[0]/cantRegistros.split("-")[1];
    var indice = 0;
    if(pagina > 4){
        indice = pagina - 9
        if (pagina + 5 < botonesMostrar){
            indice = indice + 5;
        } else {
            if (botonesMostrar % 1 == 0) {
                indice += botonesMostrar - pagina;
            } else {
                indice += (Math.ceil(botonesMostrar - 1) - pagina);
                if (indice < 0) {
                    indice = 0;
                }
            }
        }  
    }    
    var paginacion = "<li><a onclick='" + funcion + " "+ (pagina -1) +")'>Anterior</a></li>";
    for(var a_registro = indice;a_registro < botonesMostrar && a_registro <= (9 + indice); a_registro++){
        if (a_registro === pagina){
            paginacion += "<li id='" + a_registro + "'><a style='background-color: #2874a6;'><span style='color: white;'>" + (a_registro + 1) + "</span></a></li>";
        } else {
            paginacion += "<li id='" + a_registro + "'><a onclick='" + funcion + " "+ a_registro +")'><span>" + (a_registro + 1) + "</span></a></li>";
        }
    }
    return paginacion + "<li><a onclick='" + funcion + " "+ (pagina +1) +")'>Siguiente</a></li>";
}

function irPagina(){

}