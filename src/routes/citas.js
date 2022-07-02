import { Router } from 'express';
//? Module sql import
import { mysqlConnection } from "../database.js"

const router = Router();
let mascota = '';

router.post('/nueva-cita', (req, res) => {
    const { idCita, nombreCliente, nombreMascota, razaMascota, tamanoMascota, numeroTelefono, segundoNumeroTelefono, servicio, fecha, hora, precio } = req.body;

    if (!(Object.keys(req.body).length === 0)) {
        mascota = nombreMascota;
        console.log(req.body);

        const query = 'CALL citaCrearNueva(0,?,?,?,?,?,?,?,?,?,?);';
        mysqlConnection.query(query, [nombreCliente, nombreMascota, razaMascota, tamanoMascota, numeroTelefono, segundoNumeroTelefono, servicio, fecha, hora, precio], (err, results, fields) =>{
                if (err) {
                    //! https://restfulapi.net/http-status-codes/
                    res.status(400).json({error : err});
                };
                res.status(200).json({message : 'Cita agendada correctamente.'});
            }
        );
    } else {
        res.status(405).json({error : 'No params'});
        console.log('No params');
    }
});

router.get('/confirmacion-cita', (req, res) => {
    res.render('confirmacionCita',
        {
            nombreMascota: mascota
        });
});

export default router;