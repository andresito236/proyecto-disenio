<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PROYECTO DD</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  <link rel="stylesheet" href="css/index.css">
  <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css'>
</head>

<body>
  <main class="container-fluid">
    <div class="row">

      <?php include './sidebar.php' ?>

      <section class="main-dashboard p-5 col-8 col-sm-6 col-md-6 col-lg-7">
        <h3 class="text-change">Registros de: User</h3>
        <article class="row d-flex">
          <div class="mb-3 my-3 col-6 col-md-6 col-lg-4 pe-3">
            <div class="card bg-card">
              <div class="card-header fs-5 fw-bold">Ingresos Totales</div>
              <div class="card-body">
                <h5 class="card-title fs-4" id="ingresosTotales">L. 150,000</h5>
              </div>
            </div>
          </div>
          <div class="mb-3 my-3 col-6 col-md-6 col-lg-4 pe-3">
            <div class="card bg-card">
              <div class="card-header fs-5 fw-bold">Egresos Totales</div>
              <div class="card-body">
                <h5 class="card-title fs-4" id="egresosTotales">L. 150,000</h5>
              </div>
            </div>
          </div>
          <div class="mb-3 my-3 col-12 col-md-12 col-lg-4">
            <div class="card bg-card">
              <div class="card-header fs-5 fw-bold">Balance</div>
              <div class="card-body">
                <h5 class="card-title fs-4" id="balance">L. 150,000</h5>
              </div>
            </div>
          </div>
        </article>
        <article class="row d-flex">
          <div class="mb-3 my-3 col-12 col-md-6 pe-2">
            <div class="card bg-card">
              <div class="card-header fs-5 fw-bold">Ingresos de la semana</div>
              <div class="p-4 second-row d-flex">
                <div class="col-7 me-1">
                  <canvas id="dailyGraph"></canvas>
                </div>
                <div id="datosIngresosGrafico" class="d-flex flex-column gap-2 col-6">
                  <!-- Aqui se generan la lista de los 4 ingresos mas grandes de la semana cuncurrente -->
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3 my-3 col-12 col-md-6">
            <div class="card bg-card">
              <div class="card-header fs-5 fw-bold">Egresos de la semana</div>
              <div class="p-4 second-row d-flex">
                <div class="col-7 me-1">
                  <canvas id="dailyGraphEgresos"></canvas>
                </div>
                <div id="datosEgresosGraficos" class="d-flex flex-column gap-2 col-6">
                  <!-- Aqui van los egresos mas grandes de la semana concurrente -->
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="row d-flex">
          <div class="mb-3 my-3 col-12">
            <div class="card bg-card px-4 py-3">
              <div class="card-header fs-5 fw-bold"> Integrantes</div>
              <div class="card-body">
                <h4 class="card-title fs-5">1, Andres Enrique Paredes</h4>
                <h4 class="card-title fs-5">2, David Daniel Membreño</h4>
                <h4 class="card-title fs-5">3, Luis Armando Salgado</h4>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section class="main-dashboard-left p-5 col-4 col-sm-2 col-md-3 col-lg-3 d-flex align-items-center">
        <div class="bg-card">
          <div class="card-body bg-main-dashboard rounded">
            <div class="px-4 py-3 mt-2 d-flex flex-column justify-content-between h-100">
              <h3 class="fs-5">Últimas Acciones de Ingresos</h3>
              <hr>
              <ol class="list-group list-group-numbered my-4 ultimasAccionesIngresos">
              </ol>
              <h3 class="fs-5">Últimas Acciones de Egresos</h3>
              <hr>
              <ol class="list-group list-group-numbered mt-3 ultimasAccionesEgresos">
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous">
  </script>
  <script src="./js/home.js" type="module"></script>
</body>
<script src="./js/dailyGraph.js"></script>
<script src="./js/sidebar.js"></script>

</html>