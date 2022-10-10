''24/01/2020 12:30:59 p. m.
Imports System.data
Imports System.data.SqlClient
Imports Microsoft.Practices.EnterpriseLibrary.Data
Imports Microsoft.Practices.EnterpriseLibrary.Common
Imports system.Data.Common
Namespace samm_datos
<System.Serializable()> Public Class doc_subtipoLectura

 public a_int_id as integer=0
 public a_bol_active as  boolean=1
 public a_str_subtipoLectura as  String = ""
 public a_str_subtipoLectura_codigo as  String = ""
 public a_int_id_subtipoDocumento as integer=0
public a_str_subtipoDocumento_aux as String = ""
 public a_int_id_subtipoDocumento_origen as integer=0
public a_str_subtipoDocumento_origen_aux as String = ""
 private m_int_id as integer=0
 private m_bol_active as  boolean=1
 private m_str_subtipoLectura as  String = ""
 private m_str_subtipoLectura_codigo as  String = ""
 private m_int_id_subtipoDocumento as integer=0
private m_str_subtipoDocumento_aux as String = ""
 private m_int_id_subtipoDocumento_origen as integer=0
private m_str_subtipoDocumento_origen_aux as String = ""
 private m_str_uid As string =  ""

 private m_str_eid As string =  ""

 private m_int_id_usuario_modifico As Integer  = 0
<NonSerialized()> private m_db As Database = conexion.CrearBaseDatos(New conexion().f_str_cadenaConexion)

public Function f_str_getUid() As String
Return m_str_uid
End Function

public Function f_str_getEid() As String
Return m_str_eid
End Function

public Function f_int_getIdUsuarioModifico() As Integer
Return m_int_id_usuario_modifico
End Function

#region"Metodos Constructores"
Public Sub New(ByVal p_int_idUsuarioModifico As Integer)
m_int_id_usuario_modifico = p_int_idUsuarioModifico
End Sub
Public Sub New(ByVal p_id As Integer,byval p_int_idUsuarioModifico as integer)
		Dim t_sqr As SqlDataReader=nothing
		Dim t_dbcmd As DbCommand = m_db.GetSqlStringCommand("reg_doc_subtipoLectura")
		t_dbcmd.CommandType=CommandType.StoredProcedure
			m_int_id_usuario_Modifico = p_int_idUsuarioModifico
		m_db.AddInParameter(t_dbcmd, "@p_id", DbType.Int32, p_id)
		try
			t_sqr = m_db.ExecuteReader(t_dbcmd)
			If t_sqr.Read() Then

If t_sqr.Item("id").GetType().ToString() <> "System.DBNull" Then 
Me.a_int_id= t_sqr("id")
Me.m_int_id=Me.a_int_id
End If

If t_sqr.Item("uid").GetType().ToString() <> "System.DBNull" Then 
Me.m_str_uid=t_sqr("uid")
End If

If t_sqr.Item("eid").GetType().ToString() <> "System.DBNull" Then 
Me.m_str_eid=t_sqr("eid")
End If

If t_sqr.Item("active").GetType().ToString() <> "System.DBNull" Then 

Me.a_bol_active= t_sqr("active")
Me.m_bol_active=Me.a_bol_active
End If

If t_sqr.Item("subtipoLectura").GetType().ToString() <> "System.DBNull" Then 
Me.a_str_subtipoLectura= t_sqr("subtipoLectura")
Me.m_str_subtipoLectura=Me.a_str_subtipoLectura
End If

If t_sqr.Item("subtipoLectura_codigo").GetType().ToString() <> "System.DBNull" Then 
Me.a_str_subtipoLectura_codigo= t_sqr("subtipoLectura_codigo")
Me.m_str_subtipoLectura_codigo=Me.a_str_subtipoLectura_codigo
End If

