const mysql = require('mysql2')

const con = mysql.createConnection({
    host:"localhost",
    port:3308,
    user:"test",
    password:"test",
    database:'test'
});

module.exports = con