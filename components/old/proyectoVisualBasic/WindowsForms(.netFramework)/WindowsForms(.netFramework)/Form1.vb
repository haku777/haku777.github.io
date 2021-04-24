Imports System.Data.Odbc

Public Class Form1

    Public Conexion As OdbcConnection

    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        Conexion = New OdbcConnection
        Conexion.ConnectionString = "Dsn=Magister;Uid=sysdba; pwd=masterkey;"
        Conexion.Open()
    End Sub

    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        Dim cwd As New OdbcCommand("insert into datos_personales(nombre) values('" & TextBox1.Text & "')", Conexion)
        cwd.ExecuteNonQuery()
    End Sub

    Private Sub ConsultarPre()
        Dim CodigoNumeroPre As New OdbcDataAdapter("Select coe_empresa, coe_documento, coe_numero, coe_fecha, coe_cliente, coe_cliente_sucursal, coe_sincronizado, coe_observaciones, coe_numero_mg,coe_fecha_update from cotizacion_encabezado where UPPER(COE_NUMERO) like '%" & (txtBuscarPre.Text) & "%'", Conexion)
        Dim ds As New DataSet
        CodigoNumeroPre.Fill(ds)
        If ds.Tables(0).Rows.Count > 0 Then
            DataGridViewPre.DataSource = ds.Tables(0)
        Else
            DataGridViewPre.DataSource = Nothing
        End If
    End Sub
    Private Sub ConsultarItemNombre()
        Dim CnombreItem As New OdbcDataAdapter("Select * from cotizaciones where UPPER(COT_DESCRIPCION_ITEM) like '%" & UCase(txtBuscarItem.Text) & "%'", Conexion)
        Dim ds As New DataSet
        CnombreItem.Fill(ds)
        If ds.Tables(0).Rows.Count > 0 Then
            DataGridViewItem.DataSource = ds.Tables(0)
        Else
            DataGridViewItem.DataSource = Nothing
        End If
    End Sub

    Private Sub ConsultarItemCodigo()
        Dim CodigoNumeroItem As New OdbcDataAdapter("Select * from cotizaciones where UPPER(COT_NUMERO) like '%" & UCase(txtBuscarCodigoItem.Text) & "%'", Conexion)
        Dim ds As New DataSet
        CodigoNumeroItem.Fill(ds)
        If ds.Tables(0).Rows.Count > 0 Then
            DataGridViewItem.DataSource = ds.Tables(0)
        Else
            DataGridViewItem.DataSource = Nothing
        End If
    End Sub
    Private Sub txtBuscarPre_TextChanged(sender As Object, e As EventArgs) Handles txtBuscarPre.TextChanged
        ConsultarPre()
    End Sub

    Private Sub txtBuscarItem_TextChanged(sender As Object, e As EventArgs) Handles txtBuscarItem.TextChanged
        ConsultarItemNombre()
    End Sub

    Private Sub txtBuscarCodigoItem_TextChanged(sender As Object, e As EventArgs) Handles txtBuscarCodigoItem.TextChanged
        ConsultarItemCodigo()
    End Sub

End Class
