let $descripcion = document.getElementById("descripcion"),
  $monto = document.getElementById("monto"),
  $tipoIngreso = document.querySelector(".form-select"),
  $btnGuardar = document.getElementById("btnGuardar"),
  $fecha = document.getElementById("fecha");

const rellenarFormulario = async (IngresoID) => {
  // Obtener el producto desde PHP
  const respuestaRaw = await fetch(
    `./php/obtenerIngresoPorId.php?id=${IngresoID}`
  );

  const ingreso = await respuestaRaw.json();
  // Rellenar formulario
  $descripcion.value = ingreso.Descripcion;
  $monto.value = ingreso.Monto;
  $tipoIngreso.options[ingreso.TipoID].selected = true;
  $fecha.value = ingreso.Fecha;

  $btnGuardar.dataset.accion = "editar";
  $btnGuardar.dataset.ingresoId = IngresoID;
};

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

  const botonEditar = document.createElement("button");
  botonEditar.classList.add("btn", "btn-primary");
  botonEditar.innerHTML = `<i class="fa fa-edit"></i>`;

  botonEditar.onclick = async () => {
    // $btnGuardar.setAttribute("editar");
    rellenarFormulario(idIngreso);
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
        obtenerIngresos(); // Actualizamos la tabla después de eliminar
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

export default async function obtenerIngresos() {
  const cuerpoTabla = document.getElementById("CuerpoTabla");
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

obtenerIngresos();
