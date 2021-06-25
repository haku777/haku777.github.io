<?php

require 'modelos/conexion_modelo.php';

class propietario{
    
    public static function mostrar(){
        $instancia_modelo_conexion = new conexion();
        $sql = "select * from propietarios";
        $datos = $instancia_modelo_conexion->buscar($sql);
        return $datos;
    }

    public function agregar($datos){
        $instancia_modelo_conexion = new conexion();
        $sql = "insert into propietario (cedula,nombre) values(". $datos->cedula.",".$datos->nombre.")";
        $agregar = $instancia_modelo_conexion->editar($sql);
    }

    public function editar($datos){
        $instancia_modelo_conexion = new conexion();
        $sql = "update propietarios set cedula=`{$datos->cedula}`,nombre=`{$datos->nombre}` where id=`{$datos->id}`";
        $editar = $instancia_modelo_conexion->editar($sql);
    }

    public function eliminar($datos){
        $instancia_modelo_conexion = new conexion();
        $sql = "update propietarios set active=0 where id=`{$datos->id}`";
        $editar = $instancia_modelo_conexion->editar($sql);
    }


}

?>