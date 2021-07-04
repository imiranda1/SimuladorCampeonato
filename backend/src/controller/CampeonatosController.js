const connection = require('../conn');
module.exports = {
    todosCampeonatos(request, response) {
        connection.query('SELECT * FROM campeonatos', (err, result) => {
            if (err) throw err;
            response.status(200).send(result)
                    
        });
    }
};
