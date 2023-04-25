<?php
require_once "conexion.php";

function actualizarEgreso($monto, $descripcion, $fecha, $tipoID, $confirmacion, $EgresoID)
{
    $sentencia = Conexion::conectar()->prepare("UPDATE egreso SET Monto = ?, Descripcion = ?, Fecha = ?, TipoID = ?, Confirmacion = ? WHERE EgresoID = ?");
    return $sentencia->execute([ $monto, $descripcion, $fecha, $tipoID, $confirmacion, $EgresoID]);
}

function obtenerEgresoPorId($EgresoID)
{
    $sentencia = Conexion::conectar()->prepare("SELECT EgresoID, Monto, Descripcion, Fecha, TipoID FROM egreso WHERE EgresoID = ?");
    $sentencia->execute([$EgresoID]);
    return $sentencia->fetchObject();
}

function obtenerEgresos()
{
    $sentencia = Conexion::conectar()->query("SELECT EgresoID, Monto, Descripcion, Fecha FROM egreso");
    return $sentencia->fetchAll();
}

function obtenerEgresosFuturos()
{
    $sentencia = Conexion::conectar()->query("SELECT EgresoID, Monto, Descripcion, Fecha FROM egreso where Fecha > NOW()");
    return $sentencia->fetchAll();
}

function obtenerEgresosTipo($tipoID)
{
  $sentencia = Conexion::conectar()->prepare("SELECT EgresoID, Monto, Descripcion, Fecha FROM egreso where TipoID = ?");
  $sentencia->execute([$tipoID]);
  return $sentencia->fetchAll();

}
function obtenerEgresosTotales()
{
    $sentencia = Conexion::conectar()->query("SELECT IFNULL(SUM(Monto), 0) as MontoTotal
        FROM egreso
        WHERE (Confirmacion IS NULL OR Confirmacion <> 0);
    ");
   return $sentencia->fetchAll();
}
function obtenerEgresosMesActual()
{
    $sentencia = Conexion::conectar()->query("SELECT IFNULL(SUM(Monto), 0) as MontoTotal
        FROM egreso
        WHERE MONTH(Fecha) = MONTH(CURRENT_DATE()) 
        AND (Confirmacion IS NULL OR Confirmacion <> 0);
    ");

   return $sentencia->fetchAll();
}
function obtenerEgresosSemanaActual()
{
    $sentencia = Conexion::conectar()->query("SELECT IFNULL(SUM(Monto), 0) as MontoTotal
      FROM egreso
      WHERE Fecha >= DATE_SUB(CURRENT_DATE(), INTERVAL WEEKDAY(CURRENT_DATE()) DAY)
      AND Fecha < DATE_ADD(DATE_SUB(CURRENT_DATE(), INTERVAL WEEKDAY(CURRENT_DATE()) DAY), INTERVAL 1 WEEK)
      AND (Confirmacion IS NULL OR Confirmacion <> 0);
  ");

   return $sentencia->fetchAll();
}
function obtenerEgresosDiaActual()
{
    $sentencia = Conexion::conectar()->query("SELECT IFNULL(SUM(Monto), 0) as MontoTotal
      FROM egreso
      WHERE Fecha = CURRENT_DATE()
      AND (Confirmacion IS NULL OR Confirmacion <> 0);
  ");

   return $sentencia->fetchAll();
}


function eliminarEgreso($id)
{
    $sentencia = Conexion::conectar()->prepare("DELETE FROM egreso WHERE EgresoID = ?");
    return $sentencia->execute([$id]);
}

function insertarEgreso($monto, $descripcion, $fecha, $tipoID, $confirmacion)
{
    $sentencia = Conexion::conectar()->prepare("INSERT INTO egreso(monto, descripcion, fecha, tipoID, Confirmacion) VALUES( ?, ?, ?, ?, ?)");
    return $sentencia->execute([ $monto, $descripcion, $fecha, $tipoID, $confirmacion]);
}

function tipoEgreso(){
  $sentencia = Conexion::conectar()->query("SELECT  TipoID, Nombre FROM tipoegreso");
  return $sentencia->fetchAll();
}

function ultimasAccionesEgresos() {
    $db = Conexion::conectar();
    $sentencia = $db->query("SELECT 'Egreso' AS tipo, EgresoID AS id, Monto, Descripcion FROM egreso
      ORDER BY id DESC
      LIMIT 5;
    ");
    return $sentencia->fetchAll();
}