const mysql = require("mysql2");

const conn  = mysql.createConnection({
    'user':'admin',
    'password':'adminaws',
    'database':'simulador_campeonato',
    'host':'database-1.cne4pisah95x.sa-east-1.rds.amazonaws.com',
    'port':'3306'  
})

module.exports = conn;