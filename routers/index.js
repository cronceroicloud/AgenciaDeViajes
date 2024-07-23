import express from 'express';
import {paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes, paginaDetalleViajes} from "../controller/paginaController.js";
import {
    guardarTestimoniales
}from '../controller/testimonialController.js'
const router = express.Router();

router.get('/',paginaInicio);
router.get('/nosotros',paginaNosotros);
router.get('/viajes',paginaViajes);
router.get('/testimoniales',paginaTestimoniales);
router.post('/testimoniales',guardarTestimoniales);

router.get('/viajes/:slug', paginaDetalleViajes)



//router.get('/', (req, res) => {
//     res.render('Inicio', {pagina: 'Inicio'});
// });

/*router.get('/nosotros', (req, res) => {
    res.render('nosotros', {pagina: 'Nosotros'});
});

router.get('/viajes', (req, res) => {
    res.render('viajes', {pagina: 'Viajes'});
});

router.get('/testimoniales', (req, res) => {
    res.render('testimoniales', {pagina: 'Testimoniales'});
});
*/
export default router;
