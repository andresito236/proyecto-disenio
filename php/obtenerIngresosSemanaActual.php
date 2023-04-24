<?php
include_once "../modelos/funcionesIngresos.php";
$ingresos = obtenerIngresosSemanaActual();
echo json_encode($ingresos);