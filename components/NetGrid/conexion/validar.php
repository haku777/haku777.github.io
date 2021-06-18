<?php

require_once "conexion.php";

if(!empty($_POST)){

    if(isset($_POST['ingresar'])){
        $user = $_POST['user'];
        $pass = $_POST['pass'];

        echo $user ."<br>". $pass;
    }
 
}



?>