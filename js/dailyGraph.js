// Grafico de ingresos
const grafico = document.getElementById("dailyGraph").getContext("2d");

const ingresos = async () => {
  const res = await fetch('http://localhost/proyecto-disenio/php/obtenerIngresos.php')
  const response = await res.json()
  const valores = response.map(({Monto, Fecha}) => ({ Monto, Fecha }))
  const valoresfilter = valores.filter((item)=>{
    const fechaItem = new Date(item.Fecha)
    const fecha_actual = new Date()
    inicio_semana_actual = new Date(fecha_actual.setDate(fecha_actual.getDate() - fecha_actual.getDay() + 1));
    return fechaItem > inicio_semana_actual
  })
  console.log(valoresfilter)
  console.log(valores)
}

ingresos()

const miChart = new Chart(grafico, {
  type: "doughnut",
  data: {
    labels: [
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
      "Domingo",
    ],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3, 7],
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


// Grafico de egresos 
const grafico2 = document.getElementById("dailyGraphEgresos").getContext("2d");
// Crear el objeto Chart y definir las opciones
const miChart2 = new Chart(grafico2, {
  type: "doughnut",
  data: {
    labels: [
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
      "Domingo",
    ],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3, 7],
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
