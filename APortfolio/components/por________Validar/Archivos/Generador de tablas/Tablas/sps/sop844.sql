use samm_webn_14
GO

SET QUOTED_IDENTIFIER OFF
GO
SET ANSI_NULLS OFF
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[reg_doc_subtipoLectura]') AND type in (N'P', N'PC'))DROP PROCEDURE [dbo].[reg_doc_subtipoLectura]
GO
CREATE PROCEDURE [reg_doc_subtipoLectura]
	@p_id INT
AS
BEGIN
	SELECT 	[id] AS [id],
		[uid] AS [uid],
		[eid] AS [eid],
		[id_usuario_modifico] AS [id_usuario_modifico],
		[id_usuario_creo] AS [id_usuario_creo],
		[fechaModificacion] AS [fechaModificacion],
		[fechaCreacion] AS [fechaCreacion],
		[active] AS [active],
		[subtipoLectura] AS [subtipoLectura],
		[subtipoLectura_codigo] AS [subtipoLectura_codigo],
		[id_subtipoDocumento] AS [id_subtipoDocumento],
		[id_subtipoDocumento_origen] AS [id_subtipoDocumento_origen]
	FROM [doc_subtipoLectura]
	WHERE	(id = @p_id)

END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS ON
GO
----------------------
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS ON
GO
IF  EXISTS (SELECT * FROM sys.views WHERE object_id = OBJECT_ID(N'[dbo].[view_doc_subtipoLectura]')) DROP VIEW [dbo].[view_doc_subtipoLectura]
GO
CREATE  VIEW [view_doc_subtipoLectura] AS
SELECT 	[doc_subtipoLectura].[id] AS [id],
		[doc_subtipoLectura].[uid] AS [uid],
		[doc_subtipoLectura].[eid] AS [eid],
		[doc_subtipoLectura].[id_usuario_modifico] AS [id_usuario_modifico],
		[doc_subtipoLectura].[id_usuario_creo] AS [id_usuario_creo],
		[doc_subtipoLectura].[fechaModificacion] AS [fechaModificacion],
		[doc_subtipoLectura].[fechaCreacion] AS [fechaCreacion],
		[doc_subtipoLectura].[active] AS [active],
		[doc_subtipoLectura].[subtipoLectura] AS [subtipoLectura],
		[doc_subtipoLectura].[subtipoLectura_codigo] AS [subtipoLectura_codigo],
		[doc_subtipoLectura].[id_subtipoDocumento] AS [id_subtipoDocumento],
[doc_subtipoDocumento].[subtipoDocumento] as [doc_subtipoDocumento_subtipoDocumento],
[doc_subtipoDocumento].[subtipoDocumento_codigo] as [doc_subtipoDocumento_subtipoDocumento_codigo],
[doc_subtipoDocumento].[prefijo] as [doc_subtipoDocumento_prefijo],
[doc_subtipoDocumento].[consecutivo] as [doc_subtipoDocumento_consecutivo],
[doc_subtipoDocumento].[id_tipoDocumento] as [doc_subtipoDocumento_id_tipoDocumento],
[doc_subtipoDocumento].[programarPlaneadas] as [doc_subtipoDocumento_programarPlaneadas],
[doc_subtipoDocumento].[cargarSolicitante] as [doc_subtipoDocumento_cargarSolicitante],
[doc_subtipoDocumento].[verCentroCosto] as [doc_subtipoDocumento_verCentroCosto],
[doc_subtipoDocumento].[verIncoterm] as [doc_subtipoDocumento_verIncoterm],
[doc_subtipoDocumento].[valUrgente] as [doc_subtipoDocumento_valUrgente],
[doc_subtipoDocumento].[bloquearDespacho] as [doc_subtipoDocumento_bloquearDespacho],
[doc_subtipoDocumento].[cerrarSol] as [doc_subtipoDocumento_cerrarSol],
[doc_subtipoDocumento].[ejecutaDevolucion] as [doc_subtipoDocumento_ejecutaDevolucion],
		[doc_subtipoLectura].[id_subtipoDocumento_origen] AS [id_subtipoDocumento_origen],
