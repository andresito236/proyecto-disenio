export async function obtenerIngresosTotales() {
  const ingresosTotales = document.getElementById("ingresosTotales");
  const respuestaRaw = await fetch("./php/obtenerIngresosTotales.php");
  const ingresos = await respuestaRaw.json();

  ingresosTotales.textContent = `L. ${ingresos[0].MontoTotal}`;
}
