<?php
include_once "../modelos/funcionesIngresos.php";
$ingresos = obtenerIngresosMesActual();
echo json_encode($ingresos);