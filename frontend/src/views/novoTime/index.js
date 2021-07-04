import React, { useState } from 'react';
import api from '../../services/api';
import {useHistory } from 'react-router-dom';

export default function NovoTime() {
    const [nomeTime, setNomeTime] = useState('');
    const [sigla, setSigla] = useState('');
    const history = useHistory();

    function novaEquipe(e) {
        e.preventDefault();

        const data = {
            nomeTime,
            sigla

        };

        try {
            api.post('/equipes', data);
            history.push('/listar-equipes');

        } catch (err) {
            alert('Erro ao cadastrar!!');
        }
    }




    return (
        <div className="container">
            <h3 style={{ 'textAlign': 'center' }}>Nova Equipe</h3>
            <form onSubmit={novaEquipe}>
                <div className="row">
                    <div className="col-md-8">
                        <div className="form-group">
                            <label htmlFor="nomeTime">Nome da Equipe</label>
                            <input type="text" className="form-control" id="nomeTime" name="nomeTime" placeholder="Nome da equipe" value={nomeTime} onChange={e => setNomeTime(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="patrocinador">Sigla</label>
                            <input type="text" className="form-control" id="sigla" name="sigla" placeholder="SIGLA" value={sigla} onChange={e => setSigla(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12" style={{ 'textAlign': 'center' }}>
                        <a href="javascript:history.back()" className="btn btn-outline-secondary" style={{ 'marginRight': '5px' }}>Voltar</a>
                        <button type="submit" className="btn btn-outline-primary">Salvar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}