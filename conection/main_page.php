<?php 

$user = $_POST["user"];
$pass = $_POST["pass"];

if ($user='haku' and $pass = 'haku'){
	echo 'bien';
	header("location: page.html");
	die();
}else{
	echo 'datos incorrectos';
}

?>

