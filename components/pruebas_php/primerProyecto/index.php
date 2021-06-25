<!DOCTYPE html>
<html lang="es">
<head>
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta charset="UTF-8">
	<title>mundo vender</title>
	<!-- <link rel="stylesheet" href="css/bootstrap.min.css" /> -->
	<link rel="stylesheet" href="css/style.css" />
	<link rel="stylesheet" href="css/reloj.css" />
	<script src="js/bootstrap.min.js"></script>
	<script src="js/jquery-3.3.1.min.js"></script>
	<script>
		$(document).ready(function(){
			$(".sesion").hide();
			$(".val").hide();
			document.getElementById("sesion").addEventListener("click", sesion, false);
			var a=true;
			function sesion(){
				if (a==true) {
					$(".sesion").show();
					a=false;
				}else if(a==false){
					$(".sesion").hide();
					a = true;
				}
			}
			function change(){
				var e= $("#ima").css("src");
				console.log(a);
			}
			// var f = setInterval(change, 1000);
		});
	</script>
</head>

<body>
	<header>
		<div class="container">
			<div class="row">
				<nav>
					<div class="title">
						<h1>Hakustart</h1>
					</div>
					<ul>
						<li><a id="sesion">Iniciar sesión</a></li>
						<div class="sesion">
							<form action="valid_log.php" method="post">
								<label for="user">Usuario</label>
								<input type="text" id="user" name="user" required="required" /><br>
								<!-- <h6 class="val">digita el usuario</h6> -->
								<label for="pass">Contraseña</label>
								<input type="password" id="pass" name="pass" required="required" /><br>
								<!-- <h6 class="val">digita la contraseña</h6> -->
								<input type="submit" id="sesion" name="sesion" value="Iniciar sesión" onclick="return val()">
								<a href="">registrar</a><br>
								<a href="">¿olvide la contraseña?</a>
							</form>
						</div>
						<li><a href="admin.php" id="inicial" name="inicial">Sesión</a></li>
						<li><a href="http://localhost/phpmyadmin/sql.php?server=1&db=javascript&table=usuarios&pos=0" target="_blank">php</a></li>
						<li><a href="">ayuda</a></li>
					</ul>
				</nav>
			</div>
			<div class="reloj">
				<div class="fecha">
				<p>Colombia</p></br>
					<p id="dsemana"></p>
					<p id="dia"></p>
					<p>de</p>
					<p id="mes"></p>
					<p>del</p>
					<p id="year"></p>
				</div>
				<div class="hora">
					<p id="horas"></p>
					<p>:</p>
					<p id="minutos"></p>
					<p>:</p>
					<div class="segundos">
						<p id="ampm"></p>
						<p id="segundos"></p>
					</div>
				</div>
			</div>
			<div class="reloj">
				<div class="fecha">
				<p>日本語</p></br>
					<p id="dsemanaj"></p>
					<p id="diaj"></p>
					<p>de</p>
					<p id="mesj"></p>
					<p>del</p>
					<p id="yearj"></p>
				</div>
				<div class="hora">
					<p id="horasj"></p>
					<p>:</p>
					<p id="minutosj"></p>
					<p>:</p>
					<div class="segundos">
						<p id="ampmj"></p>
						<p id="segundosj"></p>
					</div>
				</div>
			</div>
		</div>
	</header>

	<div class="wrapper">
		<div class="main">
			<section>

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quam consequatur soluta necessitatibus incidunt deserunt nam, sint totam ea fugit explicabo temporibus perspiciatis neque ducimus quos deleniti est magni dignissimos similique iusto eligendi placeat. Est, consequatur! Molestiae quod eos accusamus iusto accusantium voluptatum dolor, dolorem maiores id dicta cupiditate optio natus excepturi, maxime deleniti impedit eligendi eum exercitationem corporis. Quibusdam aspernatur a autem vitae facere accusantium eligendi praesentium dignissimos recusandae quidem sed nemo repudiandae corporis expedita ipsa eum quis quia sit, illo molestias, dicta ullam ipsum? Pariatur sunt voluptatibus ipsam eaque nulla dolorem.</p>				
			</section>
			<section class="galery">
				<button><</button>
				<img src="img/a.png" alt="" width="100%" id="ima" name="ima">
				<button>></button>
			</section>

			<br><hr><br>

		</div>			
		<aside>
			<section class="aside">
				<h2>Informacion secundaria</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eius magnam placeat, at voluptatem ad. Fugit voluptatibus praesentium rem, debitis esse, asperiores laudantium doloremque voluptas vero. Ipsa placeat excepturi consequuntur modi dolorum accusamus veritatis officia velit, quos veniam pariatur minima sequi repellat enim voluptatem alias impedit. Quibusdam commodi eaque suscipit sint inventore odio, deserunt dolorum nobis blanditiis exercitationem. Commodi qui, iure amet odio maxime, mollitia eligendi. Alias mollitia optio quos, vel molestias nisi ipsa quibusdam reiciendis numquam placeat itaque, dolore fuga. Adipisci ullam nostrum possimus ex eos labore nemo eaque nobis harum accusantium? Maxime ipsa ipsam enim blanditiis tempore laborum distinctio non nesciunt esse dolores doloribus libero aut eligendi veniam illum, saepe similique et itaque, fuga eos at. Dolores numquam minima cum, assumenda reprehenderit, consectetur obcaecati architecto maiores voluptate expedita odit magni, vel. Autem, earum, velit excepturi est rerum sunt voluptatem suscipit officia non debitis repudiandae, laborum eaque consequatur, cum adipisci nesciunt maxime fuga asperiores corporis hic. Maxime sapiente, architecto accusamus, ratione quae voluptatum vel numquam optio magnam, susc  ipit, ad. Labore quasi placeat reprehenderit fuga. Fugiat eos optio assumenda incidunt est cumque, architecto laboriosam nobis impedit accusamus, natus sunt aspernatur harum nulla rerum tempore aliquid excepturi! Ratione dolore voluptate, eligendi aut. Sint eum ad fugiat.</p>
			</section>
		</aside>
	</div>

	<footer>
		<div class="navbar navbar-fixed-bottom">
			Made by <strong> HAKU </strong>&copy; 2018
		</div>
	</footer>





	<script>
		function val(){
			var user=document.getElementById("user").value;
			if (user==""||user==''||user==null) {
				document.getElementById("user").focus();
				$(".val").show();
				return false;
			}else{
				return true;
			}
		}
	</script>
	<script src="js/reloj.js"></script>
</body>
</html>