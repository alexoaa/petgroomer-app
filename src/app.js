//! To use "import" ECMS6 in packacge.json should use "type" : "module"
import express from 'express';
import ejs from 'ejs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import routes from './routes/routes.js';
import exp from 'constants';
import { Console } from 'console';
import citas from './routes/citas.js';
import consulta from './routes/consulta.js'

const app = express();

//* get dynamic port
const port = process.env.PORT;
console.log('Given port: ', port);

//* create dynamic route
const __dirname = dirname(fileURLToPath(import.meta.url)); 

//* Settings 
//? using templates with ejs
app.set('views', join(__dirname, 'views')); // dynamic route
app.set('view engine', 'ejs');

//* Middleware
app.use(express.json()); //To convert data recieved into json
app.use(express.static(join(__dirname, 'public'))); // Load files to the nav web so they can access
app.use(routes, citas);
app.use('/admin', consulta);

//* Routes
app.get('/', (req,res)=>{
    res.render('index');
});

//* Starting the server
app.listen(port || 5500, ()=>{
    console.log(`Server running on port ${port || 3000}`);
});