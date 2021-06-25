<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\softDeletes;

class propietario extends Model
{
    use HasFactory;
    use softDeletes;    

    protected $guarded = ['deleted_at'];

    public $table = "propietario";

    protected $fillable = [
    	'nombre',
    	'cedula',
    	'telefono'
    ];


    // se colocan los campos que no queremos ver en la base de datos
    // protected $hidden = [];

    public function vehiculo(){

        //relacion de uno a uno
    	// return $this->hasOne(related: '');
        //relacion de uno a muchos  (un propietario muchos vehiculos)
    	return $this->hasMany(related: vehiculo::class);
    }
}
