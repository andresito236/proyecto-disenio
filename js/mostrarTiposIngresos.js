export default async function mostrarTiposIngresos() {
  const optionsEgresos = document.querySelector(".form-select"),
    $fragment = document.createDocumentFragment();

  const responseRaw = await fetch("./php/tipoIngreso.php");
  const response = await responseRaw.json();

  for (const options of response) {
    const option = document.createElement("option");

    option.value = options["TipoID"];
    option.textContent = options["Nombre"];

    $fragment.appendChild(option);
  }
  optionsEgresos.appendChild($fragment);
}
