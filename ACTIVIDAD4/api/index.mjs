import express from 'express'

const PUERTO = 4321;

const app = express()

app.get('/:usuario', (req, res)=>{
    
    const usuario = {
        codigo: 1222
    }
    res.json(usuario)
})

app.listen(PUERTO);

