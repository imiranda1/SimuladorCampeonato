import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import ListarCampeonato from './views/listarCampeonatos/index';
import NovoCampeonato from './views/novoCampeonato/index';
import IncluirTimeCampeonato from './views/novoCampeonato/viewIncluirTimes';
import NovoTime from './views/novoTime/index';
import ListarEquipes from './views/listarEquipes/index';
import ClassificacaoCampeonato from './views/listarCampeonatos/viewTabelaClassificacao';
import Partidas from './views/listaPartidas/index';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ListarCampeonato} />
                <Route path="/novo-campeonato" exact component={NovoCampeonato} />
                <Route path="/incluir-equipes" exact component={IncluirTimeCampeonato} />
                <Route path="/nova-equipe" exact component={NovoTime} />
                <Route path="/listar-equipes" exact component={ListarEquipes} />
                <Route path="/classificacao" exact component={ClassificacaoCampeonato} />
                <Route path="/partidas" exact component={Partidas} />
            </Switch>
        </BrowserRouter>
    );
}