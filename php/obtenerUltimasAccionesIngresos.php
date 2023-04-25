<?php
include_once "../modelos/funcionesIngresos.php";
$acciones = ultimasAccionesIngresos();
echo json_encode($acciones);