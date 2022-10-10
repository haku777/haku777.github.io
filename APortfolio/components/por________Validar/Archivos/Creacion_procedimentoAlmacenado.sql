IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[_devolverDeOT]') AND type in (N'P', N'PC'))
BEGIN
execute('
		CREATE procedure [dbo].[_devolverDeOT]
		/*Versión LK: descontar cntEjec y costoEjec de la entrada*/
			@p_eid varchar (1000),
			@p_id_usuario as INT = 0,
			@p_id_documento as INT = 0
		as
		begin

		declare @mensaje varchar(200)
		set @mensaje=''
		declare @idOT int
		set @idOT=0

		select @idOT=id_documento from doc_documento where id=@p_id_documento

		if exists(select 1 from [doc_documento.ot] where id=@idOT) and exists(select 1 from doc_itemdocumento where id_documento=@p_id_documento and id_catalogo>0)
		BEGIN

			if exists(select 1 
				from doc_itemdocumento ITOT
				inner join doc_itemdocumento ITDEV on ITDEV.id_itemdocumento=ITOT.id
				where ITDEV.id_documento=@p_id_documento and ITDEV.active=1
					and (ITDEV.id_itemdocumento=0-- no tiene itempadre
						or ITOT.id_catalogo <> ITDEV.id_catalogo --son de catálogo diferente
						or ITOT.cantidadEjecutado < ITDEV.cantidadPlaneado -- se va a devolver más de lo que hay en la OT
					))
			begin
				set @mensaje=''Verifique que los elementos de la devolución fueron llamados por documento padre y que no caigan en negativo en la OT''
			end
			else
			begin
				--LK: descontar cantidades de la OT padre
				update doc_itemdocumento
				set costoejecutado = doc_itemdocumento.costoejecutado-(ITDEV.valorunitarioplaneado*ITDEV.cantidadplaneado)
				,cantidadEjecutado = doc_itemDocumento.cantidadEjecutado - ITDEV.cantidadPlaneado
				from doc_itemdocumento
				inner join doc_itemdocumento ITDEV on ITDEV.id_itemdocumento=doc_itemdocumento.id
				where ITDEV.id_documento=@p_id_documento and ITDEV.id_itemdocumento>0 and ITDEV.active=1

				exec [_totalizarDocumento] @p_doc=@idOT

				--LK: ejecutar cantidades en entrada actual
				update doc_itemdocumento
				set cantidadEjecutado=cantidadPlaneado,valorunitarioejecutado=valorunitarioplaneado
				from doc_itemdocumento IT1
				where IT1.id_documento=@p_id_documento and active=1

				exec [_totalizarDocumento] @p_doc=@p_id_documento

				--LK: cerrar la entrada actual (sin histórico, sin ejecutar nada en lógica de samm) ---no tiene efecto porque el programa lo deja en el estado que se indique en pantalla
				--update doc_documento set id_estadotipodocumento=27,fechamodificacion=getdate(),documento_codigo=''validad'' where id=@p_id_documento
			END
		END
		ELSE
		BEGIN
			set @mensaje=''Este estado sólo aplica para entradas hijas de OT y DEVs con items''
		END


		select @mensaje

		end
')

END