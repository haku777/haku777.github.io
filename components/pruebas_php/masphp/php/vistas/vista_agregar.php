<?php 

    require_once "../controladores/controlador_consultas.php"; 
    require_once "../modelos/modelo_conexion.php";

?>

<main>
    <center>
        <form action="../controladores/controlador_consultas.php" method="post">
            <label for="usuario">Usuario <input type="text" id="usuario" name="usuario" required="required"></label><br>
            <label for="password">Password <input type="password" id="password" name="password" required="required"></label><br>

            <input type="submit" id="agregar" name="agregar" value="Agregar">

        </form>
    </center>
</main>