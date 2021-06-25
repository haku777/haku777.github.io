Imports System.Data
Imports System.Data.SqlClient

Module conexion

    Public conexion As New SqlClient.SqlConnection("
Data Source=NITRO5\INSTANCIA_HAKU;Initial Catalog=pruebas;User ID=sa;password=Jimmyred775;")

    Public Function estado() As String


        Try
            conexion.Open()
            If conexion.State = 1 Then
                Return "conectado"
            End If
        Catch ex As Exception
            Return "desconectado"
        End Try


    End Function

End Module
