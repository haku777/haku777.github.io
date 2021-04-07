<?php 

echo "<br>estado session: " . session_start();

$_SESSION = array();
var_dump($_SESSION);

echo "<br>estado conexion: " . connection_status();

session_destroy();
connection_aborted();
$name = "yo";
setcookie($name); #hay que poner un nombre


echo "<br>estado session2: " . session_status();
 
    // PHP_SESSION_DISABLED 	si las sesiones están deshabilitadas.
    // PHP_SESSION_NONE 		si las sesiones están habilitadas, pero no existe ninguna.
    // PHP_SESSION_ACTIVE 		si las sesiones están habilitadas, y existe una.

	// _DISABLED = 0
	// _NONE = 1
	// _ACTIVE = 2
    session_start();
    
    session_unset();
    
    session_destroy();
    
    session_write_close();
    
    setcookie(session_name(),'',0,'/');
    // session_regenerate_id(2);

    header("location: index.php");
    header("location: login.html");

?>