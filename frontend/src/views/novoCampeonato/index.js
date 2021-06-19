import React, { useState } from 'react';

export default function NovoCampeonato() {

    return (
        <div class="container-fluid">
            <h3 style={{ 'text-align': 'center' }}>Novo Campeonato</h3>
            <form>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="nomeCampeonato">Nome do Campeonato</label>
                            <input type="text" class="form-control" id="nomeCampeonato" name="nomeCampeonato" placeholder="Nome do campeonato" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="patrocinador">Patrocinador</label>
                            <input type="text" class="form-control" id="patrocinador" name="patrocinador" placeholder="Patrocinador" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="qtddTimes">Quantidade de Equipes</label>
                            <input type="number" class="form-control" id="qtddTimes" name="qtddTimes" min="2" value="2" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12" style={{ 'text-align': 'center' }}>
                        <a href="/incluir-equipes" class="btn btn-outline-primary">Cadastrar Times</a>
                    </div>
                </div>
            </form>
        </div>
    );
}