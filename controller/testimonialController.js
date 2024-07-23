import {Testimonial} from "../models/testimoniales.js";

const guardarTestimoniales =  async (req, res) => {
    //Validar

    console.log(req.body);

    const {nombre, correoelectronico, mensaje}= req.body;

    const errores = [];

    if (nombre.trim() ===''){
    errores.push("el nombre está vacío")
    }
    if (correoelectronico.trim() ===''){
        errores.push("el correo está vacío")
    }
    if (mensaje.trim() ===''){
        errores.push("el mensaje está vacío")
    }



    if (errores.length > 0){
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
        nombre, correoelectronico, mensaje, testimoniales});
    }else{
        //Almaceno en la BBDD porque va todo bien

        try{
            await Testimonial.create({nombre, correoelectronico, mensaje})
            res.redirect('/testimoniales');
        }catch(error){console.log(error)}


    }
}

export {
    guardarTestimoniales
}