 /*Funci�n que arma el URL*/ 

    Public Shared Function imagenTec(ByVal p As String) As String
    Return String.Concat("file:\\\\", System.Web.HttpContext.Current.Server.MapPath("~"), "/archivos/seg_usuario/" , p, "/firma.jpg")
    End Function
   
   /*Funci�n que comprueba si la imagen existe*/
   
Public shared Function comprobarImagen(ByVal URL As String) As Boolean
    Try
        Dim request As System.Net.HttpWebRequest= System.Net.HttpWebRequest.Create(URL)
        Dim response As System.Net.HttpWebResponse = request.GetResponse()
    Catch ex As Exception
        Return False
    End Try
    Return True
End Function

/*Funci�n que recibe el URL*/
Public Shared Function imagenhttp(ByVal p As String) As String
    Return String.Concat("http://", _
    System.Web.HttpContext.Current.Request.Url.Host, _
    ":", System.Web.HttpContext.Current.Request.Url.Port, _
    System.Web.HttpContext.Current.Request.ApplicationPath, _
   "/archivos/seg_usuario/" , p, "/firma.jpg")
    End Function

/*Expresi�n del Hidden*/

=IIF(code.comprobarImagen(code.imagenhttp(First(Fields!id_coordinador.Value, "origen1"))),false,true)

/*Expresi�n del value*/

=code.imagenTec(First(Fields!id_coordinador.Value, "origen1"))

/*funci�n para imagen que se ve en servidor pero en publico NO*/

     Public Shared Function imagenFirma(ByVal p As String) As String
    Return String.Concat("file:\\\\", System.Web.HttpContext.Current.Server.MapPath("~"), "/archivos/temp/", p, ".jpg")
    End Function

/*expresi�n del value*/
=code.imagenFirma(right(left(right(First(Fields!imgenURL.Value, "origen1"),16),12),len(left(right(First(Fields!imgenURL.Value, "origen1"),16),12))-instr(1,left(right(First(Fields!imgenURL.Value, "origen1"),16),12),"/",1)))

   