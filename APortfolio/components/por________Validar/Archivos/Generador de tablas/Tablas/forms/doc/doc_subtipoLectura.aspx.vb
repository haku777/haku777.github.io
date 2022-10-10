
Imports capadatos.samm_datos
Imports samm_logica
Imports System.Reflection
Imports System.Resources

Namespace samm_web
Partial Class frm_doc_subtipoLectura
Inherits FormularioASPX

Private m_mvw As MultiView
Private m_obj_formulario As samm_web.formularioASCX
Private m_str_tabla As String
Private m_bln_puedeEliminar As Boolean

Property a_int_idRegistroSeleccionado() As Integer
Get
Return ViewState("a_int_idRegistroSeleccionado")
End Get
Set(ByVal a_int_idRegistroSeleccionado As Integer)
ViewState("a_int_idRegistroSeleccionado") = a_int_idRegistroSeleccionado
End Set
End Property

Protected Sub Page_Init(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Init
Me.m_str_tabla = Split(Request.RawUrl.Split("/")(Request.RawUrl.Split("/").Length - 1), ".aspx")(0)
s_inicializarControles()
MyBase.popup = Me.popupInterno
End Sub

Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
s_inicializarBotones()
If Not IsPostBack Then
s_parametrosURL()
s_enlazarGrilla(sender, Nothing)
If Request.QueryString("id") <> "" Then
s_seleccionarItemGrilla(Me, New CommandEventArgs("", Request.QueryString("id")))
End If
End If
End Sub

Protected Sub barraHerramientas_AccionBarra(ByVal sender As Object, ByVal e As System.EventArgs) Handles barraHerramientas.AccionBarra
s_accionBarra(CType(e, CommandEventArgs).CommandArgument)
End Sub
Protected Sub imbBuscar_Click(ByVal sender As Object, ByVal e As System.Web.UI.ImageClickEventArgs) Handles imbBuscar.Click
If Me.m_obj_formulario.a_enu_estadoFormulario = enu_estadoFormulario.buscar Then
s_enlazarGrilla(sender, New CommandEventArgs("ActualizaGrilla", Me.m_obj_formulario.f_str_obtenerFiltro))
m_obj_formulario.Focus()
Else
Me.m_obj_formulario.a_enu_estadoFormulario=enu_estadoFormulario.buscar
Me.a_int_idRegistroSeleccionado=0
s_llenarInformacion()
End If
s_estadoInicial()
End Sub
Protected Sub imbNuevo_Click(ByVal sender As Object, ByVal e As System.Web.UI.ImageClickEventArgs) Handles imbNuevo.Click
Me.griPrincipal.a_int_indiceSeleccionado = -1
Me.a_int_idRegistroSeleccionado = 0
m_obj_formulario.a_int_idRegistroSeleccionado = 0
m_obj_formulario.a_enu_estadoFormulario = enu_estadoFormulario.editar
m_obj_formulario.Focus()
s_mostrarTab(m_str_tabla)
tabs.a_str_tabActivo = m_str_tabla
s_llenarInformacion()
End Sub

Protected Sub imbEliminar_Click(ByVal sender As Object, ByVal e As System.Web.UI.ImageClickEventArgs) Handles imbEliminar.Click
Me.popupInterno.a_str_titulo = Resources.res_controles.eliminar
Me.popupInterno.a_str_control = ""
Me.popupInterno.a_bol_mostrarSAMM = True
Me.popupInterno.a_str_parametro = "eliminar|" & resources.res_mensajes.confirmarEliminacion & "|" & Me.m_str_tabla & "|" & Me.a_int_idRegistroSeleccionado
Me.popupInterno.a_bol_visible = True
End Sub

Protected Sub imbGirar_Click(ByVal sender As Object, ByVal e As System.Web.UI.ImageClickEventArgs) Handles imbGirar.Click
Dim cookiefile As HttpCookie
Dim t_bln_dispActual As Boolean = Web.f_bol_formularioHorizontal
If t_bln_dispActual Then
cookiefile = New HttpCookie("samm_disposicionPantalla", "1")
Else
cookiefile = New HttpCookie("samm_disposicionPantalla", "0")
End If
cookiefile.Expires = DateTime.Now.AddYears(100)
Response.Cookies.Add(cookiefile)
Response.Redirect(Request.RawUrl)
End Sub
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.PreInit
If Not Request.Cookies("samm_disposicionPantalla") Is Nothing AndAlso Request.Cookies("samm_disposicionPantalla").Value <> "1" Then
Me.MasterPageFile = "~/master/master/mas_grillaFormularioHorizontal.master"
Else
Me.MasterPageFile = "~/master/master/mas_grillaFormularioVertical.master"
End If
End Sub
Protected Sub s_mostrarTab(ByVal sender As Object, ByVal e As EventArgs)
s_mostrarTab(CType(e, CommandEventArgs).CommandArgument)
End Sub

Protected Sub s_seleccionarItemGrilla(ByVal sender As Object, ByVal e As EventArgs)
a_int_idRegistroSeleccionado = CType(e, CommandEventArgs).CommandArgument
s_mostrarTab(Right(m_mvw.Views(m_mvw.ActiveViewIndex).ID, m_mvw.Views(m_mvw.ActiveViewIndex).ID.Length - 4))
s_llenarInformacion()
m_obj_formulario.Focus()
barraHerramientas.a_str_parametrosLink = "archivos,t=arc&tab=" & m_str_tabla & "&id=" & a_int_idRegistroSeleccionadobarraHerramientas.s_enlazar()Tabs.s_habilitarLinks()
If Me.m_bln_puedeEliminar Then
Me.imbEliminar.Enabled = Not Aplicacion.f_bln_registroPorDefecto(IIf(m_obj_formulario.a_str_uid Is Nothing, "", m_obj_formulario.a_str_uid))
Else
Me.imbEliminar.Enabled = False
End If
End Sub


Sub s_ordernarGrilla(ByVal sender As Object, ByVal e As EventArgs) Handles griPrincipal.Ordenar
s_estadoInicial()
End Sub

Sub s_paginarGrilla(ByVal sender As Object, ByVal e As EventArgs) Handles griPrincipal.Paginar
s_estadoInicial()
End Sub
''' <summary>
''' Establece las propiedades de los controles y los permisos actuales sobre el formulario
''' </summary>
''' <remarks></remarks>
Sub s_inicializarBotones()
Dim t_obj_seguridad As New Seguridad()
t_obj_seguridad.s_setPermisos(web.f_str_rolActual())
Me.m_bln_puedeEliminar = t_obj_seguridad.f_bln_tienePermiso(Split(Request.RawUrl.Split("/")(Request.RawUrl.Split("/").Length - 1), ".aspx")(0), "eliminar")
Me.imbImprimir.enabled = t_obj_seguridad.f_bln_tienePermiso(Split(Request.RawUrl.Split("/")(Request.RawUrl.Split("/").Length - 1), ".aspx")(0), "imprimir")
Me.imbExportar.enabled = t_obj_seguridad.f_bln_tienePermiso(Split(Request.RawUrl.Split("/")(Request.RawUrl.Split("/").Length - 1), ".aspx")(0), "exportar")
IIf(Not IsPostBack, Me.imbImprimir.OnClientClick = "javascript: popup_ventanaNuevo('" & Me.m_str_tabla & "','imp');return false;", Me.imbImprimir.OnClientClick = Me.imbImprimir.OnClientClick)
If Web.f_bln_empresaActualEsHoja() Then
Me.imbNuevo.Enabled = t_obj_seguridad.f_bln_tienePermiso(Split(Request.RawUrl.Split("/")(Request.RawUrl.Split("/").Length - 1), ".aspx")(0), "crear")
Me.imbCompartir.Enabled = t_obj_seguridad.f_bln_tienePermiso(Split(Request.RawUrl.Split("/")(Request.RawUrl.Split("/").Length - 1), ".aspx")(0), "compartir")
Else
If Aplicacion.f_bol_tablaMultiempresa("doc_subtipoLectura") Then
Me.imbNuevo.Enabled = False
Else
Me.imbNuevo.Enabled = t_obj_seguridad.f_bln_tienePermiso(Split(Request.RawUrl.Split("/")(Request.RawUrl.Split("/").Length - 1), ".aspx")(0), "crear")
Me.imbCompartir.Enabled = t_obj_seguridad.f_bln_tienePermiso(Split(Request.RawUrl.Split("/")(Request.RawUrl.Split("/").Length - 1), ".aspx")(0), "compartir")
End If
End If
Me.imbDuplicar.ToolTip = web.f_str_textoDesdeArchivoRecurso("res_controles", "duplicar")
Me.imbDuplicar.Enabled = imbNuevo.Enabled
Me.m_obj_formulario.a_bln_puedeCrear = Me.imbNuevo.Enabled
Me.imbCompartir.OnClientClick = "javascript: popup_ventanaNuevo('" & Me.m_str_tabla & "','com');return false;"
Me.m_obj_formulario.a_bln_puedeEditar = t_obj_seguridad.f_bln_tienePermiso(Split(Request.RawUrl.Split("/")(Request.RawUrl.Split("/").Length - 1), ".aspx")(0), "editar")
If Web.f_bol_formularioHorizontal Then
Me.imbGirar.ImageUrl = "~/images/botones/girarV.gif"
Else
Me.imbGirar.ImageUrl = "~/images/botones/girarH.gif"
End If
Me.imbAyuda.OnClientClick = "window.open('" & Web.f_str_sitioWeb() & "/ayuda/indice/ayuda.aspx?frm=" & Request.RawUrl.Split("/")(Request.RawUrl.Split("/").Length - 1).Split("?")(0) & " ','_blank','');return false;"
Me.imbColumnas.OnClientClick = "javascript: popup_ventanaNuevo('" & Me.m_str_tabla & "','col');return false;"
End Sub

''' <summary>
''' Inicia las principales propiedades del formulario
''' </summary>
''' <remarks></remarks>
Sub s_inicializarControles()
s_crearViews()
s_llenarInformacion()
Me.Master.FindControl("form1").FindControl("cph_general").Controls.Add(m_mvw)
Tabs.s_enlazar()
s_estadoInicial(not me.IsPostBack )
   End Sub

''' <summary>
''' INFORMACIÓN DEL CONTORL DE LA IZQUIERDA
''' </summary>
''' <remarks></remarks>
Sub s_llenarInformacion()
Me.infPrincipal.a_str_textoHtml = Web.f_str_controlToHtmlPlano(f_tbl_Informacion())
 Me.infPrincipal.a_str_urlImagen = "../../images/informacion/" & _ 
  IIf(System.IO.File.Exists(Server.MapPath("../../images/informacion/") & _ 
 Me.m_str_tabla & ".jpg"), Me.m_str_tabla, "noimagen") & ".jpg"
   End Sub

''' <summary>
''' Tabla que se pasa al control de la izquierda
''' </summary>
''' <remarks></remarks>
Function f_tbl_Informacion() As Table
Dim t_tbl As New Table
Dim tr As New TableRow
Dim td As New TableCell
Dim t_lbl_texto As Label
Dim t_lbl_etiqueta As Label
Dim t_obj As New doc_subtipoLectura(Me.a_int_idRegistroSeleccionado, Web.f_int_usuarioActual)
With t_obj
td.Controls.Add(New LiteralControl("<br/>"))
t_lbl_texto = New Label
t_lbl_etiqueta = New Label
t_lbl_texto.CssClass = "lbl_textoInformacion"
t_lbl_etiqueta.CssClass = "lbl_etiquetaInformacion"
t_lbl_etiqueta.Text = Resources.res_metadata.doc_subtipoLectura_subtipoLectura & ": "
t_lbl_texto.Text = t_obj.a_str_subtipoLectura
td.Controls.Add(t_lbl_etiqueta)
td.Controls.Add(New LiteralControl("<br/>"))
td.Controls.Add(t_lbl_texto)
td.Controls.Add(New LiteralControl("<br/>"))
t_lbl_texto = New Label
t_lbl_etiqueta = New Label
t_lbl_texto.CssClass = "lbl_textoInformacion"
t_lbl_etiqueta.CssClass = "lbl_etiquetaInformacion"
t_lbl_etiqueta.Text = Resources.res_metadata.doc_subtipoLectura_subtipoLectura_codigo & ": "
t_lbl_texto.Text = t_obj.a_str_subtipoLectura_codigo
td.Controls.Add(t_lbl_etiqueta)
td.Controls.Add(New LiteralControl("<br/>"))
td.Controls.Add(t_lbl_texto)
End With
tr.Controls.Add(td)
t_tbl.Controls.Add(tr)
return t_tbl
End Function 

Protected Sub s_mostrarTab(ByVal p_str_nombreControl As String)
Dim t_metodo As MethodInfo
Dim t_obj As Object
m_mvw.SetActiveView(m_mvw.FindControl("svw_" & p_str_nombreControl))
t_obj = m_mvw.Controls(m_mvw.ActiveViewIndex).FindControl(p_str_nombreControl)
t_metodo = t_obj.GetType().GetMethod("s_enlazar")
Try
t_metodo.Invoke(t_obj, New Object() {a_int_idRegistroSeleccionado})
Catch ex As Exception
Throw New Exception("Error no controlado: " & ex.InnerException.Message, ex.InnerException)
End Try        
End Sub

Sub s_crearViews()
'Dim t_str_nombrePaginaYParametros As String = Request.RawUrl.Split("/")(Request.RawUrl.Split("/").Length - 1)
Dim t_svw As View
Dim t_int_IDFormulario As Integer
Dim t_dtt As DataTable = gui_funcionalidad.f_dttgui_funcionalidades("id_tipofuncionalidad=" & enu_tipoFuncionalidad.formulario & " and nombreControl='" & m_str_tabla & "'", "","", "")
Dim t_str_nombreControl As String
Dim t_obj As Control
Dim t_tbl As Table
Dim t_tr As TableRow
Dim t_td As TableCell
Dim i As Integer = 0
Dim t_imgPie As WebControls.Image

If t_dtt.Rows.Count > 0 Then
t_int_IDFormulario = t_dtt.Rows(0)("id")
t_dtt = gui_funcionalidad.f_dttgui_funcionalidades("id_tipofuncionalidad=" & enu_tipoFuncionalidad.tab & " and id_funcionalidad=" & t_int_IDFormulario, "orden","", "")
m_mvw = New MultiView
For Each t_dtr As DataRow In t_dtt.Rows
t_svw = New View
t_svw.ID = "svw_" & t_dtr("nombreControl")
t_tbl = New Table
t_tbl.CellPadding = 0
t_tbl.CellSpacing = 0
t_tbl.Width = New Unit(100, UnitType.Percentage)
t_tr = New TableRow
t_td = New TableCell
t_td.ColumnSpan = 3
t_td.CssClass = "tbl_marcoFormulario"
If t_dtr("nombreControl") <> m_str_tabla Then
t_str_nombreControl = t_dtr("nombreControl")
t_obj = LoadControl("../../controles/doc/" & t_str_nombreControl & ".ascx")
Else
t_str_nombreControl = m_str_tabla
If Not Request.Cookies("samm_disposicionPantalla") Is Nothing AndAlso Request.Cookies("samm_disposicionPantalla").Value <> "1" Then
t_obj = LoadControl("../../controles/formsV/" & t_str_nombreControl & ".ascx") 'marquita
Else
t_obj = LoadControl("../../controles/formsV/" & t_str_nombreControl & ".ascx")
End If
m_obj_formulario = t_obj
AddHandler CType(t_obj, samm_web.formularioASCX).ActualizaGrilla, AddressOf s_enlazarGrilla
End If
t_obj.ID = t_str_nombreControl
t_td.Controls.Add(t_obj)
t_tr.Controls.Add(t_td)
t_tbl.Controls.Add(t_tr)
t_tr = New TableRow
t_td = New TableCell
t_imgPie = New WebControls.Image
t_imgPie.ImageUrl = "../../images/interfaz/pieFormIzq.png"
t_td.Controls.Add(t_imgPie)
t_td.HorizontalAlign = HorizontalAlign.Left
t_tr.Controls.Add(t_td)
t_td = New TableCell
t_td.CssClass = "td_pieFormulario"
t_td.Width = New Unit(100, UnitType.Percentage)
t_tr.Controls.Add(t_td)
t_td = New TableCell
t_imgPie = New WebControls.Image
t_imgPie.ImageUrl = "../../images/interfaz/pieFormDer.png"
t_td.Controls.Add(t_imgPie)
t_td.HorizontalAlign = HorizontalAlign.Right
t_tr.Controls.Add(t_td)
t_tbl.Controls.Add(t_tr)
 t_svw.Controls.Add(t_tbl)
m_mvw.Views.Add(t_svw)
i += 1
Next
m_mvw.ActiveViewIndex = 0
m_mvw.ID = "mvw_secciones"
End If
End Sub

Sub s_enlazarGrilla(ByVal sender As Object, ByVal e As EventArgs)
Dim t_dtt As DataTable
Dim t_str_filtro As String = ""
If Not e Is Nothing AndAlso TypeOf e Is CommandEventArgs Then
 If CType(e, CommandEventArgs).CommandName.ToLower = "actualizagrilla" Then
 t_str_filtro = CType(e, CommandEventArgs).CommandArgument
ElseIf CType(e, CommandEventArgs).CommandName.ToLower = "guardarregistro" Then
t_str_filtro = Me.griPrincipal.a_str_filtro
Me.griPrincipal.a_int_indiceSeleccionado = 0
Me.griPrincipal.a_int_valorSeleccionado = m_obj_formulario.a_int_idRegistroSeleccionado
s_seleccionarItemGrilla(Me, New CommandEventArgs("", m_obj_formulario.a_int_idRegistroSeleccionado))
End If
Else
t_str_filtro = Me.griPrincipal.a_str_filtro
End If
If t_str_filtro Is Nothing Then
t_str_filtro = ""
End If
imbExportar.OnClientClick = "javascript: window.open('../../forms/general/exportarDatos.aspx?tbl=" & Me.m_str_tabla & "&f=" & t_str_filtro.Replace("'", "alt_39") & "','_blank');return false;"
t_dtt = doc_subtipoLectura.f_dttdoc_subtipoLecturas(t_str_filtro, "1", "count(*) as cuenta" , web.f_str_empresaActual("doc_subtipoLectura"))
Me.griPrincipal.griPrincipal.s_establecerCantidadTotalRegistros(t_dtt.Rows(0)("cuenta"))
t_dtt = doc_subtipoLectura.f_dttdoc_subtipoLecturas(t_str_filtro, " fechaModificacion DESC ", aplicacion.f_str_topbusquedas(t_str_filtro, Me.griPrincipal.s_obtenernumeroregistros()) & web.f_str_columnasgrilla("doc_subtipoLectura",false,true),IIf(Aplicacion.f_bol_tablaMultiempresa("doc_subtipoLectura"), web.f_str_empresaActual(), ""))
Me.griPrincipal.a_str_filtro = t_str_filtro
Me.griPrincipal.s_enlazar(t_dtt)
s_llenarInformacion()
End Sub

Sub s_estadoInicial(Optional ByVal p_bln_inhabilitar As Boolean = True)
a_int_idRegistroSeleccionado = -1
Me.griPrincipal.a_int_indiceSeleccionado = -1
Me.griPrincipal.a_int_valorSeleccionado = -1
If Not Me.IsPostBack Then Me.m_obj_formulario.a_enu_estadoFormulario = enu_estadoFormulario.buscar
s_mostrarTab(Me.m_str_tabla)
Me.Tabs.s_inhabilitarLinks()
Me.imbEliminar.Enabled = False
Me.barraHerramientas.a_bln_inhabilitarTodos = p_bln_inhabilitar
Me.barraHerramientas.s_enlazar(False)
End Sub
Private Sub s_accionBarra(ByVal p_str_comando As String)
Dim t_str_modulo As String = Me.Request.Url.Segments(Me.Request.Url.Segments.Length - 2).Substring(0, 3)
Dim t_rsm As New ResourceManager("Resources.res_etiquetas_" & t_str_modulo, System.Reflection.Assembly.Load("App_GlobalResources"))
popup.a_str_titulo = t_rsm.GetString(p_str_comando.Split("|")(1))
popup.a_str_control = t_str_modulo & "/" & p_str_comando.Split("|")(1) & ".ascx"
popup.a_bol_visible = True
End Sub
Protected Sub popup_aceptar(ByVal sender As Object, ByVal e As System.EventArgs) Handles popupInterno.aceptar
''TODO: Aqui llega el comandArgument, pendiente el codigo
If Not e Is Nothing Then
If CType(e, CommandEventArgs).CommandName = "aceptarConfirmar" andalso CType(e, CommandEventArgs).Commandargument= "eliminar" Then
Dim t_str_error As String = ""
Dim t_obj As New doc_subtipoLectura(web.f_int_usuarioActual())
t_obj.a_int_id = a_int_idRegistroSeleccionado
t_obj.a_bol_active = False
t_str_error = t_obj.f_strActivar()
If t_str_error <> "" Then
Throw New Exception(t_str_error)
End If
m_obj_formulario.a_enu_estadoFormulario = enu_estadoFormulario.buscar
s_enlazarGrilla(Nothing, Nothing)
s_estadoInicial()
End If
End If
End Sub
Private Sub s_parametrosURL()
 If Request.QueryString("nuevo") = "1" Then imbNuevo_Click(Nothing, Nothing)
If Request.QueryString("id") <> "" Then
a_int_idRegistroSeleccionado = Request.QueryString("id")
griPrincipal.a_int_valorSeleccionado = Request.QueryString("id")
griPrincipal.a_str_filtro = "id=" & Request.QueryString("id")
griPrincipal.a_int_indiceSeleccionado = 0
s_mostrarTab(m_str_tabla)
End If
If Request.QueryString("qry") <> "" Then
If Me.griPrincipal.a_str_filtro <> "" Then Me.griPrincipal.a_str_filtro &= " and "
Me.griPrincipal.a_str_filtro &= Request.QueryString("qry")
End If
End Sub
Protected Sub imbDuplicar_Click(ByVal sender As Object, ByVal e As System.Web.UI.ImageClickEventArgs) Handles imbDuplicar.Click
Me.griPrincipal.a_int_indiceSeleccionado = -1
Me.a_int_idRegistroSeleccionado = 0
m_obj_formulario.a_enu_estadoFormulario = enu_estadoFormulario.duplicar
m_obj_formulario.a_int_idRegistroSeleccionado = 0
m_obj_formulario.Focus()
s_mostrarTab(m_str_tabla)
tabs.a_str_tabActivo = m_str_tabla
s_llenarInformacion()
End Sub

End Class

End Namespace
