<?php
include_once "../modelos/funcionesIngresos.php";
$ingresos = obtenerIngresosDiaActual();
echo json_encode($ingresos);