Integracion

_________________________________________
Hach

Cotizacion o reliquidaciones es 8
preliquidacion
2594 
estado enviar a sap
historico

ID_documento=32312

atomcol

hach

wilian
3174014293
wrestrepo@hach.com

498976091

--select * from v_documentos_sap where id=32312
--select * from doc_documento where id=32312
--select * from doc_estadotipodocumento where id=19
--select * from doc_tipodocumento where id=4

select * from view_doc_Documento_cotizacion where id=32312
select * from v_documentos_sap where id=32312
select * from v_atributo where id=32312

--select * from rep_andiapro..[Document_marketing-23] where idsamm =32312
select dbo.f_os(32312)

Preliquidacion 32913 se no presento problemas pero esta no tenia descuento quemos a la espera de que realicen una con descuento

____________________________
junghenrich

D:\SAMM\integracion\WindowsSyncSamm\logs

pre- 73857

select * from rep_andiapro..[Document_marketing-23] where idsamm =32312

select * from samm_replica2019..[Document_marketing-17]  where idsamm =73857
select * from samm_replica2019..[detallePreliquidacion]  where idsamm =73857

select * from samm_replica2019..[Equipos Disponibles]  where idsamm =73857


--DECLARE @horafin as time= '16:00:00'
--select top 10 * from ACS_LogSIC where acs_method <> 'GetInfoSAP' and  ACS_BeginTime > @horafin order by acs_enddate desc

select top 10 * from ACS_LogSIC where ACS_Request<>'' 

_____________________________

Mcallister

no se están dejando las rq cerradas al momento de enviar los items

_________________________________

gruas y equipos

requisiones:
funciona correctamente para las requisiones

preliquidaciones

falta validar el xml que le esta llegando a los de atomcol hacia sap

_________________________________

Montejo

no esta funcionando para las ordenes de comprar a la espera de que respondan sobre el acceso

-- 2020 --

los items no se replican de sap a samm al momento de crearlos en sap pero en replica si aparecen


_________________________________

Rent Industrial

581705392

Firebird/interBase(r)driver
Magister TeamViewer
1020824351
7ujw37
CONNECT "D:\haku\haku\Integraciones\rentIndustrial\Magister\MaGisterZ.Mgt" USER "SYSDBA" PASSWORD "masterkey";

sesion 329728915 intentar

Magister
681670992
SisAdmin11

samm
329728915
SisAdmin11

CONNECT "c:\Magister\Datos\MaGisterz.FDB" USER "SYSDBA" PASSWORD "masterkey";



no se ven reflejadas las preliquidaciones
<add key="conRep"  value="server=DESKTOP-PL9U6CB\SQLEXPRESS2017;user id=sa;pwd=12345;initial catalog=rep_magister_pruebas" />
    <add key="conSamm" value="server=DESKTOP-PL9U6CB\SQLEXPRESS2017;user id=sa;pwd=12345;initial catalog=sw_rentindustrial_29072019" />

Server SAMM
Conexion de SAMM_Sinconizador:
	- De Nosotros:

<add key="proveedor" value="MAGISTER" />
	  <add key="conRep"  value="server=RENTSERVER\SQL2008R2;user id=sa;pwd=rentindustrial2012.;initial catalog=rep_magister_pruebas" />
	  <add key="conSamm" value="server=RENTSERVER\SQL2008R2;user id=sa;pwd=rentindustrial2012.;initial catalog=sw_rentindustrial" />
	  <add key="cliente" value="RENT" />
	  <add key="URL" value="http://192.168.0.15/ws_magSamm/factura/facmag.asmx" />
	  <add key="URL_WS" value="http://192.168.0.15/ws_magSamm/factura/facmag.asmx" />
	  <add key="log_WS" value="1" />


BD_replica Conexion:
Instance           RENTSERVER\SQL2008R2
servidor SAMM:     192.168.0.4
					<add key="conRep"  value="server=RENTSERVER\SQL2008R2;user id=sa;pwd=rentindustrial2012.;initial catalog=rep_magister_pruebas" />
				 	<add key="conSamm" value="server=RENTSERVER\SQL2008R2;user id=sa;pwd=rentindustrial2012.;initial catalog=sw_rentindustrial" />




Server Magister

Conexion de Magister:
	- De ellos:
		<appSettings>
		    <add key="servidor" value="192.168.0.15" lockItem="true"/>
		    <add key="baseDatos" value="c:\\Magister\\Datos\\MAGISTERZ.MGT" lockItem="true"/>
		    <add key="usuario" value="SYSDBA" lockItem="true"/>
		    <add key="pwd" value="masterkey" lockItem="true"/>
		    <add key="tipoCotizacionAlquiler" value="COT" lockItem="true"/>
		    <add key="tipoCotizacionVenta" value="CTE" lockItem="true"/>
		  <appSettings/>

