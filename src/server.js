import express from 'express'
import db  from './db/connection.js'
import bodyParser from 'body-parser'
import conection from './db/connection.js'
const app = express()
const PORT = 3333

import tutorsRouter from './routes/tutors.js'
import petsRouter from './routes/pets.js'
//import { Pets } from './models/Pets.js'

app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`)
})

// body
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))

db.authenticate()
.then(() => {
    console.log("Conectou ao banco com sucesso")
})
.catch(err => {
    console.log("Ocorreu um erro ao conectar", err)
})


conection
.sync()
//.sync({ force: true})
.then(() => {
    console.log("Sicronizado")
}).catch(err => {
    console.log(err);
})



app.get('/', (req, res) => {
    res.send('Esta funcionando')
})

// all tutor routes
app.use( petsRouter); 
app.use( tutorsRouter);