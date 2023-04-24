export async function obtenerEgresosMesActual() {
  const TotalMensual = document.getElementById("totalMensual");
  const respuestaRaw = await fetch("./php/obtenerEgresosMesActual.php");
  const egresos = await respuestaRaw.json();

  TotalMensual.textContent = `L. ${egresos[0].MontoTotal}`;
}

export async function obtenerEgresosSemanaActual() {
  const TotalSemanal = document.getElementById("totalSemanal");
  const respuestaRaw = await fetch("./php/obtenerEgresosSemanaActual.php");
  const egresos = await respuestaRaw.json();

  TotalSemanal.textContent = `L. ${egresos[0].MontoTotal}`;
}

export async function obtenerEgresosDiaActual() {
  const TotalDiario = document.getElementById("totalDiario");
  const respuestaRaw = await fetch("./php/obtenerEgresosDiaActual.php");
  const egresos = await respuestaRaw.json();

  TotalDiario.textContent = `L. ${egresos[0].MontoTotal}`;
}
