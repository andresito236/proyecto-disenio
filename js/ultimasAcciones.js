export async function obtenerUltimasAcciones() {
  const $ultimasAcciones = document.querySelector(".ultimasAcciones");

  const respuestaRawIngresos = await fetch(
    "./php/obtenerUltimasAccionesIngresos.php"
  );
  const ultimasAccionesIngresos = await respuestaRawIngresos.json();

  const respuestaRawEgresos = await fetch(
    "./php/obtenerUltimasAccionesEgresos.php"
  );
  const ultimasAccionesEgresos = await respuestaRawEgresos.json();

  const fragment = document.createDocumentFragment();

  ultimasAccionesIngresos.forEach((el) => {
    const li = document.createElement("li");
    li.classList.add(
      "bg-card",
      "list-group-item",
      "d-flex",
      "bg-card",
      "justify-content-between",
      "align-items-center"
    );
    li.innerHTML = `<div class="ms-2 me-auto">
                      <div class="fw-bold">${el.tipo}</div>
                      ${el.Descripcion}
                    </div>
                    <span class="badge bg-primary rounded-pill">L. ${el.Monto}</span>
                  `;
    fragment.appendChild(li);
  });

  ultimasAccionesEgresos.forEach((el) => {
    const li = document.createElement("li");
    li.classList.add(
      "bg-card",
      "list-group-item",
      "d-flex",
      "bg-card",
      "justify-content-between",
      "align-items-center"
    );
    li.innerHTML = `<div class="ms-2 me-auto">
                      <div class="fw-bold">${el.tipo}</div>
                      ${el.Descripcion}
                    </div>
                    <span class="badge bg-primary rounded-pill">L. ${el.Monto}</span>
                  `;
    fragment.appendChild(li);
  });

  $ultimasAcciones.appendChild(fragment);
}
