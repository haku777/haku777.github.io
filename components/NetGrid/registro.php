<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>registrarse</title>
    <link rel="stylesheet" href="css/registro.css">
    <link rel="shortcut icon" href="img/clima.svg">


</head>

<body>
    <main>
        <section>
            <center>
            <h2>Registro</h2>
                <form action="conexion/acciones.php" method="post">
                    <label for="user">Usuario<input name="user" id="user" required="required" type="text"></label>
                    <label for="email">Correo<input name="email" id="email" required="required" type="email"></label>
                    <label for="pass">Clave<input name="pass" id="pass" required="required" type="password"></label>
                    <input type="submit" name="add" value="Agregar">
                </form>
                <a href="index.php">Login</a>
            </center>
        </section>
    </main>
</body>
</html>