<?php

require_once 'vendor/autoload.php';

$client = new Google_Client();
$client->setClientId('23348852821-52kkiv5hoq24u6f54sot2bv5n8i3fjt8.apps.googleusercontent.com');
$client->setClientSecret('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');
$client->setRedirectUri('https://haku777.com/APortfolio/components/php/conexion/validar.php');
$client->addScope("email");
$client->addScope("profile");
    if(isset($_GET['code'])){
        $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
        $client->setAccessToken($token['access_token']);
        $google_oauth = new Google_Service_Oauth2($client);
        $google_account_info = $google_oauth->userinfo->get();
    }
?>