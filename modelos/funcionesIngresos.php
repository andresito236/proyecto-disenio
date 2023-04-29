<?php
require_once "conexion.php";

function actualizarIngreso($monto, $descripcion, $fecha, $tipoID, $IngresoID)
{
    $sentencia = Conexion::conectar()->prepare("UPDATE ingreso SET Monto = ?, Descripcion = ?, Fecha = ?, TipoID = ? WHERE IngresoID = ?");
    return $sentencia->execute([ $monto, $descripcion, $fecha, $tipoID, $IngresoID]);
}
function actualizarConfirmacion($confirmacion, $IngresoID)
{
    $sentencia = Conexion::conectar()->prepare("UPDATE ingreso SET Confirmacion = ? WHERE IngresoID = ?");
    return $sentencia->execute([ $confirmacion, $IngresoID]);
}

function obtenerIngresoPorId($IngresoID)
{
    $sentencia = Conexion::conectar()->prepare("SELECT IngresoID, Monto, Descripcion, Fecha, TipoID FROM ingreso WHERE IngresoID = ?");
    $sentencia->execute([$IngresoID]);
    return $sentencia->fetchObject();
}

function obtenerIngresos()
{
  $sentencia = Conexion::conectar()->query("SELECT IngresoID, Monto, Descripcion, Fecha, Confirmacion FROM ingreso");
  return $sentencia->fetchAll();
}
function obtenerIngresosFuturos()
{
  $sentencia = Conexion::conectar()->query("SELECT IngresoID, Monto, Descripcion, Fecha FROM ingreso where Fecha <= CURDATE() AND Confirmacion = 0");
  return $sentencia->fetchAll();
}
function obtenerIngresosTipo($tipoID)
{
  $sentencia = Conexion::conectar()->prepare("SELECT IngresoID, Monto, Descripcion, Fecha, Confirmacion FROM ingreso where TipoID = ?");
  $sentencia->execute([$tipoID]);
      return $sentencia->fetchAll();

}
function obtenerIngresosTotales()
{
    $sentencia = Conexion::conectar()->query("SELECT IFNULL(SUM(Monto), 0) as MontoTotal
        FROM ingreso
        WHERE (Confirmacion IS NULL OR Confirmacion <> 0);
    ");
   return $sentencia->fetchAll();
}
function obtenerIngresosMesActual()
{
    $sentencia = Conexion::conectar()->query("SELECT IFNULL(SUM(Monto), 0) as MontoTotal
        FROM ingreso
        WHERE MONTH(Fecha) = MONTH(CURRENT_DATE()) 
        AND (Confirmacion IS NULL OR Confirmacion <> 0);
    ");

   return $sentencia->fetchAll();
}
function obtenerIngresosSemanaActual()
{
    $sentencia = Conexion::conectar()->query("SELECT IFNULL(SUM(Monto), 0) as MontoTotal
      FROM ingreso
      WHERE Fecha >= DATE_SUB(CURRENT_DATE(), INTERVAL WEEKDAY(CURRENT_DATE()) DAY)
      AND Fecha < DATE_ADD(DATE_SUB(CURRENT_DATE(), INTERVAL WEEKDAY(CURRENT_DATE()) DAY), INTERVAL 1 WEEK)
      AND (Confirmacion IS NULL OR Confirmacion <> 0);
  ");

   return $sentencia->fetchAll();
}
function obtenerIngresosDiaActual()
{
    $sentencia = Conexion::conectar()->query("SELECT IFNULL(SUM(Monto), 0) as MontoTotal
      FROM ingreso
      WHERE Fecha = CURRENT_DATE()
      AND (Confirmacion IS NULL OR Confirmacion <> 0);
  ");

   return $sentencia->fetchAll();
}


function eliminarIngreso($id)
{
    $sentencia = Conexion::conectar()->prepare("DELETE FROM ingreso WHERE IngresoID = ?");
    return $sentencia->execute([$id]);
}

function insertarIngreso($monto, $descripcion, $fecha, $tipoID)
{
    $sentencia = Conexion::conectar()->prepare("INSERT INTO ingreso(monto, descripcion, fecha, TipoID) VALUES( ?, ?, ?, ?)");
    return $sentencia->execute([ $monto, $descripcion, $fecha, $tipoID]);
}

function tipoIngreso(){
  $sentencia = Conexion::conectar()->query("SELECT  TipoID, Nombre FROM tipoingreso");
  return $sentencia->fetchAll();
}

function ultimasAccionesIngresos() {
    $db = Conexion::conectar();
    $sentencia = $db->query("SELECT 'Ingreso' AS tipo, IngresoID AS id, Monto, Descripcion FROM ingreso
      ORDER BY id DESC
      LIMIT 3;
    ");
    return $sentencia->fetchAll();
}