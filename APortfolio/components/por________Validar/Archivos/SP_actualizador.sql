
if (object_id('act_licencia')) is not null
		drop procedure act_licencia;
SET QUOTED_IDENTIFIER ON
GO
Create procedure [dbo].[act_licencia] (@serial varchar(200), @licencia varchar(200))
	as
	declare @tablas table(
		id numeric(10) not null,
		nomTabla varchar (60))

	declare @i numeric(10)
	declare @id numeric (10)
	declare @tabla varchar (100)
	declare @qry varchar (200)

	set @id =0
	set @i=1

		insert into @tablas
			select ROW_NUMBER() OVER (ORDER BY tabla), tabla
			from [_tablas]
			while (@i<=(select count(*) from @tablas))
		begin
			set @tabla=(select t.nomTabla from @tablas t where t.id =@i)
			set @qry= (N'update ['+@tabla+'] SET uid = REPLACE(uid,'+char(39)+'0000-0000-0000-0000-0000'+char(39)+','+char(39)+@serial+char(39)+')'+char(59))
			exec (@qry)
			set @qry= (N'update ['+@tabla+'] SET uid = REPLACE(uid,'+char(39)+'SAMM0800101'+char(39)+','+char(39)+@serial+char(39)+')'+char(59))
			exec (@qry)			
			set @qry= (N'update ['+@tabla+'] SET uid = REPLACE(uid,'+char(39)+ @licencia +char(39)+','+char(39)+@serial+char(39)+')'+char(59))
			exec (@qry)
			set @i=@i+1
    End
Go

	declare @licPruebas varchar(200)
	declare @licNueva varchar(200)

	set @licPruebas='0000-0000-0000-0000-0000'
	set @licNueva='79B7-SW-JDD8-T82G'

79B7-SW-JDD8-T82G
	print('--------------------
	no olvide editar el web.config
--------------------')

	exec dbo.act_licencia @serial=@licNueva ,@licencia=@licPruebas


update _idae set v='ivq68oyUtYv+i2AjGsXKv6EoOR5ornbgZjWsHGP0pb8=' where k='bxVJ8f84S3bJaP0nOF1nkXy+pUvdyLAXidRvIN+PeKBAP0Fb'
update _idae set v='97Z4HpMdtB0=' where k='M9nVQ+B353fT/9op6E7dmkqTau/MhjORSzdJgIsyOYshwrDz'
update _idae set v='6H1GRmuTlBSKoF8/PDEMTTE1u8fpFj+p7GiLEZHjWLE=' where k='uM+tO59EbEpYOjR44aDAa6hGf1NwYlLKH5oNklHI6lKJTWUX'
update _idae set v='zuE75Xd8/iv3UTifQSL8dg==' where k='FIc6tJB8dtyAkJYiYEUUvgw+HHEpYOu0t5sdA4RF75Da9EyF'
update _idae set v='HqWdP2qDTOQ=' where k='xhSSfxAj+nRVwwRMKVoRL3Qsavb9fvxiYHJV7IOmNC0XoHNe'
update _idae set v='gL275AHjLlU=' where k='PVPIZWF3zavlFOlN6JwDEMKYbGDlI4vtCpDlaX+fj8T9WL/8'
update _idae set v='HqWdP2qDTOQ=' where k='M8QuF4162IfHXvinlWrzjqPxAXyiNbeTIFXuRe7qSDfebsn0'
update _idae set v='gL275AHjLlU=' where k='t2YCbmL/5o2kkbio8oVbPGcxo9TCRNpoipr3tbUqvRguo2eg'
update _idae set v='7UalKmnucyqQSvelUcTjDw==' where k='ujkz3p6MgRH0SaklY3c1sxnRTn26B0GRFmZIMI82qwkWIwLL'
update _idae set v='S2hdE2naL01VF8+Ls4WXdQ==' where k='kcKbpfnnmCblkoCh1GkcT2YbmcA0IFB3pLvNlBi4WjHqh8Bn'
update _idae set v='S2hdE2naL01OHCrzXafqbd2aVZYHmYV3' where k='aFULkW4gM3IArA2z8J7hzZzqrT9UGehmbZftP8tG6JTbaE2h'
update _idae set v='HqWdP2qDTOQ=' where k='I/xS8vXk8LTG43ElRuvrYXc6z7ZYcVS63F2+f24TtDbfHNxu'
update _idae set v='JuVWRwZEefI=' where k='eUGcs5VruQkEBKbSjvQ0d0w4ghK5KHXn/9PDxHfqT+FTayBL'
update _idae set v='+8PfItVQ4VI=' where k='y3lJUtIZsqPyOifY5zIz5Ih8ahqibX8JRO/t9oiUYbO1frhL'
update _idae set v='HqWdP2qDTOQ=' where k='vQY0yzva3GYuB1TQzL1oGWFvd6LsyKsTvFQrXziTD/WSdYoX'


192.168.1.15:81/