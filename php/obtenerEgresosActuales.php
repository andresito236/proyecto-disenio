<?php
include_once "../modelos/funciones.php";
$egresosActuales = obtenerEgresos();
echo json_encode($egresosActuales);