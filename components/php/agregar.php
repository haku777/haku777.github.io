<?php

if(!empty($_POST)){

	if(isset($_POST['agregar'])){
			require'variables.php';
			require'conexion.php';

			#validar valores similares

				$newUser = $_POST['newUser'];
				$newPass = $_POST['newPass'];
			if ($newUser !== "" and $newPass !== ""){

				$insertar= "INSERT INTO " . $tbl_usuarios . " (usuario,password) values('".$newUser."','".$newPass."')";
				$Ejecutar = $con -> query($insertar);

					if($Ejecutar){
						unset($newUser);
						unset($newPass);
					}

				}else{
				echo "<br>campos vacios<br>";
			}
	}else{
		// echo "<br>no se ha prescionado";
	}
}#else no hay valores para crear en usuarios

?>