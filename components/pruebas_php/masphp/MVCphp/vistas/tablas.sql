
create table `propietarios`(
    `cedula` int primary key,
    `nombre` varchar(100),
    `active` bit default(1) 
);

create table `vehiculos`(
	`placa` char(6),
    `marca` varchar(100),
    `tipoVehiculo` varchar(100),
    `cedula_propietario` int,
    PRIMARY key (placa),
    FOREIGN key(cedula_propietario) REFERENCES propietarios (cedula)
);

insert into propietarios (cedula,nombre) values(1076667239,'Haku')


insert into vehiculos (placa,marca,tipoVehiculo,cedula_propietario) values('hak777','subaru','sedan',1076667239)






