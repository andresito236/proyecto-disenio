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

  const idIngreso = ingreso.IngresoID;

  const botonConfirmar = document.createElement("button");
  botonConfirmar.classList.add("btn", "btn-primary");
  botonConfirmar.innerHTML = `<i class="fa fa-check"></i>`;

  botonConfirmar.onclick = async () => {
    const respuestaConfirmacion = await Swal.fire({
      title: "Confirmación",
      text: "¿Confirmar registro?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#3085d6",
      confirmButtonColor: "#d33",
      confirmButtonText: "Sí, confirmar",
      cancelButtonText: "Cancelar",
    });
    if (respuestaConfirmacion.value) {
      const confirmacion = 1;
      const id = parseInt(idIngreso);

      const cargaUtil = { confirmacion, id };

      try {
        const respuestaRaw = await fetch("./php/confirmarIngreso.php", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cargaUtil),
        });
        const respuesta = await respuestaRaw.json();
        if (respuesta) {
          Swal.fire({
            icon: "success",
            text: "Ingreso confirmado",
            timer: 1100,
          });
          obtenerIngresosFuturos();
        } else {
          Swal.fire({
            icon: "error",
            text: "El servidor no respondió con una respuesta exitosa",
          });
        }
      } catch (e) {
        Swal.fire({
          icon: "error",
          text: `Error de servidor ${e}`,
        });
      }
    }
  };

  const celdaBotonEditar = document.createElement("td");
  celdaBotonEditar.appendChild(botonConfirmar);

  fila.appendChild(celdaBotonEditar);

  const botonEliminar = document.createElement("button");
  botonEliminar.classList.add("btn", "btn-danger");
  botonEliminar.innerHTML = `<i class="fa fa-trash"></i>`;

  botonEliminar.onclick = async () => {
    const respuestaConfirmacion = await Swal.fire({
      title: "Confirmación",
      text: "¿Eliminar el egreso? esto no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#3085d6",
      confirmButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });
    if (respuestaConfirmacion.value) {
      const url = `./php/eliminarIngreso.php?id=${idIngreso}`;
      const respuestaRaw = await fetch(url, {
        method: "DELETE",
      });
      const respuesta = await respuestaRaw.json();
      if (respuesta) {
        Swal.fire({
          icon: "success",
          text: "Ingreso eliminado",
          timer: 1100,
        });
        obtenerIngresosFuturos(); // Actualizamos la tabla después de eliminar
      } else {
        Swal.fire({
          icon: "error",
          text: "El servidor no respondió con una respuesta exitosa",
        });
      }
    }
  };

  const celdaBoton = document.createElement("td");
  celdaBoton.appendChild(botonEliminar);
  fila.appendChild(celdaBoton);

  return fila;
};

async function obtenerIngresosFuturos() {
  const cuerpoTabla = document.getElementById("CuerpoTabla");
  let cont = 1;
  const respuestaRaw = await fetch("./php/obtenerIngresosFuturos.php");
  const ingresos = await respuestaRaw.json();

  cuerpoTabla.innerHTML = "";
  for (const ingreso of ingresos) {
    const fila = crearFilaTabla(ingreso, cont);
    cuerpoTabla.appendChild(fila);
    cont++;
  }
}

obtenerIngresosFuturos();
