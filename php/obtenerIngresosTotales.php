<?php
include_once "../modelos/funcionesIngresos.php";
$ingresos = obtenerIngresosTotales();
echo json_encode($ingresos);