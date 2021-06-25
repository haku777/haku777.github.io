Imports crud.conexion
Public Class vista
    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        estado.Text = conexion.estado()
        DataGridView1.DataSource = cargarDatos()

    End Sub
    Public Function cargarDatos() As DataTable
        Dim dtt As New DataTable
        Dim con As SqlClient.SqlConnection = conexion.conexion
        Dim consulta As String = "select id,usuario,edad from usuarios where active=1"
        Dim dap As New SqlClient.SqlDataAdapter(consulta, con)
        dap.Fill(dtt)
        Return dtt
    End Function

    Private Sub agregar_Click(sender As Object, e As EventArgs) Handles agregar.Click
        MessageBox.Show("quiere agregar al usuario?", "Title", MessageBoxButtons.YesNoCancel, MessageBoxIcon.Question)
        If usuario.Text <> Nothing And edad.Text <> Nothing Then
            Dim user As String = usuario.Text
            Dim old As Integer = Int(edad.Text)

            resultado.Text = "se agregaron los datos"
        Else
            resultado.Text = "campos vacios"
        End If
    End Sub

    Private Sub edad_TextChanged(sender As Object, e As EventArgs) Handles edad.TextChanged
        If Not IsNumeric(edad.Text) Then
            resultado.Text = "solo numeros"
            edad.Text = ""
        End If
    End Sub
    'MessageBox.Show("seguro de eliminar el usuario?", "Message", MessageBoxButtons.YesNoCancel, MessageBoxIcon.Question) = DialogResult.Yes
End Class
