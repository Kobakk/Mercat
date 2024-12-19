import config_db from "../helpers/config_db.js";
import ProductosView from "./ProductosView.js";
import { peticion } from "../helpers/peticion.js";
import API from "../helpers/config_db.js";
import { Books } from "./Books.js";
import { Container } from "./Container.js";
// import {Books} from "/Books.js";

export function Router() {
  const $main = document.getElementById("main");
  const $centerContainer = document.getElementById("centerContainer");
  let { hash } = location;

  if (hash == "") {
    // Ruta Actual
    console.log("codigo inicial")
    peticion({
      url: API.BOOKS_ALL,
      cbSuccess: (json) => {
        let data = json.data;
        console.log(data)
        console.log($main)
        $main.appendChild(ProductosView(data));
      },
    });
  } else if (hash == "#registro") {
    console.log('registro')
  } else if (hash == "#buscador") {
    console.log('usuario')
  } else {
    $main.innerHTML = "No conozco la ruta";
  }
}
