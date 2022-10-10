IF  EXISTS (select * from INFORMATION_SCHEMA.ROUTINES where ROUTINE_NAME = 'f_opcionesAtributo')
CREATE PROCEDURE [dbo].[DeslegalizacionDeGastos]  
			@id int  
		AS   

	SET NOCOUNT ON;  
		update doc_itemDocumento set 
				doc_itemDocumento.cantidadEjecutado = doc_itemDocumento.cantidadEjecutado-cantidad,
				doc_itemDocumento.costoEjecutado = doc_itemDocumento.costoEjecutado - gas_detalleGasto.valor
			from 
				doc_itemDocumento, [gas_documento.ot_detalleGasto], dbo.gas_detalleGasto, gas_gasto
			where 
				doc_itemDocumento.id = [gas_documento.ot_detalleGasto].id_itemDocumento and 
				[gas_documento.ot_detalleGasto].id_detalleGasto = dbo.gas_detalleGasto.id and
				[gas_documento.ot_detalleGasto].active = 1 and
				gas_detalleGasto.active = 1 and
				gas_detalleGasto.id_gasto = gas_gasto.id
				and gas_gasto.id = @id

-- ACTUALIZA EL CAMPO  ACTIVE PARA MARCAR QUE YA FUE APLICADO

		update [gas_documento.ot_detalleGasto] set 
			[gas_documento.ot_detalleGasto].active = 0
		from 
			doc_itemDocumento, [gas_documento.ot_detalleGasto], dbo.gas_detalleGasto, gas_gasto
		where 
			doc_itemDocumento.id = [gas_documento.ot_detalleGasto].id_itemDocumento and 
			[gas_documento.ot_detalleGasto].id_detalleGasto = dbo.gas_detalleGasto.id and
			gas_detalleGasto.id_gasto = gas_gasto.id
			and gas_gasto.id = @id

		update dbo.gas_detalleGasto set 
			dbo.gas_detalleGasto.active = 0
		from 
			doc_itemDocumento, [gas_documento.ot_detalleGasto], dbo.gas_detalleGasto, gas_gasto
		where 
			doc_itemDocumento.id = [gas_documento.ot_detalleGasto].id_itemDocumento and 
			[gas_documento.ot_detalleGasto].id_detalleGasto = dbo.gas_detalleGasto.id and
			gas_detalleGasto.id_gasto = gas_gasto.id
			and gas_gasto.id = @id
-- ACTUALIZA EL ESTADO DEL GASTO
		update gas_gasto SET 
			id_EstadoTipoDocumento=(select id from doc_estadotipodocumento where  id_tipodocumento=0 and active =1 and estadoTipoDocumento_codigo='ANU' and estadoTipoDocumento='Anulado') 
			WHERE id=@id
