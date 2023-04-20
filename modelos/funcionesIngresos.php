<?php
require_once "conexion.php";

function actualizarIngreso($monto, $descripcion, $fecha, $tipoID, $IngresoID)
{
    $sentencia = Conexion::conectar()->prepare("UPDATE ingreso SET Monto = ?, Descripcion = ?, Fecha = ?, TipoID = ? WHERE IngresoID = ?");
    return $sentencia->execute([ $monto, $descripcion, $fecha, $tipoID, $IngresoID]);
}

function obtenerIngresoPorId($IngresoID)
{
    $sentencia = Conexion::conectar()->prepare("SELECT IngresoID, Monto, Descripcion, Fecha, TipoID FROM ingreso WHERE IngresoID = ?");
    $sentencia->execute([$IngresoID]);
    return $sentencia->fetchObject();
}

function obtenerIngresos()
{
    $sentencia = Conexion::conectar()->query("SELECT IngresoID, Monto, Descripcion, Fecha FROM ingreso");
    return $sentencia->fetchAll();
}
function obtenerIngresosFuturos()
{
    $sentencia = Conexion::conectar()->query("SELECT IngresoID, Monto, Descripcion, Fecha FROM ingreso where Fecha > NOW()");
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