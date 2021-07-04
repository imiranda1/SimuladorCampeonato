const connection = require('../conn');
module.exports = {
    inserirEquipe(request, response) {
        const result = request.body;
        var idInsert = 0;
        if (!result) {
            return response.status(400).end();
        }

        var sql = `INSERT INTO equipes (eqp_nome, eqp_sigla) VALUES('${result.nome}', '${result.sigla}')`;

        connection.query(sql, function (err, result) {
            if (err) {
                return ('Falha ao inserir dados!' + err)
            }
            console.log('Dados inseridos com sucesso!')
        })

        return response.status(201).send("Dados inseridos com sucesso!");
    },

    TodasEquipes(request, response) {
        connection.query('SELECT * FROM equipes', (err, result) => {
            if (err) throw err;
            response.status(200).send(result)
        });
    }
};