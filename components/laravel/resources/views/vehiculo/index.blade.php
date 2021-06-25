@extends('layout.principal')

@section('contenido')

<main style="padding: 4vw;text-align: center;">
	<h1 class="display-2">Parqueadero 4 Ruedas</h1>
	<h2 class="text-light bg-primary col-2 p-1" style="margin: auto;margin-bottom: 10px;">Vehiculos</h2>

	<a class="nav-link active bg-primary text-light" aria-current="page" href="vehiculo/create">
	
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
	  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
	</svg>
	
	Nuevo Vehiculo</a>

	<table class="table table-striped table-hover">
	  <thead class="table-dark">
	    	<th>Id</th>
	    	<th>Placa</th>
	    	<th>Marca</th>
	    	<th>Tipo</th>
	    	<th>id_propietario</th>
	    	<th>Acciones</th>
	  </thead>
	  <tbody>
	  	
 		@foreach($mostrar as $vehiculo)
 			<tr>
 				<td>{{ $vehiculo->id }}</td>
 				<td>{{ $vehiculo->placa }}</td>
 				<td style="text-transform:capitalize;">{{ strtolower($vehiculo->marca) }}</td> <!-- ucfirst() -->
 				<td>{{ $vehiculo->tipo }}</td>
 				<td>{{ $vehiculo->id_propietario }}</td>
 				<td>

  					
  					<a style="display: inline-block;" href="{{ url('/vehiculo/'.$vehiculo->id.'/edit') }}" class="btn btn-primary">Editar</a>

  					
  					<div style="display: inline-block;">
  						
  					<form action="{{ url('/vehiculo/'.$vehiculo->id) }}" method="post">
  						@csrf
  						{{ method_field('DELETE') }}

  						<input type="submit" onclick="return confirm('Quieres borrar?')" 
  						value="Borrar" id="borrar" class="btn btn-danger">

  					</form>
  					</div>

 				</td>
 			</tr>
 		@endforeach
  		
	 </tbody>
	</table>
</main>

@endsection



