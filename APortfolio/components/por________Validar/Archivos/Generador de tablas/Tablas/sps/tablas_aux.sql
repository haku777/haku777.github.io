use samm_webn_14
GO
create table [alq_detallealquiler_itemdocumento_aux] (
uid varchar (500)
,[detallealquiler_itemdocumento_detalleAlquiler_detalleAlquiler] varchar (300)
,[detallealquiler_itemdocumento_detalleAlquiler_detalleAlquiler_codigo] varchar (100)
,[detallealquiler_itemdocumento_itemDocumento_itemDocumento] varchar (300)
,[detallealquiler_itemdocumento_itemDocumento_itemDocumento_codigo] varchar (100)

)
create table [alq_detalleLiquidacion_aux] (
uid varchar (500)
,[detalleLiquidacion] varchar (300)
,[detalleLiquidacion_codigo] varchar (100)
,[detalleLiquidacion_itemDocumento_itemDocumento] varchar (300)
,[detalleLiquidacion_itemDocumento_itemDocumento_codigo] varchar (100)
,[detalleLiquidacion_detalleAlquiler_detalleAlquiler] varchar (300)
,[detalleLiquidacion_detalleAlquiler_detalleAlquiler_codigo] varchar (100)
,[detalleLiquidacion_documento_movimiento_documento] varchar (300)
,[detalleLiquidacion_documento_movimiento_documento_codigo] varchar (100)
,[detalleLiquidacion_documento_movimiento_documento_numero] int
,[detalleLiquidacion_evento_evento] varchar (300)
,[detalleLiquidacion_evento_evento_codigo] varchar (100)

)
create table [alq_historicoAlquiler_aux] (
uid varchar (500)
,[historicoAlquiler] varchar (300)
,[historicoAlquiler_codigo] varchar (100)
,[historicoAlquiler_equipo_equipo] varchar (300)
,[historicoAlquiler_equipo_equipo_codigo] varchar (100)
,[historicoAlquiler_equipo_equipo_serial] varchar (100)
,[historicoAlquiler_estadoEquipo_estadoEquipo] varchar (300)
,[historicoAlquiler_estadoEquipo_estadoEquipo_codigo] varchar (100)
,[historicoAlquiler_documento_documento] varchar (300)
,[historicoAlquiler_documento_documento_codigo] varchar (100)
,[historicoAlquiler_documento_documento_numero] int

)
create table [alq_periodoAlquiler_aux] (
uid varchar (500)
,[periodoAlquiler] varchar (300)
,[periodoAlquiler_codigo] varchar (100)

)
create table [alq_tarifa_aux] (
uid varchar (500)
,[tarifa] varchar (300)
,[tarifa_codigo] varchar (100)
,[tarifa_itemDocumento_itemDocumento] varchar (300)
,[tarifa_itemDocumento_itemDocumento_codigo] varchar (100)
,[tarifa_detalleAlquiler_detalleAlquiler] varchar (300)
,[tarifa_detalleAlquiler_detalleAlquiler_codigo] varchar (100)
,[tarifa_tipoTarifa_tipoTarifa] varchar (300)
,[tarifa_tipoTarifa_tipoTarifa_codigo] varchar (100)

)
create table [alq_tipoTarifa_aux] (
uid varchar (500)
,[tipoTarifa] varchar (300)
,[tipoTarifa_codigo] varchar (100)

)
create table [cat_atributo_aux] (
uid varchar (500)
,[atributo] varchar (900)
,[atributo_codigo] varchar (100)
,[atributo_seccionAtributo_seccionAtributo] varchar (300)
,[atributo_seccionAtributo_seccionAtributo_codigo] varchar (100)
,[atributo_tipoAtributo_tipoAtributo] varchar (300)
,[atributo_tipoAtributo_tipoAtributo_codigo] varchar (100)
,[atributo_unidad_unidad] varchar (300)
,[atributo_unidad_unidad_codigo] varchar (100)

)
create table [cat_atributo_aux_aux] (
uid varchar (500)

)
create table [cat_atributo_opcionAtributo_aux] (
uid varchar (500)
,[atributo_opcionAtributo_atributo_atributo] varchar (900)
,[atributo_opcionAtributo_atributo_atributo_codigo] varchar (100)
,[atributo_opcionAtributo_opcionAtributo_opcionAtributo] varchar (300)
,[atributo_opcionAtributo_opcionAtributo_opcionAtributo_codigo] varchar (100)

)
create table [cat_catalogo_aux] (
uid varchar (500)
,[catalogo] varchar (300)
,[catalogo_codigo] varchar (100)
,[catalogo_familia_familia] varchar (300)
,[catalogo_familia_familia_codigo] varchar (100)
,[catalogo_subtipoCatalogo_subtipoCatalogo] varchar (300)
,[catalogo_subtipoCatalogo_subtipoCatalogo_codigo] varchar (100)
,[catalogo_unidad_unidad] varchar (300)
,[catalogo_unidad_unidad_codigo] varchar (100)
,[catalogo_impuesto_impuesto] varchar (300)
,[catalogo_impuesto_impuesto_codigo] varchar (100)

)
create table [cat_catalogo.actividad_aux] (
uid varchar (500)
,[catalogo.actividad] varchar (300)

)
create table [cat_catalogo.actividad_aux_aux] (
uid varchar (500)

)
create table [cat_catalogo.equipo_aux] (
uid varchar (500)
,[catalogo.equipo] varchar (300)
,[catalogo.equipo_marca_marca] varchar (300)
,[catalogo.equipo_marca_marca_codigo] varchar (100)

)
create table [cat_catalogo.equipo_atributo_aux] (
uid varchar (500)
,[catalogo.equipo_atributo_atributo_atributo] varchar (900)
,[catalogo.equipo_atributo_atributo_atributo_codigo] varchar (100)
,[catalogo.equipo_atributo_catalogo.equipo_catalogo.equipo] varchar (300)

)
create table [cat_catalogo.equipo_atributo_aux_aux] (
uid varchar (500)

)
create table [cat_catalogo.equipo_aux_aux] (
uid varchar (500)

)
create table [cat_catalogo.equipo_catalogo.tempario_aux] (
uid varchar (500)
,[catalogo.equipo_catalogo.tempario_catalogo.equipo_catalogo.equipo] varchar (300)
,[catalogo.equipo_catalogo.tempario_catalogo.tempario_catalogo.tempario] varchar (300)

)
create table [cat_catalogo.equipo_catalogo.tempario_aux_aux] (
uid varchar (500)

)
create table [cat_catalogo.equipo_pruebaCheckList_aux] (
uid varchar (500)
,[catalogo.equipo_pruebaCheckList_pruebaCheckList_pruebaCheckList] varchar (300)
,[catalogo.equipo_pruebaCheckList_pruebaCheckList_pruebaCheckList_codigo] varchar (100)
,[catalogo.equipo_pruebaCheckList_catalogo.equipo_catalogo.equipo] varchar (300)

)
create table [cat_catalogo.equipo_pruebaCheckList_aux_aux] (
uid varchar (500)

)
create table [cat_catalogo.otro_aux] (
uid varchar (500)
,[catalogo.otro] varchar (300)

)
create table [cat_catalogo.otro_aux_aux] (
uid varchar (500)

)
create table [cat_catalogo.producto_aux] (
uid varchar (500)
,[catalogo.producto] varchar (300)

)
create table [cat_catalogo.producto_aux_aux] (
uid varchar (500)

)
create table [cat_catalogo.repuesto_aux] (
uid varchar (500)
,[catalogo.repuesto] varchar (300)
,[catalogo.repuesto_marca_marca] varchar (300)
,[catalogo.repuesto_marca_marca_codigo] varchar (100)

)
create table [cat_catalogo.repuesto_aux_aux] (
uid varchar (500)

)
create table [cat_catalogo.tempario_aux] (
uid varchar (500)
,[catalogo.tempario] varchar (300)
,[catalogo.tempario_tipoServicio_tipoServicio] varchar (300)
,[catalogo.tempario_tipoServicio_tipoServicio_codigo] varchar (100)

)
create table [cat_catalogo.tempario_aux_aux] (
uid varchar (500)

)
create table [cat_catalogo_aux_aux] (
uid varchar (500)

)
create table [cat_catalogo_bodega_aux] (
uid varchar (500)
,[catalogo_bodega_catalogo_catalogo] varchar (300)
,[catalogo_bodega_catalogo_catalogo_codigo] varchar (100)
,[catalogo_bodega_bodega_bodega] varchar (300)
,[catalogo_bodega_bodega_bodega_codigo] varchar (100)

)
create table [cat_catalogo_bodega_aux_aux] (
uid varchar (500)

)
create table [cat_catalogo_listaPrecio_aux] (
uid varchar (500)
,[catalogo_listaPrecio_catalogo_catalogo] varchar (300)
,[catalogo_listaPrecio_catalogo_catalogo_codigo] varchar (100)
,[catalogo_listaPrecio_listaPrecio_listaPrecio] varchar (300)
,[catalogo_listaPrecio_listaPrecio_listaPrecio_codigo] varchar (100)

)
create table [cat_catalogo_listaPrecio_aux_aux] (
uid varchar (500)

)
create table [cat_detalleRepuesto_aux] (
uid varchar (500)
,[detalleRepuesto] varchar (300)
,[detalleRepuesto_codigo] varchar (100)
,[detalleRepuesto_catalogo.repuesto_catalogo.repuesto] varchar (300)
,[detalleRepuesto_catalogo.repuesto_hijo_catalogo.repuesto] varchar (300)

)
create table [cat_detalleRepuesto_aux_aux] (
uid varchar (500)

)
create table [cat_detalleTempario_aux] (
uid varchar (500)
,[detalleTempario] varchar (300)
,[detalleTempario_codigo] varchar (100)
,[detalleTempario_catalogo_catalogo] varchar (300)
,[detalleTempario_catalogo_catalogo_codigo] varchar (100)
,[detalleTempario_catalogo.tempario_catalogo.tempario] varchar (300)
,[detalleTempario_pruebaCheckList_pruebaCheckList] varchar (300)
,[detalleTempario_pruebaCheckList_pruebaCheckList_codigo] varchar (100)
,[detalleTempario_sistema_sistema] varchar (300)
,[detalleTempario_sistema_sistema_codigo] varchar (100)

)
create table [cat_detalleTempario_aux_aux] (
uid varchar (500)

)
create table [cat_dimension_aux] (
uid varchar (500)
,[dimension] varchar (300)
,[dimension_codigo] varchar (100)

)
create table [cat_dimension_aux_aux] (
uid varchar (500)

)
create table [cat_listaPrecio_aux] (
uid varchar (500)
,[listaPrecio] varchar (300)
,[listaPrecio_codigo] varchar (100)
,[listaPrecio_moneda_moneda] varchar (300)
,[listaPrecio_moneda_moneda_codigo] varchar (100)

)
create table [cat_listaPrecio_aux_aux] (
uid varchar (500)

)
create table [cat_marca_aux] (
uid varchar (500)
,[marca] varchar (300)
,[marca_codigo] varchar (100)
,[marca_tercero_fabricante_tercero] varchar (300)
,[marca_tercero_fabricante_tercero_codigo] varchar (100)
,[marca_tercero_fabricante_tercero_nit] varchar (100)
,[marca_tercero_fabricante_tercero_nombreCorto] varchar (100)

)
create table [cat_marca_aux_aux] (
uid varchar (500)

)
create table [cat_posicion_aux] (
uid varchar (500)
,[posicion] varchar (300)
,[posicion_codigo] varchar (100)
,[posicion_catalogo.equipo_equipo_catalogo.equipo] varchar (300)
,[posicion_catalogo.equipo_componente_catalogo.equipo] varchar (300)
,[posicion_dimension_x_dimension] varchar (300)
,[posicion_dimension_x_dimension_codigo] varchar (100)
,[posicion_dimension_y_dimension] varchar (300)
,[posicion_dimension_y_dimension_codigo] varchar (100)
,[posicion_dimension_z_dimension] varchar (300)
,[posicion_dimension_z_dimension_codigo] varchar (100)

)
create table [cat_posicion_aux_aux] (
uid varchar (500)

)
create table [cat_pruebaCheckList_aux] (
uid varchar (500)
,[pruebaCheckList] varchar (300)
,[pruebaCheckList_codigo] varchar (100)

)
create table [cat_pruebaCheckList_atributo_aux] (
uid varchar (500)
,[pruebaCheckList_atributo_pruebaCheckList_pruebaCheckList] varchar (300)
,[pruebaCheckList_atributo_pruebaCheckList_pruebaCheckList_codigo] varchar (100)
,[pruebaCheckList_atributo_atributo_atributo] varchar (900)
,[pruebaCheckList_atributo_atributo_atributo_codigo] varchar (100)

)
create table [cat_pruebaCheckList_atributo_aux_aux] (
uid varchar (500)

)
create table [cat_pruebaCheckList_aux_aux] (
uid varchar (500)

)
create table [cat_reemplazo_aux] (
uid varchar (500)
,[reemplazo] varchar (300)
,[reemplazo_codigo] varchar (100)
,[reemplazo_tipoReemplazo_tipoReemplazo] varchar (300)
,[reemplazo_tipoReemplazo_tipoReemplazo_codigo] varchar (100)
,[reemplazo_catalogo.repuesto_catalogo.repuesto] varchar (300)
,[reemplazo_catalogo.repuesto_1_catalogo.repuesto] varchar (300)

)
create table [cat_reemplazo_aux_aux] (
uid varchar (500)

)
create table [cat_reemplazo_catalogo.equipo_aux] (
uid varchar (500)
,[reemplazo_catalogo.equipo_reemplazo_reemplazo] varchar (300)
,[reemplazo_catalogo.equipo_reemplazo_reemplazo_codigo] varchar (100)
,[reemplazo_catalogo.equipo_versionEquipo_versionEquipo] varchar (300)
,[reemplazo_catalogo.equipo_versionEquipo_versionEquipo_codigo] varchar (100)
,[reemplazo_catalogo.equipo_catalogo.equipo_catalogo.equipo] varchar (300)

)
create table [cat_reemplazo_catalogo.equipo_aux_aux] (
uid varchar (500)

)
create table [cat_seccionAtributo_aux] (
uid varchar (500)
,[seccionAtributo] varchar (300)
,[seccionAtributo_codigo] varchar (100)
,[seccionAtributo_usoSeccionAtributo_usoSeccionAtributo] varchar (300)
,[seccionAtributo_usoSeccionAtributo_usoSeccionAtributo_codigo] varchar (100)

)
create table [cat_seccionAtributo_aux_aux] (
uid varchar (500)

)
create table [cat_sistema_aux] (
uid varchar (500)
,[sistema] varchar (300)
,[sistema_codigo] varchar (100)

)
create table [cat_sistema_aux_aux] (
uid varchar (500)

)
create table [cat_sistema_catalogo.equipo_aux] (
uid varchar (500)
,[sistema_catalogo.equipo_catalogo.equipo_catalogo.equipo] varchar (300)
,[sistema_catalogo.equipo_sistema_sistema] varchar (300)
,[sistema_catalogo.equipo_sistema_sistema_codigo] varchar (100)
,[sistema_catalogo.equipo_versionEquipo_versionEquipo] varchar (300)
,[sistema_catalogo.equipo_versionEquipo_versionEquipo_codigo] varchar (100)

)
create table [cat_sistema_catalogo.equipo_aux_aux] (
uid varchar (500)

)
create table [cat_soporteActividad_aux] (
uid varchar (500)
,[soporteActividad] varchar (300)
,[soporteActividad_codigo] varchar (100)
,[soporteActividad_detalleTempario_detalleTempario] varchar (300)
,[soporteActividad_detalleTempario_detalleTempario_codigo] varchar (100)
,[soporteActividad_cargo_cargo] varchar (300)
,[soporteActividad_cargo_cargo_codigo] varchar (100)

)
create table [cat_soporteActividad_aux_aux] (
uid varchar (500)

)
create table [cat_subtipoCatalogo_aux] (
uid varchar (500)
,[subtipoCatalogo] varchar (300)
,[subtipoCatalogo_codigo] varchar (100)
,[subtipoCatalogo_tipoCatalogo_tipoCatalogo] varchar (300)
,[subtipoCatalogo_tipoCatalogo_tipoCatalogo_codigo] varchar (100)

)
create table [cat_subtipoCatalogo_aux_aux] (
uid varchar (500)

)
create table [cat_tarifa_aux] (
uid varchar (500)
,[tarifa] varchar (300)
,[tarifa_codigo] varchar (100)
,[tarifa_marca_marca] varchar (300)
,[tarifa_marca_marca_codigo] varchar (100)
,[tarifa_cargo_cargo] varchar (300)
,[tarifa_cargo_cargo_codigo] varchar (100)
,[tarifa_tipoServicio_tipoServicio] varchar (300)
,[tarifa_tipoServicio_tipoServicio_codigo] varchar (100)
,[tarifa_familia_familia] varchar (300)
,[tarifa_familia_familia_codigo] varchar (100)
,[tarifa_atributo_atributo] varchar (900)
,[tarifa_atributo_atributo_codigo] varchar (100)
,[tarifa_zona_zona] varchar (300)
,[tarifa_zona_zona_codigo] varchar (100)
,[tarifa_catalogo.equipo_catalogo.equipo] varchar (300)

)
create table [cat_tarifa_aux_aux] (
uid varchar (500)

)
create table [cat_tarifaCatalogo_aux] (
uid varchar (500)
,[tarifaCatalogo] varchar (300)
,[tarifaCatalogo_codigo] varchar (100)
,[tarifaCatalogo_catalogo_tarifa_catalogo] varchar (300)
,[tarifaCatalogo_catalogo_tarifa_catalogo_codigo] varchar (100)
,[tarifaCatalogo_catalogo_elemento_catalogo] varchar (300)
,[tarifaCatalogo_catalogo_elemento_catalogo_codigo] varchar (100)
,[tarifaCatalogo_tipoTarifa_tipoTarifa] varchar (300)
,[tarifaCatalogo_tipoTarifa_tipoTarifa_codigo] varchar (100)

)
create table [cat_tarifaRango_aux] (
uid varchar (500)
,[tarifaRango] varchar (300)
,[tarifaRango_codigo] varchar (100)

)
create table [cat_tarifaRango_aux_aux] (
uid varchar (500)

)
create table [cat_tipoCatalogo_aux] (
uid varchar (500)
,[tipoCatalogo] varchar (300)
,[tipoCatalogo_codigo] varchar (100)

)
create table [cat_tipoCatalogo_aux_aux] (
uid varchar (500)

)
create table [cat_tipoCatalogo_listaPrecio_aux] (
uid varchar (500)
,[tipoCatalogo_listaPrecio_tipoCatalogo_tipoCatalogo] varchar (300)
,[tipoCatalogo_listaPrecio_tipoCatalogo_tipoCatalogo_codigo] varchar (100)
,[tipoCatalogo_listaPrecio_listaPrecio_listaPrecio] varchar (300)
,[tipoCatalogo_listaPrecio_listaPrecio_listaPrecio_codigo] varchar (100)

)
create table [cat_tipoCatalogo_listaPrecio_aux_aux] (
uid varchar (500)

)
create table [cat_tipoReemplazo_aux] (
uid varchar (500)
,[tipoReemplazo] varchar (300)
,[tipoReemplazo_codigo] varchar (100)

)
create table [cat_tipoReemplazo_aux_aux] (
uid varchar (500)

)
create table [cat_usoSeccionAtributo_aux] (
uid varchar (500)
,[usoSeccionAtributo] varchar (300)
,[usoSeccionAtributo_codigo] varchar (100)

)
create table [cat_usoSeccionAtributo_aux_aux] (
uid varchar (500)

)
create table [cat_versionEquipo_aux] (
uid varchar (500)
,[versionEquipo] varchar (300)
,[versionEquipo_codigo] varchar (100)
,[versionEquipo_catalogo.equipo_catalogo.equipo] varchar (300)

)
create table [cat_versionEquipo_aux_aux] (
uid varchar (500)

)
create table [cat_versionEquipo_detalleTempario_aux] (
uid varchar (500)
,[versionEquipo_detalleTempario_detalleTempario_detalleTempario] varchar (300)
,[versionEquipo_detalleTempario_detalleTempario_detalleTempario_codigo] varchar (100)
,[versionEquipo_detalleTempario_versionEquipo_versionEquipo] varchar (300)
,[versionEquipo_detalleTempario_versionEquipo_versionEquipo_codigo] varchar (100)

)
create table [cat_versionEquipo_detalleTempario_aux_aux] (
uid varchar (500)

)
create table [cnt_configContrato_aux] (
uid varchar (500)
,[configContrato] varchar (300)
,[configContrato_contratoEquipo_contratoEquipo] varchar (300)
,[configContrato_contratoEquipo_contratoEquipo_codigo] varchar (100)
,[configContrato_catalogo.tempario_catalogo.tempario] varchar (300)
,[configContrato_tercero_proveedor_tercero] varchar (300)
,[configContrato_tercero_proveedor_tercero_codigo] varchar (100)
,[configContrato_tercero_proveedor_tercero_nit] varchar (100)
,[configContrato_tercero_proveedor_tercero_nombreCorto] varchar (100)

)
create table [cnt_contrato_aux] (
uid varchar (500)
,[contrato] varchar (300)
,[contrato_codigo] varchar (100)
,[contrato_periodoContrato_periodoContrato] varchar (300)
,[contrato_periodoContrato_periodoContrato_codigo] varchar (100)
,[contrato_tercero_tercero] varchar (300)
,[contrato_tercero_tercero_codigo] varchar (100)
,[contrato_tercero_tercero_nit] varchar (100)
,[contrato_tercero_tercero_nombreCorto] varchar (100)
,[contrato_tipoServicio_tipoServicio] varchar (300)
,[contrato_tipoServicio_tipoServicio_codigo] varchar (100)
,[contrato_tipoContrato_tipoContrato] varchar (300)
,[contrato_tipoContrato_tipoContrato_codigo] varchar (100)
,[contrato_tercero_servicio_tercero] varchar (300)
,[contrato_tercero_servicio_tercero_codigo] varchar (100)
,[contrato_tercero_servicio_tercero_nit] varchar (100)
,[contrato_tercero_servicio_tercero_nombreCorto] varchar (100)
,[contrato_subtipoDocumento_subtipoDocumento] varchar (300)
,[contrato_subtipoDocumento_subtipoDocumento_codigo] varchar (100)
,[contrato_departamentoSolicitud_departamentoSolicitud] varchar (300)
,[contrato_departamentoSolicitud_departamentoSolicitud_codigo] varchar (100)
,[contrato_usuario_coordinador_usuario] varchar (300)
,[contrato_usuario_coordinador_usuario_codigo] varchar (100)
,[contrato_documento.alquiler_documento.alquiler] varchar (300)
,[contrato_estadoTipoDocumento_inicial_estadoTipoDocumento] varchar (300)
,[contrato_estadoTipoDocumento_inicial_estadoTipoDocumento_codigo] varchar (100)
,[contrato_subtipoDocumento_solicitud_subtipoDocumento] varchar (300)
,[contrato_subtipoDocumento_solicitud_subtipoDocumento_codigo] varchar (100)

)
create table [cnt_contrato_aux_aux] (
uid varchar (500)

)
create table [cnt_contrato_catalogo_aux] (
uid varchar (500)
,[contrato_catalogo_contrato_contrato] varchar (300)
,[contrato_catalogo_contrato_contrato_codigo] varchar (100)
,[contrato_catalogo_catalogo_catalogo] varchar (300)
,[contrato_catalogo_catalogo_catalogo_codigo] varchar (100)

)
create table [cnt_contrato_catalogo_aux_aux] (
uid varchar (500)

)
create table [cnt_contrato_sucursal_aux] (
uid varchar (500)
,[contrato_sucursal_contrato_contrato] varchar (300)
,[contrato_sucursal_contrato_contrato_codigo] varchar (100)
,[contrato_sucursal_sucursal_sucursal] varchar (300)
,[contrato_sucursal_sucursal_sucursal_codigo] varchar (100)

)
create table [cnt_contrato_sucursal_aux_aux] (
uid varchar (500)

)
create table [cnt_contrato_tipoServicio_aux] (
uid varchar (500)
,[contrato_tipoServicio_contrato_contrato] varchar (300)
,[contrato_tipoServicio_contrato_contrato_codigo] varchar (100)
,[contrato_tipoServicio_tipoServicio_tipoServicio] varchar (300)
,[contrato_tipoServicio_tipoServicio_tipoServicio_codigo] varchar (100)
,[contrato_tipoServicio_listaPrecio_listaPrecio] varchar (300)
,[contrato_tipoServicio_listaPrecio_listaPrecio_codigo] varchar (100)

)
create table [cnt_contrato_tipoServicio_aux_aux] (
uid varchar (500)

)
create table [cnt_contrato_zona_aux] (
uid varchar (500)
,[contrato_zona_contrato_contrato] varchar (300)
,[contrato_zona_contrato_contrato_codigo] varchar (100)
,[contrato_zona_zona_zona] varchar (300)
,[contrato_zona_zona_zona_codigo] varchar (100)

)
create table [cnt_contrato_zona_aux_aux] (
uid varchar (500)

)
create table [cnt_contratoDetalleVisita_aux] (
uid varchar (500)
,[contratoDetalleVisita] varchar (300)
,[contratoDetalleVisita_codigo] varchar (100)
,[contratoDetalleVisita_contrato_contrato] varchar (300)
,[contratoDetalleVisita_contrato_contrato_codigo] varchar (100)

)
create table [cnt_contratoDetalleVisita_aux_aux] (
uid varchar (500)

)
create table [cnt_contratoEquipo_aux] (
uid varchar (500)
,[contratoEquipo] varchar (300)
,[contratoEquipo_codigo] varchar (100)
,[contratoEquipo_equipo_equipo] varchar (300)
,[contratoEquipo_equipo_equipo_codigo] varchar (100)
,[contratoEquipo_equipo_equipo_serial] varchar (100)
,[contratoEquipo_contrato_contrato] varchar (300)
,[contratoEquipo_contrato_contrato_codigo] varchar (100)
,[contratoEquipo_contratoDetalleVisita_contratoDetalleVisita] varchar (300)
,[contratoEquipo_contratoDetalleVisita_contratoDetalleVisita_codigo] varchar (100)

)
create table [cnt_contratoEquipo_aux_aux] (
uid varchar (500)

)
create table [cnt_corrimientoVisitaFija_aux] (
uid varchar (500)
,[corrimientoVisitaFija] varchar (300)
,[corrimientoVisitaFija_codigo] varchar (100)
,[corrimientoVisitaFija_visitaFija_visitaFija] varchar (300)
,[corrimientoVisitaFija_visitaFija_visitaFija_codigo] varchar (100)

)
create table [cnt_corrimientoVisitaFija_aux_aux] (
uid varchar (500)

)
create table [cnt_pagosContrato_aux] (
uid varchar (500)
,[pagosContrato] varchar (300)
,[pagosContrato_codigo] varchar (100)
,[pagosContrato_contrato_contrato] varchar (300)
,[pagosContrato_contrato_contrato_codigo] varchar (100)

)
create table [cnt_pagosContrato_aux_aux] (
uid varchar (500)

)
create table [cnt_periodoContrato_aux] (
uid varchar (500)
,[periodoContrato] varchar (300)
,[periodoContrato_codigo] varchar (100)

)
create table [cnt_periodoContrato_aux_aux] (
uid varchar (500)

)
create table [cnt_tiempoRespuesta_aux] (
uid varchar (500)
,[tiempoRespuesta] varchar (300)
,[tiempoRespuesta_codigo] varchar (100)
,[tiempoRespuesta_contrato_contrato] varchar (300)
,[tiempoRespuesta_contrato_contrato_codigo] varchar (100)
,[tiempoRespuesta_prioridadDocumento_prioridadDocumento] varchar (300)
,[tiempoRespuesta_prioridadDocumento_prioridadDocumento_codigo] varchar (100)
,[tiempoRespuesta_estrategiaPrioridad_estrategiaPrioridad] varchar (300)
,[tiempoRespuesta_estrategiaPrioridad_estrategiaPrioridad_codigo] varchar (100)

)
create table [cnt_tiempoRespuesta_aux_aux] (
uid varchar (500)

)
create table [cnt_tipoContrato_aux] (
uid varchar (500)
,[tipoContrato] varchar (300)
,[tipoContrato_codigo] varchar (100)

)
create table [cnt_tipoContrato_aux_aux] (
uid varchar (500)

)
create table [cnt_visitaFija_aux] (
uid varchar (500)
,[visitaFija] varchar (300)
,[visitaFija_codigo] varchar (100)
,[visitaFija_documento.ot_documento.ot] varchar (300)
,[visitaFija_contratoEquipo_contratoEquipo] varchar (300)
,[visitaFija_contratoEquipo_contratoEquipo_codigo] varchar (100)
,[visitaFija_contratoDetalleVisita_contratoDetalleVisita] varchar (300)
,[visitaFija_contratoDetalleVisita_contratoDetalleVisita_codigo] varchar (100)
,[visitaFija_catalogo.tempario_catalogo.tempario] varchar (300)
,[visitaFija_configContrato_configContrato] varchar (300)

)
create table [cnt_visitaFija_aux_aux] (
uid varchar (500)

)
create table [cnt_visitaFija_catalogo_aux] (
uid varchar (500)
,[visitaFija_catalogo_visitaFija_visitaFija] varchar (300)
,[visitaFija_catalogo_visitaFija_visitaFija_codigo] varchar (100)
,[visitaFija_catalogo_catalogo_catalogo] varchar (300)
,[visitaFija_catalogo_catalogo_catalogo_codigo] varchar (100)

)
create table [cnt_visitaFija_catalogo_aux_aux] (
uid varchar (500)

)
create table [com_comision_aux] (
uid varchar (500)
,[comision] varchar (300)
,[comision_codigo] varchar (100)
,[comision_cargo_cargo] varchar (300)
,[comision_cargo_cargo_codigo] varchar (100)
,[comision_subtipoCatalogo_subtipoCatalogo] varchar (300)
,[comision_subtipoCatalogo_subtipoCatalogo_codigo] varchar (100)
,[comision_condicion_condicion] varchar (300)
,[comision_condicion_condicion_codigo] varchar (100)
,[comision_opcionCondicion_opcionCondicion] varchar (300)
,[comision_opcionCondicion_opcionCondicion_codigo] varchar (100)
,[comision_zona_zona] varchar (300)
,[comision_zona_zona_codigo] varchar (100)

)
create table [com_comision_aux_aux] (
uid varchar (500)

)
create table [dis_estadoEvento_aux] (
uid varchar (500)
,[estadoEvento] varchar (300)
,[estadoEvento_codigo] varchar (100)

)
create table [dis_estadoEvento_aux_aux] (
uid varchar (500)

)
create table [dis_evento_aux] (
uid varchar (500)
,[evento] varchar (300)
,[evento_codigo] varchar (100)
,[evento_equipo_equipo] varchar (300)
,[evento_equipo_equipo_codigo] varchar (100)
,[evento_equipo_equipo_serial] varchar (100)
,[evento_motivoEvento_motivoEvento] varchar (300)
,[evento_motivoEvento_motivoEvento_codigo] varchar (100)
,[evento_usuario_usuario] varchar (300)
,[evento_usuario_usuario_codigo] varchar (100)
,[evento_estadoEquipo_estadoEquipo] varchar (300)
,[evento_estadoEquipo_estadoEquipo_codigo] varchar (100)
,[evento_falla_falla] varchar (300)
,[evento_falla_falla_codigo] varchar (100)
,[evento_falla_causa_falla] varchar (300)
,[evento_falla_causa_falla_codigo] varchar (100)
,[evento_metodoDeteccion_metodoDeteccion] varchar (300)
,[evento_metodoDeteccion_metodoDeteccion_codigo] varchar (100)
,[evento_estadoEvento_estadoEvento] varchar (300)
,[evento_estadoEvento_estadoEvento_codigo] varchar (100)

)
create table [dis_evento_aux_aux] (
uid varchar (500)

)
create table [dis_evento_catalogo_aux] (
uid varchar (500)
,[evento_catalogo_evento_evento] varchar (300)
,[evento_catalogo_evento_evento_codigo] varchar (100)
,[evento_catalogo_catalogo_catalogo] varchar (300)
,[evento_catalogo_catalogo_catalogo_codigo] varchar (100)

)
create table [dis_evento_catalogo_aux_aux] (
uid varchar (500)

)
create table [dis_evento_estadoEvento_aux] (
uid varchar (500)
,[evento_estadoEvento_evento_evento] varchar (300)
,[evento_estadoEvento_evento_evento_codigo] varchar (100)
,[evento_estadoEvento_estadoEvento_estadoEvento] varchar (300)
,[evento_estadoEvento_estadoEvento_estadoEvento_codigo] varchar (100)
,[evento_estadoEvento_sistema_sistema] varchar (300)
,[evento_estadoEvento_sistema_sistema_codigo] varchar (100)

)
create table [dis_evento_estadoEvento_aux_aux] (
uid varchar (500)

)
create table [dis_metodoDeteccion_aux] (
uid varchar (500)
,[metodoDeteccion] varchar (300)
,[metodoDeteccion_codigo] varchar (100)

)
create table [dis_metodoDeteccion_aux_aux] (
uid varchar (500)

)
create table [dis_motivoEvento_aux] (
uid varchar (500)
,[motivoEvento] varchar (300)
,[motivoEvento_codigo] varchar (100)

)
create table [dis_motivoEvento_aux_aux] (
uid varchar (500)

)
create table [dis_obra_aux] (
uid varchar (500)
,[obra] varchar (300)
,[obra_codigo] varchar (100)
,[obra_sucursal_sucursal] varchar (300)
,[obra_sucursal_sucursal_codigo] varchar (100)

)
create table [dis_obra_aux_aux] (
uid varchar (500)

)
create table [dis_obra_catalogo_aux] (
uid varchar (500)
,[obra_catalogo_obra_obra] varchar (300)
,[obra_catalogo_obra_obra_codigo] varchar (100)
,[obra_catalogo_catalogo_catalogo] varchar (300)
,[obra_catalogo_catalogo_catalogo_codigo] varchar (100)

)
create table [dis_obra_catalogo_aux_aux] (
uid varchar (500)

)
create table [dis_obra_equipo_aux] (
uid varchar (500)
,[obra_equipo_obra_obra] varchar (300)
,[obra_equipo_obra_obra_codigo] varchar (100)
,[obra_equipo_equipo_equipo] varchar (300)
,[obra_equipo_equipo_equipo_codigo] varchar (100)
,[obra_equipo_equipo_equipo_serial] varchar (100)

)
create table [dis_obra_equipo_aux_aux] (
uid varchar (500)

)
create table [doc_centroCosto_aux] (
uid varchar (500)
,[centroCosto] varchar (300)
,[centroCosto_codigo] varchar (100)

)
create table [doc_centroCosto_aux_aux] (
uid varchar (500)

)
create table [doc_condicion_aux] (
uid varchar (500)
,[condicion] varchar (300)
,[condicion_codigo] varchar (100)

)
create table [doc_condicion_aux_aux] (
uid varchar (500)

)
create table [doc_costeo_aux] (
uid varchar (500)
,[costeo] varchar (300)
,[costeo_codigo] varchar (100)

)
create table [doc_costeo_aux_aux] (
uid varchar (500)

)
create table [doc_documento_aux] (
uid varchar (500)
,[documento] varchar (300)
,[documento_codigo] varchar (100)
,[documento_numero] int
,[documento_subtipoDocumento_subtipoDocumento] varchar (300)
,[documento_subtipoDocumento_subtipoDocumento_codigo] varchar (100)
,[documento_tercero_cliente_tercero] varchar (300)
,[documento_tercero_cliente_tercero_codigo] varchar (100)
,[documento_tercero_cliente_tercero_nit] varchar (100)
,[documento_tercero_cliente_tercero_nombreCorto] varchar (100)
,[documento_tercero_proveedor_tercero] varchar (300)
,[documento_tercero_proveedor_tercero_codigo] varchar (100)
,[documento_tercero_proveedor_tercero_nit] varchar (100)
,[documento_tercero_proveedor_tercero_nombreCorto] varchar (100)
,[documento_prioridadDocumento_prioridadDocumento] varchar (300)
,[documento_prioridadDocumento_prioridadDocumento_codigo] varchar (100)
,[documento_moneda_moneda] varchar (300)
,[documento_moneda_moneda_codigo] varchar (100)
,[documento_estadoTipoDocumento_estadoTipoDocumento] varchar (300)
,[documento_estadoTipoDocumento_estadoTipoDocumento_codigo] varchar (100)
,[documento_motivoestado_motivoestado] varchar (300)
,[documento_motivoestado_motivoestado_codigo] varchar (100)
,[documento_usuario_asignado_usuario] varchar (300)
,[documento_usuario_asignado_usuario_codigo] varchar (100)
,[documento_usuario_enUso_usuario] varchar (300)
,[documento_usuario_enUso_usuario_codigo] varchar (100)

)
create table [doc_documento.alquiler_aux] (
uid varchar (500)
,[documento.alquiler] varchar (300)

)
create table [doc_documento.cotizacion_aux] (
uid varchar (500)
,[documento.cotizacion] varchar (300)
,[documento.cotizacion_sucursal_sucursal] varchar (300)
,[documento.cotizacion_sucursal_sucursal_codigo] varchar (100)
,[documento.cotizacion_equipo_equipo] varchar (300)
,[documento.cotizacion_equipo_equipo_codigo] varchar (100)
,[documento.cotizacion_equipo_equipo_serial] varchar (100)
,[documento.cotizacion_usuario_asesor_usuario] varchar (300)
,[documento.cotizacion_usuario_asesor_usuario_codigo] varchar (100)

)
create table [doc_documento.cotizacion_aux_aux] (
uid varchar (500)

)
create table [doc_documento.cotizacion_condicion_aux] (
uid varchar (500)
,[documento.cotizacion_condicion_opcionCondicion_opcionCondicion] varchar (300)
,[documento.cotizacion_condicion_opcionCondicion_opcionCondicion_codigo] varchar (100)
,[documento.cotizacion_condicion_documento.cotizacion_documento.cotizacion] varchar (300)
,[documento.cotizacion_condicion_condicion_condicion] varchar (300)
,[documento.cotizacion_condicion_condicion_condicion_codigo] varchar (100)

)
create table [doc_documento.cotizacion_condicion_aux_aux] (
uid varchar (500)

)
create table [doc_documento.entrada_aux] (
uid varchar (500)
,[documento.entrada] varchar (300)
,[documento.entrada_usuario_recibe_usuario] varchar (300)
,[documento.entrada_usuario_recibe_usuario_codigo] varchar (100)
,[documento.entrada_tercero_transportador_tercero] varchar (300)
,[documento.entrada_tercero_transportador_tercero_codigo] varchar (100)
,[documento.entrada_tercero_transportador_tercero_nit] varchar (100)
,[documento.entrada_tercero_transportador_tercero_nombreCorto] varchar (100)
,[documento.entrada_sucursal_sucursal] varchar (300)
,[documento.entrada_sucursal_sucursal_codigo] varchar (100)

)
create table [doc_documento.entrada_aux_aux] (
uid varchar (500)

)
create table [doc_documento.ordenCompra_aux] (
uid varchar (500)
,[documento.ordenCompra] varchar (300)
,[documento.ordenCompra_formaPago_formaPago] varchar (300)
,[documento.ordenCompra_formaPago_formaPago_codigo] varchar (100)
,[documento.ordenCompra_sucursal_sucursal] varchar (300)
,[documento.ordenCompra_sucursal_sucursal_codigo] varchar (100)

)
create table [doc_documento.ordenCompra_aux_aux] (
uid varchar (500)

)
create table [doc_documento.ot_aux] (
uid varchar (500)
,[documento.ot] varchar (300)
,[documento.ot_tipoServicio_tipoServicio] varchar (300)
,[documento.ot_tipoServicio_tipoServicio_codigo] varchar (100)
,[documento.ot_equipo_equipo] varchar (300)
,[documento.ot_equipo_equipo_codigo] varchar (100)
,[documento.ot_equipo_equipo_serial] varchar (100)
,[documento.ot_usuario_coordinador_usuario] varchar (300)
,[documento.ot_usuario_coordinador_usuario_codigo] varchar (100)
,[documento.ot_motivoCancelacion_motivoCancelacion] varchar (300)
,[documento.ot_motivoCancelacion_motivoCancelacion_codigo] varchar (100)
,[documento.ot_sucursal_sucursal] varchar (300)
,[documento.ot_sucursal_sucursal_codigo] varchar (100)
,[documento.ot_sistema_sistema] varchar (300)
,[documento.ot_sistema_sistema_codigo] varchar (100)
,[documento.ot_departamentoSolicitud_departamentoSolicitud] varchar (300)
,[documento.ot_departamentoSolicitud_departamentoSolicitud_codigo] varchar (100)
,[documento.ot_contrato_contrato] varchar (300)
,[documento.ot_contrato_contrato_codigo] varchar (100)
,[documento.ot_zona_zona] varchar (300)
,[documento.ot_zona_zona_codigo] varchar (100)

)
create table [doc_documento.ot_aux_aux] (
uid varchar (500)

)
create table [doc_documento.ot_centroCosto_aux] (
uid varchar (500)
,[documento.ot_centroCosto_centroCosto_centroCosto] varchar (300)
,[documento.ot_centroCosto_centroCosto_centroCosto_codigo] varchar (100)
,[documento.ot_centroCosto_documento.ot_documento.ot] varchar (300)

)
create table [doc_documento.ot_centroCosto_aux_aux] (
uid varchar (500)

)
create table [doc_documento.ot_pruebaCheckList_aux] (
uid varchar (500)
,[documento.ot_pruebaCheckList_documento.ot_documento.ot] varchar (300)
,[documento.ot_pruebaCheckList_pruebaCheckList_pruebaCheckList] varchar (300)
,[documento.ot_pruebaCheckList_pruebaCheckList_pruebaCheckList_codigo] varchar (100)

)
create table [doc_documento.ot_pruebaCheckList_aux_aux] (
uid varchar (500)

)
create table [doc_documento.proyecto_aux] (
uid varchar (500)
,[documento.proyecto] varchar (300)

)
create table [doc_documento.proyecto_aux_aux] (
uid varchar (500)

)
create table [doc_documento.proyecto_calidad_aux] (
uid varchar (500)
,[documento.proyecto_calidad_calidad_calidad] varchar (300)
,[documento.proyecto_calidad_calidad_calidad_codigo] varchar (100)
,[documento.proyecto_calidad_documento.proyecto_documento.proyecto] varchar (300)

)
create table [doc_documento.proyecto_calidad_aux_aux] (
uid varchar (500)

)
create table [doc_documento.proyecto_ejecutores_aux] (
uid varchar (500)
,[documento.proyecto_ejecutores_ejecutores_ejecutores] varchar (300)
,[documento.proyecto_ejecutores_ejecutores_ejecutores_codigo] varchar (100)
,[documento.proyecto_ejecutores_documento.proyecto_documento.proyecto] varchar (300)

)
create table [doc_documento.proyecto_entregable_aux] (
uid varchar (500)
,[documento.proyecto_entregable_documento.proyecto_documento.proyecto] varchar (300)
,[documento.proyecto_entregable_entregable_entregable] varchar (300)
,[documento.proyecto_entregable_entregable_entregable_codigo] varchar (100)

)
create table [doc_documento.proyecto_entregable_aux_aux] (
uid varchar (500)

)
create table [doc_documento.proyecto_etapa_aux] (
uid varchar (500)
,[documento.proyecto_etapa_etapa_etapa] varchar (300)
,[documento.proyecto_etapa_etapa_etapa_codigo] varchar (100)
,[documento.proyecto_etapa_documento.proyecto_documento.proyecto] varchar (300)

)
create table [doc_documento.proyecto_etapa_aux_aux] (
uid varchar (500)

)
create table [doc_documento.proyecto_sucursal_aux] (
uid varchar (500)
,[documento.proyecto_sucursal_documento.proyecto_documento.proyecto] varchar (300)
,[documento.proyecto_sucursal_sucursal_sucursal] varchar (300)
,[documento.proyecto_sucursal_sucursal_sucursal_codigo] varchar (100)

)
create table [doc_documento.proyecto_sucursal_aux_aux] (
uid varchar (500)

)
create table [doc_documento.requisicion_aux] (
uid varchar (500)
,[documento.requisicion] varchar (300)
,[documento.requisicion_sucursal_sucursal] varchar (300)
,[documento.requisicion_sucursal_sucursal_codigo] varchar (100)

)
create table [doc_documento.requisicion_aux_aux] (
uid varchar (500)

)
create table [doc_documento.salida_aux] (
uid varchar (500)
,[documento.salida] varchar (300)
,[documento.salida_usuario_recibe_usuario] varchar (300)
,[documento.salida_usuario_recibe_usuario_codigo] varchar (100)
,[documento.salida_tercero_transportador_tercero] varchar (300)
,[documento.salida_tercero_transportador_tercero_codigo] varchar (100)
,[documento.salida_tercero_transportador_tercero_nit] varchar (100)
,[documento.salida_tercero_transportador_tercero_nombreCorto] varchar (100)
,[documento.salida_sucursal_sucursal] varchar (300)
,[documento.salida_sucursal_sucursal_codigo] varchar (100)

)
create table [doc_documento.salida_aux_aux] (
uid varchar (500)

)
create table [doc_documento.solicitud_aux] (
uid varchar (500)
,[documento.solicitud] varchar (300)
,[documento.solicitud_departamentoSolicitud_departamentoSolicitud] varchar (300)
,[documento.solicitud_departamentoSolicitud_departamentoSolicitud_codigo] varchar (100)
,[documento.solicitud_medioSolicitud_medioSolicitud] varchar (300)
,[documento.solicitud_medioSolicitud_medioSolicitud_codigo] varchar (100)
,[documento.solicitud_equipo_equipo] varchar (300)
,[documento.solicitud_equipo_equipo_codigo] varchar (100)
,[documento.solicitud_equipo_equipo_serial] varchar (100)
,[documento.solicitud_sucursal_sucursal] varchar (300)
,[documento.solicitud_sucursal_sucursal_codigo] varchar (100)
,[documento.solicitud_zona_zona] varchar (300)
,[documento.solicitud_zona_zona_codigo] varchar (100)

)
create table [doc_documento.solicitud_aux_aux] (
uid varchar (500)

)
create table [doc_documento.traslado_aux] (
uid varchar (500)
,[documento.traslado] varchar (300)
,[documento.traslado_bodega_origen_bodega] varchar (300)
,[documento.traslado_bodega_origen_bodega_codigo] varchar (100)
,[documento.traslado_bodega_destino_bodega] varchar (300)
,[documento.traslado_bodega_destino_bodega_codigo] varchar (100)

)
create table [doc_documento.traslado_aux_aux] (
uid varchar (500)

)
create table [doc_documento_aux_aux] (
uid varchar (500)

)
create table [doc_documento_catalogo.tempario_aux] (
uid varchar (500)
,[documento_catalogo.tempario_catalogo.tempario_catalogo.tempario] varchar (300)
,[documento_catalogo.tempario_documento_documento] varchar (300)
,[documento_catalogo.tempario_documento_documento_codigo] varchar (100)
,[documento_catalogo.tempario_documento_documento_numero] int
,[documento_catalogo.tempario_itemDocumento_itemDocumento] varchar (300)
,[documento_catalogo.tempario_itemDocumento_itemDocumento_codigo] varchar (100)

)
create table [doc_documento_catalogo.tempario_aux_aux] (
uid varchar (500)

)
create table [doc_documento_contacto_aux] (
uid varchar (500)
,[documento_contacto_documento_documento] varchar (300)
,[documento_contacto_documento_documento_codigo] varchar (100)
,[documento_contacto_documento_documento_numero] int
,[documento_contacto_contacto_contacto] varchar (300)
,[documento_contacto_contacto_contacto_codigo] varchar (100)

)
create table [doc_documento_contacto_aux_aux] (
uid varchar (500)

)
create table [doc_documento_estadoTipoDocumento_aux] (
uid varchar (500)
,[documento_estadoTipoDocumento_documento_documento] varchar (300)
,[documento_estadoTipoDocumento_documento_documento_codigo] varchar (100)
,[documento_estadoTipoDocumento_documento_documento_numero] int
,[documento_estadoTipoDocumento_estadoTipoDocumento_estadoTipoDocumento] varchar (300)
,[documento_estadoTipoDocumento_estadoTipoDocumento_estadoTipoDocumento_codigo] varchar (100)
,[documento_estadoTipoDocumento_motivoestado_motivoestado] varchar (300)
,[documento_estadoTipoDocumento_motivoestado_motivoestado_codigo] varchar (100)

)
create table [doc_documento_estadoTipoDocumento_aux_aux] (
uid varchar (500)

)
create table [doc_documento_evaluacion_aux] (
uid varchar (500)
,[documento_evaluacion_documento_documento] varchar (300)
,[documento_evaluacion_documento_documento_codigo] varchar (100)
,[documento_evaluacion_documento_documento_numero] int
,[documento_evaluacion_evaluacion_evaluacion] varchar (300)
,[documento_evaluacion_evaluacion_evaluacion_codigo] varchar (100)

)
create table [doc_documento_evaluacion_aux_aux] (
uid varchar (500)

)
create table [doc_documento_opcionRespuesta_aux] (
uid varchar (500)
,[documento_opcionRespuesta_documento_documento] varchar (300)
,[documento_opcionRespuesta_documento_documento_codigo] varchar (100)
,[documento_opcionRespuesta_documento_documento_numero] int
,[documento_opcionRespuesta_opcionRespuesta_opcionRespuesta] varchar (300)
,[documento_opcionRespuesta_opcionRespuesta_opcionRespuesta_codigo] varchar (100)
,[documento_opcionRespuesta_pregunta_pregunta] varchar (300)
,[documento_opcionRespuesta_pregunta_pregunta_codigo] varchar (100)

)
create table [doc_documento_opcionRespuesta_aux_aux] (
uid varchar (500)

)
create table [doc_documentoAtributo_aux] (
uid varchar (500)
,[documentoAtributo] varchar (8000)
,[documentoAtributo_codigo] varchar (100)
,[documentoAtributo_documento_documento] varchar (300)
,[documentoAtributo_documento_documento_codigo] varchar (100)
,[documentoAtributo_documento_documento_numero] int
,[documentoAtributo_atributo_atributo] varchar (900)
,[documentoAtributo_atributo_atributo_codigo] varchar (100)
,[documentoAtributo_opcionAtributo_opcionAtributo] varchar (300)
,[documentoAtributo_opcionAtributo_opcionAtributo_codigo] varchar (100)

)
create table [doc_documentoAtributo_aux_aux] (
uid varchar (500)

)
create table [doc_documentoComentario_aux] (
uid varchar (500)
,[documentoComentario] varchar (300)
,[documentoComentario_codigo] varchar (100)
,[documentoComentario_documento_documento] varchar (300)
,[documentoComentario_documento_documento_codigo] varchar (100)
,[documentoComentario_documento_documento_numero] int
,[documentoComentario_usuario_usuario] varchar (300)
,[documentoComentario_usuario_usuario_codigo] varchar (100)
,[documentoComentario_tarea_tarea] varchar (300)
,[documentoComentario_tarea_tarea_codigo] varchar (100)
,[documentoComentario_contacto_contacto] varchar (300)
,[documentoComentario_contacto_contacto_codigo] varchar (100)
,[documentoComentario_reporteTecnico_reporteTecnico] varchar (300)
,[documentoComentario_reporteTecnico_reporteTecnico_codigo] varchar (100)

)
create table [doc_documentoComentario_aux_aux] (
uid varchar (500)

)
create table [doc_estadoTipoDocumento_aux] (
uid varchar (500)
,[estadoTipoDocumento] varchar (300)
,[estadoTipoDocumento_codigo] varchar (100)
,[estadoTipoDocumento_tipoDocumento_tipoDocumento] varchar (300)
,[estadoTipoDocumento_tipoDocumento_tipoDocumento_codigo] varchar (100)

)
create table [doc_estadoTipoDocumento_aux_aux] (
uid varchar (500)

)
create table [doc_estadoTipoDocumento_perfil_aux] (
uid varchar (500)
,[estadoTipoDocumento_perfil_estadoTipoDocumento_estadoTipoDocumento] varchar (300)
,[estadoTipoDocumento_perfil_estadoTipoDocumento_estadoTipoDocumento_codigo] varchar (100)
,[estadoTipoDocumento_perfil_perfil_perfil] varchar (300)
,[estadoTipoDocumento_perfil_perfil_perfil_codigo] varchar (100)

)
create table [doc_estadoTipoDocumento_perfil_aux_aux] (
uid varchar (500)

)
create table [doc_estadoTipoDocumento_subtipoDocumento_aux] (
uid varchar (500)
,[estadoTipoDocumento_subtipoDocumento_estadoTipoDocumento_estadoTipoDocumento] varchar (300)
,[estadoTipoDocumento_subtipoDocumento_estadoTipoDocumento_estadoTipoDocumento_codigo] varchar (100)
,[estadoTipoDocumento_subtipoDocumento_subtipoDocumento_subtipoDocumento] varchar (300)
,[estadoTipoDocumento_subtipoDocumento_subtipoDocumento_subtipoDocumento_codigo] varchar (100)
,[estadoTipoDocumento_subtipoDocumento_estadoTipoDocumento_destino_estadoTipoDocumento] varchar (300)
,[estadoTipoDocumento_subtipoDocumento_estadoTipoDocumento_destino_estadoTipoDocumento_codigo] varchar (100)

)
create table [doc_estadoTipoDocumento_subtipoDocumento_aux_aux] (
uid varchar (500)

)
create table [doc_estrategiaPrioridad_aux] (
uid varchar (500)
,[estrategiaPrioridad] varchar (300)
,[estrategiaPrioridad_codigo] varchar (100)

)
create table [doc_estrategiaPrioridad_aux_aux] (
uid varchar (500)

)
create table [doc_evaluacion_aux] (
uid varchar (500)
,[evaluacion] varchar (300)
,[evaluacion_codigo] varchar (100)
,[evaluacion_subtipoDocumento_subtipoDocumento] varchar (300)
,[evaluacion_subtipoDocumento_subtipoDocumento_codigo] varchar (100)

)
create table [doc_evaluacion_aux_aux] (
uid varchar (500)

)
create table [doc_flujoDocumento_aux] (
uid varchar (500)
,[flujoDocumento] varchar (300)
,[flujoDocumento_codigo] varchar (100)
,[flujoDocumento_subtipoDocumento_origen_subtipoDocumento] varchar (300)
,[flujoDocumento_subtipoDocumento_origen_subtipoDocumento_codigo] varchar (100)
,[flujoDocumento_subtipoDocumento_destino_subtipoDocumento] varchar (300)
,[flujoDocumento_subtipoDocumento_destino_subtipoDocumento_codigo] varchar (100)
,[flujoDocumento_estadoTipoDocumento_origen_estadoTipoDocumento] varchar (300)
,[flujoDocumento_estadoTipoDocumento_origen_estadoTipoDocumento_codigo] varchar (100)
,[flujoDocumento_estadoTipoDocumento_resultado_estadoTipoDocumento] varchar (300)
,[flujoDocumento_estadoTipoDocumento_resultado_estadoTipoDocumento_codigo] varchar (100)

)
create table [doc_flujoDocumento_aux_aux] (
uid varchar (500)

)
create table [doc_formaPago_aux] (
uid varchar (500)
,[formaPago] varchar (300)
,[formaPago_codigo] varchar (100)

)
create table [doc_formaPago_aux_aux] (
uid varchar (500)

)
create table [doc_incoterm_aux] (
uid varchar (500)
,[incoterm] varchar (300)
,[incoterm_codigo] varchar (100)

)
create table [doc_incoterm_aux_aux] (
uid varchar (500)

)
create table [doc_itemDocumento_aux] (
uid varchar (500)
,[itemDocumento] varchar (300)
,[itemDocumento_codigo] varchar (100)
,[itemDocumento_documento_documento] varchar (300)
,[itemDocumento_documento_documento_codigo] varchar (100)
,[itemDocumento_documento_documento_numero] int
,[itemDocumento_centroCosto_centroCosto] varchar (300)
,[itemDocumento_centroCosto_centroCosto_codigo] varchar (100)
,[itemDocumento_catalogo_catalogo] varchar (300)
,[itemDocumento_catalogo_catalogo_codigo] varchar (100)
,[itemDocumento_bodega_bodega] varchar (300)
,[itemDocumento_bodega_bodega_codigo] varchar (100)
,[itemDocumento_incoterm_incoterm] varchar (300)
,[itemDocumento_incoterm_incoterm_codigo] varchar (100)
,[itemDocumento_listaPrecio_listaPrecio] varchar (300)
,[itemDocumento_listaPrecio_listaPrecio_codigo] varchar (100)

)
create table [doc_itemDocumento_aux_aux] (
uid varchar (500)

)
create table [doc_medioSolicitud_aux] (
uid varchar (500)
,[medioSolicitud] varchar (300)
,[medioSolicitud_codigo] varchar (100)

)
create table [doc_medioSolicitud_aux_aux] (
uid varchar (500)

)
create table [doc_motivoestado_aux] (
uid varchar (500)
,[motivoestado] varchar (300)
,[motivoestado_codigo] varchar (100)
,[motivoestado_estadoTipoDocumento_estadoTipoDocumento] varchar (300)
,[motivoestado_estadoTipoDocumento_estadoTipoDocumento_codigo] varchar (100)

)
create table [doc_motivoestado_aux_aux] (
uid varchar (500)

)
create table [doc_opcionCondicion_aux] (
uid varchar (500)
,[opcionCondicion] varchar (300)
,[opcionCondicion_codigo] varchar (100)
,[opcionCondicion_condicion_condicion] varchar (300)
,[opcionCondicion_condicion_condicion_codigo] varchar (100)

)
create table [doc_opcionCondicion_aux_aux] (
uid varchar (500)

)
create table [doc_opcionRespuesta_aux] (
uid varchar (500)
,[opcionRespuesta] varchar (300)
,[opcionRespuesta_codigo] varchar (100)
,[opcionRespuesta_pregunta_pregunta] varchar (300)
,[opcionRespuesta_pregunta_pregunta_codigo] varchar (100)

)
create table [doc_opcionRespuesta_aux_aux] (
uid varchar (500)

)
create table [doc_pendienteDocumento_aux] (
uid varchar (500)
,[pendienteDocumento] varchar (300)
,[pendienteDocumento_codigo] varchar (100)
,[pendienteDocumento_documento_documento] varchar (300)
,[pendienteDocumento_documento_documento_codigo] varchar (100)
,[pendienteDocumento_documento_documento_numero] int
,[pendienteDocumento_catalogo_catalogo] varchar (300)
,[pendienteDocumento_catalogo_catalogo_codigo] varchar (100)
,[pendienteDocumento_tipoDocumento_tipoDocumento] varchar (300)
,[pendienteDocumento_tipoDocumento_tipoDocumento_codigo] varchar (100)
,[pendienteDocumento_reporteTecnico_reporteTecnico] varchar (300)
,[pendienteDocumento_reporteTecnico_reporteTecnico_codigo] varchar (100)

)
create table [doc_pendienteDocumento_aux_aux] (
uid varchar (500)

)
create table [doc_pendienteDocumento_doc_itemDocumento_aux] (
uid varchar (500)
,[pendienteDocumento_doc_itemDocumento_pendienteDocumento_pendienteDocumento] varchar (300)
,[pendienteDocumento_doc_itemDocumento_pendienteDocumento_pendienteDocumento_codigo] varchar (100)
,[pendienteDocumento_doc_itemDocumento_itemDocumento_itemDocumento] varchar (300)
,[pendienteDocumento_doc_itemDocumento_itemDocumento_itemDocumento_codigo] varchar (100)

)
create table [doc_pregunta_aux] (
uid varchar (500)
,[pregunta] varchar (300)
,[pregunta_codigo] varchar (100)
,[pregunta_evaluacion_evaluacion] varchar (300)
,[pregunta_evaluacion_evaluacion_codigo] varchar (100)

)
create table [doc_pregunta_aux_aux] (
uid varchar (500)

)
create table [doc_prioridadDocumento_aux] (
uid varchar (500)
,[prioridadDocumento] varchar (300)
,[prioridadDocumento_codigo] varchar (100)
,[prioridadDocumento_tipoDocumento_tipoDocumento] varchar (300)
,[prioridadDocumento_tipoDocumento_tipoDocumento_codigo] varchar (100)
,[prioridadDocumento_estrategiaPrioridad_estrategiaPrioridad] varchar (300)
,[prioridadDocumento_estrategiaPrioridad_estrategiaPrioridad_codigo] varchar (100)

)
create table [doc_prioridadDocumento_aux_aux] (
uid varchar (500)

)
create table [doc_soporteItemDocumento_aux] (
uid varchar (500)
,[soporteItemDocumento] varchar (300)
,[soporteItemDocumento_codigo] varchar (100)
,[soporteItemDocumento_itemDocumento_itemDocumento] varchar (300)
,[soporteItemDocumento_itemDocumento_itemDocumento_codigo] varchar (100)
,[soporteItemDocumento_usuario_usuario] varchar (300)
,[soporteItemDocumento_usuario_usuario_codigo] varchar (100)

)
create table [doc_soporteItemDocumento_aux_aux] (
uid varchar (500)

)
create table [doc_subtipoDocumento_aux] (
uid varchar (500)
,[subtipoDocumento] varchar (300)
,[subtipoDocumento_codigo] varchar (100)
,[subtipoDocumento_tipoDocumento_tipoDocumento] varchar (300)
,[subtipoDocumento_tipoDocumento_tipoDocumento_codigo] varchar (100)

)
create table [doc_subtipoDocumento_atributo_aux] (
uid varchar (500)
,[subtipoDocumento_atributo_subtipoDocumento_subtipoDocumento] varchar (300)
,[subtipoDocumento_atributo_subtipoDocumento_subtipoDocumento_codigo] varchar (100)
,[subtipoDocumento_atributo_atributo_atributo] varchar (900)
,[subtipoDocumento_atributo_atributo_atributo_codigo] varchar (100)

)
create table [doc_subtipoDocumento_atributo_aux_aux] (
uid varchar (500)

)
create table [doc_subtipoDocumento_aux_aux] (
uid varchar (500)

)
create table [doc_subtipoLectura_aux] (
uid varchar (500)
,[subtipoLectura] varchar (300)
,[subtipoLectura_codigo] varchar (100)
,[subtipoLectura_subtipoDocumento_subtipoDocumento] varchar (300)
,[subtipoLectura_subtipoDocumento_subtipoDocumento_codigo] varchar (100)
,[subtipoLectura_subtipoDocumento_origen_subtipoDocumento] varchar (300)
,[subtipoLectura_subtipoDocumento_origen_subtipoDocumento_codigo] varchar (100)

)
create table [doc_tarea_aux] (
uid varchar (500)
,[tarea] varchar (300)
,[tarea_codigo] varchar (100)
,[tarea_catalogo_catalogo] varchar (300)
,[tarea_catalogo_catalogo_codigo] varchar (100)
,[tarea_cargo_cargo] varchar (300)
,[tarea_cargo_cargo_codigo] varchar (100)
,[tarea_documento_documento] varchar (300)
,[tarea_documento_documento_codigo] varchar (100)
,[tarea_documento_documento_numero] int

)
create table [doc_tarea_aux_aux] (
uid varchar (500)

)
create table [doc_tipoDocumento_aux] (
uid varchar (500)
,[tipoDocumento] varchar (300)
,[tipoDocumento_codigo] varchar (100)

)
create table [doc_tipoDocumento_aux_aux] (
uid varchar (500)

)
create table [equ_alquiler_aux] (
uid varchar (500)
,[alquiler] varchar (300)
,[alquiler_codigo] varchar (100)
,[alquiler_sucursal_sucursal] varchar (300)
,[alquiler_sucursal_sucursal_codigo] varchar (100)
,[alquiler_tercero_tercero] varchar (300)
,[alquiler_tercero_tercero_codigo] varchar (100)
,[alquiler_tercero_tercero_nit] varchar (100)
,[alquiler_tercero_tercero_nombreCorto] varchar (100)
,[alquiler_subtipoDocumento_subtipoDocumento] varchar (300)
,[alquiler_subtipoDocumento_subtipoDocumento_codigo] varchar (100)
,[alquiler_numero] int
,[alquiler_documento_documento] varchar (300)
,[alquiler_documento_documento_codigo] varchar (100)
,[alquiler_documento_documento_numero] int

)
create table [equ_alquiler_aux_aux] (
uid varchar (500)

)
create table [equ_campana_aux] (
uid varchar (500)
,[campana] varchar (300)
,[campana_codigo] varchar (100)
,[campana_tercero_tercero] varchar (300)
,[campana_tercero_tercero_codigo] varchar (100)
,[campana_tercero_tercero_nit] varchar (100)
,[campana_tercero_tercero_nombreCorto] varchar (100)
,[campana_catalogo.tempario_catalogo.tempario] varchar (300)

)
create table [equ_campana_aux_aux] (
uid varchar (500)

)
create table [equ_campana_documento.OT_aux] (
uid varchar (500)
,[campana_documento.OT_campana_campana] varchar (300)
,[campana_documento.OT_campana_campana_codigo] varchar (100)
,[campana_documento.OT_documento.ot_documento.ot] varchar (300)

)
create table [equ_campana_documento.OT_aux_aux] (
uid varchar (500)

)
create table [equ_cicloHorometro_aux] (
uid varchar (500)
,[cicloHorometro] varchar (300)
,[cicloHorometro_codigo] varchar (100)
,[cicloHorometro_equipo_equipo] varchar (300)
,[cicloHorometro_equipo_equipo_codigo] varchar (100)
,[cicloHorometro_equipo_equipo_serial] varchar (100)

)
create table [equ_cicloHorometro_aux_aux] (
uid varchar (500)

)
create table [equ_detalleAlquiler_aux] (
uid varchar (500)
,[detalleAlquiler] varchar (300)
,[detalleAlquiler_codigo] varchar (100)
,[detalleAlquiler_equipo_equipo] varchar (300)
,[detalleAlquiler_equipo_equipo_codigo] varchar (100)
,[detalleAlquiler_equipo_equipo_serial] varchar (100)
,[detalleAlquiler_documento.alquiler_documento.alquiler] varchar (300)
,[detalleAlquiler_sucursal_sucursal] varchar (300)
,[detalleAlquiler_sucursal_sucursal_codigo] varchar (100)
,[detalleAlquiler_tercero_tercero] varchar (300)
,[detalleAlquiler_tercero_tercero_codigo] varchar (100)
,[detalleAlquiler_tercero_tercero_nit] varchar (100)
,[detalleAlquiler_tercero_tercero_nombreCorto] varchar (100)
,[detalleAlquiler_catalogo_catalogo] varchar (300)
,[detalleAlquiler_catalogo_catalogo_codigo] varchar (100)

)
create table [equ_detalleAlquiler_aux_aux] (
uid varchar (500)

)
create table [equ_detallePagoAlquiler_aux] (
uid varchar (500)
,[detallePagoAlquiler] varchar (300)
,[detallePagoAlquiler_codigo] varchar (100)
,[detallePagoAlquiler_pagoAlquiler_pagoAlquiler] varchar (300)
,[detallePagoAlquiler_pagoAlquiler_pagoAlquiler_codigo] varchar (100)
,[detallePagoAlquiler_equipo_equipo] varchar (300)
,[detallePagoAlquiler_equipo_equipo_codigo] varchar (100)
,[detallePagoAlquiler_equipo_equipo_serial] varchar (100)
,[detallePagoAlquiler_documento_documento] varchar (300)
,[detallePagoAlquiler_documento_documento_codigo] varchar (100)
,[detallePagoAlquiler_documento_documento_numero] int
,[detallePagoAlquiler_itemDocumento_itemDocumento] varchar (300)
,[detallePagoAlquiler_itemDocumento_itemDocumento_codigo] varchar (100)

)
create table [equ_detallePagoAlquiler_aux_aux] (
uid varchar (500)

)
create table [equ_equipo_aux] (
uid varchar (500)
,[equipo] varchar (300)
,[equipo_codigo] varchar (100)
,[equipo_serial] varchar (100)
,[equipo_catalogo.equipo_catalogo.equipo] varchar (300)
,[equipo_sistema_sistema] varchar (300)
,[equipo_sistema_sistema_codigo] varchar (100)
,[equipo_sucursal_sucursal] varchar (300)
,[equipo_sucursal_sucursal_