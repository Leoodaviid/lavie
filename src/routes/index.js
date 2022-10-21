const express = require("express");
const psicologosController = require("../controllers/psicologosController.js");
const pacientesController = require("../controllers/pacientesController");
const atendimentosController = require("../controllers/atendimentosController");
const requestLog = require("../middlewares/requestLog");
const psicologoCreateValidation = require("../validations/create");
const authLoginValidation = require("../validations/auth/login");
const authController = require("../controllers/authController");



const routes = express.Router()

routes.get("/psicologos", requestLog, psicologosController.listarPsicologos);
routes.get("/psicologos/:id", requestLog, psicologosController.listarPsicologoId);
routes.post("/psicologos", psicologoCreateValidation, psicologosController.cadastrarPsicologos);
routes.delete("/psicologos/:id", psicologosController.deletarPsicologos);
routes.put("/psicologos/:id", psicologosController.atualizarPsicologos);

routes.get("/pacientes", pacientesController.listarPacientes);
routes.get("/pacientes/:id", pacientesController.listarPacienteId);
routes.post("/pacientes", pacientesController.cadastrarPaciente);
routes.put("/pacientes/:id", pacientesController.atualizarPacientes);
routes.delete("/pacientes/:id", pacientesController.deletarPacientes);

routes.post("/psicologos/login", authLoginValidation, authController.login);


// routes.post("/atendimentos/criar", atendimentosController.cadastrarAtendimento);

module.exports = routes;