<?php
    //php my admin
    // $SERVER = 'localhost';
    // $DATABASE = 'u380261347_contact';
    // $USER = 'u380261347_contact';
    // $PASSWORD = 'O!ay@6M;N5';

    //local
    // $SERVER = 'localhost';
    // $DATABASE = 'contact';
    // $USER = 'root';
    // $PASSWORD = '';
    
    //sql
    // $con = new mysqli($SERVER, $USER, $PASSWORD, $DATABASE);
    // date_default_timezone_set('America/Bogota'); 
    // $date = date('Y-m-d h:i:s', time());
    // if(!empty($_POST)){
    //     if(!isset($_POST['Enviar'])){
    //         $name = $_POST['name'];
    //         $email = $_POST['email'];
    //         $message = $_POST['message'];
    //         echo $name . "<br>" . $email . "<br>" . $message . "<br>"  . date("D-d-M-m-Y T H:i:s a \\G\\M\\T") . "<br>";
    //         $query = @"Insert Into contact(name,email,date,message) values('$name', '$email','$date', '$message')";
    //         $result = $con->query($query);
    //         header("location: ../../index.html");
    //     }
    // }else{
    //     print("failure");
    // }


    // Datos de Neon (Cópialos de tu dashboard)
    $host = getenv('PGHOST');
    $db   = getenv('PGDATABASE');
    $user = getenv('PGUSER');
    $pass = getenv('PGPASSWORD');
    $port = '5432';

    $dsn = "pgsql:host=$host;port=$port;dbname=$db;sslmode=require";

    try {
        $pdo = new PDO($dsn, $user, $pass, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        ]);

        echo "¡Conexión exitosa a Neon!";
        date_default_timezone_set('America/Bogota');
        if (!empty($_POST)) {
            // Validación básica: que los campos existan
            if (isset($_POST['name'], $_POST['email'], $_POST['message'])) {
                
                $name    = $_POST['name'];
                $email   = $_POST['email'];
                $message = $_POST['message'];

                // 4. Preparar la consulta (Evita Inyecciones SQL)
                $query = "INSERT INTO contact (name, email, message) VALUES (:name, :email, :message)";
                $stmt  = $pdo->prepare($query);

                // 5. Ejecutar pasando los valores
                $result = $stmt->execute([
                    ':name'    => $name,
                    ':email'   => $email,
                    ':message' => $message
                ]);

                if ($result) {
                    header("Location: ../../index.html");
                    exit();
                } else {
                    echo "Error al insertar datos.";
                }
            }
        } else {
            echo "No se recibieron datos (failure)";
        }

    } catch (PDOException $e) {
        // Si hay un error de conexión o de base de datos, lo verás aquí
        die("Error en la base de datos: " . $e->getMessage());
    }





    //----------------------------------------------------------

    //supabase
        // $SERVER = 'db.icsldpuppeglkuedwzpg.supabase.co';
        // $port = "5432";
        // $DATABASE = 'postgres';
        // $USER = 'postgres';
        // $PASSWORD = 'supabasejimmyred775';

        // //posgres
        // $con = pg_connect("host=$SERVER port=$port dbname=$DATABASE user=$USER password=$PASSWORD sslmode=require");

        // date_default_timezone_set('America/Bogota'); 
        // $date = date('Y-m-d h:i:s', time());
        // if(!empty($_POST)){
        //     if(!isset($_POST['Enviar'])){

        //         $name = $_POST['name'];
        //         $email = $_POST['email'];
        //         $message = $_POST['message'];

        //         $query = "INSERT INTO contact(name, email, message) VALUES ($1, $2, $3)";
        //         $result = pg_query_params($con, $query, array($name, $email, $message));


        //     if ($result) {
        //             header("Location: ../../index.html");
        //             exit();
        //         } else {
        //             echo "Error al insertar datos.";
        //         }
        //     }
        // }else{
        //     print("failure");
        // }
    //----------------------------------------------------------

    //supabase API
    // $url = 'https://icsldpuppeglkuedwzpg.supabase.co/rest/v1/contact';
    // $api_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imljc2xkcHVwcGVnbGt1ZWR3enBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1MDk1ODUsImV4cCI6MjA2NTA4NTU4NX0.ftFsaStOqqrFRvTbLAiACA9c0zdMxMXQB6ZjYatBY-0';
    // $autorization_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imljc2xkcHVwcGVnbGt1ZWR3enBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1MDk1ODUsImV4cCI6MjA2NTA4NTU4NX0.ftFsaStOqqrFRvTbLAiACA9c0zdMxMXQB6ZjYatBY-0';

    //     if(!isset($_POST['Enviar'])){
    //        //enviar los datos a la api de supabase
    //         $name = $_POST['name'];
    //         $email = $_POST['email'];
    //         $message = $_POST['message'];

    //         $data = [
    //         'name' => $name,
    //         'email' => $email,
    //         'message' => $message
    //         ];

    //         $options = [
    //         'http' => [
    //             'header'  => [
    //                 "Content-type: application/json",
    //                 "apikey: $api_key",
    //                 "Authorization: Bearer $autorization_key", // Importante
    //                 "Prefer: return=representation" // Para obtener la respuesta con los datos insertados
    //             ],
    //             'method'  => 'POST',
    //             'content' => json_encode($data)
    //             ]
    //         ];

    //         $context  = stream_context_create($options);
    //         $result = file_get_contents($url, false, $context);

    //         // Redirige si todo salió bien
    //         if ($result !== FALSE) {
    //             header("Location: index.html");
    //             exit(); // Siempre usa exit() después de header()
    //         } else {
    //             // Manejo de error
    //             echo "Error al enviar los datos.";
    //         }
    //     }

?>