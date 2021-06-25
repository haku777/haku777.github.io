<?php

require_once "conexion.php";

if(!empty($_POST)){
    session_start();

    if(isset($_POST['go'])){
        
        $user = $_POST['user'];
        $pass = $_POST['pass'];

        $sql = "select * from usuarios where usuario='".$user."' and clave='".$pass."' and active=1";
        $resultado = $con->query($sql);
        $datos = mysqli_fetch_array($resultado);
        
        if($datos > 0){

            $_SESSION['user']=$user;
            $_SESSION['id_rol']=$datos['id_rol'];
            $_SESSION['email']=$datos['correo'];
            $_SESSION['id']=$datos['id'];
            $id_ingreso=$datos['id'];
            date_default_timezone_set('America/Panama'); 
            $fecha = date('Y-m-d h:i:s', time());
            $fecha_cierre = date('1900-01-01 03:41:00');

            $sql_ingreso = "insert into historico (id_usuario,fecha_ingreso,fecha_salida) values(".$id_ingreso.",'".$fecha."','".$fecha_cierre."')";
            $ingreso = $con->query($sql_ingreso);
            if($datos['id_rol'] == 1){
                echo "<br> administrador";
                header("location: ../administrador.php");
            }else if($datos['id_rol'] == 2){
                    echo "<br> cliente";
                    header("location: ../cliente.php");
            }

        }else{
            header("location: ../index.php?datos=datos incorrectos");
                
        }

    }
}



?>