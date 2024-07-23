import {Viaje} from '../models/Viaje.js';
import {Testimonial} from "../models/testimoniales.js";


const paginaInicio = async (req, res) => {

    //Si queremos que las consultas se hagan de 1 en 1 detras de otra es así
    // const viajes = await Viaje.findAll({limit: 3});
    //const testimoniales = await Testimonial.findAll({limit: 3});

    //Si queremos hacer las dos consultas en paralelo para ir más rapido. Puedes bloquear alguna si ese resultado
    //depende del siguiente. Creas un vector de promesas
    const promiseDB = [];
    promiseDB.push(Viaje.findAll({limit: 3}));
    promiseDB.push(Testimonial.findAll({limit: 3}));

    //Consultar 3 viajes del modelo de Viaje
    try{
        //opción en orden
        //const viajes = await Viaje.findAll({limit: 3});
        //const testimoniales = await Testimonial.findAll({limit: 3});

        //opción en paralelo
        const resultado= await Promise.all(promiseDB);
        res.render('Inicio', {pagina: 'Inicio', clase: 'home', viajes: resultado[0], testimoniales: resultado[1]});

    }catch (e) {
        console.log(e);
    }



}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {pagina: 'Nosotros'});
}
const paginaViajes  = async (req, res) => {
    const viajes = await Viaje.findAll();


    res.render('viajes', {pagina: 'Próximos Viajes', viajes});
}
/*
const paginaTestimoniales = (req, res) => {
    res.render('testimoniales', {pagina: 'Testimoniales'});
}*/

const paginaDetalleViajes = async (req, res) => {


    const {slug} = req.params;

    try {
        const resultado = await Viaje.findOne({ where: { slug: slug } });


            res.render('viaje', {
                pagina: 'Información Viaje',
                resultado
            });
        }catch(error){
        console.log(error);
        }
    };


const paginaTestimoniales = async (req, res) => {
    try{
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {pagina: 'Testimoniales', testimoniales});

    }catch (e) {console.log(e);}

}



export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViajes,
}
