import express from 'express'

const PUERTO = 3000;

const app = express();

// Middleware
function middleware1(req, res, next){
    console.log('se ejecuto el middleware 1')

        if(true){
            res.send('terminado en middleware1')
        }else{
            next()
        }

}

app.use(express.static('front'))

app.use('/saludo', middleware1)

app.get('/', (req,res)=>{

    console.log('peticion')
    res.send(`Bienvenidos`)
})

app.get('/saludo/dia', middleware1, (req,res)=>{

    console.log('peticion')
    res.send(`Bienvenidos`)
})


app.listen(PUERTO, ()=>{
    console.log(`http://localhost:${PUERTO}`)
})