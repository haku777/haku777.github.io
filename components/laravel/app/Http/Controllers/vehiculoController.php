<?php

namespace App\Http\Controllers;

use App\Models\vehiculo;
use Illuminate\Http\Request;

class vehiculoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function index(Request $request)
    {
        //consultamos los datos
        if($request){
            $query = trim($request->get(key: 'search'));

            $vehiculos = vehiculo::where('marca','LIKE','%'.$query.'%')
            ->orderBy('marca','asc')
            ->get();

            return view('vehiculo.index', ['mostrar' => $vehiculos, 'search' => $query]);
        }



    // public function index()
    // {
    //     //
    //     $datos['mostrar']=vehiculo::paginate(10);
    //     $datos=vehiculo::all();
    //     return view('vehiculo.index')->with('mostrar', $datos);

        // $datosPropietario = request()->all();
        // propietario::insert($datosPropietario);
        // return response()->json($datosPropietario);
        

        // $propietario=propietario::findOrFail($id);
        // $dato = request()->all();
        // return response()->json($dato);


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('vehiculo.crear');

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'placa'=> 'required',
            'marca'=> 'required',
            'tipo'=> 'required'
            //el id_propietario viene en el request
        ]);

        $vehiculo = new vehiculo;

        $vehiculo->placa = $request->placa;
        $vehiculo->marca = $request->marca;
        $vehiculo->tipo = $request->tipo;
        $vehiculo->id_propietario = $request->id_propietario;

        $vehiculo->save();
        $vehiculoD=vehiculo::all();
        return view('vehiculo.index')->with('vehiculosData', $vehiculoD);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $vehiculo=vehiculo::findOrFail($id);
        return view('vehiculo.editar', compact('vehiculo'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        //datos anteriores o del id
        // $datos = vehiculo::all();
        //datos obtenidos
        // $datos = request()->all();
        //le quitamos el token y dejamos los demas datos
        $actualizar = request()->except(['_token','_method']);
        // return response()->json($datos);
        vehiculo::where('id','=',$id)->update($actualizar);
        $mostrar=vehiculo::all();
        return view('vehiculo.index')->with('mostrar', $mostrar);



    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
