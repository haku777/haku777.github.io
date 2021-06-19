<?php

require_once "conexion.php";

if(!empty($_POST)){
    session_start();

    if(isset($_POST['go'])){

        echo session_status();
        
        $user = $_POST['user'];
        $pass = $_POST['pass'];

        $sql = "select * from usuarios where usuario='".$user."' and clave='".$pass."' and active=1";
        $resultado = $con->query($sql);
        $datos = mysqli_fetch_array($resultado);
        
        echo "<br>" . session_status() . " revisa ahora el admin o el cliente";
        echo "<br>" . $datos['id_rol'];

        if($datos > 0){

            $_SESSION['user']=$user;
            $_SESSION['id_rol']=$datos['id_rol'];
            $_SESSION['email']=$datos['correo'];
            $_SESSION['id']=$datos['id'];

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