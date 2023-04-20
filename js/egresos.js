import mostrarTiposEgresos from "./mostrarTipoEgreso.js";
import obtenerEgresos from "./obtenerEgresos.js";

document.addEventListener("DOMContentLoaded", (e) => {
  obtenerEgresos();
  mostrarTiposEgresos();
});

document.addEventListener("click", (e) => {
  const $btnGuardar = document.getElementById("btnGuardar");
  if (e.target.matches("#btnLimpiar")) {
    $btnGuardar.dataset.accion = "ingresar";
    $btnGuardar.dataset.egresoId = "";
  }
});
