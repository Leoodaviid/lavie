const Atendimentos = require("./Atendimentos");
const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");


Pacientes.belongsToMany(Psicologos, {
    foreignKey: "id_pacientes",
    through: Atendimentos,
});
Psicologos.belongsToMany(Pacientes, {
    foreignKey: "id_psicologo",
    through: Atendimentos,
});

module.exports = {
    Atendimentos,
    Pacientes,
    Psicologos,
}