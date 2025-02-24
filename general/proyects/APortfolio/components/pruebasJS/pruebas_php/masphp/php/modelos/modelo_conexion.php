<?php 


class Modelo_conexion{

	private $host;
	private $user;
	private $password;
	private $database;
    private $con;

	public function __construct(){
		
        $this->host = "localhost";
        $this->user = "root";
        $this->password = "";
        $this->database = "pruebas";
		
		$this->con = new Mysqli($this->host, $this->user, $this->password, $this->database);

	}

    public function consultas($sql){
        $resultado = $this->con->query($sql);
        return $resultado;
    }


    public function actualizacion($sql){
        $this->con->query($sql);
    }


    public function cerrarConexion(){
        $this->con->close();
    }
		

}


?>