create table `roles`(
    `id` int primary key auto_increment,
    `rol` varchar(100)
);

create table `usuarios`(
   `usuario` varchar(100) primary key,
    `correo` varchar(100),
    `clave` varchar(100),
    `rol` int,
    `active` bit default(1),
	foreign key (`rol`) references `roles` (`id`)
);