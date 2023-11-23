import data from '../assets/salas.json'

export default function GestaoReservas() {

    function gerarCardSala(sala) {
        return (
            <div className={`col-md-4 ${!sala.reserva_sob_autorizacao | !sala.disponivel ? 'd-none': ''}`}>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{sala.nome}</h4>
                        <p className="card-text">{' '.concat(sala.recursos)}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Localização: {sala.localizacao}</li>
                        <li className="list-group-item">Lotação: {sala.lotacao}</li>
                        <li className="list-group-item">Nome do discente: {sala.responsavel}</li>
                    </ul>
                    <div className="card-body d-flex">
                        <button href="#" className="btn btn-success">Aprovar reserva</button>
                        <button href="#" className="btn btn-danger ms-auto" disabled={!sala.disponivel}>Negar reserva</button>
                    </div>
                </div>
            </div>)
    }

    return(
        <section className="pt-5 mt-3 container">
            <h2 className='text-white mb-3'>Salas a serem aprovadas</h2>
            <div className="row g-5">
                {data.map(gerarCardSala)}
            </div>
        </section>
    )

}