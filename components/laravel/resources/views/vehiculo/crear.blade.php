@extends('layout.secundario')

@section('contenido')

<link rel="stylesheet" href="{{ asset('css/app.css') }}">

<div class="container">
	
	<div class="row g-3" style="padding: 12vw;">

		<h2 class="display-4 p-2">Agregar nuevo Vehiculo</h2>

		<div class="container" style="display: flex;justify-content: center;">
		
			<form action="{{ url('vehiculo') }}" method="post" enctype="multipart/form-data">
				
			@csrf

				<label  class="col-sm-1 col-form-label" for="placa">placa <input class="mb-3" type="text" id="placa" name="placa" required></label><br>

				<label  class="col-sm-1 col-form-label" for="marca">marca <input class="mb-3" type="text" id="marca" name="marca" required></label><br>
				
				<label  class="col-sm-1 col-form-label" for="tipo">tipo <input class="mb-3" type="text" id="tipo" name="tipo" required></label><br>

				<label  class="col-sm-1 col-form-label" for="id_propietario"><input class="mb-3" type="text" id="id_propietario" name="id_propietario" hidden value="2" required></label><br>

				<input class="col-sm-10 btn btn-success" type="submit" value="Agregar" id="agregar">

			</form>

		</div>
 	</div>
</div>


@endsection