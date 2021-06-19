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


insert into `roles` (`rol`) values('administrador');
insert into `roles` (`rol`) values('cliente');

insert into `usuarios` (`usuario`,`correo`,`clave`,`id_rol`) values('administrador','a@a.a','haku','1');
insert into `usuarios` (`usuario`,`correo`,`clave`,`id_rol`) values('cliente','a@a.a','haku','2');
