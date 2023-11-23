export default function CadastroSala() {
    return (
        <section className="container text-white pb-3">
            <h2 className="mt-5">Cadastro de Salas</h2>
            <form action="">
                <div className="inputs mt-3">
                    <div className="row mb-3">
                        <div class="col-md-4">
                            <label for="nomeSala" class="form-label">Nome da sala</label>
                            <input type="text" class="form-control" id="nomeSala" placeholder="Sala 101" />
                        </div>
                        <div class="col-md-4">
                            <label for="recursos" class="form-label">Recursos</label>
                            <input type="text" class="form-control" id="recursos" placeholder="Quadro digital, televisão..." />
                        </div>
                        <div className="col-md-4 mt-3 mt-md-auto">
                            <select class="form-select" aria-label="tipoSala">
                                <option selected>Tipo de sala</option>
                                <option value="aud">Auditório</option>
                                <option value="sala">Sala de aula</option>
                                <option value="lab">Laboratório</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-md-4">
                            <label for="lotacao" class="form-label">Lotação</label>
                            <input type="number" class="form-control" id="lotacao" placeholder="Número inteiro" min={0} />
                        </div>
                        <div class="col-md-4">
                            <label for="responsavel" class="form-label">Responsável</label>
                            <input type="text" class="form-control" id="responsavel" placeholder="Jobson da Silva" />
                        </div>
                        <div class="col-md-4">
                            <label for="localizacao" class="form-label">Localização</label>
                            <input type="text" class="form-control" id="localizacao" placeholder="Prédio tal daquele campus" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mt-4 mx-auto">
                            <select class="form-select" aria-label="tipoReserva">
                                <option selected>Tipo de reserva</option>
                                <option value="automatica">Automática</option>
                                <option value="reserva">Sob reserva</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <input type="submit" value="Cadastrar" className="btn btn-primary col-md-2 col-6 m-auto" />
                    </div>
                </div>
            </form>
        </section>
    )
}