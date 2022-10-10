(P)15838(Sop 968)(se esta despachando con un horometro superior 
	y una fecha inferior a la ultima reportada)(subir documento de especificacion)


D:\HAKU\SAMM\SAMM_V5_1_5\SAMM\samcore\Mantenimiento\Equipo.cs
D:\HAKU\SAMM\SAMM_V5_1_5\SAMM\website\forms\alq\alq_DevolucionEquipos.aspx (line 148,794,803)
D:\HAKU\SAMM\SAMM_V5_1_5\SAMM\website\forms\alq\alq_despachoEquipos.aspx.vb


validar primero la fecha luego el horometro

tener en cuenta la sol (16207,15842,16163,16217)
sol 16725(ajuste secundario)
______________________________________

Sop - 932

		D:\HAKU\SAMM\SAMM_V5_1_5\SAMM\website\controles\formsV\doc_documento_alquiler.ascx  (line 232)
		D:\HAKU\SAMM\SAMM_V5_1_5\SAMM\website\controles\formsV\doc_documento_alquiler.ascx.vb  (line 13, 84, 182)
	Datos:
		D:\HAKU\SAMM\SAMM_V5_1_5\SAMM\website\controles\formsV\doc_documento_solicitud.ascx
		D:\HAKU\SAMM\SAMM_V5_1_5\SAMM\website\controles\formsV\doc_documento_solicitud.ascx.vb


nueva edicion 24/09/2020

		D:\HAKU\SAMM\SAMM_2020\website\controles\formsH\doc_documento_alquiler.ascx
		D:\HAKU\SAMM\SAMM_V5_1_5\SAMM\website\controles\formsV\doc_documento_alquiler.ascx.vb  (line 13, 84, 182)

______________________________________

Sop - 933
	D:\HAKU\SAMM\SAMM_2020\website\forms\cat\detalleTempario.aspx(9, 83-99)
	D:\HAKU\SAMM\SAMM_2020\website\forms\cat\detalleTempario.aspx.vb()
D:\HAKU\SAMM\SAMM_2020\website\App_GlobalResources\res_metadata.resx

datos
	D:\HAKU\SAMM\SAMM_2020\website\forms\doc\itemDocumento.aspx.vb
D:\HAKU\SAMM\SAMM_2020\website\controles\general\busquedaAvanzadaMultiple.ascx.vb

    Actividades = 3
    Equipos = 1
    Otros = 6
    Productos = 5
    Repuestos = 2
    Temparios = 4
______________________________________
814

---------------------------
844
\website\controles\doc\pop_configSubtipos.ascx
\website\controles\doc\pop_configSubtipos.ascx.vb
\website\controles\doc\inc_subTipoDocumento.ascx
\website\controles\doc\inc_subTipoDocumento.ascx.vb
\capadatos\tablas\doc_subtipoLectura.vb
sop844.sql

---------------------------
sop - 845

documento de especificacion
creacion de parametros para los subtipos que podran evidenciarse por perfil

sp 845.sql
D:\HAKU\SAMM\SAMM_2020\website\controles\seg\inc_itemDocumento.ascx
D:\HAKU\SAMM\SAMM_2020\website\controles\seg\inc_itemDocumento.ascx.vb
D:\HAKU\SAMM\SAMM_2020\website\controles\doc\pop_documentoCatalogos.ascx.vb


3102963


parametrizable (solo en la tabla gen_config y leerlo desde la consulta)
maxima cantidad de registros

D:\HAKU\SAMM\SAMM_2020\samm_logica\ItemDocumento.vb
D:\HAKU\SAMM\SAMM_2020\website\forms\doc\itemDocumento.aspx.vb
D:\HAKU\SAMM\SAMM_2020\website\controles\doc\pop_documentoCatalogos.ascx.vb



------
ot 67

13537
16652

______________________________________

sop 129

D:\HAKU\SAMM\SAMM_2020\website\controles\doc\pop_entregarRequisicion.ascx
D:\HAKU\SAMM\SAMM_2020\website\controles\doc\pop_entregarRequisicion.ascx.vb
D:\HAKU\SAMM\SAMM_2020\website\App_GlobalResources\res_metadata.resx
D:\HAKU\SAMM\SAMM_2020\samm_logica\Documento.vb


