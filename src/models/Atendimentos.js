const db = require("../database");

const {
    DataTypes
} = require("sequelize");

const Psicologos = require("./Psicologos")
const Pacientes = require("./Pacientes")


const Atendimentos = db.define("Atendimentos", {

    id_psicologo: {
        type: DataTypes.INTEGER,
        references: {
            model: Psicologos,
            key: "id"
        }
    },
    id_pacientes: {
        type: DataTypes.INTEGER,
        references: {
            model: Pacientes,
            key: "id",
        }
    },
    data_atendimento: {
        type: DataTypes.DATE,
    },
    observacao: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },

}, {
    tableName: "atendimento",
});

module.exports = Atendimentos;