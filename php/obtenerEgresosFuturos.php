<?php
include_once "../modelos/funciones.php";
$egresosFuturos = obtenerEgresosFuturos();
echo json_encode($egresosFuturos);