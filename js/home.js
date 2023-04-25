import { obtenerBalance } from "./Balance.js";
import { obtenerEgresosTotales } from "./EgresosTotalesHome.js";
import { obtenerIngresosTotales } from "./IngresosTotalesHome.js";
import { obtenerUltimasAcciones } from "./ultimasAcciones.js";

document.addEventListener("DOMContentLoaded", (e) => {
  obtenerEgresosTotales();
  obtenerIngresosTotales();
  obtenerBalance();
  obtenerUltimasAcciones();
});
