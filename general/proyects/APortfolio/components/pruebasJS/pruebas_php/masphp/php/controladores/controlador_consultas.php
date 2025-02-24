<?php 

class Controlador_consultas{

    
	public function __construct(){
		if(!empty($_POST)){

			if(isset($_POST['agregar'])){

			$datos['usuario'] = $_POST['usuario'];
			$datos['password'] = $_POST['password'];

			crear($datos);
			}

			if(isset($_post['actualizar'])){
				echo "actualizar";
			}

			if(isset($_post['eliminar'])){
				echo "eliminar";

			}
		}
	}


	public static function consulta(){
		$con = new Modelo_conexion();
		$resultado = $con->consultas("select * from usuarios");
		$con->cerrarConexion();
		return $resultado;
	}
	
	public function crear($datos){
			$con = new Modelo_conexion();
			$resultado = $con->actualizacion("insert into usuarios (usuario, password) values(". $datos->usuario ."," . $datos->password .")");
	}	
	
	public function actualizar($datos){
		$con = new Modelo_conexion();
		$resultado = $con->actualizacion("update usuarios set usuario=" . $datos->usuario . ",password=" . $datos->password . "where id=" . $datos->id);
	}
	
	public function eliminar($id){
		$con = new Modelo_conexion();
		$resultado = $con->actualizacion("update usuarios set active=0 where id=" . $datos->id);
	}

}

$crear = new Controlador_consultas();

?>