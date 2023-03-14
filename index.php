<?php
    $uri = $_SERVER['REQUEST_URI'];
    if (substr($uri, -5) == '.html') {
        header("Location: " . substr($uri, 0, -5));
        exit();
    }
    header("Location: page");
?>
