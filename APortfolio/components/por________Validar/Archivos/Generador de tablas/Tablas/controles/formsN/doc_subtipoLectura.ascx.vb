Imports samm_logica
Imports capadatos.samm_datos
Imports samm_web
Namespace samm_componentes
''' <summary>
''' Control que representa el formulario principal de toma de datos de una tabla
''' </summary>
''' <remarks></remarks>
Partial Class controles_seg_doc_subtipoLectura
Inherits samm_web.formularioASCX

Dim m_bol_registroEditable As Boolean
#Region "Eventos"

Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
If Not IsPostBack Then
s_inicializarControles()
End If
End Sub

Protected Sub imbGuardar_Click(ByVal sender As Object, ByVal e As System.Web.UI.ImageClickEventArgs) Handles imbGuardar.Click
If Me.a_enu_estadoFormulario = enu_estadoFormulario.editar Or Me.a_enu_estadoFormulario = enu_estadoFormulario.duplicar Then
s_guardarFormulario()
OnActualizaGrilla(New CommandEventArgs("guardarRegistro", ""))
elseif Me.a_enu_estadoFormulario = enu_estadoFormulario.buscar then
OnActualizaGrilla(New CommandEventArgs("ActualizaGrilla", Me.f_str_obtenerFiltro))
end if
End Sub
Protected Sub chb_ayudaCampo_CheckedChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles chb_ayudaCampo.CheckedChanged
If chb_ayudaCampo.Checked Then
establecerToolTipAyuda()
Else
quitarToolTipAyuda()
End If
End Sub
#End Region
#Region "Métodos"

''' <summary>
''' Inicializa las propiedades de los diferentes controles del fomulario
''' </summary>
''' <remarks></remarks>
Sub s_inicializarControles()
Me.lbl_subtipoLectura.Text=Resources.res_metadata.doc_subtipoLectura_subtipoLectura
Me.lbl_subtipoLectura_codigo.Text=Resources.res_metadata.doc_subtipoLectura_subtipoLectura_codigo
Me.lbl_id_subtipoDocumento.Text=Resources.res_metadata.doc_subtipoLectura_id_subtipoDocumento
Me.lbl_id_subtipoDocumento_origen.Text=Resources.res_metadata.doc_subtipoLectura_id_subtipoDocumento_origen
Me.vlsFormulario.HeaderText = Resources.res_mensajes.camposObligatorios
End Sub

Protected Overrides Sub s_cambiarEstadoControles()
MyBase.s_cambiarEstadoControles()
If Me.a_enu_estadoFormulario = enu_estadoFormulario.bloqueado Then
s_ocultarControlesBusqueda()
Me.txt_subtipoLectura.CssClass="txt_formulario_blo"
Me.txt_subtipoLectura_codigo.CssClass="txt_formulario_blo"
Me.bus_subtipoDocumento.CssClass = "_blo"
Me.bus_subtipoDocumento_origen.CssClass = "_blo"
End If
If Me.a_enu_estadoFormulario = enu_estadoFormulario.buscar Then
s_limpiarControles()
s_mostrarControlesBusqueda()
Me.txt_subtipoLectura.CssClass="txt_formulario_bus"
Me.txt_subtipoLectura_codigo.CssClass="txt_formulario_bus"
Me.bus_subtipoDocumento.CssClass = "_bus"
Me.bus_subtipoDocumento_origen.CssClass = "_bus"

End If
If Me.a_enu_estadoFormulario = enu_estadoFormulario.editar Then
s_ocultarControlesBusqueda()
Me.txt_subtipoLectura.CssClass="txt_formulario"
Me.txt_subtipoLectura_codigo.CssClass="txt_formulario"
Me.bus_subtipoDocumento.CssClass = ""
Me.bus_subtipoDocumento_origen.CssClass = ""
End If
End Sub

''' <summary>
''' Reestablece los valores de los controles del formulario a vacío
''' </summary>
''' <remarks></remarks>
Overrides Sub s_limpiarControles()
Me.txt_subtipoLectura.Text=""
Me.txt_subtipoLectura_codigo.Text=""
Me.bus_subtipoDocumento.s_limpiar()
Me.bus_subtipoDocumento_origen.s_limpiar()
End Sub
 Overrides Sub Focus()
