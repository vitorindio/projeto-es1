import {useState, useEffect} from 'react';

export default function ReservaSala() {
    const [salas, setSalas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/espacos')
            .then(response => response.json())
            .then(data => setSalas(data))
            .catch(error => console.error('Erro ao obter dados:', error));
    }, []);

    const handleReserva = (sala, tipoReserva) => {
        const reserva = {
            tipo: tipoReserva, espaco: sala.id, data: new Date().toISOString()
        }
        fetch('http://localhost:3001/api/reservas', {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(reserva)
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === "ok") {
                    alert("Reserva efetuada com sucesso!");
                    setSalas(salas.map(s => {
                        if (s.id === sala.id) {
                            s.disponivel = false;
                        }
                        return s;
                    }));
                } else {
                    alert("Erro ao efetuar reserva!");
                }
            })
            .catch(error => console.error('Erro ao enviar dados:', error));

    };

    function gerarCardSala(sala) {
        return (<div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{sala.nome}</h4>
                    <p className="card-text">{sala.recursos}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Localização: {sala.localizacao}</li>
                    <li className="list-group-item">Lotação: {sala.lotacao}</li>
                    <li className={`list-group-item text-white ${sala.disponivel ? "bg-success" : "bg-danger"}`}>{sala.disponivel ? "Disponível" : "Indisponível"}</li>
                </ul>
                <div className="card-body">
                    <select className="form-select mb-3" aria-label="Tipo de reserva" id={`tipoReserva-${sala.id}`}>
                        <option value="automatica">Automática</option>
                        <option value="sobAutorizacao">Sob Autorização</option>
                        <option value="recorrente">Recorrente</option>
                    </select>
                    <button href="#" className="btn btn-primary" disabled={!sala.disponivel}
                            onClick={() => handleReserva(sala, document.getElementById(`tipoReserva-${sala.id}`).value)}
                    >Fazer reserva
                    </button>
                </div>
            </div>
        </div>)
    }

    return (<section className="pt-5 mt-3 container">
            <h2 className='text-white mb-3'>Salas</h2>
            <div className="row g-5">
                {salas.map(gerarCardSala)}
            </div>
        </section>)
}