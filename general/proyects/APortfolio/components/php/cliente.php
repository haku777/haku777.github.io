<?php
    session_start();

    if( $_SESSION['user'] == false || $_SESSION['id_rol'] != 2){
        header("location: index.php");
    }else{
        require "conexion/conexion.php";
        $busqueda = $con->query("select * from usuarios where id=".$_SESSION['id']."");
        $resultado = mysqli_fetch_array($busqueda);
        if(!$resultado){
            $resultado['usuario'] = $_SESSION['user'];
        }
        $sql = "select * from mensajes where active=1 order by id desc";
        $resultadom = $con->query($sql);
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../../../img/weather/clima.png">
    <link rel="stylesheet" href="css/cliente.css">
    <title>Cliente</title>

</head>

<body>
    <audio id="audio" controls loop autoplay style="display:none;">
        <source src="../../../song/wait.mp3" type="audio/mpeg">
    </audio>

    <main>
        <nav>
        <h2><img src="../../../img/weather/clima.png" alt="">APP CLIMA</h2>
            <ul>
                <li><a href="index.php">Inicio</a></li>
                <li><span>Opciones</span>
                    <ul>
                        <li><a href="perfil.php">mi perfil</a></li>
                        <li><a href="conexion/cerrarConexion.php">Cerrar session</a></li>

                    </ul>
                </li>
            </ul>
        </nav>

        <section>
                <div class="titulo">
                    <h2>Bienvenid@ <strong><?= $resultado['usuario']; ?></strong></h2>
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
                            <img src="../../../img/weather/grados.png" width="70" height="70" alt="">
                            <div id="temperatura">
                            </div>
                        </div>
                        <div id="estado">
                            <img src="../../../img/weather/mundo.png" width="70%" alt="">
                        </div>
                    </div>
                </div>
        </section>
        <section>
                <div class="datosecundarios">
                    <table class="ciudades">
                        <thead>
                            <tr>
                                <th>Ciudades</th>
                                <th>Temperatura</th>
                                <th>Mayor temperatura</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bogota</td>
                                <td id="temperatura1"></td>
                                <td id="ciudad1">Ciudad mas fria</td>
                            </tr>
                            <tr>
                                <td>Kahoku</td>
                                <td id="temperatura2"></td>
                                <td id="ciudad2"></td>
                            </tr>
                            <tr>
                                <td>Cali</td>
                                <td id="temperatura3"></td>
                                <td id="ciudad3"></td>
                            </tr>
                            <tr>
                                <td>Cartagena</td>
                                <td id="temperatura4"></td>
                                <td id="ciudad4">Ciudad mas caliente</td>
                            </tr>
                            <tr>
                                <td>Ciudad de mexico</td>
                                <td id="temperatura5"></td>
                                <td id="ciudad5"></td>
                            </tr>
                            <tr>
                                <td>Madrid</td>
                                <td id="temperatura6"></td>
                                <td id="ciudad6"></td>
                            </tr>
                            <tr>
                                <td>Nueva york</td>
                                <td id="temperatura7"></td>
                                <td id="ciudad7"></td>
                            </tr>
                            <tr>
                                <td>Barcelona</td>
                                <td id="temperatura8"></td>
                                <td id="ciudad8"></td>
                            </tr>

                        </tbody>
                    </table>
                    <input type="submit" class="updateCity" id="actualizar_ciudades" name="actualizar_ciudades" value="actualizar ciudades">
                </div>
        </section>
    </main>

    <aside>
        <div class="chat">
                <h3>Chat</h3>
                <div class="mensajes">
                    <?php 
                        while($message = mysqli_fetch_array($resultadom)){                    
                            $usuario_m = $message['id_usuario'];
                            $consulta = "select * from usuarios where id=" . $usuario_m . " and active=1";
                            $resultado_m = $con->query($consulta);
                            $resultado_ma = mysqli_fetch_array($resultado_m); ?>
                            <h2><?= $resultado_ma['usuario']; ?></h2>
                            <p><?= $message['mensaje']; ?></p>
                        <?php } ?>
                </div>
                <form action="conexion/acciones.php" method="post">
                    <input type="hidden" name="id" value="<?= $_SESSION['id']; ?>">
                    <label for="user">Mensaje</label>
                        <textarea id="message" name="message" required="required" placeholder="escribe algo..."></textarea><br>
                    <input type="submit" name="enviarm" value="Enviar mensaje">
                </form>
            </div>
    </aside>

<!-- ------------------ -->
    <section>
        <div class="examples">
            <img src="../../../img/weather/clima.png" width="100" alt="">
            <img src="../../../img/weather/mundo.png" width="100" alt="">
            <img src="../../../img/weather/nublado.png" width="100" alt="">
            <img src="../../../img/weather/lluvia.png" width="100" alt="">
            <img src="../../../img/weather/aguanieve.png" width="100" alt="">
            <img src="../../../img/weather/snow.png" width="100" alt="">
            <img src="../../../img/weather/nieve.png" width="100" alt="">
            <img src="../../../img/weather/trueno.png" width="100" alt="">
            <img src="../../../img/weather/noche.png" width="100" alt="">
            <img src="../../../img/weather/nube.png" width="100" alt="">
            <img src="../../../img/weather/nubes.png" width="100" alt="">
            <img src="../../../img/weather/hot.png" width="100" alt="">
            <img src="../../../img/weather/cold.png" width="100" alt="">
            <img src="../../../img/weather/centigrado.png" width="100" alt="">
            <img src="../../../img/weather/termometro.png" width="100" alt="">
            <img src="../../../img/weather/sol.png" width="100" alt="">
        </div>
    </section>
  

    <footer>
        <h2>Create by Jimmy Yahir Gutierrez <code>(🅷🅰🅺🆄)</code>&nbsp;&copy;&nbsp;<span id="currentYear"></span> All rights reserved.</h2>
	</footer>

	<script>
		const currentYear = new Date().getFullYear();
		document.getElementById('currentYear').textContent = currentYear;
	</script>


<script>

const audio = document.getElementById('audio');
	audio.volume = 0.02;


    
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

            // console.log(respuesta);
            
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
            
            let grade = (respuesta.main.temp-273.15);
            
            ciudad.innerHTML = respuesta.name;
            pais.innerHTML = respuesta.sys.country;
            humedad.innerHTML = respuesta.main.humidity;
            presion.innerHTML = respuesta.main.pressure;

            visibilidad.innerHTML = respuesta.visibility;
            speedwind.innerHTML = respuesta.wind.speed;
            windgrados.innerHTML = respuesta.wind.deg;
            grados.innerHTML = Math.round(grade);

            if(grade > 17){
                temperatura.innerHTML = "<img src='../../../img/weather/hot.png' width='50' alt=''>";
            }else{
                temperatura.innerHTML = "<img src='../../../img/weather/cold.png' width='50' alt=''>";
            };
            
        };       
    }
}

