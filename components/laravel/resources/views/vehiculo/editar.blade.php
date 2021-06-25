@extends('layout.secundario')

@section('contenido')

<link rel="stylesheet" href="{{ asset('css/app.css') }}">

<div class="container">
	
	<div class="row g-3" style="padding: 12vw;">

		<h2 class="display-3 p-4">Editar Vehiculo</h2>

		<div class="container" style="display: flex;justify-content: center;">

				<form action="{{ url('/vehiculo/'.$vehiculo->id) }}" method="post" enctype="multipart/form-data">
					
				@csrf
				{{method_field('PATCH') }}
					<label class="col-sm-1 col-form-label" for="id"><input class="mb-3" type="text" value="{{ $vehiculo->id }}" id="id" name="id" hidden></label><br>

					<label class="col-sm-1 col-form-label" for="placa">Placa <input class="mb-3" type="text" value="{{ $vehiculo->placa }}" id="placa" name="placa" required></label><br>

					<label class="col-sm-1 col-form-label" for="marca">marca <input class="mb-3" type="text" value="{{ $vehiculo->marca }}" id="marca" name="marca" required></label><br>
					
					<label class="col-sm-1 col-form-label" for="tipo">tipo <input class="mb-3" type="text" value="{{ $vehiculo->tipo }}" id="tipo" name="tipo" required></label><br>

					<label class="col-sm-1 col-form-label" for="id_propietario"><input class="mb-3" type="text" value="{{ $vehiculo->id_propietario }}" id="id_propietario" name="id_propietario" hidden></label><br>

					<input  class="col-sm-10 btn btn-info" type="submit" value="Editar" id="editar">

				</form>
		</div>
	</div>
</div>

@endsection