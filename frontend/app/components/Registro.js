export function Registro() {
    const $registro = document.createElement("main");
    $registro.classList = "main";
    $registro.innerHTML = `
    <article class="box-center">  
        <div class="container">
            <h1 class="">Unete a nuestra comunidad</h1>
            <p>¿Ya tienes una cuenta? <a href="inicioSesion.html">Inicia tu sesion</a></p>                
            <form action="" method="" class="form">
                <label for="nombre">Nombre:</label>
                    <input type="text" name="nombre" class="nombre">
                <label for="mail"> Mail: <span class="span-anotation">(ejemplo@mail.es)</span></label>
                    <input type="text" name="mail">
                <label for="password">Contraseña: <span class="span-anotation">(mínimo 8 caracteres)</span> </label>
                    <input type="password" name="password">
                <button type="submit" class="link-button">Registrarse</button>
            </form>            
        </div>  
    </article>`;
    return $registro;
  }