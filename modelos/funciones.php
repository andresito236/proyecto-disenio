<?php
require_once "conexion.php";

function actualizarEgreso($monto, $descripcion, $fecha, $tipoID, $EgresoID)
{
    $sentencia = Conexion::conectar()->prepare("UPDATE egreso SET Monto = ?, Descripcion = ?, Fecha = ?, TipoID = ? WHERE EgresoID = ?");
    return $sentencia->execute([ $monto, $descripcion, $fecha, $tipoID, $EgresoID]);
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

function eliminarEgreso($id)
{
    $sentencia = Conexion::conectar()->prepare("DELETE FROM egreso WHERE EgresoID = ?");
    return $sentencia->execute([$id]);
}

function insertarEgreso($monto, $descripcion, $fecha, $tipoID)
{
    $sentencia = Conexion::conectar()->prepare("INSERT INTO egreso(monto, descripcion, fecha, tipoID) VALUES( ?, ?, ?, ?)");
    return $sentencia->execute([ $monto, $descripcion, $fecha, $tipoID]);
}

function tipoEgreso(){
  $sentencia = Conexion::conectar()->query("SELECT  TipoID, Nombre FROM tipoegreso");
  return $sentencia->fetchAll();
}