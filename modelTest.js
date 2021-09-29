const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'rafaelAlves', 'SENHA',{
    host:"localhost",
    dialect:'mysql'
});

const Task = sequelize.define('tasks',{
    titulo:{
        type: Sequelize.STRING
    },
    descricao:{
        type: Sequelize.TEXT
    }
});

sequelize.sync({alter:true});

Task.create({
    titulo: "teste",
    descricao: "nova descricao"
});