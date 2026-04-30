import express from 'express'

const PUERTO = 3000;


// Instancia de servidor express
const app = express()

const obtenerCosas = (req,res) =>{
    
    res.set('content-type', 'text/html')
    res.status(200)
    res.end('<h1>hola express</h1>')
}

app.get('/', obtenerCosas)




// Post 

app.post('/', (req, res) =>{

    res.end('MARI TRANSFERIMEEEEE PAGAME UN SANGUCHE')
})

app.listen(PUERTO, ()=>{
    console.log(`htpp://localhost:${PUERTO}`)
})


// const y = ()=>{
//     console.log('hola')
// }

// const x = (cb)=>{
//     console.log('ejecucion 1')
//     cb()
//     console.log('ejecucion 2')
// }

// x(y)