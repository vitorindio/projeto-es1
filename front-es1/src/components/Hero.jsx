import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section className="container-fluid hero">
            <div className="hero-text">
                <h1>Sistema UwU</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, adipisci!</p>
                <Link to='/cadastroUsuario' className='btn btn-success'>Cadastre-se</Link>
            </div>
        </section>
    )
}