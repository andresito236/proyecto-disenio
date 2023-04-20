import mostrarTiposEgresos from "./mostrarTipoEgreso.js";
import obtenerEgresos from "./obtenerInformesEgresos.js";

const TipoEgreso = document.querySelector(".form-select");
document.addEventListener("DOMContentLoaded", mostrarTiposEgresos);

TipoEgreso.addEventListener("change", obtenerEgresos);
