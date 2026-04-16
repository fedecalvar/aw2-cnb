import http from "node:http";

const app = http.createServer((peticion, respuesta) => {
    if (peticion.method == "GET")
        {
            if (peticion.url === "/") {

                respuesta.statusCode = 200;
                return respuesta.end("Estas en la raiz");
            }

            if(peticion.url === '/usuarios')
            {
                respuesta.statusCode = 200;
                return respuesta.end("Estas en la ruta usuarios");

            }
    }
    /*console.log('peticion recibida')
    */
    respuesta.statusCode = 404;
    respuesta.end('Ruta no encontrada');
    /*
    console.log('peticion.url, peticion.method')*/
    // no se pueden ejecutar dos o mas end si o si se tiene que ejecutar uno solo, va a dar error. Si son rutas diferentes si
    
});

app.listen(3000, () => {
    console.log("servidor corriendo en http://localhost:3000");
});
