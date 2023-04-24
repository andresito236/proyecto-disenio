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
                <h5 class="card-title fs-4">L. 150,000</h5>
              </div>
            </div>
          </div>
          <div class="mb-3 my-3 col-6 col-md-6 col-lg-4 pe-3">
            <div class="card bg-card">
              <div class="card-header fs-5 fw-bold">Egresos Totales</div>
              <div class="card-body">
                <h5 class="card-title fs-4">L. 150,000</h5>
              </div>
            </div>
          </div>
          <div class="mb-3 my-3 col-12 col-md-12 col-lg-4">
            <div class="card bg-card">
              <div class="card-header fs-5 fw-bold">Balance</div>
              <div class="card-body">
                <h5 class="card-title fs-4">L. 150,000</h5>
              </div>
            </div>
          </div>
        </article>
        <article class="row d-flex">
          <div class="mb-3 my-3 col-12 col-md-6 pe-2">
            <div class="card bg-card">
              <div class="card-header fs-5 fw-bold">Ultimas acciones</div>
              <div class="card-body second-row">
                <ol class="list-group">
                  <li class="bg-card list-group-item d-flex bg-card justify-content-between align-items-center">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold">Subheading</div>
                      Content for list item
                    </div>
                    <span class="badge bg-primary rounded-pill">L.2500</span>
                  </li>
                  <li class="bg-card list-group-item d-flex bg-card justify-content-between align-items-center">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold">Subheading</div>
                      Content for list item
                    </div>
                    <span class="badge bg-primary rounded-pill">L.2500</span>
                  </li>
                  <li class="bg-card list-group-item d-flex bg-card justify-content-between align-items-center">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold">Subheading</div>
                      Content for list item
                    </div>
                    <span class="badge bg-primary rounded-pill">L.2500</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div class="mb-3 my-3 col-12 col-md-6">
            <div class="card bg-card">
              <div class="card-header fs-5 fw-bold">Egresos de la semana</div>
              <div class="p-4 second-row d-flex">
                <div class="col-7 me-1">
                  <canvas id="dailyGraph"></canvas>
                </div>
                <div class="d-flex flex-column gap-2 col-6">
                  <span class="fs-5 d-flex align-items-center">
                    <span class="d-flex align-items-center pt-2">
                      <i class="text-danger fi fi-rr-arrow-small-down me-2"></i>
                    </span>
                    <span class="fs-6">
                      Lunes: L. 20
                    </span>
                  </span>
                  <span class="fs-5 d-flex align-items-center">
                    <span class="d-flex align-items-center pt-2">
                      <i class="text-danger fi fi-rr-arrow-small-down me-2"></i>
                    </span>
                    <span class="fs-6">
                      Martes: L. 20
                    </span>
                  </span>
                  <span class="fs-5 d-flex align-items-center">
                    <span class="d-flex align-items-center pt-2">
                      <i class="text-success fi fi-rr-arrow-small-up me-2"></i>
                    </span>
                    <span class="fs-6">
                      Miercoles: L. 20
                    </span>
                  </span>
                  <span class="fs-5 d-flex align-items-center">
                    <span class="d-flex align-items-center pt-2">
                      <i class="text-success fi fi-rr-arrow-small-up me-2"></i>
                    </span>
                    <span class="fs-6">
                      Jueves: L. 20
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="row d-flex">
          <div class="mb-3 my-3 col-12">
            <div class="card bg-card">
              <div class="card-header fs-5 fw-bold"> Integrantes</div>
              <div class="card-body">
                <h3 class="card-title fs-4">Andres Enrique Paredes</h3>
                <h3 class="card-title fs-4">David Daniel Membreño</h3>
                <h3 class="card-title fs-4">Luis Armando Salgado</h3>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section class="main-dashboard-left p-5 col-4 col-sm-2 col-md-3 col-lg-3">
        <h3 class="text-change mb-5">Registros de: User</h3>
        <div class="bg-card">
          <div class="card-body">
            <ol class="list-group">
              <li class="bg-card list-group-item d-flex bg-card justify-content-between align-items-center">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <span class="badge bg-primary rounded-pill">L.2500</span>
              </li>
              <li class="bg-card list-group-item d-flex bg-card justify-content-between align-items-center">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <span class="badge bg-primary rounded-pill">L.2500</span>
              </li>
              <li class="bg-card list-group-item d-flex bg-card justify-content-between align-items-center">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <span class="badge bg-primary rounded-pill">L.2500</span>
              </li>
              <li class="bg-card list-group-item d-flex bg-card justify-content-between align-items-center">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <span class="badge bg-primary rounded-pill">L.2500</span>
              </li>
              <li class="bg-card list-group-item d-flex bg-card justify-content-between align-items-center">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <span class="badge bg-primary rounded-pill">L.2500</span>
              </li>
              <li class="bg-card list-group-item d-flex bg-card justify-content-between align-items-center">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <span class="badge bg-primary rounded-pill">L.2500</span>
              </li>
              <li class="bg-card list-group-item d-flex bg-card justify-content-between align-items-center">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <span class="badge bg-primary rounded-pill">L.2500</span>
              </li>
              <li class="bg-card list-group-item d-flex bg-card justify-content-between align-items-center">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <span class="badge bg-primary rounded-pill">L.2500</span>
              </li>
              <li class="bg-card list-group-item d-flex bg-card justify-content-between align-items-center">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <span class="badge bg-primary rounded-pill">L.2500</span>
              </li>
              <li class="bg-card list-group-item d-flex bg-card justify-content-between align-items-center">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <span class="badge bg-primary rounded-pill">L.2500</span>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  </main>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous">
  </script>
</body>
<script src="./js/dailyGraph.js"></script>
<script src="./js/sidebar.js"></script>

</html>