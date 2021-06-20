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


/* --------------EQUIPES -----------------*/
  // GET EQUIPE BY ID
routes.get('/equipes/:id', function(req, res){
    mysql.query(`SELECT * FROM equipes WHERE eqp_id = ${req.params.id} `, (err,result) => {
        if(err) throw err;
        res.status(200).send(result)
      });
});

  // GET EQUIPE LIST
routes.get('/equipes', function(req, res){
    mysql.query('SELECT * FROM equipes', (err,result) => {
        if(err) throw err;
        res.status(200).send(result)
      });
});

  // POST CRIAR EQUIPE
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


/* --------------CAMPEONATO -----------------*/

  // GET CAMPEONATO LIST
routes.get('/campeonatos', function(req, res){
    mysql.query('SELECT * FROM campeonatos', (err,result) => {
        if(err) throw err;
        res.status(200).send(result)
      });
});

  // GET CAMPEONATO BY ID
  routes.get('/campeonatos/:id', function(req, res){
    mysql.query(`SELECT * FROM campeonatos WHERE camp_id = ${req.params.id} `, (err,result) => {
        if(err) throw err;
        res.status(200).send(result)
      });
});


  // POST CRIAR CAMPEONATO
  routes.post('/campeonatos', (req, res) => {
    const result = req.body;
    var idInsert = 0;
    if (!result) {
      return res.status(400).end();
    }
    var sql = `INSERT INTO campeonatos (camp_nome,camp_patrocinador,camp_quantidade_times,camp_status) 
        VALUES('${result.camp_nome}', '${result.camp_patrocinador}','${result.camp_quantidade_times}','${result.camp_status}')`;

    mysql.query(sql, function (err, result) {
        if (err) {
            return ('Falha ao inserir dados!' + err)
        }
        console.log('Dados inseridos com sucesso!')
    })

    return res.status(201).send("Dados inseridos com sucesso!");
  });


  /* -------------- PARTIDAS -----------------*/

  // GET PARTIDAS BY ID CAMPEONATO LIST
routes.get('/campeonatos/:id/partidas', function(req, res){
    mysql.query(`SELECT * FROM partidas WHERE par_camp_id = ${req.params.id}`, (err,result) => {
        if(err) throw err;
        res.status(200).send(result)
      });
});


  // GET PARTIDAS BY ID CAMPEONATO LIST
  routes.get('/campeonatos/:id/partidas', function(req, res){
    mysql.query(`SELECT * FROM partidas WHERE par_camp_id = ${req.params.id}`, (err,result) => {
        if(err) throw err;
        res.status(200).send(result)
      });
});






module.exports = routes;