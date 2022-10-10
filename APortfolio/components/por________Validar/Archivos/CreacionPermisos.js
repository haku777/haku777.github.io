declare @licencia varchar(1000) =(SELECT uid FROM [seg_usuario] where id=1)

declare @id_funcionalidadPadre integer = (SELECT id FROM GUI_FUNCIONALIDAD WHERE nombreControl = 'inc_contactosInternos' and id_tipoFuncionalidad = 1 and active = 1)
select * from gui_funcionalidad where nombreComando = 'crear' and id_tipoFuncionalidad = 5 and id_funcionalidad = @id_funcionalidadPadre and active = 1
IF NOT EXISTS (select 1 from gui_funcionalidad where nombreComando = 'crear' and id_tipoFuncionalidad = 5 and id_funcionalidad = @id_funcionalidadPadre and active = 1)
begin
	exec [ins_gui_funcionalidad] @licencia,'01',1,1,'Nuevo Personal Asignado Cliente','','','','','','',0,'','crear',0,@id_funcionalidadPadre,5
end







