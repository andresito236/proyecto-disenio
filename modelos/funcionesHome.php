<?php
require_once "conexion.php";

function ultimasAcciones() {
    $db = Conexion::conectar();
    $sentencia = $db->query("SELECT 'Ingreso' AS tipo, IngresoID AS id, Monto, Descripcion FROM ingreso
      UNION ALL
      SELECT 'Egreso' AS tipo, EgresoID AS id, Monto, Descripcion FROM egreso
      ORDER BY id DESC
      LIMIT 10;
    ");
    return $sentencia->fetchAll();
}