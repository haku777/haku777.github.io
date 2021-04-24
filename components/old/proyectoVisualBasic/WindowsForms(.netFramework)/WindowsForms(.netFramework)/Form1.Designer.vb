<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class Form1
    Inherits System.Windows.Forms.Form

    'Form reemplaza a Dispose para limpiar la lista de componentes.
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

    'Requerido por el Diseñador de Windows Forms
    Private components As System.ComponentModel.IContainer

    'NOTA: el Diseñador de Windows Forms necesita el siguiente procedimiento
    'Se puede modificar usando el Diseñador de Windows Forms.  
    'No lo modifique con el editor de código.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Me.DataGridViewItem = New System.Windows.Forms.DataGridView()
        Me.Insertar = New System.Windows.Forms.Label()
        Me.Label2 = New System.Windows.Forms.Label()
        Me.TextBox1 = New System.Windows.Forms.TextBox()
        Me.txtBuscarItem = New System.Windows.Forms.TextBox()
        Me.Button1 = New System.Windows.Forms.Button()
        Me.Label3 = New System.Windows.Forms.Label()
        Me.Label1 = New System.Windows.Forms.Label()
        Me.Label4 = New System.Windows.Forms.Label()
        Me.txtBuscarPre = New System.Windows.Forms.TextBox()
        Me.Label5 = New System.Windows.Forms.Label()
        Me.txtBuscarCodigoItem = New System.Windows.Forms.TextBox()
        Me.DataGridViewPre = New System.Windows.Forms.DataGridView()
        Me.Label6 = New System.Windows.Forms.Label()
        Me.Label7 = New System.Windows.Forms.Label()
        CType(Me.DataGridViewItem, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.DataGridViewPre, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.SuspendLayout()
        '
        'DataGridViewItem
        '
        Me.DataGridViewItem.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize
        Me.DataGridViewItem.Location = New System.Drawing.Point(12, 388)
        Me.DataGridViewItem.Name = "DataGridViewItem"
        Me.DataGridViewItem.Size = New System.Drawing.Size(799, 248)
        Me.DataGridViewItem.TabIndex = 0
        '
        'Insertar
        '
        Me.Insertar.AutoSize = True
        Me.Insertar.Location = New System.Drawing.Point(73, 50)
        Me.Insertar.Name = "Insertar"
        Me.Insertar.Size = New System.Drawing.Size(91, 13)
        Me.Insertar.TabIndex = 1
        Me.Insertar.Text = "Nombre (Inactivo)"
        '
        'Label2
        '
        Me.Label2.AutoSize = True
        Me.Label2.Font = New System.Drawing.Font("Microsoft Sans Serif", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.Label2.Location = New System.Drawing.Point(375, 310)
        Me.Label2.Name = "Label2"
        Me.Label2.Size = New System.Drawing.Size(103, 20)
        Me.Label2.TabIndex = 2
        Me.Label2.Text = "Buscar Items"
        '
        'TextBox1
        '
        Me.TextBox1.Location = New System.Drawing.Point(195, 50)
        Me.TextBox1.Name = "TextBox1"
        Me.TextBox1.Size = New System.Drawing.Size(126, 20)
        Me.TextBox1.TabIndex = 3
        '
        'txtBuscarItem
        '
        Me.txtBuscarItem.Location = New System.Drawing.Point(123, 338)
        Me.txtBuscarItem.Name = "txtBuscarItem"
        Me.txtBuscarItem.Size = New System.Drawing.Size(248, 20)
        Me.txtBuscarItem.TabIndex = 5
        '
        'Button1
        '
        Me.Button1.Location = New System.Drawing.Point(534, 48)
        Me.Button1.Name = "Button1"
        Me.Button1.Size = New System.Drawing.Size(179, 23)
        Me.Button1.TabIndex = 6
        Me.Button1.Text = "Insertar (Inactivo)"
        Me.Button1.UseVisualStyleBackColor = True
        '
        'Label3
        '
        Me.Label3.AutoSize = True
        Me.Label3.Font = New System.Drawing.Font("Microsoft Sans Serif", 18.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.Label3.Location = New System.Drawing.Point(255, 9)
        Me.Label3.Name = "Label3"
        Me.Label3.Size = New System.Drawing.Size(274, 29)
        Me.Label3.TabIndex = 8
        Me.Label3.Text = "Busqueda Base Firebird"
        '
        'Label1
        '
        Me.Label1.AutoSize = True
        Me.Label1.Location = New System.Drawing.Point(73, 342)
        Me.Label1.Name = "Label1"
        Me.Label1.Size = New System.Drawing.Size(44, 13)
        Me.Label1.TabIndex = 9
        Me.Label1.Text = "Nombre"
        '
        'Label4
        '
        Me.Label4.AutoSize = True
        Me.Label4.Font = New System.Drawing.Font("Microsoft Sans Serif", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.Label4.Location = New System.Drawing.Point(316, 79)
        Me.Label4.Name = "Label4"
        Me.Label4.Size = New System.Drawing.Size(162, 20)
        Me.Label4.TabIndex = 10
        Me.Label4.Text = "Buscar pre - Facturas"
        '
        'txtBuscarPre
        '
        Me.txtBuscarPre.Location = New System.Drawing.Point(320, 119)
        Me.txtBuscarPre.Name = "txtBuscarPre"
        Me.txtBuscarPre.Size = New System.Drawing.Size(248, 20)
        Me.txtBuscarPre.TabIndex = 11
        '
        'Label5
        '
        Me.Label5.AutoSize = True
        Me.Label5.Location = New System.Drawing.Point(448, 345)
        Me.Label5.Name = "Label5"
        Me.Label5.Size = New System.Drawing.Size(80, 13)
        Me.Label5.TabIndex = 12
        Me.Label5.Text = "Codigo Numero"
        '
        'txtBuscarCodigoItem
        '
        Me.txtBuscarCodigoItem.Location = New System.Drawing.Point(534, 342)
        Me.txtBuscarCodigoItem.Name = "txtBuscarCodigoItem"
        Me.txtBuscarCodigoItem.Size = New System.Drawing.Size(248, 20)
        Me.txtBuscarCodigoItem.TabIndex = 13
        '
        'DataGridViewPre
        '
        Me.DataGridViewPre.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize
        Me.DataGridViewPre.Location = New System.Drawing.Point(12, 162)
        Me.DataGridViewPre.Name = "DataGridViewPre"
        Me.DataGridViewPre.Size = New System.Drawing.Size(796, 129)
        Me.DataGridViewPre.TabIndex = 14
        '
        'Label6
        '
        Me.Label6.AutoSize = True
        Me.Label6.Location = New System.Drawing.Point(120, 119)
        Me.Label6.Name = "Label6"
        Me.Label6.Size = New System.Drawing.Size(144, 13)
        Me.Label6.TabIndex = 15
        Me.Label6.Text = "Codigo Numero Pre - Factura"
        '
        'Label7
        '
        Me.Label7.AutoSize = True
        Me.Label7.Location = New System.Drawing.Point(599, 126)
        Me.Label7.Name = "Label7"
        Me.Label7.Size = New System.Drawing.Size(103, 13)
        Me.Label7.TabIndex = 16
        Me.Label7.Text = "Documento_numero"
        '
        'Form1
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(820, 646)
        Me.Controls.Add(Me.Label7)
        Me.Controls.Add(Me.Label6)
        Me.Controls.Add(Me.DataGridViewPre)
        Me.Controls.Add(Me.txtBuscarCodigoItem)
        Me.Controls.Add(Me.Label5)
        Me.Controls.Add(Me.txtBuscarPre)
        Me.Controls.Add(Me.Label4)
        Me.Controls.Add(Me.Label1)
        Me.Controls.Add(Me.Label3)
        Me.Controls.Add(Me.Button1)
        Me.Controls.Add(Me.txtBuscarItem)
        Me.Controls.Add(Me.TextBox1)
        Me.Controls.Add(Me.Label2)
        Me.Controls.Add(Me.Insertar)
        Me.Controls.Add(Me.DataGridViewItem)
        Me.Name = "Form1"
        Me.Text = "Busqueda Firebird"
        CType(Me.DataGridViewItem, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.DataGridViewPre, System.ComponentModel.ISupportInitialize).EndInit()
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents DataGridViewItem As DataGridView
    Friend WithEvents Insertar As Label
    Friend WithEvents Label2 As Label
    Friend WithEvents TextBox1 As TextBox
    Friend WithEvents txtBuscarItem As TextBox
    Friend WithEvents Button1 As Button
    Friend WithEvents Label3 As Label
    Friend WithEvents Label1 As Label
    Friend WithEvents Label4 As Label
    Friend WithEvents txtBuscarPre As TextBox
    Friend WithEvents Label5 As Label
    Friend WithEvents txtBuscarCodigoItem As TextBox
    Friend WithEvents DataGridViewPre As DataGridView
    Friend WithEvents Label6 As Label
    Friend WithEvents Label7 As Label
End Class
