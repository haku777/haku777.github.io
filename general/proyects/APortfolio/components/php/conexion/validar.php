<?php
require_once "conexion.php";
require_once "../ConectionGoogle.php";


session_start();
$_SESSION['TokenGoogle'] = $token['access_token'];
$_SESSION['id'] =  $google_account_info->id;
$_SESSION['user'] =  $google_account_info->name;
$_SESSION['email'] =  $google_account_info->email;
$_SESSION['picture'] =  $google_account_info->picture;

if ($_SESSION['TokenGoogle'] != "") {
    // echo "token: " . $_SESSION['TokenGoogle'] . "<br>";
    // echo "id " .  $_SESSION['id'] . "<br>";
    // echo "user " .  $_SESSION['user'] . "<br>";
    // echo "email " .  $_SESSION['email'] . "<br>";
    // echo "picture " .  $_SESSION['picture'] . "<br>"; 
    $query = $con->query("select * from usuarios where usuario='".$_SESSION['user']."' and clave='".$_SESSION['id']."' and active=1");
    $result = mysqli_fetch_array($query);
    
    if($result){
        $_SESSION['id_rol'] = $result["id_rol"];
        header("location: ../cliente.php");
    }else{
        $sql = "insert into usuarios (usuario,correo,clave,id_rol,active,foto) values('" . $_SESSION['user'] ."','" . $_SESSION['email'] ."','" . $_SESSION['id'] ."'," . 2 . "," . 1 . ",'" . $_SESSION['picture'] . "')";
        $resultado = $con->query($sql);
        
        if($resultado){
            header("location: ../cliente.php");
        }else{
            echo "algo fallo";
        }
        exit();
    }
    
} else {

    if(!empty($_POST)){
        session_start();
        if(isset($_POST['go'])){
            $user = $_POST['user'];
            $pass = $_POST['pass'];
            $sql = "select * from usuarios where usuario='".$user."' and clave='".$pass."' and active=1";
            $resultado = $con->query($sql);
            $datos = mysqli_fetch_array($resultado);
            if($datos > 0){
                $_SESSION['id']=$datos['id'];
                $_SESSION['user']=$datos['usuario'];
                $_SESSION['id_rol']=$datos['id_rol'];
                $_SESSION['email']=$datos['correo'];
                $_SESSION['photo']=$datos['foto'];
                date_default_timezone_set('America/Panama'); 
                $fecha = date('Y-m-d h:i:s', time());
                $fecha_cierre = date('1900-01-01 03:41:00');

                $sql_ingreso = "insert into historico (id_usuario,fecha_ingreso,fecha_salida) values(". $_SESSION['id'] .",'".$fecha."','".$fecha_cierre."')";
                $ingreso = $con->query($sql_ingreso);
                if($datos['id_rol'] == 1){ //admin
                    header("location: ../administrador.php");
                }else if($datos['id_rol'] == 2){//cliente
                        header("location: ../cliente.php");
                }

            }else{
                if($user == "" || $pass == ""){
                    header("location: ../index.php");
                }
                header("location: ../index.php?datos=datos incorrectos");
                    
            }

        }
    }
}

?>