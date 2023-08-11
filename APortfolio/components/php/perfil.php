<?php
    session_start();
    if( $_SESSION['user'] == false || $_SESSION['id_rol'] != 2){
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
    <link rel="stylesheet" href="css/perfil.css">
</head>
<body>
    <main>
        <nav>
            <h2><img src="../../../img/weather/clima.png" alt="">APP CLIMA</h2>
            <ul>
                <li><a href="cliente.php">Clima</a></li>
                <li><a href="conexion/cerrarConexion.php">Cerrar session</a></li>
            </ul>
        </nav>

        <section>
                <div class="datosprimarios">
                
                    <div id="estado">
                        <?php   
                            if($_SESSION['picture'] != null){
                                echo '<img width="170" src="'. $_SESSION['picture'] .' "/>';
                            }else{
                                echo '<img width="170" src="data:image/jpeg;base64,'.base64_encode($_SESSION['photo']) .' "/>';
                            }
                        ?>
                            <h2><?= $_SESSION['user']; ?></h2>
                    </div>
                    <form action="conexion/acciones.php" method="post" enctype="multipart/form-data">
                        <label for="">Buscar imagen<input type="file" name="image"/></label>
                        <label for="user">Usuario<input type="text" id="user" name="user" required="required" value="<?= $_SESSION['user']; ?>"></label>
                        <label for="email">Correo<input type="email" id="email" name="email" required="required" value="<?= $_SESSION['email']; ?>"></label>
                        <label for="pass">Clave<input type="password" id="pass" name="pass" required="required" value=""></label>
                        <input type="submit" name="acperfil" value="Actualizar">
                    </form>
                </div>
        </section>
    </main>
</body>
</html>
<?php 
} 
?>