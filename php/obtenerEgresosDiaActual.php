<?php
include_once "../modelos/funciones.php";
$egresos = obtenerEgresosDiaActual();
echo json_encode($egresos);