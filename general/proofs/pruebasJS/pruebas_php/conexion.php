<?php 

	$host="remotemysql.com";
	$user="Y2nXQQp5jd";
	$pass="zBzIPvPyAU";
	$db="Y2nXQQp5jd";
	$con = new MySqli($host, $user, $pass, $db);
	// $con.default_port('5432');

	if($con -> connect_errno){
		echo "error de conexion: " . $con -> connect_errno;
	}

	
	
	//---------------------
	
	// heroku pg:credentials:url
	
	// "dbname=d6fbi8mb9mnp46
	// host=ec2-23-22-191-232.compute-1.amazonaws.com 
	// port=5432 
	// user=waacyydkexzreo 
	// password=72317bcaba87565cbade6ebd5d9fafd58d86ff13b9109d4236d608ec96fc8d43 sslmode=require"


	//---------------------

	//freesqldatabase page

	// $server="sql10.freesqldatabase.com";
	// $user="sql10404272";
	// $pass="8JNYJxb4b4";
	// $db="sql10404272";


	//---------------------

	// https://remotemysql.com/login.php

	// Username: PBZbUcxlZJ
	// Database name: PBZbUcxlZJ
	// Password: ArBahFBPZA
	// Server: remotemysql.com
	// Port: 3306





	// create table `usuarios`(

	// 	`id` int AUTO_INCREMENT PRIMARY key,
	// 	`usuario` varchar(100),
	// 	`telefono` integer(10),
	// 	`edad` tinyint(2),
	// 	`password` varchar(100),
	// 	`active` bit default(1),
	// 	`fecha_creacion` datetime,
	// 	`fecha_modificacion` datetime,  
	// 	`fecha_eliminacion` datetime
	// );
	
?>