const Sequelize = require("sequelize");

const DB_NAME = "lavie";
const DB_USER = "root";
const DB_PASS = "Leood@viid59512587";
const DB_CONFIG = {
    dialect: "mysql",
    host: "localhost",
    port: 3306
};


// objeto para guardar a conecção do banco de dados
let db = {};
try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
    console.error("Error ao tentar uma coneção com o banco de dados!!");
}


async function hasConection() {
    try {
        await db.authenticate();
        console.log("Banco de dados conectado com sucesso!")
    } catch (error) {
        console.log(error)
        console.error("Erro ao tentar se conectar ao banco de dados!");
    }
}

Object.assign(db, {
    hasConection,
});

module.exports = db;