[doc_subtipoDocumento_origen].[subtipoDocumento] as [doc_subtipoDocumento_origen_subtipoDocumento],
[doc_subtipoDocumento_origen].[subtipoDocumento_codigo] as [doc_subtipoDocumento_origen_subtipoDocumento_codigo],
[doc_subtipoDocumento_origen].[prefijo] as [doc_subtipoDocumento_origen_prefijo],
[doc_subtipoDocumento_origen].[consecutivo] as [doc_subtipoDocumento_origen_consecutivo],
[doc_subtipoDocumento_origen].[id_tipoDocumento] as [doc_subtipoDocumento_origen_id_tipoDocumento],
[doc_subtipoDocumento_origen].[programarPlaneadas] as [doc_subtipoDocumento_origen_programarPlaneadas],
[doc_subtipoDocumento_origen].[cargarSolicitante] as [doc_subtipoDocumento_origen_cargarSolicitante],
[doc_subtipoDocumento_origen].[verCentroCosto] as [doc_subtipoDocumento_origen_verCentroCosto],
[doc_subtipoDocumento_origen].[verIncoterm] as [doc_subtipoDocumento_origen_verIncoterm],
[doc_subtipoDocumento_origen].[valUrgente] as [doc_subtipoDocumento_origen_valUrgente],
[doc_subtipoDocumento_origen].[bloquearDespacho] as [doc_subtipoDocumento_origen_bloquearDespacho],
[doc_subtipoDocumento_origen].[cerrarSol] as [doc_subtipoDocumento_origen_cerrarSol],
[doc_subtipoDocumento_origen].[ejecutaDevolucion] as [doc_subtipoDocumento_origen_ejecutaDevolucion],
		[empresaCodigo].[empresa] As [multiempresa]
FROM [doc_subtipoLectura]
	INNER JOIN [seg_usuario] AS [seg_usuario_modifico] ON [seg_usuario_modifico].id=[doc_subtipoLectura].[id_usuario_modifico]
	INNER JOIN [seg_usuario] AS [seg_usuario_creo] ON [seg_usuario_creo].id=[doc_subtipoLectura].[id_usuario_creo]
	INNER JOIN [doc_subtipoDocumento] ON [doc_subtipoDocumento].id=[doc_subtipoLectura].[id_subtipoDocumento]
	INNER JOIN [doc_subtipoDocumento] AS [doc_subtipoDocumento_origen] ON [doc_subtipoDocumento_origen].id=[doc_subtipoLectura].[id_subtipoDocumento_origen]
	INNER JOIN [gen_empresa] AS empresaCodigo ON [doc_subtipoLectura].eid = [empresaCodigo].[codigo] and empresaCodigo.active=1
WHERE [doc_subtipoLectura].active=1
GO
SET QUOTED_IDENTIFIER OFF
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO
SET ANSI_NULLS OFF
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[sel_doc_subtipoLecturasXusuario_modifico]') AND type in (N'P', N'PC'))DROP PROCEDURE [dbo].[sel_doc_subtipoLecturasXusuario_modifico]
GO
CREATE PROCEDURE [sel_doc_subtipoLecturasXusuario_modifico]
	@p_id_usuario_modifico INT
AS
BEGIN
	SELECT * 
	FROM [view_doc_subtipoLectura]
	WHERE ([id_usuario_modifico]= @p_id_usuario_modifico)
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS ON
GO
----------------------
SET QUOTED_IDENTIFIER OFF
GO
SET ANSI_NULLS OFF
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[sel_doc_subtipoLecturasXusuario_creo]') AND type in (N'P', N'PC'))DROP PROCEDURE [dbo].[sel_doc_subtipoLecturasXusuario_creo]
GO
CREATE PROCEDURE [sel_doc_subtipoLecturasXusuario_creo]
	@p_id_usuario_creo INT
AS
BEGIN
	SELECT * 
	FROM [view_doc_subtipoLectura]
	WHERE ([id_usuario_creo]= @p_id_usuario_creo)
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS ON
GO
----------------------
SET QUOTED_IDENTIFIER OFF
GO
SET ANSI_NULLS OFF
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[sel_doc_subtipoLecturasXsubtipoDocumento]') AND type in (N'P', N'PC'))DROP PROCEDURE [dbo].[sel_doc_subtipoLecturasXsubtipoDocumento]
GO
CREATE PROCEDURE [sel_doc_subtipoLecturasXsubtipoDocumento]
	@p_id_subtipoDocumento INT
AS
BEGIN
	SELECT * 
	FROM [view_doc_subtipoLectura]
	WHERE ([id_subtipoDocumento]= @p_id_subtipoDocumento)
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS ON
GO
----------------------
SET QUOTED_IDENTIFIER OFF
GO
SET ANSI_NULLS OFF
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[sel_doc_subtipoLecturasXsubtipoDocumento_origen]') AND type in (N'P', N'PC'))DROP PROCEDURE [dbo].[sel_doc_subtipoLecturasXsubtipoDocumento_origen]
GO
CREATE PROCEDURE [sel_doc_subtipoLecturasXsubtipoDocumento_origen]
	@p_id_subtipoDocumento_origen INT
