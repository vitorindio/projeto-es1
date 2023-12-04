import axios from 'axios';
import {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

export default function ListaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);

    const fetchUsuarios = () => {
        axios.get('http://localhost:3001/api/usuarios')
            .then(response => {
                setUsuarios(response.data);
            })
            .catch(error => {
                console.error('Erro ao obter usuários:', error);
            });
    };

    useEffect(() => {
        fetchUsuarios();
    }, []);

    const handleDelete = (matricula) => {
        console.log('Deletando da lista de usuários...')
        axios.delete(`http://localhost:3001/api/usuarios/${matricula}`)
            .then(response => {
                console.log(response.data);
                fetchUsuarios(); // Atualiza a lista após a exclusão
            })
            .catch(error => {
                console.error('Erro ao deletar usuário:', error);
            });
    };
    return (
        <div className="text-white" style={{marginTop: '20px'}}>
            <h2>Lista de Usuários</h2>
            <Link to="/cadastroUsuario" className="btn btn-primary mb-3 text-left">Adicionar Usuário</Link> {/* Adicione o botão aqui */}
            <table>
                <thead>
                <tr>
                    <th>Matrícula</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {usuarios.map(usuario => (
                    <tr key={usuario.matricula}>
                        <td>{usuario.matricula}</td>
                        <td>{usuario.nome}</td>
                        <td>{usuario.email}</td>
                        <td>{usuario.telefone}</td>
                        <td>
                            <button onClick={() => {
                                handleDelete(usuario.matricula)
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