buscarImagen();

// --------------------------------------------

let ciudades = document.getElementById('actualizar_ciudades').addEventListener('click', buscarImagen);

function ciudadT() {
    let ciudad1 = "bogota",
    ciudad2 = "kahoku",
    ciudad3 = "cali",
    ciudad4 = "cartagena",
    ciudad5 = "ciudad de mexico",
    ciudad6 = "madrid",
    ciudad7 = "new york",
    ciudad8 = "barcelona",
    temperatura1 = document.getElementById("temperatura1"),
    temperatura2 = document.getElementById("temperatura2"),
    temperatura3 = document.getElementById("temperatura3"),
    temperatura4 = document.getElementById("temperatura4"),
    temperatura5 = document.getElementById("temperatura5"),
    temperatura6 = document.getElementById("temperatura6"),
    temperatura7 = document.getElementById("temperatura7"),
    temperatura8 = document.getElementById("temperatura8");

    const consultaCiudad1 = new XMLHttpRequest();

    consultaCiudad1.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${ciudad1}&appid=7f4f88dae157e8fadee2e27967107f2c`, true);

    consultaCiudad1.send();
    let grados1 = 0;        
    
    consultaCiudad1.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            
            let res = JSON.parse(consultaCiudad1.responseText);
            let grad = Math.round((res.main.temp-273.15));
            let city = res.name;
            console.log(city);
            console.log(grad);
            temperatura1.innerHTML=grad + " C";
            grados1 =grad;
                        
        };       
    }
// ------------------------------------------------------------

const consultaCiudad2 = new XMLHttpRequest();

consultaCiudad2.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${ciudad2}&appid=7f4f88dae157e8fadee2e27967107f2c`, true);

