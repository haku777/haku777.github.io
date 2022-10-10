js id

const ids = [...document.querySelectorAll('.tbl_popup_bus')].map(el => el.id);
	var s = ids[0];
	var elemento = document.getElementById(s);
	var z = elemento.className;
    console.log(z);

    miselanea funciones

		______________________

   control error
           Function validArchivo() As String
            Try
                Dim a_archivo_local As String = gen_config.f_dttgen_configes("config = 'textoAvisoCookies' and modulo = 'general'", "", "valor", web.f_str_empresaActual()).Rows(0)(0)
                If (a_archivo_local <> Nothing) Then
                    lbl_archivo_noencontrado.Text = ""
                    hyp_RutaArchivo.NavigateUrl = ""
                    If (a_val_clean = False) Then
                        hyp_RutaArchivo.NavigateUrl = "../../plantillas/otros/AvisoCookies.htm"
                    End If
                Else
                    hyp_RutaArchivo.NavigateUrl = ""
                    lbl_archivo_noencontrado.Text = web.f_str_textoDesdeArchivoRecurso("res_etiquetas_gen", "ArchivoNoEncontrado")
                End If
                Return lbl_archivo_noencontrado.Text
            Catch ex As Exception
                Return lbl_archivo_noencontrado.Text

            End Try
            Return hyp_RutaArchivo.Text
        End Function

		______________________

        si existe archivo

        function fileexists(){
var fso = new ActiveXObject("Scripting.FileSystemObject");
fileBool = fso.FileExists(archivo);
if (fileBool){document.location.href="http://www.exist.com"}
else{document.location.href="http://www.noexist.com"}
}


		______________________

		vb select al DataTable si existe obligatorio retorna un true


		.DataSource = Documento.f_dtt_caracteristicas(Me.a_int_idRegistro, web.f_str_empresaActual("cat_atributo"))
                Dim dtt_dateObligatorio As DataTable = .DataSource
                If dtt_dateObligatorio.Select("obligatorio = 1").Length > 0 Then
                    Me.lbl_MensajeObli.Text = web.f_str_textoDesdeArchivoRecurso("res_mensajes", "camposObligatorios")
                Else
                    Me.lbl_MensajeObli.Text = ""
                End If
                .DataBind()


        ______________________

        Creación de permisos

declare @licencia varchar(1000) =(SELECT uid FROM [seg_usuario] where id=1)

declare @id_funcionalidadPadre integer = (SELECT id FROM GUI_FUNCIONALIDAD WHERE nombreControl = 'inc_contactosInternos' and id_tipoFuncionalidad = 1 and active = 1)
select * from gui_funcionalidad where nombreComando = 'crear' and id_tipoFuncionalidad = 5 and id_funcionalidad = @id_funcionalidadPadre and active = 1
IF NOT EXISTS (select 1 from gui_funcionalidad where nombreComando = 'crear' and id_tipoFuncionalidad = 5 and id_funcionalidad = @id_funcionalidadPadre and active = 1)
begin
	exec [ins_gui_funcionalidad] @licencia,'01',1,1,'Nuevo Personal Asignado Cliente','','','','','','',0,'','crear',0,@id_funcionalidadPadre,5
end
go

--------------------------------------
vb dar permisos
btn_nuevo.Enabled = MyBase.a_obj_seg.f_bln_tienePermiso("inc_contactosInternos", "crear")

        ______________________


                Sub s_cargarAtributos()
            With Me.grvDatos
                .DataSource = Equipo.f_dtt_caracteristicas(Me.a_int_idRegistro, web.f_str_empresaActual("cat_atributo"))
                Dim dtt_dateObligatorio As DataTable = .DataSource

                For Each dtr As DataRow In dtt_dateObligatorio.Rows

                    If dtr("obligatorio") Then
                        Me.lbl_MensajeObli.Text = "es obligatorio"
                        If Miscelanea.f_bol_esDBNULL(dtr("valor").GetType) Then
                            Me.lbl_MensajeObli.Text = web.f_str_textoDesdeArchivoRecurso("res_mensajes", "camposObligatorios")
                        Else
                            Me.lbl_MensajeObli.Text = ""
                        End If
                    Else
                        Me.lbl_MensajeObli.Text = ""
                    End If
                Next

    'If dtt_dateObligatorio.Select("obligatorio = 1").Length > 0 Then
    'Me.lbl_MensajeObli.Text = web.f_str_textoDesdeArchivoRecurso("res_mensajes", "camposObligatorios")
    'Else
    'Me.lbl_MensajeObli.Text = ""
    'End If


tablas.f_dtt_ejecutarcomando("select * from doc_documento", "conexion")
_________________________
sop 824

 <!-- se crea el boton archivos -->
            <asp:LinkButton ID="lnk_Archivo" runat="server" CssClass="btn btn-lg active btn-primary adjust ofhidden lnk_guardar"
                    Style="padding: 5px;margin: 0px 100% 0px 0px;" ValidationGroup='atr'>                    
                    <i class="fa fa-file-archive-o fa-2x" aria-hidden="true"></i>
                    <span runat="server" id="Span2" class="loaderG"><i class="fa fa-file-archive-o fa-2x" aria-hidden="true"></i></span>
                    <input type="image" style="padding: 0px;font-size: 11px;" id="lnk_Archivss" title="Archivos" alt="Archivos">
                </asp:LinkButton>




_________________________

bus_equipo.a_str_filtros = "id in (select id_equipo from cnt_contratoEquipo where id_contrato=" & a_int_idRegistro & " and active=1 group by id_equipo)
 **/**contrato**/**" '**/**contrato**/** caso especial para que permita ver todos los equipos en el filtro
Dim t_dtt_idTercero As DataTable = cnt_contrato.f_dttcnt_contratos("id=" & a_int_idRegistro & "", "id", "id_tercero", web.f_str_empresaActual())
Dim t_dtr_idTercero As DataRow = t_dtt_idTercero.Rows(t_dtt_idTercero.Rows.Count - 1)
Dim t_int_idTercero As Integer = t_dtr_idTercero("id_tercero")
bus_sucursal.a_str_filtros = "id in (select id from ter_sucursal where id_tercero=" & t_int_idTercero & " and active=1)"
bus_sucursal.s_enlazar()
bus_equipo.s_enlazar()
_________________________
registros repetidos
SELECT telefono, COUNT(*) AS RecuentoFilas
FROM ter_contacto 
GROUP BY telefono
HAVING COUNT(*) > 1
ORDER BY telefono

_________________________
select * ecxepto