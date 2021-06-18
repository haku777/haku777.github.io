<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NetGrid</title>
    <link rel="shortcut icon" href="img/clima.svg">
    <link rel="stylesheet" href="css/index.css">
</head>

<body>

    <main>
        <section>
            <center>
                <img src="img/clima.svg" width="50%" alt="clima">
                <h1>APP CLIMA</h1>
                <form action="conexion/validar.php" method="post">
                    <label for="user">usuario<input type="text" name="user" required="required"></label><br>
                    <label for="pass">clave<input type="password" name="pass" required="required"></label><br>
                    <input type="submit" name="ingresar" value="Ingresar">
                </form> 
                <a href="">Registrarse</a>
                <a href="">Olvidé la clave?</a>

            </center>
        </section>
    </main>

</body>
</html>