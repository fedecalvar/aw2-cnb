import express from 'express';
// import productos from './productos.mjs'

// importando function
import {obtenerProductos} from './funciones.mjs';
// si dejamos las {} vacias y posamos el cursor encima de ellas + barra-espaciadora
// nos va a dar un atajo para encontrar la funcion que importamos

// proxima clase instalamos nodemon


const PUERTO = 3000;
const app = express()


// configurar una API Rest basica

// get /api/v1/productos
app.get('/api/v1/productos', (req,res)=>{

    res.json(productos);
})



// get /api/v1/productos/:id
app.get('/api/v1/productos/:id', (req,res) =>{
    const producto = productos.find(p => p.id === parseInt(req.params.id))

    if(!producto){
        return res.status(404).json({message: 'Producto no encontrado'})
    }
    res.json(producto)
})

// // post /api/v1/productos/
// app.post('/api/v1/productos/')

// hacer en casa jejejeje
// hacer en casa jejejeje
// hacer en casa jejejeje
// hacer en casa jejejeje
// hacer en casa jejejeje

// // put /api/v1/productos/:id 
// app.put('/api/v1/productos/:id')

// // delete /api/v1/productos/:id
// app.delete('/api/v1/productos/:id')


app.listen(PUERTO)