AS
BEGIN
	SELECT * 
	FROM [view_doc_subtipoLectura]
	WHERE ([id_subtipoDocumento_origen]= @p_id_subtipoDocumento_origen)
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS ON
GO
----------------------
SET QUOTED_IDENTIFIER OFF
GO
SET ANSI_NULLS OFF
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[sel_doc_subtipoLecturas]') AND type in (N'P', N'PC'))DROP PROCEDURE [dbo].[sel_doc_subtipoLecturas]
GO
CREATE PROCEDURE [sel_doc_subtipoLecturas]
	
	@p_filtro as varchar (8000) = '1=1',
	@p_orden as varchar (8000) = 'id',
	@p_campos as varchar (8000) = '*' AS
BEGIN
exec ('SELECT '+ @p_campos +
' FROM [view_doc_subtipoLectura]
WHERE (' + @p_filtro + ') ORDER BY ' + @p_orden)
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS ON
GO
----------------------

SET QUOTED_IDENTIFIER OFF
GO
SET ANSI_NULLS OFF
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[lis_doc_subtipoLecturas]') AND type in (N'P', N'PC'))DROP PROCEDURE [dbo].[lis_doc_subtipoLecturas]
GO
CREATE PROCEDURE [lis_doc_subtipoLecturas]
	AS
BEGIN
	SELECT id AS id,
[subtipoLectura] AS [doc_subtipoLectura]
	FROM [doc_subtipoLectura]
	WHERE active = 1
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS ON
GO
----------------------
SET QUOTED_IDENTIFIER OFF
GO
SET ANSI_NULLS OFF
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[upd_doc_subtipoLectura]') AND type in (N'P', N'PC'))DROP PROCEDURE [dbo].[upd_doc_subtipoLectura]
GO
CREATE PROCEDURE [upd_doc_subtipoLectura]
	@p_id int = null,
		@p_uid varchar(500) = null,
		@p_eid varchar(50) = null,
		@p_id_usuario_modifico int = null,
		@p_id_usuario_creo int = null,
		@p_fechaCreacion smalldatetime = null,
		@p_subtipoLectura varchar(300) = null,
		@p_subtipoLectura_codigo varchar(100) = null,
		@p_id_subtipoDocumento int = null,
		@p_id_subtipoDocumento_origen int = null
AS
BEGIN
		UPDATE [doc_subtipoLectura]
		SET	[uid] = isnull(@p_uid,[uid]),
			[eid] = isnull(@p_eid,[eid]),
			[id_usuario_modifico] = isnull(@p_id_usuario_modifico,[id_usuario_modifico]),
			[id_usuario_creo] = isnull(@p_id_usuario_creo,[id_usuario_creo]),
			[fechaModificacion] = GETDATE(),
			[subtipoLectura] = isnull(@p_subtipoLectura,[subtipoLectura]),
			[subtipoLectura_codigo] = isnull(@p_subtipoLectura_codigo,[subtipoLectura_codigo]),
			[id_subtipoDocumento] = isnull(@p_id_subtipoDocumento,[id_subtipoDocumento]),
			[id_subtipoDocumento_origen] = isnull(@p_id_subtipoDocumento_origen,[id_subtipoDocumento_origen])
		WHERE (id = @p_id)
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS ON
GO
----------------------
SET QUOTED_IDENTIFIER OFF
GO
SET ANSI_NULLS OFF
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ins_doc_subtipoLectura]') AND type in (N'P', N'PC'))DROP PROCEDURE [dbo].[ins_doc_subtipoLectura]
GO
CREATE PROCEDURE [ins_doc_subtipoLectura]
	@p_uid varchar(500),
		@p_eid varchar(50),
		@p_id_usuario_modifico int,
		@p_id_usuario_creo int,
		@p_subtipoLectura varchar(300),
		@p_subtipoLectura_codigo varchar(100),
		@p_id_subtipoDocumento int,
		@p_id_subtipoDocumento_origen int
