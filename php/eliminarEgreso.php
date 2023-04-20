<?php
if (!isset($_GET["id"])) {
    http_response_code(500);
    exit();
}

include_once "../modelos/funciones.php";
$respuesta = eliminarEgreso($_GET["id"]);
echo json_encode($respuesta);