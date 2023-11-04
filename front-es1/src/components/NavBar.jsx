import { NavLink, Link } from "react-router-dom"


export default function NavBar() {
    return (
        <nav class="navbar bg-dark border-bottom border-body fixed-top navbar-expand-lg" data-bs-theme="dark">
            <div class="container">
                <NavLink to={'/'} className={"navbar-brand"}>Sistema</NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item m-auto">
                            <a class="nav-link" aria-current="page" href="#">Reserva de salas</a>
                        </li>
                        <li class="nav-item m-auto">
                            <a class="nav-link" href="#">Gestão de reservas</a>
                        </li>
                        <li class="nav-item m-auto ms-lg-4">
                            <Link to={'login'} className="btn btn-primary">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
