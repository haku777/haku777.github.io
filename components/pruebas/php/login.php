
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php

    function conectar(){
        throw new Exception("Fallo de conexion");
        $con = new Mysqli("localhost","root","","pruebas");
        return $con;
    }

    try {
        //code...
        conectar();
        
    } catch (Exception $ex) {
        //throw $th;
        echo "Error de:   " . $ex->getMessage() . "<br>";
    } finally {
        // echo "se valido la conexion";
    }


gabriel
1 semana


?>    

<h2>hola</h2>


<script>
    console.error("fallo");
</script>

</body>
</html>
