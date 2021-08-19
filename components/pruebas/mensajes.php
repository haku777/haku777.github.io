<?php

function conectar(){
    throw new Exception("Fallo de conexion");
    $con = new mysqli("remotemysql.com","pOhsNKfJQeh","sIoYOlO5z1","pOhNKfJQeh");
    return $con;
}

function agregar(){
    $conexion = conectar();
    if(!empty($_POST)){
        if(isset($_POST['enviar'])){
            $nombre = $_POST['nombre'];
            $correo = $_POST['correo'];
            $mensaje = $_POST['mensaje'];
            $mensajeC = $nombre . $correo . $mensaje;
            $insertar = "insert into mensajes (mensaje) values('". $mensajeC ."')";
            $resultado = $conexion->query($insertar);

        }
    }
}

    try {
        conectar();
        agregar();
       
    } catch(Exception $Ex){
        echo "Error: " .  $Ex->getMessage() . "<br>";
    }

    header("location: https://haku777.github.io/components/portfolio/new.html");
    
?>