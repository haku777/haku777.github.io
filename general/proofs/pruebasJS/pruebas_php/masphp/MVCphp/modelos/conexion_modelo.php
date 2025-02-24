<?php


class conexion{

    private $host;
    private $user;
    private $pass;
    private $database;
    private $con;

        public function __construct(){

            $this->host = 'localhost';
            $this->user = 'root';
            $this->pass = '';
            $this->database = 'parqueadero';

            $this->con = new Mysqli($this->host,$this->user, $this->pass, $this->database);

        }

        public function buscar($sql){
            $resultado = $this->con->query($sql);
            return $resultado;
        }

        public function editar($sql){
            $ejecucion = $this->con->query($sql);
        }


}

?>