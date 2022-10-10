disable TRIGGER [actualizarEstados] ON [dbo].[doc_documento];
disable TRIGGER [ActualizarOPRQ] ON [dbo].[doc_documento];
disable TRIGGER [ActualizarORDR] ON [dbo].[doc_documento];
disable TRIGGER [ActualizarOWTQ] ON [dbo].[doc_documento];
disable TRIGGER [InsertarOPRQ] ON [dbo].[doc_documento];
disable TRIGGER [InsertarORDR] ON [dbo].[doc_documento];
disable TRIGGER [InsertarOWTQ] ON [dbo].[doc_documento];




Declare @string varchar(8000)
Declare @tableName nvarchar(500)
Declare cur cursor
for select name as tbname from sysobjects where id in(select parent_obj from sysobjects where xtype='tr')
open cur
fetch next from cur into @tableName
while @@fetch_status = 0
begin
set @string ='Alter table '+ @tableName + ' Disable trigger all'
exec (@string)
Fetch next from cur into @tableName
end
close cur
deallocate cur