<?php 
require_once "conexion.php";
session_start();
mysqli_close($con);
session_unset();
session_destroy();
echo "here script";
 


// require 'conection.php';
// session_start();
// //cierra una conexion previa a una base de datos por procedimientos
// mysqli_close($con);
// //Libera todas las variables de sesión y de estar vacio
// session_unset();
// //Destruye toda la información registrada de una sesión
// session_destroy();
// //enviamos un mensaje de cierre de sesión exitoso.
// echo "<script>alert('salida exitosa');window.location.assign('index.php')</script>";

// session_write_close();
// setcookie(session_name(),'',0,'/');
// session_regenerate_id(true);
?>