If t_sqr.Item("id_subtipoDocumento").GetType().ToString() <> "System.DBNull" Then 
Me.a_int_id_subtipoDocumento= t_sqr("id_subtipoDocumento")
Me.m_int_id_subtipoDocumento=Me.a_int_id_subtipoDocumento
End If

If t_sqr.Item("id_subtipoDocumento_origen").GetType().ToString() <> "System.DBNull" Then 
Me.a_int_id_subtipoDocumento_origen= t_sqr("id_subtipoDocumento_origen")
Me.m_int_id_subtipoDocumento_origen=Me.a_int_id_subtipoDocumento_origen
End If
End If
Catch exc As Exception
If Not t_sqr Is Nothing Then
If Not t_sqr.IsClosed Then t_sqr.Close()
End If
 Throw New Exception(Me.GetType.Name & "- New   : " & exc.Message)
 Finally
 If Not t_sqr Is Nothing Then
 If Not t_sqr.IsClosed Then t_sqr.Close()
End If
 End Try 
	end sub
#end region

#region "Metodos de Actualizacion"
	Public Function f_strActualizar(Optional ByVal p_trn As DbTransaction = Nothing) as string
		Dim t_int As integer
		Dim strError As string = "" 

		Dim t_dbcmd As DbCommand = m_db.GetSqlStringCommand("upd_doc_subtipoLectura")
		t_dbcmd.CommandType = CommandType.StoredProcedure
m_db.AddInParameter(t_dbcmd, "@p_id", DbType.Int32, Me.a_int_id)
If Me.a_bol_active<> Me.m_bol_active Then m_db.AddInParameter(t_dbcmd, "@p_active", DbType.Boolean, Me.a_bol_active)
If Me.a_str_subtipoLectura<> Me.m_str_subtipoLectura Then m_db.AddInParameter(t_dbcmd, "@p_subtipoLectura", DbType.String, Me.a_str_subtipoLectura)
If Me.a_str_subtipoLectura_codigo<> Me.m_str_subtipoLectura_codigo Then m_db.AddInParameter(t_dbcmd, "@p_subtipoLectura_codigo", DbType.String, Me.a_str_subtipoLectura_codigo)
If Me.a_int_id_subtipoDocumento<> Me.m_int_id_subtipoDocumento Then m_db.AddInParameter(t_dbcmd, "@p_id_subtipoDocumento", DbType.Int32, Me.a_int_id_subtipoDocumento)
If Me.a_int_id_subtipoDocumento_origen<> Me.m_int_id_subtipoDocumento_origen Then m_db.AddInParameter(t_dbcmd, "@p_id_subtipoDocumento_origen", DbType.Int32, Me.a_int_id_subtipoDocumento_origen)
		m_db.AddInParameter(t_dbcmd, "@p_id_usuario_Modifico", DbType.Int32, Me.m_int_id_usuario_Modifico )
		Try
			If Not p_trn Is Nothing Then
			t_int = m_db.ExecuteNonQuery(t_dbcmd, p_trn)
			Else
			t_int = m_db.ExecuteNonQuery(t_dbcmd)
			End If
		Catch exc As Exception
			strError=exc.message
		End Try
			return strError
	End Function
	Public Function f_strInsertar(ByVal p_str_uid As String, ByVal p_str_eid As String,Optional ByVal p_trn As DbTransaction = Nothing) as string
		If m_db Is Nothing Then
		m_db = conexion.CrearBaseDatos(New conexion().f_str_cadenaConexion)
		End If
		Dim t_sqr As sqldatareader=nothing
		Dim t_dbcmd As DbCommand = m_db.GetSqlStringCommand("ins_doc_subtipoLectura")
		Dim strError As string = "" 

		Me.m_str_eid = p_str_eid 

		Me.m_str_uid = p_str_uid 

		t_dbcmd.CommandType = CommandType.StoredProcedure
