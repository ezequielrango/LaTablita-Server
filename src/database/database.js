const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host : "localhost",
    user : 'root',
    password : 'password',
    database : 'latablita'
})

mysqlConnection.connect((err) => {
    if (err) {
        console.log(err);
    } else{
        console.log('Database connected');
    }
});

module.exports = mysqlConnection;