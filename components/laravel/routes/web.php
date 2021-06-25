<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\propietarioController;
use App\Http\Controllers\vehiculoController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/', function () {
//     return view('vehiculo.index');
// });
//accedemos a la ruta para editar con el metodo create que se encentra en el controlador
// Route::get('propietario/crear',  [propietarioController::class, 'create']);


//para acceder a todos los metodos del controlador

Route::resource('propietario', propietarioController::class);

Route::resource('vehiculo', vehiculoController::class);



// esto seria para acceder a la carpeta propietario
// Route::get('/propietario', function () {
//     return view('propietario.index');
// });

// Route::get(uri: '/propietario', [controladorCRUD::class, 'index']);