m_db.AddInParameter(t_dbcmd, "@p_uid", DbType.String, Me.m_str_uid)
m_db.AddInParameter(t_dbcmd, "@p_eid", DbType.String, Me.m_str_eid)
m_db.AddInParameter(t_dbcmd, "@p_subtipoLectura", DbType.String, Me.a_str_subtipoLectura)
m_db.AddInParameter(t_dbcmd, "@p_subtipoLectura_codigo", DbType.String, Me.a_str_subtipoLectura_codigo)
		m_db.AddInParameter(t_dbcmd, "@p_id_subtipoDocumento", DbType.Int32, Me.a_int_id_subtipoDocumento)
		m_db.AddInParameter(t_dbcmd, "@p_id_subtipoDocumento_origen", DbType.Int32, Me.a_int_id_subtipoDocumento_origen)
m_db.AddInParameter(t_dbcmd, "@p_id_usuario_creo", DbType.Int32, Me.m_int_id_usuario_modifico)
m_db.AddInParameter(t_dbcmd, "@p_id_usuario_modifico", DbType.Int32, Me.m_int_id_usuario_modifico)
		Try
If Not p_trn Is Nothing Then
t_sqr = m_db.ExecuteReader(t_dbcmd, p_trn)
Else
t_sqr = m_db.ExecuteReader(t_dbcmd)
End If
If t_sqr.Read() Then
Me.a_int_id = t_sqr("id")
Else
strError = "No se insertó el registro"
End If
Catch exc As Exception
strError = exc.Message
Finally
If Not t_sqr Is Nothing Then If Not t_sqr.IsClosed Then t_sqr.Close()
End Try
Return strError
End Function

	Public Function f_strActivar(Optional ByVal p_trn As DbTransaction = Nothing) as String
		Dim t_int As integer
		Dim t_str as String=""
		Dim t_dbcmd As DbCommand = m_db.GetSqlStringCommand("act_doc_subtipoLectura")
		t_dbcmd.CommandType = CommandType.StoredProcedure
		m_db.AddInParameter(t_dbcmd, "@p_id", DbType.Int32, Me.a_int_id)
		m_db.AddInParameter(t_dbcmd, "@p_active", DbType.Boolean, Me.a_bol_active)
		m_db.AddInParameter(t_dbcmd, "@p_id_usuario_modifico", DbType.Int32, Me.m_int_id_usuario_modifico)
		Try
			If Not p_trn Is Nothing Then
			t_int = m_db.ExecuteNonQuery(t_dbcmd, p_trn)
			Else
			t_int = m_db.ExecuteNonQuery(t_dbcmd)
			End If
		Catch exc As Exception
			t_str = Me.GetType.Name & " - f_strActivar : " & exc.Message
		End Try
		Return t_str
	End Function

	Public Shared Function f_strActivarXID(ByVal p_int_id As String, ByVal p_bol_active As String, ByVal p_int_idUsuario As Integer, ByVal p_trn As DbTransaction) As String
		Dim t_int As integer
		Dim t_str as String=""
		Dim t_db As Database=conexion.CrearBaseDatos(New conexion().f_str_cadenaConexion)
		Dim t_dbcmd As DbCommand = t_db.GetSqlStringCommand("act_doc_subtipoLectura")
		t_dbcmd.CommandType = CommandType.StoredProcedure
		t_db.AddInParameter(t_dbcmd, "@p_id", DbType.Int32, CInt(p_int_id))
		t_db.AddInParameter(t_dbcmd, "@p_active", DbType.Boolean, IIf(p_bol_active = "0", False, True))
		t_db.AddInParameter(t_dbcmd, "@p_id_usuario_modifico", DbType.Int32, p_int_idUsuario)
		Try
			If Not p_trn Is Nothing Then
			t_int = t_db.ExecuteNonQuery(t_dbcmd, p_trn)
			Else
			t_int = t_db.ExecuteNonQuery(t_dbcmd)
			End If
		Catch exc As Exception
			t_str = " - f_strActivarXID : " & exc.Message
		End Try
		Return t_str
	End Function
