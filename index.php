<?php

$url = $_SERVER['SERVER_NAME'];
$uri = $_SERVER['REQUEST_URI'];

$request = $url . $uri;


switch ($request) {

    case '':
        case '/':


    case $url."/simorp_beta/paginas/principal":
        require __DIR__ . '\principal.php';
        break;

    case $url."/simorp_beta/paginas/casa":
        require __DIR__ . '\casa.php';
        break;

    case $url."/simorp_beta/paginas/contatos":
        require __DIR__ . '\contatos.php';
        break;
    
    case $url."/simorp_beta/paginas/usuarios":
        require __DIR__ . '\usuarios.php';
        break;       
        
    default:
        http_response_code(404);
        require __DIR__ . '404.php';

    }                   

                    
?>