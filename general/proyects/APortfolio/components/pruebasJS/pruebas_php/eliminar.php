<?php 


if (!empty($_POST)) {

	if (isset($_POST['eliminar'])) {

			require 'variables.php';
			require 'conexion.php';

				$id = $_POST['id'];

				$eliminar = "update " . $tbl_usuarios . " set active=0 where id=" . $id;
				$resultado = $con -> query($eliminar);

				if ($resultado) {
					echo "se elimino correctamente";
				}else{
					echo "<br>" . error_reporting(E_ALL);
					// print_r($resultado->errorInfo($resultado));
					// mysqli_query($this->$con, $resultado) or (mysqli_error($this->$con));;
				}
	}
}

 ?>