const Pacientes = require("../models/Pacientes")

const pacientesController = {
    async listarPacientes(req, res) {

        const listagemPacientes = await Pacientes.findAll();

        res.json(listagemPacientes);

    },

    async listarPacienteId(req, res) {
        const {
            id
        } = req.params;

        const listaPaciente = await Pacientes.findOne({
            where: {
                id,
            }
        });
        res.json(listaPaciente);
    },


    async cadastrarPaciente(req, res) {
        const {
            nome,
            email,
            idade,
        } = req.body;

        const novoCadastro = await Pacientes.create({
            nome,
            email,
            idade,
        });
        res.json(novoCadastro);
    },
    async deletarPacientes(req, res) {
        const {
            id
        } = req.params;

        await Pacientes.destroy({
            where: {
                id,
            },
        });
        res.json("Cadastro deletado!")
    },

    async atualizarPacientes(req, res) {
        const {
            id
        } = req.params;
        const {
            nome,
            email,
            apresentacao,
            senha,
        } = req.body;

        const atualizaPacientes = await Pacientes.update({
            nome,
            email,
            apresentacao,
            senha,
        }, {
            where: {
                id,
            },
        });
        res.json("Cadastro atualizado com sucesso!")
    },
};

module.exports = pacientesController;