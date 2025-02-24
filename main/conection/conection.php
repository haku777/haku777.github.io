<?php
    $SERVER = 'localhost';
    $DATABASE = 'u380261347_contact';
    $USER = 'u380261347_contact';
    $PASSWORD = 'O!ay@6M;N5';
    // $SERVER = 'localhost';
    // $DATABASE = 'contact';
    // $USER = 'root';
    // $PASSWORD = '';
    $con = new mysqli($SERVER, $USER, $PASSWORD, $DATABASE);
    date_default_timezone_set('America/Bogota'); 
    $date = date('Y-m-d h:i:s', time());
    if(!empty($_POST)){
        if(!isset($_POST['Enviar'])){
            $name = $_POST['name'];
            $email = $_POST['email'];
            $message = $_POST['message'];
            echo $name . "<br>" . $email . "<br>" . $message . "<br>"  . date("D-d-M-m-Y T H:i:s a \\G\\M\\T") . "<br>";
            $query = @"Insert Into contact(name,email,date,message) values('$name', '$email','$date', '$message')";
            $result = $con->query($query);
            header("location: ../../index.html");
        }
    }else{
        print("fallo?");
    }
?>