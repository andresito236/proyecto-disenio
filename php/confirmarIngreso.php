<?php
$cargaUtil = json_decode(file_get_contents("php://input"));
// Si no hay datos, salir inmediatamente indicando un error 500
if (!$cargaUtil) {
    http_response_code(500);
    exit;
}

$id = $cargaUtil->id;
$confirmacion = $cargaUtil->confirmacion;
include_once "../modelos/funcionesIngresos.php";
$respuesta = actualizarConfirmacion( $confirmacion, $id);
echo json_encode($respuesta);