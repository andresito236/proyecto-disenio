import searchFilters from "./filtro_busqueda.js";
import mostrarTiposIngresos from "./mostrarTiposIngresos.js";
import obtenerIngresos from "./obtenerInformesIngresos.js";
import {
  obtenerIngresosDiaActual,
  obtenerIngresosMesActual,
  obtenerIngresosSemanaActual,
} from "./reportesIngresos.js";

const TipoIngreso = document.querySelector(".form-select");
document.addEventListener("DOMContentLoaded", (e) => {
  searchFilters("#exampleInputEmail1", ".registro");
  mostrarTiposIngresos();
  obtenerIngresosMesActual();
  obtenerIngresosSemanaActual();
  obtenerIngresosDiaActual();
});

TipoIngreso.addEventListener("change", obtenerIngresos);
