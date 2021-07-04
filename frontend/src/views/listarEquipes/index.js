import React, { useState, useEffect } from 'react';
import api from '../../services/api';

export default function ListarEquipes() {
    const [equipes, setEquipes] = useState([]);
    useEffect(() => {
        api.get('equipes').then(response => {
            setEquipes(response.data);
        })
    }, [equipes]);
    return (
        <div className="container-fluid">
            <h3 style={{ 'textAlign': 'center' }}>Lista de Equipes</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome da Equipe</th>
                        <th scope="col">Sigla</th>
                    </tr>
                </thead>
                <tbody>
                {equipes.map(equipe => (
                    <tr>
                        <th scope="row">{equipe.eqp_id}</th>
                        <td>{equipe.eqp_nome}</td>
                        <td>{equipe.eqp_sigla}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}