function tabla_etapa(data, nombre_tabla) {
    var col = [];
    var columnas = [];
    var aadata = [];
    var datos = [];
    //alert(data);
    data = JSON.parse(data)
    // alert(data);
    $.each(data, function (i, item) {
        $.each(item, function (i, it) {
            var arreglo = [];
            var i = 0;
            for (var atri in this) {
                if (i == 1) {
                    arreglo[i] = this[atri] + '<button class="btn btn-trans btn-xs btn-eliminaretapa pull-right" type="button" style="display: block; margin: 0 auto;"> <i class="fa fa-trash"></i></button>' + '<button class="btn btn-trans btn-xs btn-duplicaretapa pull-right" type="button" style="display: block; margin: 0 auto;"><i class="fa fa-clipboard"></i></button>' + '<button class="btn btn-trans btn-xs  btn-editaretapa pull-right" type="button" style="display: block; margin: 0 auto;"> <i class="fa fa-pencil"></i></button>';
                } else { arreglo[i] = this[atri]; }
                i++;
            }
            aadata.push(arreglo);
        });
    });

    $.each(data, function (i, item) {
        $.each(item, function (j, ite) {
            alert(i + " . " + j);
            if (j == 0) {
                columnas = Object.keys(item[j])
                for (var j; j < columnas.length; j++) {
                    col[j] = { "title": columnas[j].toString() };
                }
            }
        });
    });

    table = $("#" + nombre_tabla).DataTable({
        "data": aadata,
        "colReorder": true,
        stateSave: true,
        "sScrollX": true,
        dom: "Bfrtip",
        buttons: ['colvis'],
        //"order": [ 6, "asc" ],
        "oLanguage": {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        },
        "aoColumns": col,
        "retrieve": true,
        "columnDefs": [
            { "width": "40%", "targets": 1 }
        ]
    });
}
