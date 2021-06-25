<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\softDeletes;

class vehiculo extends Model
{
    use HasFactory;
    use softDeletes;

    protected $guarded = ['deleted_at'];

    public $table = "vehiculo";

    protected $fillable = [
    	'placa',               //valor de la matricula del vehiculo
    	'marca',               //mazda,subaru,nissan,pollito
    	'tipo',               //sedan,todoterreno,deportivo,cupe
        'id_propietario'
    ];



    public function propietario(){

        //relacio de uno a muchos (muchos vehiculos un propietario)
    	return $this->belongsTo(related: propietario::class);
    }
}
