import { Router } from 'express';
//? Module sql import
import { mysqlConnection } from "../database.js"

const router = Router();

router.post('/nueva-cita', (req, res) => {
    const { nombreCliente, nombreMascota, razaMascota, tamanoMascota, numeroTelefono, segundoNumTel, servicio, fechaCita, horaCita, precioServicio } = req.body;
    if (!(Object.keys(req.body).length === 0)) {
        // console.log(req.body);

        const query = 'CALL citaCrearNueva(0,?,?,?,?,?,?,?,?,?,?);';
        mysqlConnection.query(query, [nombreCliente, nombreMascota, razaMascota, tamanoMascota, numeroTelefono, segundoNumTel, servicio, fechaCita, horaCita, precioServicio], (err, results, fields) => {
            if (err) {
                //! https://restfulapi.net/http-status-codes/
                res.status(400).json({ status: "error", log: err });
            };
            res.json({
                status : 'Cita guardada',
                nombreMascota : nombreMascota,
                servicio : servicio,
                fechaCita : fechaCita,
                horaCita : horaCita,
                precioServicio : precioServicio

            });
        }
        );
    } else {
        res.status(405).json({ error: 'No params' });
        console.log('No params');
    }
});

/* router.post('/confirmacion-cita', (req, res) => {
    const { nombreMascota, servicio, fechaCita, horaCita, precioServicio } = req.body;
    console.log(req.body);
    res.status(200).render('confirmacionCita', {
        message: 'Cita agendada!',
        nombreMascota: nombreMascota,
        servicio: servicio,
        fechaCita: fechaCita,
        horaCita: horaCita,
        precioServicio: precioServicio
    });
});
 */

export default router;