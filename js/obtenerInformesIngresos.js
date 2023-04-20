const crearFilaTabla = (ingreso, cont) => {
  const fila = document.createElement("tr");

  const celdaNumero = document.createElement("td");
  celdaNumero.innerText = cont;
  fila.appendChild(celdaNumero);

  const celdaDescripcion = document.createElement("td");
  celdaDescripcion.innerText = ingreso.Descripcion;
  fila.appendChild(celdaDescripcion);

  const celdaMonto = document.createElement("td");
  celdaMonto.innerText = ingreso.Monto;
  fila.appendChild(celdaMonto);

  const celdaFecha = document.createElement("td");
  celdaFecha.innerText = ingreso.Fecha;
  fila.appendChild(celdaFecha);

  return fila;
};

export default async function obtenerIngresos() {
  const cuerpoTabla = document.getElementById("CuerpoTabla");
  const TipoID = document.querySelector(".form-select").value;
  if (TipoID >= 1) {
    let cont = 1;
    const respuestaRaw = await fetch(
      `./php/obtenerIngresosTipo.php?TipoID=${TipoID}`
    );

    const ingresos = await respuestaRaw.json();
    cuerpoTabla.innerHTML = "";

    for (const ingreso of ingresos) {
      const fila = crearFilaTabla(ingreso, cont);
      cuerpoTabla.appendChild(fila);
      cont++;
    }
  } else {
    let cont = 1;
    const respuestaRaw = await fetch("./php/obtenerIngresos.php");

    const ingresos = await respuestaRaw.json();
    cuerpoTabla.innerHTML = "";

    for (const ingreso of ingresos) {
      const fila = crearFilaTabla(ingreso, cont);
      cuerpoTabla.appendChild(fila);
      cont++;
    }
  }
}

obtenerIngresos();
