declare @licencia varchar(1000) =(SELECT uid FROM [seg_usuario] where id=1)
if not exists(select 1 from gen_config where modulo='documentos' and config='cantidadRegistros' and active = 1)
begin
	insert into gen_config(uid,eid,id_usuario_modifico,id_usuario_creo,fechaModificacion,fechaCreacion,active,config,modulo,valor,descripcion)
	values(@licencia,'01','01','01',GETDATE(),GETDATE(),1,'cantidadRegistros','documentos',10,'cantidad de registros que se mostraran para cada subtipo de documento en itemDocumento')
end


