import express from 'express'

const PUERTO = 3000

const app = express()

const verificarCodigo = async (req, res, next) => {
    try {
        const resp = await fetch('http://localhost:4321/usuario')
        const data = await resp.json()

        const codigoConsumido = data && data.codigo
        const codigoParam = isNaN(Number(req.params.codigo)) ? req.params.codigo : Number(req.params.codigo)

        if (codigoConsumido == codigoParam) {
            return next()
        }

        return res.status(400).json({ mensaje: 'El código es incorrecto' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al consumir el servicio externo' })
    }
}

app.get('/:codigo', verificarCodigo, (req, res) => {
    return res.status(200).json({ mensaje: 'El código es correcto' })
})

app.listen(PUERTO)