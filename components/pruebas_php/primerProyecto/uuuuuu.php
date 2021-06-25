	<div class="wrapper container">
		<div class="main row">
			<section class="col-md-9">
				<table>
					<thead>
						<th>hola</th>
						<tr>
							<td>ID</td>
							<td>DOCUMENTO</td>
							<td>USUARIO</td>
							<td>ROL</td>
							<td>EDAD</td>
							<td>FECHA</td>
						</tr>
					</thead>
					<tbody>
						<?php 
						require_once "conexion.php";
						$ver=mysqli_query($con,"SELECT *FROM usuarios");
						while($row=mysqli_fetch_array($ver)) { ?>
							<tr>
								<td><?php echo $row["id"]; ?></td>
								<td><?php echo $row["doc"]; ?></td>
								<td><?php echo $row["usuario"]; ?></td>
								<td>
									<?php
									if ($row['rol']==0) {
										echo "admin"; 
									}else if($row['rol']==1) {
										echo "usuario"; 
									}else{
										echo "rol undefined";
									} ?>

								</td>
								<td><?php echo $row["edad"]; ?></td>
								<td><?php echo $row["fecha"]; ?></td>
							</tr>
						<?php } ?>
					</tbody>
				</table>
			</section>


			<aside class="col-md-3">
				<form action="<?php $_SERVER['PHP_SELF'] ?>" method="post">
					<label for="nom">Nombre</label>
					<input type="text" id="nom" name="nom"><br>
					<label for="old">Edad</label>
					<input type="text" id="old" name="old"><br>
					<label for="date">Fecha</label>
					<input type="text" id="date" name="date"><br>
					<input type="submit" id="agregar" name="agregar" value="Agregar">
				</form>
				<?php 
				if (isset($_POST['agregar'])) {
					$nom=$_POST['nom'];
					$old=$_POST['old'];
					$date=$_POST['date'];
					$in=mysqli_query($con, "INSERT INTO usuarios(nombre,edad,fecha) VALUES('$nom','$old','$date')");
				}else{

				}
				?>
			</aside>
		</div>
	</div>