ByVal p_arr_ot As ArrayList, ByVal p_arr_tecnicos As String _
, ByVal p_dat_inicio As Date, ByVal p_dat_fin As Date _
, ByVal p_str_comentario As String, ByVal p_int_usuario As Integer _
, ByVal p_lis_diasSemanaHabiles As List(Of DayOfWeek) _
, ByVal p_bol_permitirParcieles As Boolean _
, ByVal p_bol_otsParaTodos As Boolean _
, ByVal p_str_eid As String, ByVal p_str_uid As String


______________________________________
Sop 779

______________________________________
Sop 441      -----------------------------------------------

	inicial

editados: 
	D:\HAKU\SAMM\SAMM_2020\website\App_GlobalResources\res_metadata.resx    (Line 4277)

	D:\HAKU\SAMM\SAMM_2020\capadatos\tablas\gen_envioCorreo.vb (todo)ya capadatos

	D:\HAKU\SAMM\SAMM_2020\website\controles\formsH\gen_envioCorreo.ascx    (Line 348)ya

	D:\HAKU\SAMM\SAMM_2020\website\controles\formsV\gen_envioCorreo.ascx    (Line 359)ya

	D:\HAKU\SAMM\SAMM_2020\website\controles\formsV\gen_envioCorreo.ascx.vb (Line 79)ya

	D:\HAKU\SAMM\SAMM_2020\website\controles\doc\pop_cambiarEstado.ascx()ya

	D:\HAKU\SAMM\SAMM_2020\website\controles\doc\pop_cambiarEstado.ascx.vb()ya


-------------
CAmbios Base de datos:

	- ALTER PROCEDURE [dbo].[reg_gen_envioCorreo]
	- ALTER PROCEDURE [dbo].[upd_gen_envioCorreo]
	- ALTER PROCEDURE [dbo].[ins_gen_envioCorreo]
	- ALTER  VIEW [dbo].[view_gen_envioCorreo] 
	- SP Creacion Columna [gen_envioCorreo]


-------------
nota:

1 si 
no aparece en pop ,adjuntos

1 no no muestra el chke pero no se adjuntan

2 si 
en el pop se muestra el check y esta ckekeado

2 no 
se muestra el check
---------------
notas2:

id_estadoTipoDocumento

D:\HAKU\SAMM\SAMM_2020\website\archivos\temp\Solicitud_de_ServicioSOL-33_Davivienda.pdf

C:\Users\wvany\Desktop


 public a_int_rbl_adjuntarArchivo as integer=0





If Me.a_int_rbl_adjuntarArchivo<> Me.M_int_rbl_adjuntarArchivo 

Then m_db.AddInParameter(t_dbcmd, "@p_tiempo_por_mensajes", DbType.Int32, Me.a_int_tiempo_por_mensajes)



	se debe agregar una coluna a la tabla 'gen_envioCorreo'






D:\HAKU\SAMM\SAMM_2020\website\archivos\temp\Solicitud_de_ServicioSOL-32_Davivienda.pdf




______________________________________