AS
BEGIN
	DECLARE @v_id int
		INSERT INTO [doc_subtipoLectura]
			([uid],
			[eid],
			[id_usuario_modifico],
			[id_usuario_creo],
			[fechaModificacion],
			[fechaCreacion],
			[subtipoLectura],
			[subtipoLectura_codigo],
			[id_subtipoDocumento],
			[id_subtipoDocumento_origen])
		VALUES(	@p_uid,
			@p_eid,
			@p_id_usuario_modifico,
			@p_id_usuario_creo,
			GETDATE(),
			GETDATE(),
			@p_subtipoLectura,
			@p_subtipoLectura_codigo,
			@p_id_subtipoDocumento,
			@p_id_subtipoDocumento_origen)
		SET @v_id = scope_identity()
UPDATE [doc_subtipoLectura] set [uid] = [uid] + '_' + convert(varchar(20),@v_id) where [id]=@v_id
SELECT @v_id as id
RETURN @v_id
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS ON
GO
----------------------
SET QUOTED_IDENTIFIER OFF
GO
SET ANSI_NULLS OFF
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[act_doc_subtipoLectura]') AND type in (N'P', N'PC'))DROP PROCEDURE [dbo].[act_doc_subtipoLectura]
GO
CREATE PROCEDURE [act_doc_subtipoLectura]
	@p_active BIT,
	@p_id INT,
@p_id_usuario_modifico int = null
AS
BEGIN
	UPDATE [doc_subtipoLectura]
	SET active=@p_active,
	[id_usuario_modifico] = isnull(@p_id_usuario_modifico,[id_usuario_modifico]),
	[fechaModificacion] = GETDATE()
	WHERE	(id = @p_id)
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS ON
GO
----------------------

SET QUOTED_IDENTIFIER OFF
GO
SET ANSI_NULLS OFF
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[reg_doc_subtipoLectura_m]') AND type in (N'P', N'PC'))DROP PROCEDURE [dbo].[reg_doc_subtipoLectura_m]
GO
CREATE PROCEDURE [reg_doc_subtipoLectura_m]
	@p_id INT,
	@p_eid as varchar(50) = ''
AS
BEGIN
	SELECT 	[id] AS [id],
		[uid] AS [uid],
		[eid] AS [eid],
		[id_usuario_modifico] AS [id_usuario_modifico],
		[id_usuario_creo] AS [id_usuario_creo],
		[fechaModificacion] AS [fechaModificacion],
		[fechaCreacion] AS [fechaCreacion],
		[active] AS [active],
		[subtipoLectura] AS [subtipoLectura],
		[subtipoLectura_codigo] AS [subtipoLectura_codigo],
		[id_subtipoDocumento] AS [id_subtipoDocumento],
		[id_subtipoDocumento_origen] AS [id_subtipoDocumento_origen]
	FROM [doc_subtipoLectura]
	WHERE	(id = @p_id)
	AND	(eid LIKE @p_eid+'%')

END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS ON
GO
----------------------
SET QUOTED_IDENTIFIER OFF
GO
SET ANSI_NULLS OFF
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[sel_doc_subtipoLecturasXusuario_modifico_m]') AND type in (N'P', N'PC'))DROP PROCEDURE [dbo].[sel_doc_subtipoLecturasXusuario_modifico_m]
GO
CREATE PROCEDURE [sel_doc_subtipoLecturasXusuario_modifico_m]
	@p_id_usuario_modifico INT,
	@p_eid as varchar(50) = ''
AS
BEGIN
	SELECT *
	FROM [view_doc_subtipoLectura]
	WHERE ([id_usuario_modifico]= @p_id_usuario_modifico)
	AND	(eid LIKE @p_eid+'%')
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS ON
GO
----------------------
SET QUOTED_IDENTIFIER OFF
GO
SET ANSI_NULLS OFF
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[sel_doc_subtipoLecturasXusuario_creo_m]') AND type in (N'P', N'PC'))DROP PROCEDURE [dbo].[sel_doc_subtipoLecturasXusuario_creo_m]
GO
CREATE PROCEDURE [sel_doc_subtipoLecturasXusuario_creo_m]
	@p_id_usuario_creo INT,
	@p_eid as varchar(50) = ''
AS
BEGIN
	SELECT *
	FROM [view_doc_subtipoLectura]
	WHERE ([id_usuario_creo]= @p_id_usuario_creo)
	AND	(eid LIKE @p_eid+'%')
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS ON
GO
----------------------
SET QUOTED_IDENTIFIER OFF
GO
SET ANSI_NULLS OFF
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[sel_doc_subtipoLecturasXsubtipoDocumento_m]') AND type in (N'P', N'PC'))DROP PROCEDURE [dbo].[sel_doc_subtipoLecturasXsubtipoDocumento_m]
GO
CREATE PROCEDURE [sel_doc_subtipoLecturasXsubtipoDocumento_m]
	@p_id_subtipoDocumento INT,
	@p_eid as varchar(50) = ''
