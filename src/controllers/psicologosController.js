const psicologos = require("../models/Psicologos")

const psicologosController = {
    async listarPsicologos(req, res) {

        const listagemPsicologos = await psicologos.findAll();

        res.json(listagemPsicologos);

    },

    async listarPsicologoId(req, res) {
        const {
            id
        } = req.params;

        const listaPsicologo = await psicologos.findOne({
            where: {
                id,
            }
        });
        res.json(listaPsicologo);
    },


    async cadastrarPsicologos(req, res) {
        const {
            nome,
            email,
            apresentacao,
            senha,
        } = req.body;

        const novoCadastro = await psicologos.create({
            nome,
            email,
            apresentacao,
            senha,
        });
        res.json(novoCadastro);
    },
    async deletarPsicologos(req, res) {
        const {
            id
        } = req.params;

        await psicologos.destroy({
            where: {
                id,
            },
        });
        res.json("Cadastro deletado!")
    },

    async atualizarPsicologos(req, res) {
        const {
            id
        } = req.params;
        const {
            nome,
            email,
            apresentacao,
            senha,
        } = req.body;

        const atualizaPsicologos = await psicologos.update({
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

module.exports = psicologosController;