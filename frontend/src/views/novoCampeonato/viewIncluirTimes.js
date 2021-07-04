import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import './style.css';
var times = [];

export default function IncluirTimeCampeonato() {
    const history = useHistory();
    const [equipes, setEquipes] = useState([]);
    useEffect(() => {
        api.get('equipes').then(response => {
            setEquipes(response.data);
        })
    }, [equipes]);

    function escolhaDeTimes(id_time) {
        if (times.find(element => element == id_time)) {
            for (var i = 0; i < times.length; i++) {
                if (times[i] === id_time) {
                    times.splice(i, 1);
                }
            }
        } else {
            times.push(id_time);
        }

        console.log(times);
        document.getElementById(id_time).classList.toggle('alterar');
    }

    function gerarPartidas(){
        api.post('gerarPartidas', times);
        history.push('/');
    }

    return (
        <div className="container-fluid">
            <h3 style={{ 'textAlign': 'center' }}>Lista de Equipes</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome da Equipe</th>
                        <th scope="col">Sigla</th>
                        <th scope="col" style={{ 'textAlign': 'center' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {equipes.map(equipe => (
                        <tr>
                            <th scope="row">{equipe.eqp_id}</th>
                            <td>{equipe.eqp_nome}</td>
                            <td>{equipe.eqp_sigla}</td>
                            <td style={{ 'textAlign': 'center' }}>
                                <button type="button" onClick={() => escolhaDeTimes(equipe.eqp_id)} id={equipe.eqp_id} className="btn btn-sm btn-outline-success">Incluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="row">
                <div className="col-md-12" style={{ 'text-align': 'center' }}>
                    <button type="button" onClick={() => gerarPartidas()} className="btn btn-outline-primary">Gerar Partidas</button>
                </div>
            </div>
        </div>
    );

}