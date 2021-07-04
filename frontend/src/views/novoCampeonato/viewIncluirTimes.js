import React, { useState, useEffect } from 'react';
import api from '../../services/api';

export default function IncluirTimeCampeonato() {
    const [equipes, setEquipes] = useState([]);
    useEffect(() => {
        api.get('equipes').then(response => {
            setEquipes(response.data);
        })
    }, [equipes]);
    return (
        <div class="container-fluid">
            <h3 style={{ 'text-align': 'center' }}>Lista de Equipes</h3>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome da Equipe</th>
                        <th scope="col">Sigla</th>
                        <th scope="col" style={{ 'text-align': 'center' }}>
                            <a href="/nova-equipe" class="btn btn-sm btn-outline-primary">Nova Equipe</a>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {equipes.map(equipe => (
                    <tr>
                        <th scope="row">{equipe.eqp_id}</th>
                        <td>{equipe.eqp_nome}</td>
                        <td>{equipe.eqp_sigla}</td>
                        <td style={{ 'text-align': 'center' }}>
                            <a href="/incluir-equipe" class="btn btn-sm btn-outline-success">Selecionar</a>
                        </td>
                    </tr>
                     ))}
                </tbody>
            </table>
        </div>
    );
}