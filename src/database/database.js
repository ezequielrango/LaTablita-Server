const mysql = require('mysql');
const dotenv = require('dotenv').config();

const mysqlConnection = mysql.createConnection({
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
})

mysqlConnection.connect((err) => {
    if (err) {
        console.log(err);
    } else{
        console.log('Database connected');
    }
});

module.exports = mysqlConnection;