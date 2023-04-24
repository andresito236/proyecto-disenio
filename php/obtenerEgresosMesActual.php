<?php
include_once "../modelos/funciones.php";
$egresos = obtenerEgresosMesActual();
echo json_encode($egresos);