MyBase.Focus()
SetFocus(Me.txt_subtipoLectura.ClientID)
End Sub

''' <summary>
''' Carga los datos del registro actual en los controles respectivos a cada campo
''' </summary>
'''<param name="p_int_idRegistro"></param>
''' <remarks></remarks>
Public Sub s_enlazar(ByVal p_int_idRegistro As Integer)
If p_int_idRegistro > 0 Then
Dim t_obj_doc_subtipoLectura As New doc_subtipoLectura(p_int_idRegistro, web.f_int_usuarioActual())
Me.a_int_idRegistroSeleccionado = p_int_idRegistro
Me.a_str_uid = t_obj_doc_subtipoLectura.f_str_getUid()
Me.m_bol_registroEditable = aplicacion.f_bol_registroEditable(Me.a_str_uid,"doc_subtipoLectura")
If Not m_bol_registroEditable Then
t_obj_doc_subtipoLectura.f_str_enlazarAuxiliares()
End If
Me.txt_subtipoLectura.Text=t_obj_doc_subtipoLectura.a_str_subtipoLectura
Me.txt_subtipoLectura_codigo.Text=t_obj_doc_subtipoLectura.a_str_subtipoLectura_codigo
If m_bol_registroEditable Then
Me.bus_subtipoDocumento.ValorSeleccionado=t_obj_doc_subtipoLectura.a_int_id_subtipoDocumento
Me.bus_subtipoDocumento.a_str_texto= ""
Else
Me.bus_subtipoDocumento.a_str_texto = t_obj_doc_subtipoLectura.a_str_subtipoDocumento_aux
End If
If m_bol_registroEditable Then
Me.bus_subtipoDocumento_origen.ValorSeleccionado=t_obj_doc_subtipoLectura.a_int_id_subtipoDocumento_origen
Me.bus_subtipoDocumento_origen.a_str_texto= ""
Else
Me.bus_subtipoDocumento_origen.a_str_texto = t_obj_doc_subtipoLectura.a_str_subtipoDocumento_origen_aux
End If
If Me.m_bol_registroEditable Then
If Me.a_int_idRegistroSeleccionado = 0 AndAlso Me.a_bln_puedeCrear Then
Me.a_enu_estadoFormulario = enu_estadoFormulario.editar
ElseIf Me.a_int_idRegistroSeleccionado > 0 AndAlso Me.a_bln_puedeEditar Then
Me.a_enu_estadoFormulario = enu_estadoFormulario.editar
Else
Me.a_enu_estadoFormulario = enu_estadoFormulario.bloqueado
End If
Else
Me.a_enu_estadoFormulario = enu_estadoFormulario.bloqueado
End If
End If
End Sub

sub s_guardarFormulario()
Dim t_obj_doc_subtipoLectura As New doc_subtipoLectura(a_int_idRegistroSeleccionado, web.f_int_usuarioActual())
Dim t_str_error as String=""
t_obj_doc_subtipoLectura.a_str_subtipoLectura=Me.txt_subtipoLectura.Text
t_obj_doc_subtipoLectura.a_str_subtipoLectura_codigo=Me.txt_subtipoLectura_codigo.Text
If Me.bus_subtipoDocumento.ValorSeleccionado <> -1 Then t_obj_doc_subtipoLectura.a_int_id_subtipoDocumento=Me.bus_subtipoDocumento.ValorSeleccionado
If Me.bus_subtipoDocumento_origen.ValorSeleccionado <> -1 Then t_obj_doc_subtipoLectura.a_int_id_subtipoDocumento_origen=Me.bus_subtipoDocumento_origen.ValorSeleccionado
If a_int_idRegistroSeleccionado = 0 Then
t_str_error=t_obj_doc_subtipoLectura.f_strInsertar(web.f_str_licencia(), web.f_str_empresaActual())
If Me.a_enu_estadoFormulario = enu_estadoFormulario.duplicar Then
Aplicacion.f_str_duplicarRegistroEnIntermedias("doc_subtipoLectura", a_int_idRegistroDuplicar, doc_subtipoLectura.a_int_id, web.f_int_usuarioActual, web.f_str_empresaActual("doc_subtipoLectura"), web.f_str_licencia)
End If
Else
t_str_error=t_obj_doc_subtipoLectura.f_strActualizar()
End If
If t_str_error <> ""
Throw New Exception (Resources.res_mensajes.errorGuardar & t_str_error)
End If
If Me.a_int_idRegistroSeleccionado <> t_obj_doc_subtipoLectura.a_int_id Then
'nuevo
Me.a_int_idRegistroSeleccionado = t_obj_doc_subtipoLectura.a_int_id
CType(Me.Page.Master, MasterPage).s_aplicarScript("window.close()")
s_cambiarEstadoControles()
End If        
end sub

''' <summary>
''' Captura el filtro de acuerdo a los valores dados por el usuario
''' </summary>
''' <returns></returns>
''' <remarks></remarks>
Overrides Function f_str_obtenerFiltro() As String
Dim t_str As String = "1=1"
If Me.txt_subtipoLectura.Text<>"" Then t_str &= " and [subtipoLectura] like '%" & Me.txt_subtipoLectura.Text & "%'"
If Me.txt_subtipoLectura_codigo.Text<>"" Then t_str &= " and [subtipoLectura_codigo] like '%" & Me.txt_subtipoLectura_codigo.Text & "%'"
If Me.bus_subtipoDocumento.ValorSeleccionado<>-1 Then t_str &= " and [id_subtipoDocumento] =" & Me.bus_subtipoDocumento.ValorSeleccionado
If Me.bus_subtipoDocumento_origen.ValorSeleccionado<>-1 Then t_str &= " and [id_subtipoDocumento_origen] =" & Me.bus_subtipoDocumento_origen.ValorSeleccionado
Return t_str
End Function
Private Sub establecerToolTipAyuda()
Me.txt_subtipoLectura.Attributes("onclick") = "javascript:s_mostrarBocadillo(event,'" & Resources.res_campoAyuda.doc_subtipoLectura_subtipoLectura & "')"
Me.txt_subtipoLectura.Attributes("onfocus") = "javascript:s_mostrarBocadillo(event,'" & Resources.res_campoAyuda.doc_subtipoLectura_subtipoLectura & "')"
Me.txt_subtipoLectura.Attributes("onblur") = "javascript: ocultar('tbl_bocadillo');"
Me.txt_subtipoLectura.Attributes("onkeypress") = "javascript: ocultar('tbl_bocadillo');"
Me.txt_subtipoLectura_codigo.Attributes("onclick") = "javascript:s_mostrarBocadillo(event,'" & Resources.res_campoAyuda.doc_subtipoLectura_subtipoLectura_codigo & "')"
Me.txt_subtipoLectura_codigo.Attributes("onfocus") = "javascript:s_mostrarBocadillo(event,'" & Resources.res_campoAyuda.doc_subtipoLectura_subtipoLectura_codigo & "')"
Me.txt_subtipoLectura_codigo.Attributes("onblur") = "javascript: ocultar('tbl_bocadillo');"
Me.txt_subtipoLectura_codigo.Attributes("onkeypress") = "javascript: ocultar('tbl_bocadillo');"
Me.bus_subtipoDocumento.TextoBocadillo = Resources.res_campoAyuda.doc_subtipoLectura_id_subtipoDocumento
Me.bus_subtipoDocumento_origen.TextoBocadillo = Resources.res_campoAyuda.doc_subtipoLectura_id_subtipoDocumento_origen
End Sub
Private Sub quitarToolTipAyuda()
Me.txt_subtipoLectura.Attributes("onclick") = ""
Me.txt_subtipoLectura.Attributes("onfocus") = ""
Me.txt_subtipoLectura_codigo.Attributes("onclick") = ""
Me.txt_subtipoLectura_codigo.Attributes("onfocus") = ""
Me.bus_subtipoDocumento.TextoBocadillo = ""
Me.bus_subtipoDocumento_origen.TextoBocadillo = ""
End Sub

 Private Sub s_mostrarControlesBusqueda()
End Sub

 Private Sub s_ocultarControlesBusqueda()
End Sub
#End Region
End Class
End Namespace