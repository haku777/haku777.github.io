<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NetGrid</title>
    <link rel="shortcut icon" href="img/clima.svg">
    <link rel="stylesheet" href="css/index.css">
    <script type="text/javascript" src="js/validacionc.js"></script>
</head>
<body>
<?php 
require_once "ConectionGoogle.php";
$resultado ="";
if(!empty($_GET)){
    $resultado = $_GET['datos'];
}
?> 
    <main>
        <section>
                <img src="../../../img/weather/clima.png" alt="clima">
                <h1>APP CLIMA</h1>
                <form action="conexion/validar.php" method="post">
                    <label for="user">Usuario<input type="text" name="user" id="user" required="required"></label><br>
                    <label for="pass">Clave<input type="password" name="pass" id="pass" required="required"></label><br>
                    <input type="submit" name="go" value="Ingresar">
                    <br>
                    <?php 
                        $authUrl = $client->createAuthUrl();
                        echo "<a href='$authUrl'>
                        <img src='../../../img/information/search.png' style='width:20px' alt='icono de google'>
                        Continuar con Google</a>";
                    ?>
                </form> 
                <h3><?php echo $resultado ?></h3>
                <div>
                    <a href="registro.php">Registro</a>
                    <a href="">Olvido la clave?</a>
                </div>
        </section>
    </main>
</body>
</html>