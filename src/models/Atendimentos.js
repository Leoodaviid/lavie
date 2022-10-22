const db = require("../database");

const {
    DataTypes
} = require("sequelize");

const Psicologos = require("./Psicologos")
const Pacientes = require("./Pacientes")


const Atendimentos = db.define("Atendimentos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    data_atendimento: {
        type: DataTypes.DATE,
    },
    observacao: {
        type: DataTypes.STRING
    },
    id_psicologo: {
        type: DataTypes.INTEGER,
        references: {
            model: Psicologos,
            key: "id_psicologo"
        }
    },
    id_pacientes: {
        type: DataTypes.INTEGER,
        references: {
            model: Pacientes,
            key: "id_pacientes",
        }
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