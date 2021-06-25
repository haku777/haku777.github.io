Larabel  (MVC)


1. Blade(sistema de plantillas)( o trozos de codigo)
2. Eloquent(querys con objetos)(relaciones en laravel)(ORM)
3. Rountine(get post)(rutas)
4. Middlewares(antes o despues de una peticion)(como para validar usuarios una sola vez)
5. Comunidad (paquetes ya hechos)




heroku
    hakured775.




Laravel

    es necesario instalar el compouser

    comandos 

    cmd

        composer
    
    dirigirse a la carpeta donde esta instalado el gestor del apache

    composer global require laravel/installer

    laravel new NameProject

    cd NameProject

    //con el siguiente comando se mostrara la ruta para correr laraver
    php artisan serve


    // nos muestra los comandos que podemos ultilizar
    php artisan list


    //migra los datos a utilizar para crear la base de datos
    php artisan migrate

    // muestra la ayuda para los datos que se pueden usar etc
    php artisan migrate --help


    //permite crear una tabla internamente para despues ejecutarla en mysql, sql server, etc
    php artisan make:migration create_nameTable_table --table=nameTable

    	$table->softDeletes();



    // en el archivo .env se encuentra la configuracion para acceso a la base de datos
    //por defecto se configura el nombre de de la base de datos con el nombre del proyecto
    //si eso es correcto solamente crear la base de datos con el mismo nombre
    proyecto \.env

    //para las llaves primareas se implementa de la siguiente forma

    Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('department_id');
            $table->rememberToken();
            $table->timestamps();

            $table->foreign('department_id') ->references('id') ->on('departments') ->onDelete('cascade');


    //coando para crear tanto la migracion como el modelo y el controlador adema la vista cre etc
    php artisan make:model modelPrueba -mcr

    mcr = modelo, controlador, recursos


    //para limpiar la consola usamos cls

    cls = clear

    //para acceder a las rutas activas
    php artisan route:list

    //para automatizar las rutas en el web.php sin tener que crearlas manualmente
    //de esta forma accedemos a todos y cada uno de los metodos del controlador
    Route::resource('propietario', [propietarioController::class])


    //para usar bootstrap es necesario instalar el npm i
    //de node js
    npm i

    //para correr las librerias ejecutamos el siguiente comando
    npm run watch

    //para usar bootstrap
    php artisan iu bootstrap























//////////////////////////////////////////////

    cmd

    para cabiar de directorio disco

    solo ponemos la letra y dos puntos sin el cd

    D:













    https://youtu.be/IOiq9wGTA_4?t=536  




////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
bien estructuradas:
	orden correcto
	sin conflictos

URN
	Uniform Resource name
	urn:uuid:12jkhfosdyf23jr923f329uhi8968

URL
	Uniform Resource location
	squema usuario contrasena fitrion puertos parametros y fragmentos
	http://example.com/resource?as=asda

URI
	Uniform Resource identifier
	tipos:
		url
		urn


Endpoints
	Creacion de una ruta para una aplicacion web


////////////////////////////////////////////////

soap

diseno de aplicaciones distribuidas


xml

-----------------------


rest

escalabilidad y sistemas distribuidos 

multilenguaje 


json






/////////////////////////


" --locale=ja_JP

" --locale=es_MX

"D:\lol\Riot Games\League of Legends\LeagueClient.exe"

"D:\lol\Riot Games\League of Legends\LeagueClient.exe" --locale="ja_JP"




es_ES Español (España)
es_MX Español (Latino)









::HEROKU::CREDENTIALS::



 heroku pg:credentials:url
Connection information for default credential.
Connection info string:
   "dbname=d6fbi8mb9mnp46
   host=ec2-23-22-191-232.compute-1.amazonaws.com 
   port=5432 
   user=waacyydkexzreo 
   password=72317bcaba87565cbade6ebd5d9fafd58d86ff13b9109d4236d608ec96fc8d43 sslmode=require"

Connection URL:
   postgres://waacyydkexzreo:72317bcaba87565cbade6ebd5d9fafd58d86ff13b9109d4236d608ec96fc8d43@ec2-23-22-191-232.compute-1.amazonaws.com:5432/d6fbi8mb9mnp46



https://www.youtube.com/watch?v=GE2Kmy8WL3g







