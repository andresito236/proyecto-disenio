import mostrarTiposIngresos from "./mostrarTiposIngresos.js";
import obtenerIngresos from "./obtenerInformesIngresos.js";

const TipoIngreso = document.querySelector(".form-select");
document.addEventListener("DOMContentLoaded", mostrarTiposIngresos);

TipoIngreso.addEventListener("change", obtenerIngresos);
