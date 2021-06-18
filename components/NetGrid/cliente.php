<?php
    session_start();
    if( $_SESSION['user'] == false){
        header("location: index.php");
    }else{
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cliente</title>
    <link rel="shortcut icon" href="img/clima.svg">
    <link rel="stylesheet" href="css/cliente.css">


</head>

<body>
    <audio controls loop autoplay style="display:none;">
        <source src="img/wait.mp3" type="audio/mpeg">
    </audio>
    <header>
        <nav>
            <img src="img/clima.svg" alt="">
            <ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="">Opciones</a>
                    <ul>
                        <li><a href="perfil.php">mi perfil</a></li>
                        <li><a href="conexion/cerrarConexion.php">Cerrar session</a></li>

                    </ul>
                </li>
            </ul>
        </nav>
    </header>
        <main>
            <section>
                <center>
                    <h2><?= $_SESSION['user']; ?></h2>

                    <h3>Aqui se podra evidenciar los estados del clima para los diferentes paises</h3>

                </center>
            </section>
        </main>

<footer>
        <section>
            <center>
                <h2>&copy; Create by Haku 2021 v1.0</h2>
            </center>
        </section>

</footer>

</body>
</html>
<?php } ?>