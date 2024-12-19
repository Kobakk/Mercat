export default function ProductosView(data) {
    const $padre = document.createElement("div");
    $padre.classList = "container";
  
    const $form = document.createElement("form");
    $form.classList = "mt-5";
    $form.innerHTML = `<input role=search id=search type=search placeholder=Search></input>`;
    $padre.appendChild($form);
  
    const $contenedorCartas = document.createElement("div");
    $contenedorCartas.classList =
      "row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4";
    data.forEach((element) => {
      const $card = document.createElement("div");
      $card.classList = "col w-20 p-3";
      $card.innerHTML = `
      <div class="card">
        <img
          src="${element.img}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text text-truncate">
            Texto descriptivo del producto.
          </p>
          <a href="#" class="btn btn-primary">15 €</a>
        </div>
      </div>
    `;
      $contenedorCartas.appendChild($card);
    });
  
    $form.addEventListener("keyup", (e) => {
      $contenedorCartas.innerHTML = "";
      let valor = e.target.value;
      let filtro = data.filter((e) => {
        return e.title.toLowerCase().includes(valor.toLowerCase());
      });
      filtro.forEach((element) => {
        const $card = document.createElement("div");
        $card.classList = "col w-20 p-3";
        $card.innerHTML = `
          <div class="card">
            <img
              src="${element.img}"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text text-truncate">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Read more...</a>
            </div>
          </div>
        `;
  
        $contenedorCartas.appendChild($card);
      });
    });
  
    $padre.appendChild($contenedorCartas);
    return $padre;
  }
  