const db = require('./db');

const Task = db.sequelize.define('tasks',{
    titulo:{
        type: db.Sequelize.STRING
    },
    descricao:{
        type: db.Sequelize.TEXT
    }
});

//db.sequelize.sync({alter:true});

module.exports = Task;