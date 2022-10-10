
<%@ Page Language='VB' MasterPageFile='~/master/master/mas_grillaFormularioHorizontal.master' AutoEventWireup='false' CodeFile='doc_subtipoLectura.aspx.vb' Inherits='samm_web.frm_doc_subtipoLectura'%>
<%@ Register Src='../../controles/general/tabs.ascx' TagName='tabs' TagPrefix='tab' %>
<%@ Register Assembly='AjaxControlToolkit' Namespace='AjaxControlToolkit' TagPrefix='act' %>
<%@ Register Src='../../controles/general/busquedaAvanzada.ascx' TagName='busquedaAvanzada' TagPrefix='bus' %>
<%@ Register Src='../../controles/general/grilla.ascx' TagName='grilla' TagPrefix='gri' %>
<%@ Register Src='../../controles/general/barraHerramientas.ascx' TagName='barraHerramientas' TagPrefix='bar' %>
<%@ Register Src='../../controles/general/informacion.ascx' TagName='informacion'    TagPrefix='inf' %>
<%@ Register Assembly='controles' Namespace='controles' TagPrefix='bti' %>
<%@ Register Src='../../controles/general/popup.ascx' TagName='popup' TagPrefix='pop' %>
<asp:Content ID='Content2' ContentPlaceHolderID='cph_grilla' runat='Server'>
<gri:grilla ID='griPrincipal' runat='server' OnSeleccionar='s_seleccionarItemGrilla' />
</asp:Content>
<asp:Content ID='Content1' ContentPlaceHolderID='cph_general' runat='Server'>
<tab:tabs ID='Tabs' OnTab='s_mostrarTab' runat='server' />
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cph_botones" runat="server">
<table border='0' cellpadding='0' cellspacing='0'><tr><td><bti:BotonImagen ID='imbNuevo' tooltip='<%$Resources:res_controles,nuevo %>' runat='server' ImageUrl='~/images/botones/nuevo.gif' CssClass='imb' CausesValidation='False' /></td></tr><tr><td><bti:BotonImagen ID='imbDuplicar' runat='server' ImageUrl='~/images/botones/duplicar.gif' CausesValidation='False' CssClass='imb'></bti:BotonImagen></td></tr><tr><td> <bti:BotonImagen ID='imbBuscar' tooltip='<%$Resources:res_controles,buscar %>' runat='server' ImageUrl='~/images/botones/buscar.gif'  CssClass='imb' CausesValidation='False' CommandName='ActualizaGrilla' /></td></tr><tr><td><bti:BotonImagen ID='imbEliminar' tooltip='<%$Resources:res_controles,eliminar %>' runat='server' ImageUrl='~/images/botones/eliminar.gif' CausesValidation='False' CssClass='imb'></bti:BotonImagen></td></tr><tr><td><bti:BotonImagen ID='imbImprimir' tooltip='<%$Resources:res_controles,imprimir %>' runat='server' ImageUrl='~/images/botones/imprimir.gif' CausesValidation='False' CssClass='imb'></bti:BotonImagen></td></tr><tr><td><img alt="-" src='../../images/iconos/separadorH.gif'/></td></tr><tr><td><bti:BotonImagen ID='imbColumnas' runat='server' tooltip='<%$Resources:res_controles,columnas %>' ImageUrl='~/images/botones/columnas.gif'  CssClass='imb' CausesValidation='False' /></td></tr><tr><td><bti:BotonImagen ID='imbCompartir' tooltip='<%$Resources:res_controles,importar %>' runat='server' ImageUrl='~/images/botones/compartir.gif' CausesValidation='False' CssClass='imb'></bti:BotonImagen></td></tr><tr><td><bti:BotonImagen ID='imbExportar' tooltip='<%$Resources:res_controles,exportar %>' runat='server' ImageUrl='~/images/botones/exportar.gif' CausesValidation='False' CssClass='imb'></bti:BotonImagen></td></tr><tr><td><bti:BotonImagen ID='imbGirar' tooltip='<%$Resources:res_controles,girar %>' runat='server' CausesValidation='False'  CssClass='imb' OnClientClick="girar();return false;"/></td></tr><tr><td><bti:BotonImagen ID='imbAyuda' tooltip='<%$Resources:res_controles,ayuda %>' runat='server' ImageUrl='~/images/botones/ayuda.gif' CausesValidation='False' CssClass='imb'></bti:BotonImagen></td></tr></table></asp:Content>
<asp:Content ID='content4' ContentPlaceHolderID='cph_barraHerramientas' runat='server'>
<bar:barraHerramientas ID='barraHerramientas' runat='server'/>
<pop:popup ID='popupInterno' runat='server' a_bol_visible='false' />
</asp:Content>
<asp:Content ID='content5' runat='server'  ContentPlaceHolderID='cph_tituloPagina'><asp:Label ID='lbl_tituloPagina' runat='server' CssClass='lbl_titulo' Text="<%$ Resources:res_tituloPagina, forms_doc_subtipoLectura%>"></asp:Label></asp:Content>
<asp:Content ID='content6' runat='server' ContentPlaceHolderID='cph_informacion'><inf:informacion ID='infPrincipal' runat='server' /></asp:Content>