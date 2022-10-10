<%@ Control Language="VB" AutoEventWireup="false" CodeFile="pop_documentoCatalogos.ascx.vb" Inherits="samm_componentes.controles_gas_pop_documentoCatalogos" %>
<%@ Register Assembly="controles" Namespace="controles" TagPrefix="cc1" %>
<%@ Register Assembly='controles' Namespace='controles' TagPrefix='bti' %>
<table>
    <tr>
        <td>
        </td>
        <td>
            <asp:Label ID="lblDocumentos" runat="server" CssClass="lbl">
            </asp:Label>
        </td>
        <td>
        </td>
    </tr>
    <tr>
        <td>
        </td>
        <td>
            <asp:GridView ID="grvCatalogos" runat="server" AutoGenerateColumns="False">
                <Columns>
                
                    <asp:TemplateField HeaderText='id_ts' ItemStyle-HorizontalAlign="Center">
                
                        <HeaderTemplate>
                        
                            <asp:Label ID="lbl_tituloEliminar" runat="server"></asp:Label><br />
                            <asp:CheckBox ID="chb_seleccionarElim" runat="server" />
                            
                        </HeaderTemplate>
                        
                        
                        
                    </asp:TemplateField>
                    
                    
                    
                    
                      <asp:TemplateField HeaderText='id_t' ItemStyle-HorizontalAlign="Center">
                    
                    <ItemTemplate>
                        
                            <asp:CheckBox ID="chb_seleccionarElim" runat="server" />
                            <asp:Label ID="lblIdCatalogoElim" runat="server" Visible="true" Text='<%# eval("catalogo") %>'></asp:Label>
                            <asp:Label ID="lblIdElim" runat="server" Visible="true" Text='<%# eval("catalogo_codigo") %>'></asp:Label>
                            
                        </ItemTemplate>
                    
                    </asp:TemplateField>
                    
                    
                    
                    
                    
                    <asp:TemplateField HeaderText='id_tipoCat' ItemStyle-HorizontalAlign="Center">
                    
                        <ItemTemplate>
                            <%--<asp:CheckBox ID="chb_seleccionar" runat="server" Visible='<%# IIF(eval("tipoDocumento")<>"8" or eval("idDocumento")>0,true,false) %>' />--%>
                            <asp:Label ID="lblIdCatalogo" runat="server" Visible="True" Text='<%# eval("fechaCreacion") %>'></asp:Label>
                            
                            <asp:Label ID="lblId" runat="server" Visible="true" Text='<%# eval("cat_subtipoCatalogo_subtipoCatalogo") %>'></asp:Label>
                            
                        </ItemTemplate>
                        
                    </asp:TemplateField>
                    
                    <%--<asp:BoundField DataField="cantidad" HeaderText='res_campoGrilla,doc_pendientedocumento_cantidad' />--%>
                    <asp:TemplateField HeaderText='id_tipoCatalogo'> <%--res_campoGrilla,cat_catalogo_catalogo--%>
                    
                        <ItemTemplate>
                        
                            <asp:Label ID="lbl_catalogo" runat="server" Visible="true" Text='<%# eval("cat_subtipoCatalogo_id_tipoCatalogo") %>'> </asp:Label>
                       
                        </ItemTemplate>
                        
                    </asp:TemplateField>
                    <%--<asp:BoundField DataField="subtipoCatalogo" HeaderText='res_campoGrilla,cat_catalogo_id_subtipocatalogo' />--%>
                    <asp:BoundField DataField="fechaCreacion" HeaderText='res_campoGrilla,cnt_visitafija_fechacreada_ff' />
                    
                    <asp:TemplateField HeaderText='subtipo' ItemStyle-HorizontalAlign="Center">
                    
                        <HeaderTemplate>
                            <asp:Label ID="lbl_tituloDocumentoOrigen" runat="server"></asp:Label>
                        </HeaderTemplate>
                        <ItemTemplate>
                            <%--<asp:Label ID="lbl_documentoOrigen" runat="server" Text='<%# eval("documentoOrigen") %>'></asp:Label>--%>
                        </ItemTemplate>
                        
                    </asp:TemplateField>
                    
                    <asp:TemplateField HeaderText='id_usuario' ItemStyle-HorizontalAlign="Center">
                    <ItemTemplate>
                        <asp:ImageButton ID="imb_reporteTecnico" runat ="server" ImageUrl ="../../images/botones_dis/reporte5.jpg" visible="true"/>
                    </ItemTemplate>
                    </asp:TemplateField>
                    <%--<asp:BoundField DataField="id_catalogo" HtmlEncode="false" HeaderText='res_campoGrilla,doc_pendienteItem_documentos' />--%>                                     
                </Columns>
                <FooterStyle CssClass="gri_pie" />
                <RowStyle CssClass="gri_item" />
                <PagerStyle CssClass="gri_paginacion" />
                <HeaderStyle CssClass="gri_titulo" />
                <AlternatingRowStyle CssClass="gri_itemAlterno" />
                <SelectedRowStyle CssClass="gri_itemSeleccionado" />
            </asp:GridView>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
    </tr>
    <tr>
        <td>
        </td>
    </tr>
    <tr>
        <td>
        </td>
        <td><br />
            <asp:Label ID="lblDocCreado" runat="server" CssClass="lbl"></asp:Label>
            <asp:Label ID="lblNoDoc" runat="server" CssClass="lbl"></asp:Label>
        </td>
        <td>
        </td>
    </tr>
</table>
<asp:Label ID="lblMensaje" runat="server" CssClass="lbl_mensaje"></asp:Label>
<cc1:BotonImagen ID="bti_aceptar" runat="server" ImageUrl="~/images/botones/aceptar.jpg" CausesValidation="False" visible="true"/>