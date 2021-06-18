<?php

if(session_status()){
    session_unset();    // Borrar las variables de sesión
    setcookie(session_name(), 0, 1 , ini_get("session.cookie_path"));//borramos las cookies
    session_destroy();
    header("location: ../index.php");
}

?>