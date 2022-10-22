const {
    Atendimentos,
    Psicologos,
    Pacientes
} = require("../models")

const AtendimentosController = {
    async listarAtendimentos(req, res) {

        const listagemAtendimentos = await Atendimentos.findAll({
            includes: Psicologos,
            Pacientes,
        });

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
        try {
            const {
                data_atendimento,
                observacao,
                id_psicologo,
                id_pacientes,
            } = req.body;

            const novoCadastro = await Atendimentos.create({
                // id_psicologo,
                // id_pacientes,
                data_atendimento,
                observacao,
            });
            const psicologo = await Psicologos.findByPk(id_psicologo);
            const paciente = await Pacientes.findByPk(id_pacientes);

            await novoCadastro.setPsicologos(psicologo);
            await novoCadastro.seStPacientes(paciente);

            res.json(novoCadastro);
        } catch (error) {
            return res.status(500).json("registro nao encontrado" + error)
        }
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