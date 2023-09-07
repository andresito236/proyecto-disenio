export async function obtenerUltimasAcciones() {
  const $ultimasAccionesIngresos = document.querySelector(
    ".ultimasAccionesIngresos"
  );

  const $ultimasAccionesEgresos = document.querySelector(
    ".ultimasAccionesEgresos"
  );

  const respuestaRawIngresos = await fetch(
    "./php/obtenerUltimasAccionesIngresos.php"
  );
  const ultimasAccionesIngresos = await respuestaRawIngresos.json();

  const fragmentIngresos = document.createDocumentFragment();

  ultimasAccionesIngresos.forEach(el => {
    const li = document.createElement("li");
    li.classList.add(
      "bg-card",
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    // <li class="list-group-item bg-card d-flex justify-content-between align-items-start">
    //   <div class="ms-2 me-auto">
    //     <div class="fw-bold">Subheading</div>
    //     Content for list item
    //   </div>
    //   <span class="badge bg-primary rounded-pill">14</span>
    // </li>;
    li.innerHTML = `<div class="ms-2 me-auto">
                      <div class="fw-bold">${el.tipo}</div>
                      ${el.Descripcion}
                    </div>
                    <span class="badge bg-primary rounded-pill">L. ${el.Monto}</span>
                  `;
    fragmentIngresos.appendChild(li);
  });

  $ultimasAccionesIngresos.appendChild(fragmentIngresos);

  const respuestaRawEgresos = await fetch(
    "./php/obtenerUltimasAccionesEgresos.php"
  );
  const ultimasAccionesEgresos = await respuestaRawEgresos.json();

  const fragmentEgresos = document.createDocumentFragment();

  ultimasAccionesEgresos.forEach(el => {
    const li = document.createElement("li");
    li.classList.add(
      "bg-card",
      "list-group-item",
      "d-flex",
      "bg-card",
      "justify-content-between",
      "align-items-center",
      "gap-3"
    );
    li.innerHTML = `<div class="ms-2 me-auto">
                      <div class="fw-bold">${el.tipo}</div>
                      ${el.Descripcion}
                    </div>
                    <span class="badge bg-primary rounded-pill">L. ${el.Monto}</span>
                  `;
    fragmentEgresos.appendChild(li);
  });

  $ultimasAccionesEgresos.appendChild(fragmentEgresos);
}
