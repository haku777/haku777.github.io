<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Document</title>
	<link rel="stylesheet" href="{{ asset('css/app.css') }}">
<!-- 	<style>
		aside{animation: descuento 4s ease-out 2s .7 forwards; background:orangered;}
		@keyframes descuento {
			25%{margin-bottom: -16vh;}
			50%{margin-bottom: 0vh;}
			75%{margin-bottom: -16vh;}
		}
	</style> -->
</head>
<body>


<header>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container-fluid">
			
			<a class="navbar-brand" href="{{ route('propietario.index') }}">PARQUEADEROS 4 RUEDAS</a>


					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
					</button>

					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
					<a class="nav-link active bg-success" aria-current="page" href="propietario/create">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
						  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
						  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
						</svg>
					Agregar Propietario</a>
					</li>
					<li class="nav-item">
					<a class="nav-link" href="#">NUEVO!</a>
					</li>
					<li class="nav-item">
					<a class="nav-link" href="{{ url('vehiculo') }}">vehiculos</a>
					</li>
					<li class="nav-item">
					<a class="nav-link" href="{{ url('/') }}">inicio</a>
					</li>

					<li class="nav-item">
					<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">ayuda</a>
					</li>
					</ul>

					<form class="d-flex">
						<select name="" id=""  class="form-select rounded text-light form-select mb-1 my-1 mx-2 p-1 bg-primary border-0">
							<option value="marca" selected>Marca</option>
							<option value="placa">Placa</option>
							<option value="cedula">Cedula</option>
							<option value="nombre">Nombre</option>
						</select>
	
						<input class="form-control me-2" type="search" name="search" id="search" placeholder="buscar" aria-label="Search">
						<!-- <input class="btn btn-primary mx-2" type="submit" name="search" id="search"> -->
					</form>


			</div>
		</nav>
</header>




@yield('contenido')


<!-- <aside class="container">
	<div class="container-fluid p-5 bg-warning">
		<h2 style="text-align: center;">aprovecha los <b style="text-transform: uppercase;">descuetos</b> para clientes frecuentes</h2>
	</div>
</aside> -->

<footer>
	<div class="card text-center text-info bg-dark">
		
		<div class="card-header">
			<h6>proyecto parqueadero</h6>
		</div>
		
		<div class="card-body">
			<h5 class="card-title">Desarrollado por Jimmy Yahir Gutierrez</h5>
			<p class="card-text">Contacto:  jimmy1076667239@gmail.com</p>
			<a href="#" class="btn btn-primary">GRACIAS</a>
		</div>

		<div class="card-footer text-muted">
			14 de mayo 2021
		</div>
	
	</div>
</footer>
	<script>
		(() =>{ 

			let arreglo =[
			    [​'​2018-12-01​'​,​'​AM​'​,​'​ID123​',​ ​5000​],
			    [​'​2018-12-01​'​,​'​AM​'​,​'​ID545​',​ ​7000​],
			    [​'​2018-12-01​'​,​'​PM​'​,​'​ID545​',​ ​3000​],
			    [​'​2018-12-02​'​,​'​AM​'​,​'​ID545​',​ ​7000​]
			]

			// Generar el objeto:

		{​ '​2018-12-01​'​: {​ '​AM​'​: ​12000​, ​ '​PM​'​: ​3000 }, ​ '​2018-12-02​'​: {'​AM​'​: ​7000​, } }


		// Donde se debe consolidar (acumular el valor de la franja) en caso de que se repita como:

		    '​2018-12-01​' “AM”



		})();
//     En una parte de la UI, queremos mostrarle a nuestro cliente un DEMO de una nueva funcionalidad, 

//     para ello se debe construir una función JS que recibe un arreglo con un conjunto de arreglos, 

//     y debe agrupar en el primer nivel por la fecha y en el segundo nivel con la franja horaria.


// P.E Dado el arreglo:

// // nota crearlo mediante objetos

            
		
	</script>
	<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>