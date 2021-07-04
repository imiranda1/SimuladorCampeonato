function sortearCampeonato() {
    const result = {
        "camp_id": 1,
        "times": [1, 2, 3, 4]

    };

    var camp_id = result.camp_id;
    var times = result.times;

    var partidas = [];

    var t = times.length;

    for (var i = 0; i < t; i++) {
        for (var j = i + 1; j < t; j++) {
            var partida = {
                idTimeCasa: times[i],
                idTimeVisitante: times[j]
            };
            partidas[partidas.length] = partida;
        }
       
    }
    const retorno = {
        "camp_id":camp_id,
        "partidas":partidas
    };
    return retorno;
}
sortearCampeonato()

