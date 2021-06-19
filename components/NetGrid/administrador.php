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
                <img src="img/clima.svg" alt="logo">
                <h2>APP CLIMA</h2>
            </div>

            <ul>
                <li><a href="index.php">Inicio</a></li>
                <li><a href="">Opiones &nbsp;<img src="img/opciones.svg" style="width:17px;background:white;border-radius:100%;" alt=""></a>
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
            </center>
        </section>
    </main>
</div>


</body>
</html>
<?php } ?>