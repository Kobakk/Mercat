export function Landing() {
    const $landing = document.createElement("article");
    $landing.classList = "box-center";
    $landing.id = "landing";
    $landing.innerHTML = `
        <h1 class="titulo" id="titulo">Encuentra tus productos locales</h1>
        <h2 class="sub-titulo">Apoya a tu comercio local</h2>
        <p class="main-text">
            👋 Soy programador, titulado de grado superior en <span class="orange">desarrollo web y
            otro grado de sistemas</span> 🖥️, he trabajado realizando paginas web en
            north market, ademas de realizar paginas para algunos clientes de
            manera independiente.
        </p>
        <a href="https://www.linkedin.com/in/sebasveleza/">
            <span class="button-work">Crea tu cuenta gratuita</span>
        </a>
    `;

    return $landing;
}