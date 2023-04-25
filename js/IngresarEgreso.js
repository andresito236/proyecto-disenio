import obtenerEgresos from "./obtenerEgresos.js";

function guardarEgreso() {
  const $descripcion = document.getElementById("descripcion");
  const $monto = document.getElementById("monto");
  const $tipoEgreso = document.querySelector(".form-select");
  const $btnGuardar = document.getElementById("btnGuardar");
  const $fecha = document.getElementById("fecha");

  $btnGuardar.addEventListener("click", async (e) => {
    e.preventDefault();

    const descripcion = $descripcion.value.trim();
    const monto = parseFloat($monto.value);
    const tipoEgreso = $tipoEgreso.value.trim();
    const fecha = $fecha.value.trim();

    if (!descripcion) {
      return mostrarAlerta("Escribe la descripción", "error");
    }

    if (isNaN(monto) || monto <= 0) {
      return mostrarAlerta("Escribe el monto", "error");
    }

    if (!tipoEgreso) {
      return mostrarAlerta("Selecciona el tipo de egreso", "error");
    }

    if (!fecha) {
      return mostrarAlerta("Selecciona la fecha", "error");
    }

    const cargaUtil = { monto, descripcion, fecha, tipoEgreso };
    const fechaUsuario = new Date(fecha).toLocaleDateString();
    const fechaActual = new Date().toLocaleDateString();
    cargaUtil.confirmacion = fechaUsuario <= fechaActual ? 1 : 0;

    const EgresoId = $btnGuardar.dataset.egresoId;
    const accion = $btnGuardar.dataset.accion;

    console.log(cargaUtil);

    try {
      const respuestaRaw = await fetch(
        accion === "editar"
          ? "./php/actualizarEgreso.php"
          : "./php/insertarEgresos.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: EgresoId, ...cargaUtil }),
        }
      );
      const respuesta = await respuestaRaw.json();
      if (respuesta) {
        mostrarAlerta(
          `Egreso ${accion === "editar" ? "actualizado" : "guardado"}`,
          "success"
        );
        $descripcion.value = $fecha.value = $monto.value = "";
        $tipoEgreso.options[0].selected = true;
        $btnGuardar.dataset.accion = "ingresar";
        $btnGuardar.dataset.egresoId = "";
        obtenerEgresos();
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

guardarEgreso();
