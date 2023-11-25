import data from '../assets/salas.json'
import { useState, useEffect } from 'react';

export default function ReservaSala() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/sala')
            .then(response => response.json())
            .then(data => setData(data))
            .then(console.log(data))
            .catch(error => console.error('Erro ao obter dados:', error));
    }, []);

    function gerarCardSala(sala) {
        return (
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{sala.nome}</h4>
                        <p className="card-text">{sala.recursos}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Localização: {sala.localizacao}</li>
                        <li className="list-group-item">Tipo de reserva: <span className={`${sala.tipo_reserva_codigo === 1 ? 'bg-success' :
                            sala.tipo_reserva_codigo === 2 ? 'bg-info' :
                                sala.tipo_reserva_codigo === 3 ? 'bg-warning' :
                                    ''
                            }`}>
                            {`${sala.tipo_reserva_codigo === 1 ? 'automática' :
                                sala.tipo_reserva_codigo === 2 ? 'sob autorizacao' :
                                    sala.tipo_reserva_codigo === 3 ? 'recorrente' :
                                        ''
                            }`}</span></li>
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