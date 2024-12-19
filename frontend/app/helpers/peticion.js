export async function peticion(obj) {
    let { url, cbSuccess } = obj;
    try {
      let respuesta = await fetch(url, { method: "GET" });
      if (!respuesta.ok) {
        throw respuesta;
      }
      let json = await respuesta.json();
      cbSuccess(json);
    } catch (err) {
      let { respuesta } = err;
      console.log(respuesta.status);
    }
  }
  export async function peticionRandom(obj) {
    let { url, cbSuccess } = obj;
    try {
      let respuesta = await fetch(url, { method: "GET" });
      if (!respuesta.ok) {
        throw { respuesta };
      }
      let json = await respuesta.json();
      cbSuccess(json);
    } catch (err) {
      let { respuesta } = err;
      console.log(respuesta.status);
    }
  }
  