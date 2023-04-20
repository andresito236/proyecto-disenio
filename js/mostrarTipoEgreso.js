export default async function mostrarTiposEgresos() {
  const optionsEgresos = document.querySelector(".form-select"),
    $fragment = document.createDocumentFragment();

  const responseRaw = await fetch("./php/tipoEgreso.php");
  const response = await responseRaw.json();

  for (const options of response) {
    const option = document.createElement("option");

    option.value = options["TipoID"];
    option.textContent = options["Nombre"];

    $fragment.appendChild(option);
  }
  optionsEgresos.appendChild($fragment);
}
