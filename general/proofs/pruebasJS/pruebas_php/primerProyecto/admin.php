<?php
require_once "conexion.php";
session_start();
if ($_SESSION['user']) { ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Welcome|Admin</title>
</head>
<body>
	<header>
		<nav>
			<ul>
				<li><a href="index.php">Home</a></li>
				<li><a href="close_sesion.php">Cerrar sesión</a></li>
			</ul>
		</nav>
	</header>






</body>
</html>

<?php }else{echo "<script>window.location.assign('index.php');</script>";} ?>