#end region

#region "Metodos de Consulta"

	Public shared Function f_dttdoc_subtipoLecturas(ByVal p_str_filtro As String, ByVal p_str_orden As String, ByVal p_str_campos As String , ByVal p_str_eid As String) as datatable
		Dim dts As New DataSet()
		Dim t_dbcmd As DbCommand
		Dim t_db As Database = conexion.CrearBaseDatos(New conexion().f_str_cadenaConexion)
		If p_str_eid = "" Then
			t_dbcmd= t_db.GetSqlStringCommand("sel_doc_subtipoLecturas")
		Else
			t_dbcmd= t_db.GetSqlStringCommand("sel_doc_subtipoLecturas_m")
			t_db.AddInParameter(t_dbcmd, "@p_eid", DbType.String, p_str_eid)
		End If
		t_dbcmd.CommandType = CommandType.StoredProcedure
		if(p_str_filtro <> "") Then t_db.AddInParameter(t_dbcmd, "@p_filtro", DbType.String, p_str_filtro)
		if(p_str_orden <> "") Then t_db.AddInParameter(t_dbcmd, "@p_orden", DbType.String, p_str_orden)
		if(p_str_campos <> "") Then t_db.AddInParameter(t_dbcmd, "@p_campos", DbType.String, p_str_campos)
		Try
			dts = t_db.ExecuteDataset(t_dbcmd)
			dts.Tables(0).TableName = "doc_subtipoLectura"
		f_dttdoc_subtipoLecturas=dts.tables(0)
		Catch exc As Exception
			Throw New Exception("f_dttdoc_subtipoLecturas : " & exc.Message)
		End Try
	End Function
	Public shared Function f_dttListadoc_subtipoLecturas(ByVal p_str_eid As String) as datatable
		Dim dts As New DataSet()
		Dim t_dbcmd As DbCommand
		Dim t_db As Database=conexion.CrearBaseDatos(New conexion().f_str_cadenaConexion)
		If p_str_eid = "" Then
			t_dbcmd= t_db.GetSqlStringCommand("lis_doc_subtipoLecturas")
		Else
			t_dbcmd= t_db.GetSqlStringCommand("lis_doc_subtipoLecturas_m")
			t_db.AddInParameter(t_dbcmd, "@p_eid", DbType.String, p_str_eid)
		End If
		t_dbcmd.CommandType = CommandType.StoredProcedure
		Try
			dts = t_db.ExecuteDataset(t_dbcmd)
			dts.Tables(0).TableName = "doc_subtipoLectura"
		f_dttListadoc_subtipoLecturas=dts.tables(0)
		Catch exc As Exception
			Throw New Exception(" - f_dttListadoc_subtipoLecturas : " & exc.Message)
		End Try
	End Function
Public Sub f_str_enlazarAuxiliares()
Dim dts As New DataSet()
Dim t_dbcmd As DbCommand
t_dbcmd = m_db.GetSqlStringCommand("reg_doc_subtipoLectura_aux")
t_dbcmd.CommandType = CommandType.StoredProcedure
m_db.AddInParameter(t_dbcmd, "@p_id", DbType.Int32, a_int_id)
Try
dts = m_db.ExecuteDataset(t_dbcmd)
If dts.tables.count=1 andalso dts.tables(0).rows.count=1 Then
a_str_subtipoDocumento_aux = dts.Tables(0).Rows(0)("subtipoDocumento")
a_str_subtipoDocumento_origen_aux = dts.Tables(0).Rows(0)("subtipoDocumento_origen")
End If
Catch exc As Exception
Throw New Exception(Me.GetType.Name & " - f_str_enlazarAuxiliares : " & exc.Message)
End Try
End Sub
#end region 

#region "Funciones de consulta relacionadas con otras tabla"

#end region 

#region "Funciones de actualizacion relacionadas con otras tabla"

#end region 

End Class
End Namespace