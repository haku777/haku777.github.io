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
			<h6>Gracias vuelva pronto</h6>
		</div>
		
		<div class="card-body">
			<h5 class="card-title">Desarrollador por Jimmy Yahir Gutierrez</h5>
			<p class="card-text">Contacto:  jimmy1076667239@gmail.com</p>
			<a href="#" class="btn btn-primary">GRACIAS</a>
		</div>

		<div class="card-footer text-muted">
			14 de mayo 2021
		</div>
	
	</div>
</footer>


	<script src="{{ asset('js/app.js') }}" type="javascript"></script>
</body>
</html>