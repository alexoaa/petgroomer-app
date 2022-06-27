import { Router } from "express";
const router = Router();

router.get('/agendar-una-cita',(req,res)=>{
    res.render('agendar', {title: 'Agenda tu cita'})
});

export default router;