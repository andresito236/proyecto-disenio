<?php
include_once "../modelos/funciones.php";
$egresos = obtenerEgresosSemanaActual();
echo json_encode($egresos);