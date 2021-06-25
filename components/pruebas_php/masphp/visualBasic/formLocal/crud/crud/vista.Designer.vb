<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class vista
    Inherits System.Windows.Forms.Form

    'Form overrides dispose to clean up the component list.
    <System.Diagnostics.DebuggerNonUserCode()> _
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Required by the Windows Form Designer
    Private components As System.ComponentModel.IContainer

    'NOTE: The following procedure is required by the Windows Form Designer
    'It can be modified using the Windows Form Designer.  
    'Do not modify it using the code editor.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Me.DataGridView1 = New System.Windows.Forms.DataGridView()
        Me.estado = New System.Windows.Forms.Label()
        Me.agregar = New System.Windows.Forms.Button()
        Me.LblUsuario = New System.Windows.Forms.Label()
        Me.resultado = New System.Windows.Forms.Label()
        Me.LblEdad = New System.Windows.Forms.Label()
        Me.eliminar = New System.Windows.Forms.Button()
        Me.actualizar = New System.Windows.Forms.Button()
        Me.usuario = New System.Windows.Forms.TextBox()
        Me.edad = New System.Windows.Forms.TextBox()
        Me.buscar = New System.Windows.Forms.TextBox()
        CType(Me.DataGridView1, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.SuspendLayout()
        '
        'DataGridView1
        '
        Me.DataGridView1.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize
        Me.DataGridView1.Location = New System.Drawing.Point(48, 165)
        Me.DataGridView1.Name = "DataGridView1"
        Me.DataGridView1.Size = New System.Drawing.Size(393, 280)
        Me.DataGridView1.TabIndex = 0
        '
        'estado
        '
        Me.estado.AutoSize = True
        Me.estado.Font = New System.Drawing.Font("Cambria", 15.75!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.estado.ForeColor = System.Drawing.SystemColors.ButtonHighlight
        Me.estado.Location = New System.Drawing.Point(284, 31)
        Me.estado.Name = "estado"
        Me.estado.Size = New System.Drawing.Size(77, 25)
        Me.estado.TabIndex = 1
        Me.estado.Text = "estado"
        '
        'agregar
        '
        Me.agregar.Location = New System.Drawing.Point(469, 293)
        Me.agregar.Name = "agregar"
        Me.agregar.Size = New System.Drawing.Size(143, 46)
        Me.agregar.TabIndex = 2
        Me.agregar.Text = "Agregar"
        Me.agregar.UseVisualStyleBackColor = True
        '
        'LblUsuario
        '
        Me.LblUsuario.AutoSize = True
        Me.LblUsuario.Font = New System.Drawing.Font("Cambria", 12.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.LblUsuario.ForeColor = System.Drawing.SystemColors.ButtonHighlight
        Me.LblUsuario.Location = New System.Drawing.Point(505, 162)
        Me.LblUsuario.Name = "LblUsuario"
        Me.LblUsuario.Size = New System.Drawing.Size(67, 19)
        Me.LblUsuario.TabIndex = 3
        Me.LblUsuario.Text = "Usuario"
        '
        'resultado
        '
        Me.resultado.AutoSize = True
        Me.resultado.Font = New System.Drawing.Font("Cambria", 15.75!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.resultado.ForeColor = System.Drawing.SystemColors.ButtonHighlight
        Me.resultado.Location = New System.Drawing.Point(146, 458)
        Me.resultado.Name = "resultado"
        Me.resultado.Size = New System.Drawing.Size(357, 25)
        Me.resultado.TabIndex = 4
        Me.resultado.Text = "Se agrego correctamente el usuario"
        '
        'LblEdad
        '
        Me.LblEdad.AutoSize = True
        Me.LblEdad.Font = New System.Drawing.Font("Cambria", 12.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.LblEdad.ForeColor = System.Drawing.SystemColors.ButtonHighlight
        Me.LblEdad.Location = New System.Drawing.Point(525, 236)
        Me.LblEdad.Name = "LblEdad"
        Me.LblEdad.Size = New System.Drawing.Size(47, 19)
        Me.LblEdad.TabIndex = 5
        Me.LblEdad.Text = "Edad"
        '
        'eliminar
        '
        Me.eliminar.Location = New System.Drawing.Point(469, 397)
        Me.eliminar.Name = "eliminar"
        Me.eliminar.Size = New System.Drawing.Size(143, 46)
        Me.eliminar.TabIndex = 6
        Me.eliminar.Text = "Eliminar"
        Me.eliminar.UseVisualStyleBackColor = True
        '
        'actualizar
        '
        Me.actualizar.Location = New System.Drawing.Point(469, 345)
        Me.actualizar.Name = "actualizar"
        Me.actualizar.Size = New System.Drawing.Size(143, 46)
        Me.actualizar.TabIndex = 7
        Me.actualizar.Text = "Actualizar"
        Me.actualizar.UseVisualStyleBackColor = True
        '
        'usuario
        '
        Me.usuario.Location = New System.Drawing.Point(469, 184)
        Me.usuario.Name = "usuario"
        Me.usuario.Size = New System.Drawing.Size(143, 20)
        Me.usuario.TabIndex = 8
        Me.usuario.TextAlign = System.Windows.Forms.HorizontalAlignment.Center
        '
        'edad
        '
        Me.edad.Location = New System.Drawing.Point(469, 258)
        Me.edad.Name = "edad"
        Me.edad.Size = New System.Drawing.Size(143, 20)
        Me.edad.TabIndex = 9
        Me.edad.TextAlign = System.Windows.Forms.HorizontalAlignment.Center
        '
        'buscar
        '
        Me.buscar.Location = New System.Drawing.Point(62, 84)
        Me.buscar.Multiline = True
        Me.buscar.Name = "buscar"
        Me.buscar.Size = New System.Drawing.Size(533, 32)
        Me.buscar.TabIndex = 10
        '
        'vista
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.BackColor = System.Drawing.Color.Purple
        Me.ClientSize = New System.Drawing.Size(642, 503)
        Me.Controls.Add(Me.buscar)
        Me.Controls.Add(Me.edad)
        Me.Controls.Add(Me.usuario)
        Me.Controls.Add(Me.actualizar)
        Me.Controls.Add(Me.eliminar)
        Me.Controls.Add(Me.LblEdad)
        Me.Controls.Add(Me.resultado)
        Me.Controls.Add(Me.LblUsuario)
        Me.Controls.Add(Me.agregar)
        Me.Controls.Add(Me.estado)
        Me.Controls.Add(Me.DataGridView1)
        Me.Name = "vista"
        Me.Text = "vista"
        CType(Me.DataGridView1, System.ComponentModel.ISupportInitialize).EndInit()
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents DataGridView1 As DataGridView
    Friend WithEvents estado As Label
    Friend WithEvents agregar As Button
    Friend WithEvents LblUsuario As Label
    Friend WithEvents resultado As Label
    Friend WithEvents LblEdad As Label
    Friend WithEvents eliminar As Button
    Friend WithEvents actualizar As Button
    Friend WithEvents usuario As TextBox
    Friend WithEvents edad As TextBox
    Friend WithEvents buscar As TextBox
End Class
