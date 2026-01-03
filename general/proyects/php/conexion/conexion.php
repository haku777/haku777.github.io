<?php

// $host = getenv('PGHOST');
// $db   = getenv('PGDATABASE');
// $user = getenv('PGUSER');
// $pass = getenv('PGPASSWORD');
// $port = '5432';

$dsn = "pgsql:host=$host;port=$port;dbname=$db;sslmode=require";

try {
    $pdo = new PDO($dsn, $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);

    echo "¡Conexión exitosa a Neon!";
} catch (PDOException $e) {
    echo "Error de conexión: " . $e->getMessage();
}
?>
