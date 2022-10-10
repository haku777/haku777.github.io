IF  EXISTS (select * from INFORMATION_SCHEMA.ROUTINES where ROUTINE_NAME = 'f_opcionesAtributo')
drop function f_opcionesAtributo
go
CREATE FUNCTION [dbo].[f_opcionesAtributo](
	@id_atributo int,
	@ids bit
) RETURNS NVARCHAR(500)
AS
BEGIN
DECLARE @Tecnicos NVARCHAR(700)
SET @Tecnicos = ''
SELECT   @Tecnicos = @Tecnicos + 
	case when @ids=1 then cast(id as varchar(10)) else opcionAtributo  end 
	+ ','
from equ_opcionAtributo
where id_atributo=@id_atributo
and equ_opcionAtributo.active=1 
order by equ_opcionatributo.orden
SET @Tecnicos = SUBSTRING(@Tecnicos,0,LEN(@Tecnicos))
RETURN @Tecnicos 
END