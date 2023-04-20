import obtenerIngresos from "./obtenerIngresos.js";

function guardarIngreso() {
  const $descripcion = document.getElementById("descripcion");
  const $monto = document.getElementById("monto");
  const $tipoIngreso = document.querySelector(".form-select");
  const $btnGuardar = document.getElementById("btnGuardar");
  const $fecha = document.getElementById("fecha");

  $btnGuardar.addEventListener("click", async (e) => {
    e.preventDefault();

    const descripcion = $descripcion.value.trim();
    const monto = parseFloat($monto.value);
    const tipoIngreso = $tipoIngreso.value.trim();
    const fecha = $fecha.value.trim();

    if (!descripcion) {
      return mostrarAlerta("Escribe la descripción", "error");
    }

    if (isNaN(monto) || monto <= 0) {
      return mostrarAlerta("Escribe el monto", "error");
    }

    if (!tipoIngreso) {
      return mostrarAlerta("Selecciona el tipo de egreso", "error");
    }

    if (!fecha) {
      return mostrarAlerta("Selecciona la fecha", "error");
    }

    const cargaUtil = { monto, descripcion, fecha, tipoIngreso };
    const IngresoId = $btnGuardar.dataset.ingresoId;
    const accion = $btnGuardar.dataset.accion;

    try {
      const respuestaRaw = await fetch(
        accion === "editar"
          ? "./php/actualizarIngreso.php"
          : "./php/insertarIngreso.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: IngresoId, ...cargaUtil }),
        }
      );
      const respuesta = await respuestaRaw.json();
      if (respuesta) {
        mostrarAlerta(
          `Ingreso ${accion === "editar" ? "actualizado" : "guardado"}`,
          "success"
        );
        $descripcion.value = $fecha.value = $monto.value = "";
        $tipoIngreso.options[0].selected = true;
        $btnGuardar.dataset.accion = "ingresar";
        $btnGuardar.dataset.ingresoId = "";
        obtenerIngresos();
      } else {
        mostrarAlerta("El servidor no envió una respuesta exitosa");
      }
    } catch (e) {
      mostrarAlerta(`Error de servidor: ${e}`);
    }
  });

  function mostrarAlerta(mensaje, icono) {
    Swal.fire({
      icon: icono,
      text: mensaje,
      timer: 700,
    });
  }
}

guardarIngreso();
