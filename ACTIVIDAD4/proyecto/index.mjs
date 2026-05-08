import express from 'express'

const PUERTO = 3000
const app = express()

// Definir middleware
const validacionCodigo = async (req, res, next) => {
    try {

        const codigo = Number(req.params.codigo)
        // 1 - fetch ->
        const respuesta = await fetch('http://localhost:4321/usuario')
        const usuario = await respuesta.json()
        // objeto
        if (usuario.codigo === codigo) {
            next()
        } else {
            res.status(401).json({ mensaje: 'El codigo es incorrecto' })
        }
    }catch(error){
        return res.status(500).json({ error: 'Error al consumir el servicio externo' })
    }
}

// Definir ruta GET /:codigo
// peticion -> middleware -> callback final
app.get('/:codigo', validacionCodigo, (req, res) => {
    res.status(200).json({ mensaje: 'El codigo es correcto' })
})

app.listen(PUERTO, () => console.log(`Servidor corriendo en http://localhost:${PUERTO}`))