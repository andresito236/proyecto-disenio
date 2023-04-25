<?php
include_once "../modelos/funciones.php";
$egresos = obtenerEgresosTotales();
echo json_encode($egresos);