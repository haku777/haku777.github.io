<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="css/index.css">
		<title>Superadministrador</title>
	</head>

	<body>
		<header>
			<nav>
				<img src="img/logo.jpg" alt="logo.jpg" width="50" height="50">

				<div class="reloj">
					<table>
						<thead>
							<tr>
								<th>&nbsp;Viernes</th>
								<th>&nbsp;2</th>
								<th>&nbsp;de</th>
								<th>&nbsp;Abril</th>
								<th>&nbsp;del</th>
								<th>&nbsp;2021</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>&nbsp;18</td>
								<td>&nbsp;:</td>
								<td>&nbsp;02</td>
								<td>&nbsp;:</td>
								<td>&nbsp;02</td>
								<td>&nbsp;PM</td>
							</tr>
						</tbody>
					</table>
					
				</div>
				
				<ul>	
					<li><a href="../index.html">Back</a></li>
					<li><a href="../../page.html">Menu</a></li>
					<li><a href="https://haku777.github.io" target="_blank">Nosotros</a></li>
					<li><a href="http://localhost/haku/index.php">InicioPHP</a></li>
					<li><a href="#">Sericios▼</a>
						<ul>
							<li><a href="#">submenu</a></li>
							<li><a href="#">submenu</a></li>
							<li><a href="#">submenu▼</a>
								<ul>
									<li><a href="https://www.php.net/manual/es/set.mysqlinfo.php" target="_blank">Manual Mysql</a>
									</li>
									<li><a href="#">submenu</a></li>
									<li><a href="#">submenu2</a></li>
									<li><a href="#">submenu3</a></li>
								</ul>
							</li>
							<li><a href="cerrarSesion.php">LogOut</a></li>
						</ul>
					</li>
					<li><a href="http://localhost/phpmyadmin/index.php" target="_blank">PhpMyAdmin</a></li>
					<li><a href="https://www.phpmyadmin.co/index.php" target="_blank">PhpMyAdminWeb</a></li>
				</ul>
			</nav>
		</header>


		<div class="wrapper">
			
			<main>
				<section>
					<div class="crud">
						<h2>PHP Version 8.0.3</h2>
						<hr>
						<br>
						<ol>
							<li style="background: lightgray;">Next you see create,read,update and delete with php</li>
							<li>validate sesion</li>
							<li>create reloj</li>
							<li>validate rol type</li>
							<li></li>
							<li>aplicate API</li>
						</ol>
						<br>
						
						<table>
							<thead>
							<tr>
								<th></th>
								<th>Id</th>
								<th>Usuario</th>
								<th>Active</th>
								<th>Clave</th>
								<th>Rol</th>
								<th>Actualizar</th>
								<th>Eliminar</th>
							</tr>
							</thead>							
							<tbody>
								
								<?php
									require_once 'variables.php';
									require_once 'conexion.php';
									
									require_once 'agregar.php';
									require_once 'actualizar.php';
									require_once 'eliminar.php';

										$consulta = "select * from " . $tbl_usuarios . " where active=1 limit " . $limits;
										$resultado = $con -> query($consulta);
										if ($resultado){
											
											while ($fila = mysqli_fetch_array($resultado)) { ?>
												<tr>
													<form action="<?php htmlspecialchars($_SERVER['PHP_SELF']) ?>" method="POST">
														
													<td><input style="display: none;" type="text" id="id" name="id" value="<?php echo $fila['id']; ?>"></td>
													<td><?php echo $fila['id']; $id=$fila['id']; ?></td>
													<td><input type="text" id="usuario" name="usuario" value="<?php echo $fila['usuario']; ?>"></td>
													<td><?php echo $fila['active']; ?></td>
													<td><input type="password" id="clave" name="clave" value="<?php echo $fila['password']; ?>"></td>
													
													<td>
														<select name="" id="" disabled>
															<option>Superadministrador</option>		
															<option>Administrador</option>		
															<option selected="selected">Usuario</option>		
															<option>Cliente</option>		
														</select>
													</td>

													<td><input type="submit" id="actualizar" name="actualizar" value="actualizar"></td>

													<td><input type="submit" id="eliminar" name="eliminar" value="eliminar"></td>
													</form>
												</tr>

											<?php  
											}
											
										}else{
											"fallo consulta";
										}											
								?>
							</tbody>
						</table>

					</div>
				</section>
			</main>


			<aside>
				<section>
					<h2>Aside</h2>
					<p>Se recomienda usar las extensiones mysqli o PDO_MySQL. 
					No se recomienda usar la extensión mysql antigua para nuevos desarrollos, ya que ha sido declarada obsoleta en PHP 5.5.0 y eliminada en PHP 7.</p>
				</section>
				<section>

					<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]) ?>" method="post">
						<label for="newUser">Usuario Nuevo<input type="text" id="newUser" name="newUser"></label>
						<label for="newPass">Clave<input type="password" id="newPass" name="newPass"></label>
						<input type="submit" id="agregar" name="agregar" value="Agregar">
					</form>
				</section>
			</aside>

		</div> <!-- div del wrapper -->

		<footer>
			<p>descomentar el iframe </p>
			<!-- <iframe src="https://www.campusmvp.es/recursos/post/las-10-principales-diferencias-entre-angularjs-y-angular.aspx" frameborder="0" width="100%" height="700"></iframe> -->
		</footer>

		<script></script>
	</body>
</html>