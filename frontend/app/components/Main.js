import { Container } from "./Container.js";
import { Title } from "./Title.js";

export function Main() {
  const $main = document.createElement("main");
  $main.classList = "main";
  $main.id = "main";
  $main.innerHTML = `
      <article class="box-center">
        <h1 class="titulo" id="titulo">Encuentra tus productos locales</h1>
        <h2 class="sub-titulo">Apoya a tu comercio local</h2>
        <p class="main-text">
          👋 Soy programador, titulado de  grado superior en <span class="orange"> desarrollo web y <br> 
          otro grado de sistemas </span> 🖥️, he trabajado realizando paginas web en  <br>
          north market , ademas de realizar paginas para algunos clientes de <br>
          manera independiente.
        </p>
        <a href="https://www.linkedin.com/in/sebasveleza/"> <span class="button-work">Crea tu cuenta gratuita</span></a>
      </article>
    </section>
  `
  $main.appendChild(Title());
  $main.appendChild(Container());

  return $main;
}
