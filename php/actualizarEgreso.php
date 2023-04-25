<?php
$cargaUtil = json_decode(file_get_contents("php://input"));
// Si no hay datos, salir inmediatamente indicando un error 500
if (!$cargaUtil) {
    http_response_code(500);
    exit;
}

$id = $cargaUtil->id;
$monto = $cargaUtil->monto;
$descripcion = $cargaUtil->descripcion;
$fecha = $cargaUtil->fecha;
$tipoEgreso = $cargaUtil->tipoEgreso;
$confirmacion = $cargaUtil->confirmacion;
include_once "../modelos/funciones.php";
$respuesta = actualizarEgreso( $monto, $descripcion, $fecha, $tipoEgreso, $confirmacion, $id);
// Devolver al cliente la respuesta de la función
echo json_encode($respuesta);