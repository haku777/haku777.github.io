USE [sw_altron]
GO

/****** Object:  Trigger [dbo].[alt_reversaGasto]    Script Date: 06/27/2019 06:34:18 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		Jose Rodolfo
-- Create date: 12 junio 2017
-- Description:	reversa el gasto eliminado
-- =============================================
create TRIGGER [dbo].[alt_reversaGasto] 
   ON  [dbo].[gas_gasto] 
   AFTER update
AS 
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	declare @id int


	set @id=0
	


	--evalua condición para ejecutar el insert
	select top 1 @id = inserted.id
	from inserted where inserted.active = 0
	
	
	if @id>0
	begin
	-- realiza el procedimiento para reversar el gasto
	
		

-- RESTA DE LOS ITEMS QUE SE APLICO EL GASTO
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
		
		
		--COMMIT TRANSACTION
		
		--END TRY
		--BEGIN CATCH
		--	ROLLBACK TRANSACTION 
			
		--END CATCH
	end
	
END











GO


