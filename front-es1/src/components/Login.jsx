export default function Login() {
    return (
        <section className="container text-white py-3 mt-5">
            <h2>Faça seu login</h2>
            <form action="" className="form-floating text-black">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input type="email" class="form-control" id="emailLogin" placeholder="nome@example.com" />
                            <label for="emailLogin">Digite seu email aqui...</label>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div class="form-floating">
                            <input type="password" class="form-control" id="senhaLogin" placeholder="Password" />
                            <label for="senhaLogin">Password</label>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <input type="submit" value="Login" className="btn btn-primary col-md-2 col-6 m-auto" />
                </div>
            </form>
        </section>
    )
}