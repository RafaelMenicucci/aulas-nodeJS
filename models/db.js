//conectando banco
const Sequelize = require('sequelize');
const sequelize = new Sequelize('tasks', 'rafaelAlves', 'SENHA',{
    host:"localhost",
    dialect:'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}