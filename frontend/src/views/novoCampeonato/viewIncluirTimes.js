import React, { useState } from 'react';

export default function IncluirTimeCampeonato() {

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
                    <tr>
                        <th scope="row">1</th>
                        <td>Nome</td>
                        <td>N.O.M.E</td>
                        <td style={{ 'text-align': 'center' }}>
                            <a href="/incluir-equipe" class="btn btn-sm btn-outline-success">Selecionar</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}