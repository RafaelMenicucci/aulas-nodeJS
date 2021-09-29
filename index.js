const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Task = require('./models/Tasks');

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//template engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine','handlebars');

//rotas
app.get('/',function(req,res){
    res.render('home');
});

app.get('/cad',function(req,res){
    res.render('formulario');
});

app.post('/add',function(req,res){
    Task.create({
        titulo: req.body.titulo,
        descricao: req.body.descricao
    }).then(function(){
        res.send("Task criada");
        res.redirect("/");
    }).catch(function(erro){
        res.send("Erro: "+erro);
    })
});

app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081");
});