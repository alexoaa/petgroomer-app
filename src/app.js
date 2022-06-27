//! To use "import" ECMS6 in packacge.json should use "type" : "module"
import express from 'express';
import ejs from 'ejs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import routes from './routes/routes.js';
import exp from 'constants';
import { Console } from 'console';

const app = express();
//* get dynamic port
const port = process.env.PORT;
console.log('Given port: ', port);

//* create dynamic route
const __dirname = dirname(fileURLToPath(import.meta.url)); 

//* using templates with ejs
app.set('views', join(__dirname, 'views')); //? dynamic route
app.set('view engine', 'ejs');
app.use(routes);
app.use(express.static(join(__dirname, 'public'))); // Load files to the nav web so they can access

//* routes
app.get('/', (req,res)=>{
    res.render('index');
});

app.listen(port || 5500, ()=>{
    console.log(`Server running on port ${port || 3000}`);
});