import mostrarTiposIngresos from "./mostrarTiposIngresos.js";
import obtenerIngresos from "./obtenerIngresos.js";

document.addEventListener("DOMContentLoaded", (e) => {
  obtenerIngresos();
  mostrarTiposIngresos();
});

document.addEventListener("click", (e) => {
  const $btnGuardar = document.getElementById("btnGuardar");
  if (e.target.matches("#btnLimpiar")) {
    $btnGuardar.dataset.accion = "ingresar";
    $btnGuardar.dataset.egresoId = "";
  }
});