C:\Program Files\Firebird\Firebird_3_0


use sw_rentindustrial
select * from [doc_documento.cotizacion] where id = 169525
select * from doc_Documento where id = 169525
select * from doc_itemDocumento where id_documento = 169525 and active = 1

use rep_magister_pruebas
select * from COTIZACION_ENCABEZADO where IDSAMM=169525
select * from COTIZACIONES where IDSAMMPADRE=169525


usuario samm de Franky
sistemas
SOPORTE


El problema que tenemos es que las pre facturas no están pasando a Magister

coe_empresa
coe_documento
coe_numero
coe_fecha
coe_cliente
coe_cliente_sucursal
coe_sincronizado
coe_errores
coe_observaciones
coe_numero_mg
coe_fecha_update

coe_empresa, coe_documento, coe_numero, coe_fecha, coe_cliente, coe_cliente_sucursal, coe_sincronizado, coe_observaciones, coe_numero_mg,coe_fecha_update

Falta revisar las preliquidaciones en la aplicacion IBExpert

0 no se ha enviado
1 exitoso
2 errores en SAMM
3 n/a
4 n/a

se validan las pre facturas y estas aparecen en magister


10527 ultima pre
http://181.48.86.226/sammweb/forms/publica/login.aspx?ReturnUrl=%2fsammweb%2fforms%2fgeneral%2finicio.aspx

10533 prueba
10521 paso a magister
10542 Paso a magister validar el estado

preliquidacion de prueba 10561


10542 Paso a magister validar el estado(todo OK)

A la espera prueba de Franky 10560




________________________________________________________________________________________________________________

Bristol

al tratar de enviar una requisicion o una orden de compra a sap
Error indice fuera de los limites de la matriz

sammweb

replica_samm


_________________________________

MAKSER S.A.S


WS:
http://190.144.46.90:8081/MOTOR_INTEGRACION/WebServices?wsdl

body send

{
  "DocDate": "2019-05-14",
  "DocDueDate": "2019-05-14",
  "CardCode": "C123566",
  "Comments": null,
  "SalesPersonCode": -1,
  "Series": 17,
  "TaxDate": "2019-05-14",
  "NumAtCard": "",
  "U_SEI_Intern": null,  "DocumentLines": [
    {
      "ItemCode": "prueba2",
      "Quantity": 1,
      "DiscountPercent": 0,
      "WarehouseCode": "01",
      "AccountCode": "",
      "CostingCode": null,
      "ProjectCode": "",      "TaxCode": "",
      "UnitPrice": 45611,
      "CostingCode2": null,
      "CostingCode3": null,
      "CostingCode4": null,
      "CostingCode5": null
      }
  ]
}



app_code servicios click reportes aplicacion
________________________________________________________________

energia y potencia

Maribel
07

1064928136

3166931626

ot 1549
rq298

http://serviciosweb.eyp.local/SAMM_WEB/forms/publica/login.aspx?ReturnUrl=%2fsamm_web%2fforms%2fgeneral%2finicio.aspx

Data Source=172.16.54.35,1433;Initial Catalog=SAMM;User ID=sa; pwd=1026e1017400


Integracion Energia y potencia (aplicacion que inicie con el servidor)

15 / 01 / 2020

al momento de crear una ot, despues una requisicion y cambiar de estado se deben visualizar los dms
se realiza la validacion de los logs por que no se ven los dms en la aplicacion de ellos

actualmente se evidenia error de flujo documento

se pasa integracion a Luis Carlos

_________________________________________________________________

INTEGERACION
Rent Industrial: 	A la espera de Magister para validar si se	 modifico la forma de validacion de accceso para insertar las preliquidaciones
Montenjo: 			No esta funcionando para las ordenes de comprar a la espera de que respondan sobre el acceso
Gruas y Equipos: 	A la espera de confirmacion de Andres de Atomcol para realizar prueba en conjunto con las preliquidaciones que presenta un error 
Mcallister: 		Falta verificar como funciona la aplicacion de integracion
actualmente se valido y ya quedo el tema inicial que era por No habían cambiado el tipo de servidor Sql

ACCESO

Casagres	acceso a samm ya que no pueden acceder con un usuario normal por que la aplicacion los saca
Biotron		aun no se ha establecido ip estatica