997 (SOL-16222)( https://youtu.be/bJVK86ojECo )

D:\HAKU\SAMM\SAMM_2020\website\controles\formsV\doc_documento_solicitud.ascx.vb (Line 170)

______________________________________

996 (16140)(definicion) creacion documento y desarrollo(https://youtu.be/X3T52EpniEg)

D:\HAKU\SAMM\SAMM_2020\website\interfaces\servicio\reporte.aspx
D:\HAKU\SAMM\SAMM_2020\website\interfaces\servicio\reporte.aspx.vb


______________________________________
777 responsive bloque home 

D:\HAKU\SAMM\SAMM_V5_1_6\website\css\home.css
D:\HAKU\SAMM\SAMM_V5_1_6\website\forms\general\inicio.aspx

______________________________________

811 responsive menu responsive(crear otro proyecto apartir del actual y validar archivos)

realizando: 752 login-validar diseño, 777 bloque home responsive-validar espacio, 811 menu desplegable-ajuste js de pantalla en navegadores

Archivos:
-website\controles\general\menuFinal.ascx
-website\controles\general\menuFinal.ascx.vb
-website\controles\general\cabecera.ascx
-website\controles\general\cabecera.ascx.vb
-website\forms\general\inicio.aspx
-website\forms\publica\login.aspx

Menu con grilla
-	website\master\master\mas_grillaFormularioVertical.master
-	website\master\master\mas_grillaFormularioHorizontal.master
Menu sin grilla
-	website\master\master\mas_FormularioSinGrilla.master
Menu sin grilla Reportes
-	website\master\master\mas_FormularioAyuda.master
Menu con grilla Envio Correo
-	website\master\master\mas_interfazNueva.master

8/13 master

D:\HAKU\SAMM\SAMM_2020\website\master\master\mas_fomularioSinGrillaNoAjax.master
D:\HAKU\SAMM\SAMM_2020\website\master\master\mas_FormularioAyuda.master
D:\HAKU\SAMM\SAMM_2020\website\master\master\mas_FormularioSinGrilla.master
D:\HAKU\SAMM\SAMM_2020\website\master\master\mas_grillaFormularioHorizontal.master
D:\HAKU\SAMM\SAMM_2020\website\master\master\mas_grillaFormularioHorizontalNoAjax.master
D:\HAKU\SAMM\SAMM_2020\website\master\master\mas_grillaFormularioVertical.master
D:\HAKU\SAMM\SAMM_2020\website\master\master\mas_grillaFormularioVerticalNoAjax.master
D:\HAKU\SAMM\SAMM_2020\website\master\master\mas_interfazNueva.master

D:\HAKU\SAMM\SAMM_2020\website\master\master\mas_FormularioSinGrilla.master(bloque home)
D:\HAKU\SAMM\SAMM_2020\website\master\master\mas_grillaFormularioVertical.master(usuarios)
D:\HAKU\SAMM\SAMM_2020\website\master\master\mas_fomularioSinGrillaNoAjax.master(consultas)
D:\HAKU\SAMM\SAMM_2020\website\master\master\mas_FormularioAyuda.master(reportes)
	Acceso: localhost:52399/website/forms/rep/rep_indicador.aspx?r=35&t=&key=ri



css:
*	website\css\samm.css
*	website\css\menuR.css
	website\css\menuF.css
	website\css\cabecera.css
	website\css\home.css
	website\css\login.css
	website\css\css.css

js:
	website\js\Interfaz\menuF.js

16 Files hoy 01/10/2020

-----------------------------

14/10/2020
Validar:

 	reportes (Cabecera)
    es necesario crear otra sop para validar el tamaño del titulos de los diferentes documentos

--------------------------------
archivos editados hoy

	D:\HAKU\SAMM\SAMM_V5_1_6\website\controles\general\cabecera.ascx
	D:\HAKU\SAMM\SAMM_V5_1_6\website\css\cabecera.css
	D:\HAKU\SAMM\SAMM_V5_1_6\website\css\menuR.css
	D:\HAKU\SAMM\SAMM_V5_1_6\website\css\menuF.css
	D:\HAKU\SAMM\SAMM_V5_1_6\website\css\home.css




validar a los 560 mpx
logo empresa de aeroequipos


______________________________________
19/10/2020

sop - 983 19/11
tener en cuenta en las dos pantallas
-------------------

D:\HAKU\SAMM\SAMM_2020\esbsamcore\App_GlobalResources\res_etiquetas_gen.designer.cs
D:\HAKU\SAMM\SAMM_2020\samm_logica\Seguridad.vb
D:\HAKU\SAMM\SAMM_2020\website\forms\gen\maestros.aspx
D:\HAKU\SAMM\SAMM_2020\website\forms\gen\maestros.aspx.vb

D:\HAKU\SAMM\SAMM_2020\website\forms\general\cambiarClave.aspx
D:\HAKU\SAMM\SAMM_2020\website\forms\general\cambiarClave.aspx.vb
ajuste
D:\HAKU\SAMM\SAMM_2020\website\forms\general\cambiarClave.aspx.vb

______________________________________

Sol 16534

D:\HAKU\SAMM\conergia\website\forms\alq\alq_despachoEquipos.aspx.vb
D:\HAKU\SAMM\conergia\website\App_GlobalResources\res_mensajes.resx
D:\HAKU\SAMM\SAMM_2020\samcore\Alquiler\Despacho.cs
D:\HAKU\SAMM\SAMM_2020\samcore\Mantenimiento\Equipo.cs

______________________________________

______________________________________



