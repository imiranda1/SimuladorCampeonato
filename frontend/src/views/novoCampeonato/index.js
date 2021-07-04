import React, { useState } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

export default function NovoCampeonato() {
    const [nomeCampeonato, setNomeCampeonato] = useState('');
    const [patrocinador, setPatrocinador] = useState('');
    const [qtddTimes, setQtdd] = useState('');
    const history = useHistory();

    function novoCampeonato(e) {
        e.preventDefault();

        const data = {
            nomeCampeonato,
            patrocinador,
            qtddTimes
        };

        try {
            api.post('/novoCampeonato', data);
            history.push('/incluir-equipes');

        } catch (err) {
            alert('Erro ao cadastrar!!');
        }
    }

    return (
        <div class="container-fluid">
            <h3 style={{ 'text-align': 'center' }}>Novo Campeonato</h3>
            <form onSubmit={novoCampeonato}>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="nomeCampeonato">Nome do Campeonato</label>
                            <input type="text" class="form-control" id="nomeCampeonato" name="nomeCampeonato" value={nomeCampeonato} onChange={e => setNomeCampeonato(e.target.value)} placeholder="Nome do campeonato" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="patrocinador">Patrocinador</label>
                            <input type="text" class="form-control" id="patrocinador" name="patrocinador" value={patrocinador} onChange={e => setPatrocinador(e.target.value)} placeholder="Patrocinador" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="qtddTimes">Quantidade de Equipes</label>
                            <input type="number" class="form-control" id="qtddTimes" name="qtddTimes" value={qtddTimes} onChange={e => setQtdd(e.target.value)} min="2" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12" style={{ 'text-align': 'center' }}>
                        <button type="submit" class="btn btn-outline-primary">Cadastrar Times</button>
                    </div>
                </div>
            </form>
        </div>
    );
}