@extends('layout.secundario')

@section('contenido')

<link rel="stylesheet" href="{{ asset('css/app.css') }}">

<div class="container">
	
	<div class="row g-3" style="padding: 12vw;">

		<h2 class="display-3 p-4">Editar propietario</h2>

		<div class="container" style="display: flex;justify-content: center;">

				<form action="{{ url('/propietario/'.$propietario->id) }}" method="post" enctype="multipart/form-data">
					
				@csrf
				{{method_field('PATCH') }}

					<label class="col-sm-1 col-form-label" for="nombre">Nombre <input class="mb-3" type="text" value="{{ $propietario->nombre }}" id="nombre" name="nombre" required></label><br>

					<label class="col-sm-1 col-form-label" for="cedula">Cedula <input class="mb-3" type="text" value="{{ $propietario->cedula }}" id="cedula" name="cedula" required></label><br>
					
					<label class="col-sm-1 col-form-label" for="telefono">Telefono <input class="mb-3" type="text" value="{{ $propietario->telefono }}" id="telefono" name="telefono" required></label><br>

					<input  class="col-sm-10 btn btn-info" type="submit" value="Editar" id="editar">

				</form>

		</div>
	</div>
</div>

@endsection
