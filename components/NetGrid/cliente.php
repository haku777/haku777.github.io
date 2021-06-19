<?php
    session_start();
    if( $_SESSION['user'] == false || $_SESSION['id_rol'] != 2){
        header("location: index.php");
    }else{
        require "conexion/conexion.php";
        $busqueda = $con->query("select usuario from usuarios where id=".$_SESSION['id']."");
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

</head>

<body>
    <audio controls loop autoplay style="display:none;">
        <source src="img/wait.mp3" type="audio/mpeg">
    </audio>
    <header>
        <nav>
        <h2><img src="img/clima.svg" alt="">APP CLIMA</h2>
            <ul>
                <li><a href="index.php">Inicio</a></li>
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
                <div class="titulo">
                    <h2>Bienvenid@ <strong><?= $resultado['usuario'] ?></strong></h2>
                    <p>APP CLIMA, busca tu ciudad y conoce el clima esperado para tu <strong>Día</strong></p>
                </div>

                <div class="search">
                    <input type="text" id="ciudad" name="ciudad" value="bogota" placeholder="Buscar ciudad">
                    <!-- <img src="img/lupa.svg" width="50" style="transform: scaleX(-1);" alt=""> -->
                    <input type="submit" id="buscar" name="buscar" value="Buscar">
                </div>

                <div class="contenedor">
                    <div class="datosecundarios">
                        <div><img src="img/ciudad.svg" width="50" alt=""><h3>Ciudad : <span id="city"></span></h3></div>
                        <div><img src="img/pais.svg" width="50" alt=""><h3>Pais : <span id="pais"></span></h3></div>

                        <div><img src="img/humedad.svg" width="50" alt=""><h3>Humedad : <span id="humedad"></span>%</h3></div>
                        <div><img src="img/presion.svg" width="50" alt=""><h3>Presion : <span id="presion"></span>hPa</h3></div>
                        <div><img src="img/visibilidad.svg" width="50" alt=""><h3>Visibilidad : <span id="visibilidad"></span>Km</h3></div>
                        <div><img src="img/windspeed.svg" width="50" alt=""><h3>Velocidad del Viento : <span id="speedwind"></span>m/s</h3></div>
                        <div><img src="img/windgrados.svg" width="50" alt=""><h3>Grados del Viento : <span id="windgrados"></span></h3></div>

                    </div>

                    <div class="datosprimarios">
                        <div class="grados">
                            <h2 id="grados"></h2>
                            <img src="img/grados.svg" width="50" alt="">
                            <div id="temperatura">
                            </div>
                        </div>
                        <div id="estado">
                            <img src="img/atardecer2.svg" width="300" alt="">
                        </div>
                    </div>
                </div>
            </center>
        </section>
    </main>

    <aside>
        <center>
            <div class="chat">
                <h2>Chat no Disponible por el momento...</h2>
                <h2>Haku</h2>
                <p>hola a todos</p>
                <h2>Maria</h2>
                <p>saludos desde cali</p>
                <h2>はく</h2>
                <p>なに、こにちわ ときお</p>
            </div>
        </center>
    </aside>

<!-- ------------------ -->
            <section>
                <center>
                    <img src="img/clima.svg" width="100" alt="">
                    <img src="img/atardecer2.svg" width="100" alt="">
                    <img src="img/ciudad.svg" width="100" alt="">
                    <img src="img/pais.svg" width="100" alt="">
                    <img src="img/cool.svg" width="100" alt="">
                    <img src="img/cool2.svg" width="100" alt="">
                    <img src="img/hot.svg" width="100" alt="">
                    <img src="img/night.svg" width="100" alt="">
                    <img src="img/rain.svg" width="100" alt="">
                    <img src="img/soleadoAtardecer.svg" width="100" alt="">
                    <img src="img/startday.svg" width="100" alt="">
                    <img src="img/storm.svg" width="100" alt="">
                    <img src="img/windclounds.svg" width="100" alt="">
                    <img src="img/winspeed.svg" width="100" alt="">

                </center>
            </section>
  

<footer>
        <section>
            <center>
                <h2>&copy; Creado por Haku 2021 v1.0</h2>
            </center>
        </section>

</footer>


<script>
    
let buscar = document.getElementById('buscar').addEventListener('click', buscarImagen);
function buscarImagen() {
    let buscarValor = document.getElementById('ciudad').value;
    console.log(buscarValor);
    const xhttp = new XMLHttpRequest();
    
    
    // xhttp.open("GET", `api.openweathermap.org/data/2.5/weather?id=${buscarValor}&appid=7f4f88dae157e8fadee2e27967107f2c&lang=es`, true);
    xhttp.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${buscarValor}&appid=7f4f88dae157e8fadee2e27967107f2c`, true);

    
    xhttp.send();        
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            let respuesta = JSON.parse(xhttp.responseText);

            console.log(respuesta);
            
            let ciudad = document.getElementById('city'),
            pais = document.getElementById('pais'),
            humedad = document.getElementById('humedad'),
            presion = document.getElementById('presion'),
            visibilidad = document.getElementById('visibilidad'),
            speedwind = document.getElementById('speedwind'),
            windgrados = document.getElementById('windgrados'),
            grados = document.getElementById('grados'),
            temperatura = document.getElementById('temperatura'),
            img = document.getElementById('estado');
            

            console.log(respuesta.main.temp);
            let grade = (respuesta.main.temp-273.15);
            console.log(grade);
            
            
            ciudad.innerHTML = respuesta.name;
            pais.innerHTML = respuesta.sys.country;
            humedad.innerHTML = respuesta.main.humidity;
            presion.innerHTML = respuesta.main.pressure;

            visibilidad.innerHTML = respuesta.visibility;
            speedwind.innerHTML = respuesta.wind.speed;
            windgrados.innerHTML = respuesta.wind.deg;
            grados.innerHTML = Math.round(grade);

            if(grade > 17){
                temperatura.innerHTML = "<img src='img/hot.svg' width='50' alt=''>";
            }else{
                temperatura.innerHTML = "<img src='img/cool.svg' width='50' alt=''>";
            };

            
        };       
    }
}

buscarImagen();

</script>
</body>
</html>
<?php } ?>