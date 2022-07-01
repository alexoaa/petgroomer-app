import { Router } from 'express';
//? Module sql import
import { mysqlConnection } from "../database.js"

const router = Router();
let mascota = '';

router.post('/nueva-cita', (req,res)=>{
    const { idCita, nombreCliente, nombreMascota, tamanoMascota, numeroTelefono, segundoNumeroTelefono, servicio, fecha, hora, precio } = req.body;

    if (!(Object.keys(req.body).length === 0)) {
        mascota = nombreMascota;
        console.log(req.body);
        mysqlConnection.query(
            'SELECT * FROM cita WHERE id_cita_C = ?', [idCita], (err, results, fields)=>{
                if (err) throw err;
                res.status(200).json(results);
            }
        );
    } else {
        // res.status(405).json('No params');        
        console.log('No params');
    }
});

router.get('/confirmacion-cita', (req,res)=> {
    res.render('confirmacionCita', 
        { 
            nombreMascota: mascota      
        });
});

export default router;