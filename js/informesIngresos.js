import searchFilters from "./filtro_busqueda.js";
import mostrarTiposIngresos from "./mostrarTiposIngresos.js";
import obtenerIngresos from "./obtenerInformesIngresos.js";

const TipoIngreso = document.querySelector(".form-select");
document.addEventListener("DOMContentLoaded", (e) => {
  searchFilters("#exampleInputEmail1", ".registro");
  mostrarTiposIngresos();
});

TipoIngreso.addEventListener("change", obtenerIngresos);
