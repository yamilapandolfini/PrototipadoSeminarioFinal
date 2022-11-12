const express = require('express')
const moment = require('moment')
const { getConnection } = require('./dao/db/connection')
const { PORT } = require('./config/globals')
const cors = require('cors')

const app = express()
app.use(cors())

//routers
const routerLogin = require('./routes/login')
const routerUsuario = require('./routes/usuario')
const routerEstadisticas = require('./routes/estadisticas')
const routerProfesores = require('./routes/profesores')


app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/log', routerLogin)
app.use('/usr', routerUsuario)
app.use('/est', routerEstadisticas)
app.use('/prf', routerProfesores)



//LEVANTO EL SERVER
getConnection().then((message) => { 
    console.log(message);
    app.listen(PORT, () =>{ //cambiar app por server para websocket
        console.log(`Listening on port: ${PORT}`);
    });
}).catch(console.log);



//test
app.get('/', (req,res)=>{
    res.send('Hola')
})