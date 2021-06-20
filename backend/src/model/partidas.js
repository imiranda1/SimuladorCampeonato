// function criarRodadasTurno(times,  campeonato) {
//     List<Rodada> rodadas = new ArrayList<>();

//     int t = times.size();
//     int m = times.size() / 2; //partidas por rodada
//     for (int i = 0; i < t - 1; i++) {
//         Rodada rodada = new Rodada();
//         rodada.setId(i + 1);
//         System.out.print((i + 1) + "a rodada: ");
//         rodada.setDescricao((i + 1) + "a Rodada");
//         rodada.setCampeonato(campeonato);
//         rodada.setData(LocalDate.now());
//         List<Partida> partidas = new ArrayList<>();
//         for (int j = 0; j < m; j++) {
//             Partida partida = new Partida();
//             if (j % 2 == 1 || i % 2 == 1 && j == 0) {


//                 System.out.print(times.get(t - j - 1) + " x " + times.get(j) + "   ");
//                 partida.setTimeCasa(times.get(t - j - 1));
//                 partida.setTimeVisitante(times.get(j));
//                 partida.setStatus(PartidaStatus.ABERTO);
//                 partidas.add(partida);

//             }
//             else {
//                 System.out.print(times.get(j) + " x " + times.get(t - j - 1) + "   ");

//                 partida.setTimeCasa(times.get(j));
//                 partida.setTimeVisitante(times.get(t - j - 1));
//                 partida.setStatus(PartidaStatus.ABERTO);
//                 partidas.add(partida);

//             }

//              //partidas da rodada
//             rodada.setPartidas(partidas);

//         }//segundo for

//         rodadas.add(rodada);

//         System.out.println();


//         times.add(1, times.remove(times.size()-1));


//     }
//     return rodadas;

// }


// public List<Rodada> criarRodadasTurnoContraTurno(List<Time> times, Campeonato campeonato) {
//     List<Rodada> rodadas = new ArrayList<>();

//     int t = times.size();
//     int m = times.size() / 2; //partidas por rodada
//     for (int i = 0; i < t - 1; i++) {
//         Rodada rodada = new Rodada();
//         rodada.setId(i + 1);
//         System.out.print((i + 1) + "a rodadado 1 Turno : ");
//         rodada.setDescricao((i + 1) + "a Rodada do 1 Turno");
//         rodada.setCampeonato(campeonato);
//         rodada.setData(LocalDate.now());
//         List<Partida> partidas = new ArrayList<>();
//         for (int j = 0; j < m; j++) {
//             Partida partida = new Partida();
//             if (j % 2 == 1 || i % 2 == 1 && j == 0) {


//                 System.out.print(times.get(t - j - 1) + " x " + times.get(j) + "   ");
//                 partida.setTimeCasa(times.get(t - j - 1));
//                 partida.setTimeVisitante(times.get(j));
//                 partida.setStatus(PartidaStatus.ABERTO);
//                 partidas.add(partida);

//             }
//             else {
//                 System.out.print(times.get(j) + " x " + times.get(t - j - 1) + "   ");

//                 partida.setTimeCasa(times.get(j));
//                 partida.setTimeVisitante(times.get(t - j - 1));
//                 partida.setStatus(PartidaStatus.ABERTO);
//                 partidas.add(partida);

//             }

//             //partidas da rodada
//             rodada.setPartidas(partidas);

//         }//segundo for




//         rodadas.add(rodada);

//         System.out.println();

//         times.add(1, times.remove(times.size()-1));
//     }
//     console.log ("\n-----SEGUNDO TURNO-----\n");
//     for (int i = 0; i < t - 1; i++) {
//         Rodada rodada = new Rodada();
//         rodada.setId(i + 1 + m);
//         System.out.print((i + 1) + "a rodada do 2 Turno: ");
//         rodada.setDescricao((i + 1) + "a Rodada do 2 Turno");

//         rodada.setCampeonato(campeonato);
//         rodada.setData(LocalDate.now());
//         List<Partida> partidas = new ArrayList<>();
//         for (int j = 0; j < m; j++) {
//             Partida partida = new Partida();
//             if (j % 2 == 1 || i % 2 == 1 && j == 0) {

//                 System.out.print(times.get(j)  + " x " + times.get(t - j - 1) + "   ");


//                 partida.setTimeVisitante(times.get(t - j - 1));
//                 partida.setTimeCasa(times.get(j));
//                 partida.setTimeVisitante(times.get(j));
//                 partida.setStatus(PartidaStatus.ABERTO);
//                 partidas.add(partida);

//             }
//             else {
//                 System.out.print(times.get(t - j - 1) + " x " + times.get(j) + "   ");

//                 partida.setTimeCasa(times.get(t - j - 1));
//                 partida.setTimeVisitante(times.get(j));
//                 partida.setStatus(PartidaStatus.ABERTO);
//                 partidas.add(partida);

//             }

//             //partidas da rodada
//             rodada.setPartidas(partidas);

//         }//segundo for




//         rodadas.add(rodada);

//         System.out.println();

//         times.add(1, times.remove(times.size()-1));
//     }


//     return rodadas;

// }