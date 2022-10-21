const express = require("express");
const routes = require("./routes"); // pegando exportacao das rotas
const handleError = require("./middlewares/handleError")
const db = require("./database");



const app = express();

db.hasConection();

app.use(express.json());

app.use(routes); // usando rotas exportadas do ./routes/index.js e usando

app.use(handleError);


app.listen(3000, () => console.log("Servidor rodando na porta 3000"));