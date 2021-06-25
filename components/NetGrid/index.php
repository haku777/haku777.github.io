<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NetGrid</title>
    <link rel="shortcut icon" href="img/clima.svg">
    <link rel="stylesheet" href="css/index.css">
    <script src="js/validacionc.js" type="text/javascript"></script>
</head>

<body>
<?php 
$resultado ="";
if(!empty($_GET)){
    $resultado = $_GET['datos'];
}
?>
    <main>
        <section>
            <center>
                <img src="img/clima.svg" alt="clima">
                <h1>APP CLIMA</h1>
                <form action="conexion/validar.php" method="post">
                    <label for="user">usuario<input type="text" name="user" id="user" required="required"></label><br>
                    <label for="pass">clave<input type="password" name="pass" id="pass" required="required"></label><br>
                    <input type="submit" name="go" value="Ingresar">
                </form> 
                <h3><?php echo $resultado ?></h3>
                <a href="registro.php">Registrarse</a>
                <a href="">Olvidé la clave?</a>
                <!-- <a href="http://haku777.herokuapp.com/components/NetGrid/">heroku app</a> -->
            </center>
        </section>
    </main>
</body>
</html>