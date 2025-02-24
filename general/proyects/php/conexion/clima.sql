create table `roles`(
    `id` int primary key auto_increment,
    `rol` varchar(100),
    `active` bit default(1)
);

create table `usuarios`(
    `id` int primary key auto_increment,
    `usuario` varchar(100) unique,
    `correo` varchar(100),
    `clave` varchar(100),
    `id_rol` int default(2),
    `active` bit default(1),
	FOREIGN KEY (`id_rol`) REFERENCES `roles`(`id`)
);

create table `mensajes`(
    `id` int primary key auto_increment,
    `id_usuario` int not null,
    `mensaje` varchar(100),
    `active` bit default(1),
	FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`id`)
);


alter table usuarios add foto longblob


insert into `roles` (`rol`) values('administrador');
insert into `roles` (`rol`) values('cliente');

insert into `usuarios` (`usuario`,`correo`,`clave`,`id_rol`) values('administrador','a@a.a','haku','1');
insert into `usuarios` (`usuario`,`correo`,`clave`,`id_rol`) values('cliente','a@a.a','haku','2');


create table `historico`(

    `id` int primary key auto_increment,
    `id_usuario` int not null,
    FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`id`)
);


alter table historico add fecha_ingreso datetime;
alter table historico add fecha_salida datetime;
