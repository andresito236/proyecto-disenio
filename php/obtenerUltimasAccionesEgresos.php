<?php
include_once "../modelos/funciones.php";
$acciones = ultimasAccionesEgresos();
echo json_encode($acciones);