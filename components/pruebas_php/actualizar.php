<?php

#validamos el metodo
if ($_POST) {
	#validacion campos vacios
	if (!empty($_POST)) {
		#se presiono actualizar
		if (isset($_POST['actualizar'])) {
		#validar campo especifico vacio
			if($_POST['usuario'] and $_POST['clave']){

				require 'variables.php';
				require 'conexion.php';

				$id = $_POST['id'];
				$usuario = $_POST['usuario'];
				$clave = $_POST['clave'];
				// $rol = $_POST['rol'];

				$actualizar = "update " . $tbl_usuarios . " set usuario='" . $usuario . "',password='" . $clave . "' where id=" . $id;
				$resultado = $con -> query($actualizar);

				if ($resultado) {
					echo "se actualizo correctamete";
				}else{
					echo "<br>fallo";
				}

			}else{
				echo "campos incompletos";
			}
		}
	}
}

?>