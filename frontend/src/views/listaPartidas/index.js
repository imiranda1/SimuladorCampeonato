import React, { useState, useEffect } from 'react';
import api from '../../services/api';

export default function Partidas() {

    const [partidas, setPartidas] = useState([]);
    useEffect(() => {
        api.get('listarPartidas').then(response => {
            setPartidas(response.data);
        })
    }, [partidas]);

    return (
        <div class="container">
            <h3 style={{ 'text-align': 'center' }}>Partidas</h3>
            <div class="row" style={{ 'text-align': 'center' }}>
                <div class="col-md-6 offset-md-3">
                    {partidas.map(partidas => (
                        <div class="card" style={{ 'margin-bottom': '10px'}}>
                            <div class="card-body">
                                <h5 class="card-title">Partida</h5>
                                <div class="row">
                                    <div class="col-md-12" style={{ 'display': 'flex', 'justify-content': 'space-between' }}>
                                        <div class="form-group">
                                            <input type="text" style={{ 'text-align': 'center' }} readonly class="form-control-plaintext" id="equipeCasa" value={partidas.par_eqp_casa} />
                                        </div>
                                        <h3>X</h3>
                                        <div class="form-group">
                                            <input type="text" style={{ 'text-align': 'center' }} readonly class="form-control-plaintext" id="equipeFora" value={partidas.par_eqp_fora} />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12" style={{ 'display': 'flex', 'justify-content': 'space-between' }}>
                                        <div class="form-group">
                                            <input type="text" style={{ 'text-align': 'center', 'padding': '6px 2px' }} class="form-control" id="placarCasa" value="0" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" style={{ 'text-align': 'center', 'padding': '6px 2px' }} readonly class="form-control" id="placarFora" value="0" />
                                        </div>
                                    </div>
                                </div>
                                <button type="button" class="btn btn-primary">Atualizar</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}