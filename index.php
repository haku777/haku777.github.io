<?php
$requestedPath = $_SERVER['REQUEST_URI'];
$filePath = '';

    echo $requestedPath;

    switch ($requestedPath) {
        case 'new':
            $filePath = 'new.html';
            break;
        default:
            $filePath = 'index.html';
            break;
    }

    if ($filePath !== '') {
        include $filePath;
    }
?>
