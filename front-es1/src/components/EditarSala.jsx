import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

export default function EditarSala() {
    const [espaco, setEspaco] = useState({
        nome: '',
        recursos: '',
        tipo: '',
        lotacao: '',
        localizacao: '',
        tipoReserva: ''
    });

    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/api/espacos/${id}`)
            .then(response => response.json())
            .then(data => setEspaco(data))
            .catch(error => console.error('Erro ao obter dados:', error));
    }, [id]);

    const handleChange = (event) => {
        setEspaco({
            ...espaco,
            [event.target.id]: event.target.value
        });
    };

    const back = () => {
        window.location.href = '/salas';
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:3001/api/espacos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(espaco)
            });
            if (!response.ok) {
                throw new Error('Erro ao atualizar a sala');
            }
            alert('Sala atualizada com sucesso!');
        } catch (error) {
            alert(error.message);
        } finally {
            window.location.href = '/salas';
        }
    };

    function autoExpand(event) {
        event.target.style.height = 'inherit';
        event.target.style.height = `${event.target.scrollHeight}px`;
    }

    return (
        <section className="container text-white pb-3">
            <h2 className="mt-5">Editar Sala</h2>
            <form onSubmit={handleSubmit}>
                <div className="inputs mt-3">
                    <div className="row mb-3">
                        <div className="col-md-4">
                            <label htmlFor="nomeSala" className="form-label">Nome da sala</label>
                            <input type="text" className="form-control" id="nome" value={espaco.nome}
                                   onChange={handleChange}/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="recursos" className="form-label">Recursos</label>
                            <input type="text" className="form-control" id="recursos" value={espaco.recursos}
                                   onChange={handleChange}/>
                        </div>
                        <div className="col-md-4 mt-3 mt-md-auto">
                            <select className="form-select" aria-label="tipoSala" id="tipo" value={espaco.tipo}
                                    onChange={handleChange}>
                                <option selected>Tipo de sala</option>
                                <option value="aud">Auditório</option>
                                <option value="sala">Sala de aula</option>
                                <option value="lab">Laboratório</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <label htmlFor="lotacao" className="form-label">Lotação</label>
                            <input type="number" className="form-control" id="lotacao" value={espaco.lotacao} min={0}
                                   onChange={handleChange}/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="localizacao" className="form-label">Localização</label>
                            <input type="text" className="form-control" id="localizacao" value={espaco.localizacao}
                                   onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="col-sm-2 mt-4 mx-auto">
                        <select className="form-select" aria-label="disponivel" id="disponivel"
                                value={espaco.disponivel} onChange={handleChange}>
                            <option>Disponibilidade</option>
                            <option value="1">Disponível</option>
                            <option value="2">Indisponível</option>
                        </select>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 align-end">
                            <label htmlFor="descricao" className="form-label">Descrição</label>
                            <textarea className="form-control" style={{height: '50px'}}
                                      id="descricao"
                                      rows="3"
                                      value={espaco.descricao}
                                      onChange={handleChange}
                                      onInput={autoExpand}></textarea>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col text-center">
                            <input type="submit" value="Salvar" className="btn btn-primary col-md-2 col-6 m-2"/>
                            <input type="button" value="Cancelar" className="btn btn-danger col-md-2 col-6 m-auto"
                                   onClick={back}/>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}