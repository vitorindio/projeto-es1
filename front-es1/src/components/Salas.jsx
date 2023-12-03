import axios from 'axios';
import {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

export default function ListaSalas() {
    const [salas, setSalas] = useState([]);

    const fetchSalas = () => {
        axios.get('http://localhost:3001/api/espacos')
            .then(response => {
                setSalas(response.data);
            })
            .catch(error => {
                console.error('Erro ao obter salas:', error);
            });
    };

    useEffect(() => {
        fetchSalas();
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/api/espacos/${id}`)
            .then(response => {
                console.log(response.data);
                fetchSalas(); // Atualiza a lista após a exclusão
            })
            .catch(error => {
                console.error('Erro ao deletar sala:', error);
            });
    };

    return (
        <div className="text-white" style={{marginTop: '20px'}}>
            <h2>Lista de Salas</h2>
            <Link to="/cadastroSala" className="btn btn-primary mb-3 text-left">Adicionar Sala</Link>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Tipo</th>
                    <th>Localização</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {salas.map(sala => (
                    <tr key={sala.id}>
                        <td>{sala.id}</td>
                        <td>{sala.nome}</td>
                        <td>{sala.tipo}</td>
                        <td>{sala.localizacao}</td>
                        <td>
                            <button onClick={() => {
                                handleDelete(sala.id)
                            }}>Deletar
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}