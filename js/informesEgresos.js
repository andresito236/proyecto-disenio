import searchFilters from "./filtro_busqueda.js";
import mostrarTiposEgresos from "./mostrarTipoEgreso.js";
import obtenerEgresos from "./obtenerInformesEgresos.js";

const TipoEgreso = document.querySelector(".form-select");
document.addEventListener("DOMContentLoaded", (e) => {
  searchFilters("#exampleInputEmail1", ".registro");
  mostrarTiposEgresos();
});

TipoEgreso.addEventListener("change", obtenerEgresos);
