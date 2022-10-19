const express = require("express");
const psicologosController = require("../controllers/psicologosController.js");
const pacientesController = require("../controllers/pacientesController");

const routes = express.Router()

routes.get("/psicologos/lista", psicologosController.listarPsicologos);
routes.get("/psicologos/:id", psicologosController.listarPsicologoId);
routes.post("/psicologos/criar", psicologosController.cadastrarPsicologos);
routes.delete("/psicologos/:id/deletar", psicologosController.deletarPsicologos);
routes.put("/psicologos/:id/atualizar", psicologosController.atualizarPsicologos);

routes.get("/pacientes/lista", pacientesController.listarPacientes);
routes.get("/pacientes/:id", pacientesController.listarPacienteId);
routes.post("/pacientes/criar", pacientesController.cadastrarPaciente);
routes.put("/pacientes/:id/atualizar", pacientesController.atualizarPacientes);
routes.delete("/pacientes/:id/deletar", pacientesController.deletarPacientes);

module.exports = routes;