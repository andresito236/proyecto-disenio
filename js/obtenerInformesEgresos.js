const crearFilaTabla = (egreso, cont) => {
  const fila = document.createElement("tr");

  const celdaNumero = document.createElement("td");
  celdaNumero.innerText = cont;
  fila.appendChild(celdaNumero);

  const celdaDescripcion = document.createElement("td");
  celdaDescripcion.innerText = egreso.Descripcion;
  fila.appendChild(celdaDescripcion);

  const celdaMonto = document.createElement("td");
  celdaMonto.innerText = egreso.Monto;
  fila.appendChild(celdaMonto);

  const celdaFecha = document.createElement("td");
  celdaFecha.innerText = egreso.Fecha;
  fila.appendChild(celdaFecha);

  return fila;
};

export default async function obtenerEgresos() {
  const cuerpoTabla = document.getElementById("CuerpoTabla");
  const TipoID = document.querySelector(".form-select").value;

  if (TipoID >= 1) {
    let cont = 1;
    const respuestaRaw = await fetch(
      `./php/obtenerEgresosTipo.php?TipoID=${TipoID}`
    );
    const egresos = await respuestaRaw.json();
    cuerpoTabla.innerHTML = "";
    for (const egreso of egresos) {
      const fila = crearFilaTabla(egreso, cont);
      cuerpoTabla.appendChild(fila);
      cont++;
    }
  } else {
    let cont = 1;
    const respuestaRaw = await fetch("./php/obtenerEgresosActuales.php");
    const egresos = await respuestaRaw.json();

    cuerpoTabla.innerHTML = "";

    for (const egreso of egresos) {
      const fila = crearFilaTabla(egreso, cont);
      cuerpoTabla.appendChild(fila);
      cont++;
    }
  }
}

obtenerEgresos();
