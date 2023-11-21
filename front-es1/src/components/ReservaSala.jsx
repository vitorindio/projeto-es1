import data from '../assets/salas.json'

export default function ReservaSala() {

    function gerarCardSala(sala) {
        return (
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{sala.nome}</h4>
                        <p className="card-text">{' '.concat(sala.recursos)}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Localização: {sala.localizacao}</li>
                        <li className="list-group-item">Lotação: {sala.lotacao}</li>
                        <li className={`list-group-item text-white ${sala.disponivel ? "bg-success" : "bg-danger"}`}>{sala.disponivel ? "Disponível" : "Indisponível"}</li>
                    </ul>
                    <div className="card-body">
                        <button href="#" className="btn btn-primary" disabled={!sala.disponivel}>Fazer reserva</button>
                    </div>
                </div>
            </div>)
    }

    return (
        <section className="pt-5 mt-3 container">
            <h2 className='text-white mb-3'>Salas disponíveis</h2>
            <div className="row g-5">
                {data.map(gerarCardSala)}
            </div>
        </section>
    )
}