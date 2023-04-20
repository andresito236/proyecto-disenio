<?php
if (!isset($_GET["id"])) {
    http_response_code(500);
    exit();
}
include_once "../modelos/funcionesIngresos.php";
$ingreso = obtenerIngresoPorId($_GET["id"]);
echo json_encode($ingreso);