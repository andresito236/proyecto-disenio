<?php
include_once "../modelos/funcionesIngresos.php";
$tipoIngreso = tipoIngreso();
echo json_encode($tipoIngreso);