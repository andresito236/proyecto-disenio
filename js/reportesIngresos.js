export async function obtenerIngresosMesActual() {
  const TotalMensual = document.getElementById("totalMensual");
  const respuestaRaw = await fetch("./php/obtenerIngresosMesActual.php");
  const ingresos = await respuestaRaw.json();

  TotalMensual.textContent = `L. ${ingresos[0].MontoTotal}`;
}

export async function obtenerIngresosSemanaActual() {
  const TotalSemanal = document.getElementById("totalSemanal");
  const respuestaRaw = await fetch("./php/obtenerIngresosSemanaActual.php");
  const ingresos = await respuestaRaw.json();

  TotalSemanal.textContent = `L. ${ingresos[0].MontoTotal}`;
}

export async function obtenerIngresosDiaActual() {
  const TotalDiario = document.getElementById("totalDiario");
  const respuestaRaw = await fetch("./php/obtenerIngresosDiaActual.php");
  const ingresos = await respuestaRaw.json();

  TotalDiario.textContent = `L. ${ingresos[0].MontoTotal}`;
}
