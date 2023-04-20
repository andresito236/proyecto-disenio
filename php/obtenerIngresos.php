<?php
include_once "../modelos/funcionesIngresos.php";
$ingresos = obtenerIngresos();
echo json_encode($ingresos);