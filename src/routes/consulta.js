import { Router } from 'express';
//? Module sql import
import { mysqlConnection } from "../database.js"

const router = Router();

router.get('/consulta-cita', (req, res)=>{
    const query = 'SELECT * FROM cita;';
    mysqlConnection.query(query, (err, results, fields)=>{
        if (err) {
            //! https://restfulapi.net/http-status-codes/
            res.status(400).json({ status: "error", log: err });
        };
        res.status(200).json(results);
    });
});



export default router;