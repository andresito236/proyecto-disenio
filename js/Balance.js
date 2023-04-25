export async function obtenerBalance() {
  const balance = document.getElementById("balance");

  const respuestaRaw = await fetch("./php/obtenerEgresosTotales.php");
  const egresos = await respuestaRaw.json();

  const respuestaRawIngresos = await fetch("./php/obtenerIngresosTotales.php");
  const ingresos = await respuestaRawIngresos.json();

  const balanceTotal =
    parseFloat(ingresos[0].MontoTotal) - parseFloat(egresos[0].MontoTotal);
  balance.textContent = `L. ${balanceTotal}`;
}
