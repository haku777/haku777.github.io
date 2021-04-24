<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Laravel</title>
	<style>
		#agregar{border: none;color: white;background: lightseagreen;padding: 7px;}
		#actualizar{border: none;color: white;background: blue;padding: 7px;}
		#eliminar{border: none;color: white;background: tomato;padding: 7px;}
	</style>
</head>
<body>
	<h1>laravel</h1>
	<h2>php</h2>

	<table>
		<thead>
			<th>nuevo usuario</th>
		</thead>
		<tbody>
			<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']) ?>" method="POST">
				
			<tr>
				<td><label for="usuario">Usuario<input type="text" id="usuario" name="usuario" autofocus></label></td>
			</tr>
			<tr>
				<td><label for="clave">Clave<input type="password" id="clave" name="clave"></label></td>
			</tr>
			<tr>
				<td><input type="submit" id="agregar" name="agregar" value="Agregar"></td>
			</tr>
			</form>
		</tbody>
	</table>

	<h3>conectar con php online</h3>
	<!-- conexion -->
	<?php 
	 	$con = new MySqli("localhost","root","","pruebas");

	 	if (!empty($_POST)){
	 		if (isset($_POST['agregar'])) {
				 	$usuario = $_POST['usuario'];
				 	$clave = $_POST['clave'];

				 	$agregar = "INSERT INTO usuarios(usuario,password) values('" . $usuario . "','" . $clave . "')";
				 	$resultado = $con -> query($agregar);
				 	if($resultado){
				 		echo "Se agrego correctamente";
				 	}
	 		}

		if (isset($_POST['actualizar'])) {
				 	$id = $_POST['id'];
				 	$usuario = $_POST['usuario'];
				 	$clave = $_POST['clave'];

				 	$actualizar = "UPDATE usuarios set usuario='" . $usuario . "',password='" . $clave . "' where id=" . $id;
				 	$resultado = $con -> query($actualizar);
				 	
			 	if($resultado){
			 		echo "Se actualizo correctamente";
			 	}
	 		}

	 		if (isset($_POST['eliminar'])) {
				 	$id = $_POST['id'];

				 	$eliminar = "UPDATE usuarios set active=0 where id=" . $id;
				 	$resultado = $con -> query($eliminar);
				 	
			 	if($resultado){
			 		echo "Se elimino correctamente";
			 	}
	 		}



	 	}

	?>

	<table>
		<thead style="background: tomato;color: white">
			<th colspan="1"></th>
			<th colspan="1">id</th>
			<th colspan="1">usuario</th>
			<th colspan="1">clave</th>
			<th colspan="1">active</th>
			<th colspan="1">Actualizar</th>
			<th colspan="1">Eliminar</th>
		</thead>
		<tbody>
			<!-- read -->
			<?php 
			
			$consulta = "SELECT * FROM usuarios where active=1";
			$resultado = $con->query($consulta);

			while($fila = mysqli_fetch_array($resultado)){

			?>

			<tr>
				<form action=" <?php echo htmlspecialchars($_SERVER['PHP_SELF']) ?> " method="POST">				
					<td><label for="id"><input type="hidden" id="id" name="id" value="<?php echo $fila['id']; ?>"></label></td>
					<td><?php echo $fila['id']; ?></td>
					<td><label for="usuario"><input type="text" id="usuario" name="usuario" value="<?php echo $fila['usuario']; ?>"></label></td>
					<td><label for="clave"><input type="password" id="clave" name="clave" value="<?php echo $fila['password']; ?>"></label></td>
					<td><?php echo $fila['active']; ?></td>
					<td><input type="submit" id="actualizar" name="actualizar" value="Actualizar"></td>
					<td><input type="submit" id="eliminar" name="eliminar" value="Eliminar"></td>
				</form>
			</tr>

			<?php } ?>
		</tbody>
	</table>

</body>
</html>