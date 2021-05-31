const express = require('express');
const routes = express.Router();


routes.get('/', function(req, res){
    res.send("INDEX");
});
routes.get('/novo-campeonato', function(req, res){
    res.send("novoCamp");
});
routes.get('/novo-campeonato/adicionar-equipes', function(req, res){
    res.send("addEquipes");
});

routes.get('/novo-campeonato/gerar-partidas', function(req, res){
    res.send("gerarPartidas");
});

routes.get('/gerenciar-campeonato', function(req, res){
    res.send("gerenciarCamp");
});

routes.get('/gerenciar-campeonato/excluir-campeonato', function(req, res){
    res.send("excluirCamp");
});

routes.get('/gerenciar-campeonato/atualizar-partidas', function(req, res){
    res.send("atlzarPartidas");
});

routes.get('/gerenciar-campeonato/classificacao', function(req, res){
    res.send("classificacao");
});


module.exports=routes;