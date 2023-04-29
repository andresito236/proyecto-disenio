<nav id="sidebar" class="d-flex flex-column flex-shrink-0 p-4 d-none d-sm-flex col-sm-4 col-md-3 col-lg-2 gap-3">
  <h3 class="text-change d-flex flex-column justify-content-center align-items-center my-4">
    <span class="fs-4">
      DASHBOARD
    </span>
    <span class="fs-6">
      Foraneos-App
    </span>
  </h3>
  <ul id="lista" class="nav nav-pills flex-column mb-auto gap-1">
    <li class="nav-item">
      <a href="./index.php" class="nav-link text-change">
        <i class="fi fi-rr-home me-2"></i>
        Home
      </a>
    </li>
    <li>
      <a href="#submenuIngresos" class="nav-link text-change" data-bs-toggle="collapse" href="#collapseExample"
        role="button" aria-expanded="false" aria-controls="submenuIngresos">
        <i class="fi fi-rr-coins me-2"></i>
        Ingresos
      </a>
      <div class="collapse" id="submenuIngresos">
        <ul class="nav nav-pills flex-column mb-auto gap-1 mx-2">
          <li>
            <a href="./in-actuales.php" class="nav-link text-change">
              <i class="fi fi-rr-angle-small-right"></i>
              Ingresos
            </a>
          </li>
          <li>
            <a href="./in-futuros.php" class="nav-link text-change">
              <i class="fi fi-rr-angle-small-right"></i>
              Ingresos futuros
            </a>
          </li>
          <li>
            <a href="./in-informes.php" class="nav-link text-change">
              <i class="fi fi-rr-angle-small-right"></i>
              Informes
            </a>
          </li>
        </ul>
      </div>
    </li>
    <li>
      <a href="#submenuEgresos" class="nav-link text-change" data-bs-toggle="collapse" href="#collapseExample"
        role="button" aria-expanded="false" aria-controls="submenuEgresos">
        <i class="fi fi-rr-coins me-2"></i>
        Egresos
      </a>
      <div class="collapse" id="submenuEgresos">
        <ul class="nav nav-pills flex-column mb-auto gap-1 mx-2">
          <li>
            <a href="./eg-actuales.php" class="nav-link text-change">
              <i class="fi fi-rr-angle-small-right"></i>
              Egresos
            </a>
          </li>
          <li>
            <a href="./eg-futuros.php" class="nav-link text-change">
              <i class="fi fi-rr-angle-small-right"></i>
              Egresos futuros
            </a>
          </li>
          <li>
            <a href="./eg-informes.php" class="nav-link text-change">
              <i class="fi fi-rr-angle-small-right"></i>
              Informes
            </a>
          </li>
        </ul>
      </div>
    </li>
  </ul>
  <div class="dropdown">
    <button id="theme" class="bg-card w-100 btn btn-primary">Cambiar tema</button>
  </div>
</nav>