<!DOCTYPE html>
<html lang="es" data-website-id="1" data-oe-company-name="haku777" xml:lang="es" xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta charset="UTF-8">
	<meta name="title" content="Web Developer Portfolio | Jimmy Yahir Gutierrez">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Explore the web development portfolio of Jimmy Yahir Gutierrez haku haku777 haku bishamon. Discover showcased projects and skills in front-end and back-end development.">
	<meta name="robots" content="index, follow">
	<meta name="theme-color" content="#4b0082"/>
	<link rel="canonical" href="https://haku777.com/APortfolio/components/php/index.php">
	<meta property="title" content="Web Developer Portfolio - Jimmy Yahir Gutierrez">
	<meta property="image" content="https://haku777.com/img/versiones/v7.avif">
	<meta property="og:image" content="https://haku777.com/img/versiones/v7.avif">
	<meta property="og:title" content="Web Developer Portfolio - Jimmy Yahir Gutierrez">
	<meta property="og:description" content="Explore the web development portfolio of Jimmy Yahir Gutierrez haku haku777 haku bishamon. Discover showcased projects and skills in front-end and back-end development.">
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:site" content="@exampledeveloper">
	<meta name="twitter:title" content="Web Developer Portfolio - Jimmy Yahir Gutierrez">
	<meta name="twitter:description" content="Explore the web development portfolio of Jimmy Yahir Gutierrez haku haku777 haku bishamon. Discover showcased projects and skills in front-end and back-end development.">
	<meta name="twitter:image" content="https://haku777.com/img/versiones/v7.avif">
	<link rel="stylesheet" href="css/index.css">
	<link rel="shortcut icon" href="img/utilities/yo.avif">
	<link rel="alternate" lang="en" href="index_es.html">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Clima | NetGrid | Jimmy Yahir Gutierrez</title>
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
                <img src="../../../img/weather/clima.png" alt="icono del clima">
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
                    <a href="/">Olvido la clave?</a>
                </div>
        </section>
    </main>
</body>
</html>