import searchFilters from "./filtro_busqueda.js";
import mostrarTiposEgresos from "./mostrarTipoEgreso.js";
import obtenerEgresos from "./obtenerInformesEgresos.js";
import {
  obtenerEgresosMesActual,
  obtenerEgresosSemanaActual,
  obtenerEgresosDiaActual,
} from "./reportesEgresos.js";

const TipoEgreso = document.querySelector(".form-select");

document.addEventListener("DOMContentLoaded", (e) => {
  searchFilters("#exampleInputEmail1", ".registro");
  mostrarTiposEgresos();
  obtenerEgresosMesActual();
  obtenerEgresosSemanaActual();
  obtenerEgresosDiaActual();
});

TipoEgreso.addEventListener("change", obtenerEgresos);
