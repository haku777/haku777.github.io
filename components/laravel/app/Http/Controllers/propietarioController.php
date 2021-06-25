<?php

namespace App\Http\Controllers;

use App\Models\propietario;
use Illuminate\Http\Request;

class propietarioController extends Controller
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

            $propietarios = propietario::where('nombre','LIKE','%'.$query.'%')
            ->orderBy('id','asc')
            ->get();

            return view('propietario.index', ['propietario' => $propietarios, 'search' => $query]);
        }

        // $datos['mostrar']=propietario::paginate(10);
        // $datos = propietario::all();
        // return view('propietario.index')->with('mostrar',$datos);


        // $ver = propietario::all();  //select * from propietarios
        // $ver = propietario::all()->get(); //el get es para que mueestre mas de uno
        // $ver = propietario::select('id','nombre'); //select id,nombre from propietarios
        // $ver = propietario::all()->where('id','1'); //select * from propietario where id=1
        // $ver = propietario::all()->where('id','1')->first(); //solo me muestra el primer resultado
        // return view('propietario.index')->with('mostrar', $ver);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        // return view(view: 'propietario.crear');
        return view('propietario.crear');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //aqui se resiven los datos por el metodo post
        // $datosPropietario = request()->all();

        //de esta forma insertamos los datos sin el token y sin validarlos
        // $datosPropietario = request()->except('_token');
        // propietario::insert($datosPropietario);
        // return response()->json($datosPropietario);


        $request->validate([
            'nombre' => 'required|max:255',
            'cedula' => 'required|numeric',
            'telefono' => 'required'
        ]);


        $propietario = new propietario;

        $propietario->nombre = $request->nombre;
        $propietario->cedula = $request->cedula;
        $propietario->telefono = $request->telefono;

        $propietario->save();
        $mostrar = propietario::all();
        return view('propietario.index')->with('mostrar',$mostrar);

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
        $propietario=propietario::findOrFail($id);
        // return response()->json($propietarioEdit);
        return view('propietario.editar', compact('propietario'));

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
        $actualizar = request()->except(['_token','_method']);
        propietario::where('id','=',$id)->update($actualizar);

        $mostrar=propietario::all();
        return view('propietario.index')->with('mostrar', $mostrar);
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
        propietario::destroy($id);
        return redirect('propietario');
    }

}
