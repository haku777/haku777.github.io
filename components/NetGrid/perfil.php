<?php
    session_start();
    if( $_SESSION['user'] == false || $_SESSION['id_rol'] != 2){
        header("location: index.php");
    }else{
        require "conexion/conexion.php";
        $busqueda = $con->query("select * from usuarios where id=".$_SESSION['id']."");
        $resultado = mysqli_fetch_array($busqueda);
?>


<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cliente</title>
    <link rel="shortcut icon" href="img/clima.svg">
    <link rel="stylesheet" href="css/cliente.css">
    <link rel="stylesheet" href="css/perfil.css">

</head>

<body>

    <main>
    <nav>
        <h2><img src="img/clima.svg" alt="">APP CLIMA</h2>
            <ul>
                <!-- <li><a href="">Clima</a></li> -->
                <li><a href="cliente.php">Clima</a></li>
                <li><a href="conexion/cerrarConexion.php">Cerrar session</a></li>
            </ul>
        </nav>
        
        <section>
            <center>
                <div class="datosprimarios">
                
                    <div id="estado">
                    <?php   echo '<img width="170" src="data:image/jpeg;base64,'.base64_encode($resultado['foto']) .' "/>'; ?>
                        <h2><?= $resultado['usuario']; ?></h2>
                    </div>
                    
                    <form action="conexion/acciones.php" method="post" enctype="multipart/form-data">

                        <label for="">Buscar imagen<input type="file" name="image"/></label>
                        <label for="user">Usuario<input type="text" id="user" name="user" required="required" value="<?= $resultado['usuario']; ?>"></label>
                        <label for="email">Correo<input type="email" id="email" name="email" required="required" value="<?= $resultado['correo']; ?>"></label>
                        <label for="pass">Clave<input type="password" id="pass" name="pass" required="required" value=""></label>

                        <input type="submit" name="acperfil" value="Actualizar">
                    </form>

                </div>
        </center>
    </main>

</body>
</html>
<?php } ?>