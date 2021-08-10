<?php

try {
    $con = new mysqli("remotemysql.com","pOhsNKfJQeh","sIoYOlO5z1","pOhNKfJQeh");
} catch(Exception $e){
    echo '<br><br><br><br><br>Excepción capturada  que paso we?: ',  $e->getMessage(), "\n";
}

$donas = "hola we";

echo $donas;


header("location: ../")

       
?>