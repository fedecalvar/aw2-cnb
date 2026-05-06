import express from 'express'

const PUERTO = 3000;

const app = express()

app.get('/:codigo', (req, res)=>{
    
    res.status(200).json({mensaje:`El codigo es correcto`})
})

app.listen(PUERTO);