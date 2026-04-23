// importamos modulos nativos de node.js
import fsp from 'node:fs/promises';
import path from 'node:path';
import http from 'node:http';

// funcion para obtener usuarios de la api y guardarlos en un archivo json.
async function obtenerDatos() {
    try {
        const respuesta = await fetch('https://api.escuelajs.co/api/v1/users');

        if (!respuesta.ok) {
            throw new Error('Error al obtener los usuarios desde la API');
        }

        // convertimos la respuesta json en un array de javascript
        const usuarios = await respuesta.json();

        // ruta absoluta del archivo usuarios.json
        const ruta = path.resolve('usuarios.json');

        // convertimos el array a texto json
        const datosJson = JSON.stringify(usuarios, null, 4);

        // guardamos los datos en el archivo
        await fsp.writeFile(ruta, datosJson);

        // leemos el archivo guardado
        const usuariosLocales = await fsp.readFile(ruta, 'utf-8');

        // devolvemos el contenido para enviarlo al cliente
        return usuariosLocales;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

// creamos el servidor http
const app = http.createServer(async (peticion, respuesta) => {
    // ruta raiz
    if (peticion.method === 'GET' && peticion.url === '/') {
        respuesta.statusCode = 200;
        return respuesta.end('Estas en la raiz');
    }

    // ruta usuarios
    if (peticion.method === 'GET' && peticion.url === '/usuarios') {
        try {
            const usuariosLocales = await obtenerDatos();

            respuesta.statusCode = 200;
            respuesta.setHeader('Content-Type', 'application/json; charset=utf-8');
            return respuesta.end(usuariosLocales);
        } catch (error) {
            respuesta.statusCode = 500;
            return respuesta.end('Error interno del servidor');
        }
    }

    // para todas las rutas restantes
    respuesta.statusCode = 404;
    respuesta.end('Recurso no encontrado');
});

// levantamos el servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});