const Sequelize = require("sequelize");

const sequelize = new Sequelize("simulador_campeonato", "admin", "adminaws", {
    host : "database-1.cne4pisah95x.sa-east-1.rds.amazonaws.com",
    dialect : "mysql",
    logging : false 
});
module.exports = sequelize;
global.sequelize = sequelize;