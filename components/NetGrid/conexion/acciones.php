<?php

require_once "conexion.php";

if(!empty($_POST)){
    
    
    // aqui agregamos a los nuevos clientes
    if(isset($_POST['add'])){
        $user = $_POST['user'];
        $email = $_POST['email'];
        $pass = $_POST['pass'];
        $sql = "insert into usuarios (usuario,correo,clave) values('".$user."','".$email."','".$pass."')";
        $resultado = $con->query($sql);
        header("location: ../administrador.php");
    }
    
    // aqui se actualizan los datos de los usuarios
    if(isset($_POST['update'])){
        $id = $_POST['id'];
        $email = $_POST['email'];
        $pass = $_POST['pass'];
        $sql = "update usuarios set correo='".$email."',clave='".$pass."' where id=".$id."";
        $resultado = $con->query($sql);
        header("location: ../administrador.php");
    }
    
    // inactivamos los datos que ya no son necesarios
    if(isset($_POST['delete'])){
        $id = $_POST['id'];
        $sql = "update usuarios set active=0 where id=".$id."";
        $resultado = $con->query($sql);
        header("location: ../administrador.php");
    }

    // actualizamos al cliente
    if(isset($_POST['acperfil'])){
        session_start();
        $id = $_SESSION['id'];
        $user = $_POST['user'];
        $email = $_POST['email'];
        $pass = $_POST['pass'];
        $sql = "update usuarios set  usuario='".$user."',correo='".$email."',clave='".$pass."' where id=".$id."";
        $resultado = $con->query($sql);
        header("location: ../cliente.php");
    }



}


?>