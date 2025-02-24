<?php 
    session_start();
    if ($_SESSION['user'] == false || $_SESSION['id_rol'] != 1){
        header("location: index.php");
    }else{
    require_once "conexion/conexion.php"; 
    require_once "conexion/acciones.php"; 
    $sql=("select * from usuarios where active=1 LIMIT 10");
    $resultado = $con->query($sql);
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administrador</title>
    <link rel="stylesheet" href="css/administrador.css">
    <link rel="shortcut icon" href="img/clima.svg">


</head>

<body>

<div class="wrapper">
    <header>
        <nav>
            <div>
                <img src="../../../img/weather/clima.png" alt="logo">
                <h2>APP CLIMA</h2>
            </div>

            <ul>
                <li><a href="index.php">Inicio</a></li>
                <li><span>Opiones</span>
                    <ul>
                        <li><a href="registro.php">Agregar cliente</a></li>
                        <li><a href="conexion/cerrarConexion.php">Cerrar sesion</a></li>
                    </ul>
                </li>
            </ul>


        </nav>
    </header>

    <main>
        <section>
            <center>
                    <h2><?= $_SESSION['user']; ?></h2>
                    <table>
                        <thead>
                            <tr>
                                <th colspan="2">Usuario</th>
                                <th>Correo</th>
                                <th>Clave</th>
                                <th>Rol</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php while($datos = mysqli_fetch_array($resultado)){ 
                                $rol;
                                if($datos['id_rol'] == 1){
                                    $rol = "Administrador";
                                }else{
                                    $rol= "Cliente";
                                } ?>
                                <tr>
                                    <form action="conexion/acciones.php" method="post">
                                        <td><input type="hidden" name="id" value="<?= $datos['id']; ?>"></td>
                                        <td><input type="text" disabled="disabled" value="<?= $datos['usuario']; ?>"></td>
                                        <td><input type="email" name="email" value="<?= $datos['correo']; ?>"></td>
                                        <td><input type="password" name="pass" value="<?= $datos['clave']; ?>"></td>
                                        <td><input type="text" disabled="disabled" value="<?= $rol ?>"></td>
                                        <td>
                                            <?php if($datos['id_rol'] == 1){ ?>
                                                <input type="submit" name="update" id="update" value="Actualizar">
                                                <?php }else{ ?>
                                                    <input type="submit" name="update" id="update" value="Actualizar">
                                                    <input type="submit" name="delete" id="delete" value="Eliminar">
                                            <?php } ?>
                                            
                                        </td>
                                    </form>
                                </tr>
                            <?php } ?>
                        </tbody>
                    </table>
                    <div class="pdf">
                        <a href="generar_pdf.php" target="_blank">generar pdf de usuarios<img src="img/descarga.svg" width="20" alt=""></a>
                        <a href="generar_word.php" target="_blank">generar doc de usuarios<img src="img/descarga.svg" width="20" alt=""></a>
                    </div>
            </center>
        </section>
    </main>
</div>


</body>
</html>
<?php } ?>