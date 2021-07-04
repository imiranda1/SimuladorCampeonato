const connection = require('../conn');
module.exports = {
    todosCampeonatos(request, response) {
        connection.query('SELECT * FROM campeonatos WHERE camp_status ="A"', (err, result) => {
            if (err) throw err;
            response.status(200).send(result)

        });
    },

    novoCampeonato(request, response) {
        const result = request.body;
        if (!result) {
            return response.status(400).end();
        }
        
        var sql = `INSERT INTO campeonatos (camp_nome, camp_patrocinador, camp_quantidade_times, camp_status) VALUES('${result.nomeCampeonato}', '${result.patrocinador}', '${result.qtddTimes}', 'A')`;

        connection.query(sql);

        return response.status(201).send("Dados inseridos com sucesso!");
    },

    gerarPartidas(request, response) {
        const result = request.body;
        var times = result;
        var id_camp;
        var sql = 'SELECT camp_id FROM campeonatos ORDER BY camp_id DESC LIMIT 0,1';
        connection.query(sql, (err, result) => {
            if (err) throw err;
            id_camp = result[0].camp_id;
            var t = times.length;
            for (var i = 0; i < t; i++) {
                var sql = `INSERT INTO campeonato_equipes (eqp_id, eqp_pontos, eqp_camp_id) VALUES('${times[i]}', '0', '${id_camp}')`;
                connection.query(sql);
                for (var j = i + 1; j < t; j++) {
                    var sql = `INSERT INTO partidas (par_eqp_casa, par_eqp_fora, par_camp_id) VALUES('${times[i]}', '${times[j]}', '${id_camp}')`;
                    connection.query(sql);
                }
            }
        });

    },

    buscarPartidas(request, response) {
        var id_camp = 3;
        connection.query('SELECT * FROM partidas INNER JOIN campeonatos ON par_camp_id = camp_id WHERE par_camp_id = 3', (err, result) => {
            if (err) throw err;
            response.status(200).send(result)

        });
    },

    alterarPartidas(request, response) {
        
    },

        
    deletarCampeonato(request, response) {
        console.log('teste');
        const { id } = request.params;
        console.log(id);
        connection.query(`UPDATE campeonatos SET camp_status ='C' WHERE camp_id =${id}`, (err, result) => {
            if (err) throw err;
            response.status(200).send(result)
        });
    }

};
