<?php
if (!isset($_GET["TipoID"])) {
    http_response_code(500);
    exit();
}
include_once "../modelos/funciones.php";
$egreso = obtenerEgresosTipo($_GET["TipoID"]);
echo json_encode($egreso);