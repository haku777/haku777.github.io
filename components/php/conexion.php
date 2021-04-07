<?php 

	$server="localhost";
	$user="root";
	$pass="";
	$db="pruebas";
	$con = new MySqli($server, $user, $pass, $db);

	if($con -> connect_errno){
		echo "error de conexion: " . $con -> connect_errno;
	}

 ?>