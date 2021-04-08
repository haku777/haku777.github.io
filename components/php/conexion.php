<?php 

	$server="sql10.freesqldatabase.com";
	$user="sql10404272";
	$pass="8JNYJxb4b4";
	$db="sql10404272";
	$con = new MySqli($server, $user, $pass, $db);

	if($con -> connect_errno){
		echo "error de conexion: " . $con -> connect_errno;
	}

 ?>