AS
BEGIN
	SELECT *
	FROM [view_doc_subtipoLectura]
	WHERE ([id_subtipoDocumento]= @p_id_subtipoDocumento)
	AND	(eid LIKE @p_eid+'%')
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS ON
GO
----------------------
SET QUOTED_IDENTIFIER OFF
GO
SET ANSI_NULLS OFF
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[sel_doc_subtipoLecturasXsubtipoDocumento_origen_m]') AND type in (N'P', N'PC'))DROP PROCEDURE [dbo].[sel_doc_subtipoLecturasXsubtipoDocumento_origen_m]
GO
CREATE PROCEDURE [sel_doc_subtipoLecturasXsubtipoDocumento_origen_m]
	@p_id_subtipoDocumento_origen INT,
	@p_eid as varchar(50) = ''
AS
BEGIN
	SELECT *
	FROM [view_doc_subtipoLectura]
	WHERE ([id_subtipoDocumento_origen]= @p_id_subtipoDocumento_origen)
	AND	(eid LIKE @p_eid+'%')
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS ON
GO
----------------------
SET QUOTED_IDENTIFIER OFF
GO
SET ANSI_NULLS OFF
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[sel_doc_subtipoLecturas_m]') AND type in (N'P', N'PC'))DROP PROCEDURE [dbo].[sel_doc_subtipoLecturas_m]
GO
CREATE PROCEDURE [sel_doc_subtipoLecturas_m]
	@p_eid as varchar (50)='',
	@p_filtro as varchar (8000) = '1=1',
	@p_orden as varchar (8000) = 'id',
	@p_campos as varchar (8000) = '*' AS
BEGIN
exec ('SELECT '+ @p_campos +
' FROM [view_doc_subtipoLectura]
WHERE  (eid like '''+@p_eid+'%'+''' ) AND (' + @p_filtro + ') ORDER BY ' + @p_orden)
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS ON
GO
----------------------

SET QUOTED_IDENTIFIER OFF
GO
SET ANSI_NULLS OFF
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[lis_doc_subtipoLecturas_m]') AND type in (N'P', N'PC'))DROP PROCEDURE [dbo].[lis_doc_subtipoLecturas_m]
GO
CREATE PROCEDURE [lis_doc_subtipoLecturas_m]
	@p_eid as varchar(50) = ''
AS
BEGIN
	SELECT id AS id,
[subtipoLectura] AS [doc_subtipoLectura]
	FROM [doc_subtipoLectura]
	WHERE active = 1
	AND	(eid LIKE @p_eid+'%')
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS ON
GO
----------------------

SET QUOTED_IDENTIFIER OFF
GO
SET ANSI_NULLS OFF
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[aud_doc_subtipoLectura]') AND type in (N'P', N'PC'))DROP PROCEDURE [dbo].[aud_doc_subtipoLectura]
GO
CREATE PROCEDURE [aud_doc_subtipoLectura]
	@p_filtro as varchar (8000) = '1=1'
AS
BEGIN
exec(	'SELECT [doc_subtipoLectura].id as id_tabla,
	[doc_subtipoLectura].id_usuario_modifico as id_usuario_modifico,
	[doc_subtipoLectura].id_usuario_creo as id_usuario_creo,
	[doc_subtipoLectura].fechaModificacion as fechaModificacion,
	[doc_subtipoLectura].fechaCreacion as fechaCreacion,
	[doc_subtipoLectura].active as active,
	[doc_subtipoLectura].[subtipoLectura] as campoPrincipal,
	[seg_usuario_creo].usuario as usuarioCreo,
	[seg_usuario_modifico].usuario as usuarioModifico

	FROM [doc_subtipoLectura]
	INNER JOIN [seg_usuario] AS [seg_usuario_modifico] ON [seg_usuario_modifico].id=[doc_subtipoLectura].[id_usuario_modifico]
	INNER JOIN [seg_usuario] AS [seg_usuario_creo] ON [seg_usuario_creo].id=[doc_subtipoLectura].[id_usuario_creo]
	where ' + @p_filtro)
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS ON
GO
----------------------
print 'doc_subtipoLectura'
-----------------------------------29/01/2020 9:16:24 a. m.