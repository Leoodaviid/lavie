const psicologos = require("../models/Psicologos");
const bcrypt = require("bcryptjs");

const psicologosController = {
    async listarPsicologos(req, res) {

        const listagemPsicologos = await psicologos.findAll();

        res.json(listagemPsicologos);

    },
    // async registrarPsicologo(req, res) {
    //     const {
    //         email,
    //         senha
    //     } = req.body;

    //     const newSenha = bcrypt.hashSync(senha, 10);

    //     const newPsicologo = await psicologos.create({
    //         email,
    //         senha: newSenha
    //     });

    //     return res.status(201).json(newPsicologo);
    // },

    async listarPsicologoId(req, res) {
        try {
            const {
                id
            } = req.params;

            const listaPsicologo = await psicologos.findOne({
                where: {
                    id,
                }
            });
            if (!listaPsicologo) {
                return res.status(404).json({
                    message: "Id não encontrado"
                })
            };
            res.status(200).json(listaPsicologo);
        } catch (error) {

        }
    },


    async cadastrarPsicologos(req, res) {
        try {
            const {
                nome,
                email,
                apresentacao,
                senha,
            } = req.body;

            const newSenha = bcrypt.hashSync(senha, 10);


            const novoCadastro = await psicologos.create({
                nome,
                email,
                apresentacao,
                senha: newSenha,
            });
            if (!novoCadastro) {
                return res.status(400).json({
                    message: "Erro na requisição"
                })
            };
            res.status(201).json(novoCadastro);
        } catch (error) {

        }

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