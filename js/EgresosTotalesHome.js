export async function obtenerEgresosTotales() {
  const egresosTotales = document.getElementById("egresosTotales");
  const respuestaRaw = await fetch("./php/obtenerEgresosTotales.php");
  const egresos = await respuestaRaw.json();

  egresosTotales.textContent = `L. ${egresos[0].MontoTotal}`;
}
