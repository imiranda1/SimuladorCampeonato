import React, { useState } from 'react';

export default function ListarEquipes() {

    return (
        <div class="container-fluid">
            <h3 style={{ 'text-align': 'center' }}>Lista de Equipes</h3>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome da Equipe</th>
                        <th scope="col">Sigla</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Nome</td>
                        <td>N.O.M.E</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}