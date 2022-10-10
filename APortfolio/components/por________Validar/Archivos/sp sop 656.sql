declare @licencia varchar(1000) =(SELECT uid FROM [seg_usuario] where id=1)

declare @id_funcionalidadTab integer = (select id from view_gui_funcionalidad where nombreControl = 'inc_datosEquipo' and id_tipoFuncionalidad = 1 and gui_funcionalidad_padre_nombreControl = 'equ_equipo' and gui_funcionalidad_padre_id_tipoFuncionalidad = 3 and active = 1)

declare @id_funcionalidadFormulario integer = (select id from gui_funcionalidad where nombreControl = 'equ_equipoDatos' and nombreComando = 'equ_equipoDatos' and id_tipoFuncionalidad = 3 and id_funcionalidad = @id_funcionalidadTab and active = 1)


if @id_funcionalidadFormulario > 0
begin 
	update gui_funcionalidad set nombrecontrol = 'equ_equipoAtributo', nombreComando = 'equ_equipoAtributo' where id = @id_funcionalidadFormulario
end
set @id_funcionalidadFormulario = (select id from gui_funcionalidad where nombreControl = 'equ_equipoAtributo' and nombreComando = 'equ_equipoAtributo' and id_tipoFuncionalidad = 3 and id_funcionalidad = @id_funcionalidadTab and active = 1)
	
IF NOT EXISTS (select 1 from gui_funcionalidad where nombreComando = 'compartir' and id_tipoFuncionalidad = 5 and id_funcionalidad = @id_funcionalidadFormulario and funcionalidad = 'Importar Datos Equipo')
begin
	exec [ins_gui_funcionalidad] @licencia,'01',1,1,'Importar Datos Equipo','','','','','','',0,'','compartir',0,@id_funcionalidadFormulario,5
end

