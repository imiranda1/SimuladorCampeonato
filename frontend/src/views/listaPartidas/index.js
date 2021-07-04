export default function Partidas() {

    return (
        <div class="container">
            <h3 style={{ 'text-align': 'center' }}>Partidas</h3>
            <div class="row" style={{ 'text-align': 'center' }}>
                <div class="col-md-6 offset-md-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Partida X</h5>
                            
                                <div class="row">
                                    <div class="col-md-12" style={{ 'display': 'flex', 'justify-content': 'space-between' }}>
                                        <div class="form-group">
                                            <input type="text" style={{ 'text-align': 'center' }} readonly class="form-control-plaintext" id="equipeCasa" value="Equipe Casa" />
                                        </div>
                                        <h3>X</h3>
                                        <div class="form-group">
                                            <input type="text" style={{ 'text-align': 'center' }} readonly class="form-control-plaintext" id="equipeFora" value="Equipe Fora" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12" style={{ 'display': 'flex', 'justify-content': 'space-between' }}>
                                        <div class="form-group">
                                            <input type="text" style={{ 'text-align': 'center', 'padding':'6px 2px' }} class="form-control" id="placarCasa" value="0" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" style={{ 'text-align': 'center', 'padding':'6px 2px' }} readonly class="form-control" id="placarFora" value="0" />
                                        </div>
                                    </div>
                                </div>
                            
                            <a href="#" class="btn btn-primary">Atualizar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}