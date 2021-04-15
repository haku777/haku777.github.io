<?php 
require_once "conexion.php";
// se valida el usuario y la contraseña en la base de datos
if (isset($_POST["sesion"])) {
	$user = $_POST["user"];
	$pass = $_POST["pass"];

	$queryV=mysqli_query($con, "SELECT * FROM usuarios WHERE usuario='$user' and password='$pass'");
	$validar=mysqli_num_rows($queryV);
	if ($validar) {
	//y validamos el tipo de usuario que es admin o usuario.
		if ($row=mysqli_fetch_array($queryV)) {
			$Tuser = $row["rol"];
			if ($Tuser==0) {
				session_start();
					$_SESSION['user']= $row['usuario'];
					header("location:admin.php");
			}else{
				session_start();
					$_SESSION['user']= $row['usuario'];
					header("location:user.php");
			}
		}else{
		echo "<script>window.location.assign('index.php')</script>";
		}
	}else{
		echo "<script>window.location.assign('index.php')</script>";
	}
}else{
		echo "<script>window.location.assign('index.php')</script>";
}

?>

