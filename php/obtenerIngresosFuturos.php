<?php
include_once "../modelos/funcionesIngresos.php";
$ingresosFuturos = obtenerIngresosFuturos();
echo json_encode($ingresosFuturos);