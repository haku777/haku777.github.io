IF NOT EXISTS (select 1 from doc_estadotipodocumento where id_tipodocumento=0 and estadoTipoDocumento='Anulado' and active=1)
begin
	declare @t_uid varchar(1000) =(SELECT uid FROM [seg_usuario] where id=1)
	exec ins_doc_estadoTipoDocumento @t_uid,'01',0,0,'Anulada','ANU',0,0,4,0,'5effe7',0,0,null
end