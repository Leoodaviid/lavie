const {
    Atendimentos
} = require("../models")

const AtendimentosController = {
    async listarAtendimentos(req, res) {

        const listagemAtendimentos = await Atendimentos.findAll();

        res.json(listagemAtendimentos);

    },

    async listarAtendimentoId(req, res) {
        const {
            id
        } = req.params;

        const listaAtendimento = await Atendimentos.findOne({
            where: {
                id,
            }
        });
        res.json(listaAtendimento);
    },


    async cadastrarAtendimento(req, res) {
        const {
            id_psicologo,
            data_atendimento,
            observacao,
        } = req.body;

        const novoCadastro = await Atendimentos.create({
            id_psicologo,
            data_atendimento,
            observacao,
        });
        res.json(novoCadastro);
    },
    async deletarAtendimentos(req, res) {
        const {
            id
        } = req.params;

        await Atendimentos.destroy({
            where: {
                id,
            },
        });
        res.json("Cadastro deletado!")
    },

    async atualizarAtendimentos(req, res) {
        const {
            id
        } = req.params;
        const {
            id_paciente,
            data_atendimento,
            observacao,
        } = req.body;

        const atualizaAtendimentos = await Atendimentos.update({
            data_atendimento,
            observacao,
        }, {
            where: {
                id,
            },
        });
        res.json("Cadastro atualizado com sucesso!")
    },
};

module.exports = AtendimentosController;