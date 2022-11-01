<?php 
$con=new MYSQLI("localhost","root","","databusiness");
if (isset($_POST['actualizar'])) {
	$id=$_POST['id'];
	$nom=$_POST['nombre'];
	$age=$_POST['edad'];
	$date=$_POST['fecha'];

	$up="UPDATE usuarios SET `nombre`='$nom',`edad`='$age',`fecha`='$date' WHERE `id`='$id'";
	$queryu=mysqli_query($con, $up);
	if ($queryu) {
		header('location:index.php');
	}else{echo "fallo la actualización";}



}else if (isset($_POST['eliminar'])) {

	$id=$_POST['id'];
	$nom=$_POST['nombre'];
	$age=$_POST['edad'];
	$date=$_POST['fecha'];


	$del="DELETE FROM usuarios WHERE `id`='$id'";
	$queryd=mysqli_query($con, $del);
	if ($queryd) {
		header('location:index.php');
	}else{echo "no se elimino el usuarios";}

}else{
	echo "Nothing";
}
 ?>