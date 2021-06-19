import React, { useState } from 'react';

export default function NovoTime() {

    return (
        <div class="container">
            <h3 style={{ 'text-align': 'center' }}>Nova Equipe</h3>
            <form>
                <div class="row">
                    <div class="col-md-8">
                        <div class="form-group">
                            <label for="nomeTime">Nome da Equipe</label>
                            <input type="text" class="form-control" id="nomeTime" name="nomeTime" placeholder="Nome da equipe" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="patrocinador">Sigla</label>
                            <input type="text" class="form-control" id="patrocinador" name="patrocinador" placeholder="Patrocinador" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12" style={{ 'text-align': 'center' }}>
                        <a href="javascript:history.back()" class="btn btn-outline-secondary" style={{ 'margin-right': '5px' }}>Voltar</a>
                        <a href="/salvar-equipe" class="btn btn-outline-primary">Salvar</a>
                    </div>
                </div>
            </form>
        </div>
    );
}