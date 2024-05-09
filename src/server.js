import express from 'express'
import db  from './db/connection.js'
import bodyParser from 'body-parser'
import conection from './db/connection.js'
import cors from 'cors'

const app = express()
const PORT = 3333

import swaggerUi from 'swagger-ui-express'

import tutorsRouter from './routes/tutors.js'
import petsRouter from './routes/pets.js'
import swaggerFile from'./swagger_output.json' assert { type:"json"};
//import { Pets } from './models/Pets.js'


app.use((req, res, next) => {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});


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
// parte swagger
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
//


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

 

