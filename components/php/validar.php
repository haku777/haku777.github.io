<?php 

	if(!empty($_POST)){
		echo "se enviaron los datos del formulario<br>";

		if(isset($_POST["go"])){
			// echo "se pulso el boton de envio<br>";

			require_once 'conexion.php';

			if($con -> connect_errno){
				echo "error de conexion: " . $con -> connect_errno;
			}else{
				session_start();

				#buena conexion
				$usuario = $_POST['usuario'];
				$clave = $_POST['clave'];

				$consulta = "select * from usuarios where usuario='" . $usuario . "' and password='" . $clave . "'";
				$resultado = $con -> query($consulta);
				// echo "registros encontrados:" . $resultado -> num_rows ."<br>";

				if($resultado -> num_rows){

					$_SESSION['usuario'] = $usuario; 
					echo "<br><a href='login.html'>Login</a>";
					echo "exitoso";

					header('location: index.php');
				}else{
					echo "datos incorrectos intente nuevamente";
					echo "<br>fallo";
					echo "<br><a href='login.html'>Login</a>";
				}
			}


	#----------------------
		}else{
			echo "no se pulso el boton de envio<br>";
		}
	#---------------
	phpinfo();

	}else{
		echo "no llegaron datos del formulario<br>";
	}

?>