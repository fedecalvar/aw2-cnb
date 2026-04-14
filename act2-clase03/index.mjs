//act 2

console.log("uuuuuuuuu");

// leer desde un endopoint un fetch

// 1.1 - Reconfigurar los datos / adaptr datos ----

// 2 - escribir los datos

// 3 - leer los datos del archivo guardado

import fsp from 'node:fs/promises'
import path from 'node:path';

async function obtenerDatos() {
    try {

        
        // la variable tiene que ver con lo que hay dentro de la api, tiene que ver con los datos
        const respuesta = await fetch("https://api.escuelajs.co/api/v1/users");
        const usuarios = await respuesta.json();

        const usuariosModificados = usuarios.map((usuario)=>{
            const usuarioModificado = {
                id: usuario.id,
                email: usuario.email,
                nombre: usuario.name
            }

            return usuarioModificado
        })

        const ruta = path.resolve('usuarios.json')
        const datosJson = JSON.stringify(usuariosModificados, null, 4)
        await fsp.writeFile(ruta, datosJson)

        const usuariosLocales = await fsp.readFile(ruta, 'utf-8')

        console.log(usuariosLocales)

    } catch (error) {
        console.log(error);
    }
}

console.log(obtenerDatos());
