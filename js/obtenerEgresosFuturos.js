const crearFilaTabla = (egreso, cont) => {
  const fila = document.createElement("tr");
  fila.classList.add("registro");

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

  const idEgreso = egreso.EgresoID;

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
      const id = parseInt(idEgreso);

      const cargaUtil = { confirmacion, id };

      try {
        const respuestaRaw = await fetch("./php/confirmarEgreso.php", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cargaUtil),
        });
        const respuesta = await respuestaRaw.json();
        if (respuesta) {
          Swal.fire({
            icon: "success",
            text: "Egreso confirmado",
            timer: 1100,
          });
          obtenerEgresosFuturos();
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
  celdaBotonEditar.classList.add("text-center");
  celdaBotonEditar.appendChild(botonConfirmar);
  celdaBotonEditar.classList.add("d-flex", "justify-content-center");

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
      const url = `./php/eliminarEgreso.php?id=${idEgreso}`;
      const respuestaRaw = await fetch(url, {
        method: "DELETE",
      });
      const respuesta = await respuestaRaw.json();
      if (respuesta) {
        Swal.fire({
          icon: "success",
          text: "Egreso eliminado",
          timer: 1100,
        });
        obtenerEgresosFuturos(); // Actualizamos la tabla después de eliminar
      } else {
        Swal.fire({
          icon: "error",
          text: "El servidor no respondió con una respuesta exitosa",
        });
      }
    }
  };

  const celdaBoton = document.createElement("td");
  celdaBoton.classList.add("text-center");
  celdaBoton.appendChild(botonEliminar);
  fila.appendChild(celdaBoton);

  return fila;
};

async function obtenerEgresosFuturos() {
  const cuerpoTabla = document.getElementById("CuerpoTabla");
  let cont = 1;
  const respuestaRaw = await fetch("./php/obtenerEgresosFuturos.php");
  const egresos = await respuestaRaw.json();

  cuerpoTabla.innerHTML = "";
  for (const egreso of egresos) {
    const fila = crearFilaTabla(egreso, cont);
    cuerpoTabla.appendChild(fila);
    cont++;
  }
}

obtenerEgresosFuturos();
