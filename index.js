import express from 'express';
import router from './routers/index.js';
import db from './config/db.js';


const app = express();
const port = process.env.PORT || 4000;


//conectar BBDD
db.authenticate()
    .then (()=> console.log('Authenticated'))
    .catch( err => console.log(err));


//habilitar pug
app.set('view engine', 'pug');


//Obtener el año actual
app.use((req,res, next)=>{
    const year = new Date().getFullYear();
    res.locals.añoActual = year;
    res.locals.nombresitio = "Agencia de viajes"

    next();
})

//definir la carpeta pública

app.use(express.static('public'));

//Agregar body parser para los formularios de entrada
app.use(express.urlencoded({extended: true}));



app.use('/', router);


app.listen(port, () => {
    console.log(`El servidor funciona en el puerto ${port}`);
});


