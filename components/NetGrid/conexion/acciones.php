<?php

require_once "conexion.php";

if(!empty($_POST)){
    
    
    // aqui agregamos a los nuevos clientes
    if(isset($_POST['add'])){
        $user = $_POST['user'];
        $email = $_POST['email'];
        $pass = $_POST['pass'];

        $error_clave = "";


        function validar_clave($pass,&$error_clave){
            if(strlen($pass) < 8){
               $error_clave = "La clave debe tener al menos 8 caracteres";
               return false;
            }
            if (!preg_match('`[A-Z]`',$pass)){
                $error_clave = "La clave debe tener al menos una letra mayúscula";
                return false;
            }
            if (!preg_match('`[a-z]`',$pass)){
                $error_clave = "La clave debe tener al menos una letra minúscula";
                return false;
            }
            if (!preg_match('`[0-9]`',$pass)){
                $error_clave = "La clave debe tener al menos un caracter numérico";
                return false;
            }
            $caracteres = "/^[a-z0-9]+$/i";
            $entrada = $pass;
            $resultado = preg_match($caracteres, $entrada);
            if(!$resultado) {
                $error_clave = "no se permiten caractreres especiales";
                return false;
            }
            
            $error_clave = "";
            return true;
        }
        
        
        $claves = validar_clave($pass,$error_clave);
        
        if($error_clave !== ""){
            $error_clave = "La clave debe tener al menos 8 caracteres<br>debe contener al menos una letra mayúscula<br>debe contener al menos una letra<br>debe contener al menos un caracter numérico<br>no se permiten los caractreres especiales<br>";
            header("location: ../registro.php?datos=".$error_clave ."");
        }else{
            $sql = "insert into usuarios (usuario,correo,clave) values('".$user."','".$email."','".$pass."')";
            $resultado = $con->query($sql);
            header("location: ../administrador.php");
        }
        
        
        
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

    if(isset($_POST['enviarm'])){
        $id = $_POST['id'];
        $message = $_POST['message'];
        $sql = "insert into mensajes (id_usuario,mensaje) values(".$id." ,'" . $message . "')";
        $resultado = $con->query($sql);
        header("location: ../cliente.php");
    }

    // actualizamos al cliente
    if(isset($_POST['acperfil'])){
        session_start();
        $id = $_SESSION['id'];
        $user = $_POST['user'];
        $email = $_POST['email'];
        $pass = $_POST['pass'];
        
        $revisar = getimagesize($_FILES["image"]["tmp_name"]);

        if($revisar !== false){
            $image = $_FILES['image']['tmp_name'];
            $imgContenido = addslashes(file_get_contents($image));
            $sql = "update usuarios set  usuario='".$user."',correo='".$email."',clave='".$pass."',foto='".$imgContenido."' where id=".$id."";
            $resultado = $con->query($sql);
        }
        
        header("location: ../perfil.php");

    }



}


?>