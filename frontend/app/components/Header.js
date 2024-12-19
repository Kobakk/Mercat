import { Title } from "./Title.js";
import { Menu } from "./Menu.js";

export function Header() {
  const $header = document.createElement("header");
  $header.classList = "header";
  $header.innerHTML = `
    <nav class="nav">
      <h2 class="logo">
        <a href="index.html" class="logo-titulo">mercat</a>
      </h2>

      <div class="hamburger">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>

      <ul class="nav-list">
        <li class="nav-item"><a href="index.html" class="nav-link">Presentación</a></li>
        <li class="nav-item"><a href="#registro" class="nav-link">Categorias</a></li>
        <li class="nav-item"><a href="#contacto" class="nav-link">Contacto</a></li>
      </ul>
    </nav>
  `
  return $header;
}
