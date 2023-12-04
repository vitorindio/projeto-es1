import { NavLink, Link } from "react-router-dom"


export default function NavBar() {
    return (
        <nav className="navbar bg-dark border-bottom border-body fixed-top navbar-expand-lg" data-bs-theme="dark">
            <div className="container">
                <Link to={'/'} className={"navbar-brand"}>Sistema</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item m-auto">
                            <Link class="nav-link" to={'reservaSalas'}>Reserva de salas</Link>
                        </li>
                        <li class="nav-item m-auto">
                            <Link class="nav-link" to={'gestaoReservas'}>Gestão de reservas</Link>
                        </li>
                        <li class="nav-item m-auto">
                            <Link to={'cadastroSala'} className="nav-link">Cadastrar sala</Link>
                        </li>
                        <li class="nav-item m-auto ms-lg-4">
                            <Link to={'login'} className="btn btn-primary">Login</Link>
                        </li>
                        <li class="nav-item m-auto">
                            <Link to={'usuarios'} className="nav-link">Usuarios</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
