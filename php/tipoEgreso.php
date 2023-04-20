<?php
include_once "../modelos/funciones.php";
$tipoEgreso = tipoEgreso();
echo json_encode($tipoEgreso);