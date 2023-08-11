<?php

require_once "conexion.php";

session_start();
if($_SESSION['user'] == null || $_SESSION['user'] != null){
    session_destroy();
    header("location: ../index.php");
}

if(session_status()){
    session_start();
    $id_ingreso = $_SESSION['id'];
    date_default_timezone_set('America/Panama'); 
    $fecha_entrada = date('1900-01-01 03:41:00');
    $fecha = date('Y-m-d h:i:s', time());

    $sql_ingreso = "insert into historico (id_usuario,fecha_ingreso,fecha_salida) values(".$id_ingreso.",'".$fecha_entrada."','".$fecha."')";
    $ingreso = $con->query($sql_ingreso);
    session_unset();    // Borrar las variables de sesión
    setcookie(session_name(), 0, 1 , ini_get("session.cookie_path"));//borramos las cookies
    session_destroy();
    header("location: ../index.php");
    exit();
}
?>