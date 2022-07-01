// ! USING MYSQL2 MODULE
import mysql from "mysql2";

// create the connection to database
const mysqlConnection = mysql.createConnection({
    host: '127.0.0.1',
    user : 'root',
    password: 'admin123',
    database: 'petgroomerapp'
});

mysqlConnection.connect((err)=>{
    if (err) {
        console.log({status: 'error', log: err});
        // console.log({status: 'error', log: err.stack});
        return;
    }
    console.log('Connected to db as ' + mysqlConnection.threadId);
});

export {mysqlConnection};