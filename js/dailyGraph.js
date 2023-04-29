{
  /* <span class="fs-5 d-flex align-items-center">
  <span class="d-flex align-items-center pt-2">
    <i class="text-danger fi fi-rr-arrow-small-down me-2"></i>
  </span>
  <span class="fs-6">
    Lunes: L. 20
  </span>
</span> */
}

// items

const ingresosItem = document.getElementById("datosIngresosGrafico");
const egresosItem = document.getElementById("datosEgresosGraficos");

const listItemIngresos = (datosIngresos) => {
  const val = Object.entries(datosIngresos).sort((a, b) => b[1] - a[1]);
  const nam = val.slice(0, 4);
  return Object.fromEntries(nam);
};

// Grafico de ingresos
const grafico = document.getElementById("dailyGraph").getContext("2d");
let datos = {};
const fecha_actual = new Date();
const inicio_semana_actual = new Date(
  fecha_actual.setDate(fecha_actual.getDate() - fecha_actual.getDay())
);
const fin_semana_actual = new Date(
  fecha_actual.setDate(fecha_actual.getDate() - fecha_actual.getDay() + 6)
);
inicio_semana_actual.setHours(0, 0, 0, 0);
fin_semana_actual.setHours(0, 0, 0, 0);
const diasSemana = [
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
  "domingo",
];

const ingresos = async () => {
  const res = await fetch("./php/obtenerIngresos.php");
  const response = await res.json();
  const valores = response.map(
    ({ Monto, Fecha, Confirmacion, Descripcion }) => ({
      Monto,
      Fecha,
      Confirmacion,
      Descripcion,
    })
  );

  const valoresfilter = valores.filter((item) => {
    const fechaItem = new Date(item.Fecha);
    fechaItem.setMinutes(
      fechaItem.getMinutes() + fechaItem.getTimezoneOffset()
    );
    return (
      fechaItem >= inicio_semana_actual &&
      fechaItem <= fin_semana_actual &&
      (item.Confirmacion === null || item.Confirmacion == 1)
    );
  });

  const montosPorDia = diasSemana.reduce((acumulador, nombreDia) => {
    const montosDia = valoresfilter.filter((item) => {
      const fecha = new Date(item.Fecha);
      const diaSemana = fecha.getDay();
      return diasSemana[diaSemana] === nombreDia;
    });

    const totalDia = montosDia.reduce((acumulador, item) => {
      return acumulador + parseFloat(item.Monto);
    }, 0);

    acumulador[nombreDia] = totalDia;
    return acumulador;
  }, {});
  datos = montosPorDia;
};

ingresos().then((montosPorDia) => {
  const listing = listItemIngresos(datos);

  Object.entries(listing).forEach(([day, value]) => {
    ingresosItem.innerHTML += `
    <span class="fs-5 d-flex align-items-center">
      <span class="d-flex align-items-center pt-2">
        <i class="text-success fi fi-rr-arrow-small-up me-2"></i>
      </span>
      <span class="fs-6">
        ${day}: L. ${value}
      </span>
    </span>
    `;
  });

  const miChart = new Chart(grafico, {
    type: "doughnut",
    data: {
      labels: [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
      ],
      datasets: [
        {
          data: [
            datos.domingo,
            datos.lunes,
            datos.martes,
            datos.miércoles,
            datos.jueves,
            datos.viernes,
            datos.sábado,
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1",
            "rgba(231, 233, 237, 1)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(231, 233, 237, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      cutout: "60%",
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: "right",
          align: "center",
          labels: {
            padding: 8,
            boxWidth: 15,
            fontSize: 150,
          },
        },
        title: {
          display: false,
        },
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            var label = data.labels[tooltipItem.index];
            var value = data.datasets[0].data[tooltipItem.index];
            return label + ": " + value;
          },
        },
      },
    },
  });
});

const grafico2 = document.getElementById("dailyGraphEgresos").getContext("2d");

const egresos = async () => {
  const res = await fetch("./php/obtenerEgresosActuales.php");
  const response = await res.json();
  const valores = response.map(
    ({ Monto, Fecha, Confirmacion, Descripcion }) => ({
      Monto,
      Fecha,
      Confirmacion,
      Descripcion,
    })
  );

  const valoresfilter = valores.filter((item) => {
    const fechaItem = new Date(item.Fecha);
    fechaItem.setMinutes(
      fechaItem.getMinutes() + fechaItem.getTimezoneOffset()
    );
    return (
      fechaItem >= inicio_semana_actual &&
      fechaItem <= fin_semana_actual &&
      (item.Confirmacion == 1 || item.Confirmacion == null)
    );
  });

  const montosPorDia = diasSemana.reduce((acumulador, nombreDia) => {
    const montosDia = valoresfilter.filter((item) => {
      const fecha = new Date(item.Fecha);
      const diaSemana = fecha.getDay();

      return diasSemana[diaSemana] === nombreDia;
    });

    const totalDia = montosDia.reduce((acumulador, item) => {
      return acumulador + parseFloat(item.Monto);
    }, 0);

    acumulador[nombreDia] = totalDia;
    return acumulador;
  }, {});
  datos = montosPorDia;
};

egresos().then((montosPorDia) => {
  const listing = listItemIngresos(datos);

  Object.entries(listing).forEach(([day, value]) => {
    egresosItem.innerHTML += `
    <span class="fs-5 d-flex align-items-center">
      <span class="d-flex align-items-center pt-2">
        <i class="text-success fi fi-rr-arrow-small-up me-2"></i>
      </span>
      <span class="fs-6">
        ${day}: L. ${value}
      </span>
    </span>
    `;
  });
  const miChart2 = new Chart(grafico2, {
    type: "doughnut",
    data: {
      labels: [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
      ],
      datasets: [
        {
          data: [
            datos.domingo,
            datos.lunes,
            datos.martes,
            datos.miércoles,
            datos.jueves,
            datos.viernes,
            datos.sábado,
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1",
            "rgba(231, 233, 237, 1)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(231, 233, 237, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      cutout: "60%",
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: "right",
          align: "center",
          labels: {
            padding: 8,
            boxWidth: 15,
            fontSize: 150,
          },
        },
        title: {
          display: false,
        },
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            var label = data.labels[tooltipItem.index];
            var value = data.datasets[0].data[tooltipItem.index];
            return label + ": " + value;
          },
        },
      },
    },
  });
});
