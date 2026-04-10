
// .mjs --> modulo ECMASript(ESM)

// console.log('biboooool'); crtl + }

import fsp from 'node:fs/promises';
import path from 'node:path';

// Lectura de archivos
// try{
//     const  contenido = await fsp.readFile('./texto.txt', 'utf-8')
//     console.log(contenido);

// }catch(e){
//     console.log(e);
// }


// Escritura de archivos
try{
    // const ruta = path.join('./texto.txt')
    const ruta = path.join('.','./texto.txt')
    await fsp.writeFile(ruta, 'Contenido Cambiado, sifon ubeda sos lo mejor que le paso a boca');
    const  contenido = await fsp.readFile(ruta, 'utf-8')
    console.log(contenido);

}catch(e){
    console.log(e);
}