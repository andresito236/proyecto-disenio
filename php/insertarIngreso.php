<?php
$cargaUtil = json_decode(file_get_contents("php://input"));
// Si no hay datos, salir inmediatamente indicando un error 500
if (!$cargaUtil) {
    http_response_code(500);
    exit;
}
// Extraer valores
$monto = $cargaUtil->monto;
$descripcion = $cargaUtil->descripcion;
$fecha = $cargaUtil->fecha;
$tipoIngreso = $cargaUtil->tipoIngreso;
include_once "../modelos/funcionesIngresos.php";
$respuesta = insertarIngreso($monto, $descripcion, $fecha, $tipoIngreso);
// Devolver al cliente la respuesta de la función
echo json_encode($respuesta);