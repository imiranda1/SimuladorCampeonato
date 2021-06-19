const express = require('express');
const routes = express.Router();
const mysql = require('./conn');
const bodyParser = require('body-parser');

routes.use(bodyParser.json());
routes.get('/', function(req, res){
    res.send("INDEX");
});

routes.get('/novo-campeonato', function(req, res){

    res.send("novoCamp");
});


routes.post('/equipes', (req, res) => {
    const result = req.body;
    var idInsert = 0;
    if (!result) {
      return res.status(400).end();
    }

    var sql = `INSERT INTO equipes (eqp_nome, eqp_sigla) VALUES('${result.nome}', '${result.sigla}')`;

    mysql.query(sql, function (err, result) {
        if (err) {
            return ('Falha ao inserir dados!' + err)
        }
        console.log('Dados inseridos com sucesso!')
    })

    return res.status(201).send("Dados inseridos com sucesso!");
  });


routes.get('/equipes', function(req, res){
    mysql.query('SELECT * FROM equipes', (err,result) => {
        if(err) throw err;
        res.status(200).send(result)
      });
});

routes.get('/campeonatos', function(req, res){
    mysql.query('SELECT * FROM campeonatos', (err,result) => {
        if(err) throw err;
        res.status(200).send(result)
      });
});




module.exports = routes;