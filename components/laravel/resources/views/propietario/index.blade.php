@extends('layout.principal')

@section('contenido')

<main style="padding: 4vw;text-align: center;">
	<h1 class="display-2">Parqueadero 4 Ruedas</h1>
	<p><i>pdt: </i><q>este proyecto aun no se a finalizado</q></p>


	<table class="table table-striped table-hover" width="50%">
  <h2 class="text-light bg-primary p-1">propietarios</h2>

	  <thead class="table-dark">
	    	<th>Id</th>
	    	<th>Nombre</th>
	    	<th>Cedula</th>
	    	<th>Telefono</th>
	    	<th>Acciones</th>
	  </thead>
	  <tbody>
	  	
  		@foreach($propietario as $propietario)
  			<tr>
  				<td>{{ $propietario->id }}</td>
  				<td>{{ $propietario->nombre }}</td>
  				<td>{{ $propietario->cedula }}</td>
  				<td>{{ $propietario->telefono }}</td>
  				<td> 

  					<!-- <a style="display: inline-block;" href="{{ url('vehiculo/'.$propietario->id_propietario.'/index') }}" class="btn text-primary btn-outline-info">Vehiculos</a> -->
  					
  					<a style="display: inline-block;" href="{{ url('/propietario/'.$propietario->id.'/edit') }}" class="btn btn-primary">Editar</a>
  					
  					<div style="display: inline-block;">
  						
  					<form action="{{ url('/propietario/'.$propietario->id) }}" method="post">
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

