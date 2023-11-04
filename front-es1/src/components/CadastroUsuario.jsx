export default function CadastroUsuario() {
    return (
        <section className="container text-white py-3">
            <h2 className="mt-5">Cadastro de Usuários</h2>
            <form action="">
                <div className="inputs mt-3">
                    <div className="row mb-3">
                        <div class="col-md-4">
                            <label for="nomeUsuario" class="form-label">Nome do usuário</label>
                            <input type="text" class="form-control" id="nomeUsuario" placeholder="Jobson da Silva" />
                        </div>
                        <div class="col-md-4">
                            <label for="emailUsuario" class="form-label">E-mail</label>
                            <input type="email" class="form-control" id="emailUsuario" placeholder="jobson@gmail.com" />
                        </div>
                        <div className="col-md-4 mt-3 mt-md-auto">
                            <select class="form-select" aria-label="tipoUsuario">
                                <option selected>Tipo de usuário</option>
                                <option value="discente">Discente</option>
                                <option value="docente">Docente</option>
                                <option value="diretor">Diretor</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-md-4">
                            <label for="matricula" class="form-label">Matrícula</label>
                            <input type="text" class="form-control" id="matricula" placeholder="2023123..."/>
                        </div>
                        <div class="col-md-4">
                            <label for="senhaUsuario" class="form-label">Senha</label>
                            <input type="password" class="form-control" id="senhaUsuario" placeholder="Sua senha aqui" />
                        </div>
                        <div class="col-md-4">
                            <label for="telefoneUsuario" class="form-label">Telefone</label>
                            <input type="tel" class="form-control" id="telefoneUsuario" placeholder="2199999999" />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <input type="submit" value="Cadastrar" className="btn btn-primary col-md-2 col-6 m-auto"/>
                    </div>
                </div>
            </form>
        </section>
    )
}