consultaCiudad2.send();
let grados2 = 0;        

consultaCiudad2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        
        let res = JSON.parse(consultaCiudad2.responseText);
        let grad = Math.round((res.main.temp-273.15));
        let city = res.name;
        console.log(city);
        console.log(grad);
        temperatura2.innerHTML=grad + " C";
        grados2 =grad;
                    
    };       
}

// ------------------------------------------------------------

const consultaCiudad3 = new XMLHttpRequest();

consultaCiudad3.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${ciudad3}&appid=7f4f88dae157e8fadee2e27967107f2c`, true);

consultaCiudad3.send();
let grados3 = 0;        

consultaCiudad3.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        
        let res = JSON.parse(consultaCiudad3.responseText);
        let grad = Math.round((res.main.temp-273.15));
        let city = res.name;
        console.log(city);
        console.log(grad);
        temperatura3.innerHTML=grad + " C";
        grados3 =grad;
                    
    };       
}
// ------------------------------------------------------------
const consultaCiudad4 = new XMLHttpRequest();

consultaCiudad4.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${ciudad4}&appid=7f4f88dae157e8fadee2e27967107f2c`, true);

consultaCiudad4.send();
let grados4 = 0;        

consultaCiudad4.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        
        let res = JSON.parse(consultaCiudad4.responseText);
        let grad = Math.round((res.main.temp-273.15));
        let city = res.name;
        console.log(city);
        console.log(grad);
        temperatura4.innerHTML=grad + " C";
        grados4 =grad;
                    
    };       
}

// ------------------------------------------------------------

const consultaCiudad5 = new XMLHttpRequest();

consultaCiudad5.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${ciudad5}&appid=7f4f88dae157e8fadee2e27967107f2c`, true);

consultaCiudad5.send();
let grados5 = 0;        

consultaCiudad5.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        
        let res = JSON.parse(consultaCiudad5.responseText);
        let grad = Math.round((res.main.temp-273.15));
        let city = res.name;
        console.log(city);
        console.log(grad);
        temperatura5.innerHTML=grad + " C";
        grados5 =grad;
                    
    };       
}

// ------------------------------------------------------------

const consultaCiudad6 = new XMLHttpRequest();

consultaCiudad6.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${ciudad6}&appid=7f4f88dae157e8fadee2e27967107f2c`, true);

consultaCiudad6.send();
let grados6 = 0;        

consultaCiudad6.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        
        let res = JSON.parse(consultaCiudad6.responseText);
        let grad = Math.round((res.main.temp-273.15));
        let city = res.name;
        console.log(city);
        console.log(grad);
        temperatura6.innerHTML=grad + " C";
        grados6 =grad;
                    
    };       
}

// ------------------------------------------------------------

const consultaCiudad7 = new XMLHttpRequest();

consultaCiudad7.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${ciudad7}&appid=7f4f88dae157e8fadee2e27967107f2c`, true);

consultaCiudad7.send();
let grados7 = 0;        

consultaCiudad7.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        
        let res = JSON.parse(consultaCiudad7.responseText);
        let grad = Math.round((res.main.temp-273.15));
        let city = res.name;
        console.log(city);
        console.log(grad);
        temperatura7.innerHTML=grad + " C";
        grados7 =grad;
                    
    };       
}

// ------------------------------------------------------------

const consultaCiudad8 = new XMLHttpRequest();

consultaCiudad8.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${ciudad8}&appid=7f4f88dae157e8fadee2e27967107f2c`, true);

consultaCiudad8.send();
let grados8 = 0;        

consultaCiudad8.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        
        let res = JSON.parse(consultaCiudad8.responseText);
        let grad = Math.round((res.main.temp-273.15));
        let city = res.name;
        console.log(city);
        console.log(grad);
        temperatura8.innerHTML=grad + " C";
        grados8 =grad;
                    
    };       
}
    console.log(temperatura1);
    console.log("temperatura mas alta es de: " + TAlta);

}
ciudadT();

</script>
</body>
</html>
<?php } ?>