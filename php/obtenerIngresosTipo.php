<?php
if (!isset($_GET["TipoID"])) {
    http_response_code(500);
    exit();
}
include_once "../modelos/funcionesIngresos.php";
$ingreso = obtenerIngresosTipo($_GET["TipoID"]);
echo json_encode($ingreso);