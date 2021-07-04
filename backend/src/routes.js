const express = require('express');
const routes = express.Router();
const mysql = require('./conn');
const bodyParser = require('body-parser');
const CampeonatosController = require('./controller/CampeonatosController');
const TimesController = require('./controller/TimesController');


routes.post('/equipes', TimesController.inserirEquipe);
routes.get('/equipes', TimesController.TodasEquipes);
routes.get('/campeonatos', CampeonatosController.todosCampeonatos);




module.exports = routes;