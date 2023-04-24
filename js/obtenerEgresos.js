let $descripcion = document.getElementById("descripcion"),
  $monto = document.getElementById("monto"),
  $tipoEgreso = document.querySelector(".form-select"),
  $btnGuardar = document.getElementById("btnGuardar"),
  $fecha = document.getElementById("fecha");

const rellenarFormulario = async (EgresoID) => {
  // Obtener el producto desde PHP
  const respuestaRaw = await fetch(
    `./php/obtenerEgresoPorId.php?id=${EgresoID}`
  );

  const egreso = await respuestaRaw.json();
  // Rellenar formulario
  $descripcion.value = egreso.Descripcion;
  $monto.value = egreso.Monto;
  $tipoEgreso.options[egreso.TipoID].selected = true;
  $fecha.value = egreso.Fecha;

  $btnGuardar.dataset.accion = "editar";
  $btnGuardar.dataset.egresoId = EgresoID;
};

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

  const botonEditar = document.createElement("button");
  botonEditar.classList.add("btn", "btn-primary");
  botonEditar.innerHTML = `<i class="fa fa-edit"></i>`;

  botonEditar.onclick = async () => {
    // $btnGuardar.setAttribute("editar");
    rellenarFormulario(idEgreso);
  };

  const celdaBotonEditar = document.createElement("td");
  celdaBotonEditar.appendChild(botonEditar);

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
        obtenerEgresos(); // Actualizamos la tabla después de eliminar
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

export default async function obtenerEgresos() {
  const cuerpoTabla = document.getElementById("CuerpoTabla");
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

obtenerEgresos();
