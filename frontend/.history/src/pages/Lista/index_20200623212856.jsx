import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import { FiEdit, FiTrash } from 'react-icons/fi';


export default function Lista() {
    const [doadores, setDoadores] = useState([]);
    const history = useHistory();


    const funcionarioEmail = localStorage.getItem('funcionarioEmail');
    const funcionarioName = localStorage.getItem('funcionarioName');
    // use effect serve para disparar uma função em um determinado momento do componente
    useEffect(() => {
        api.get('lista').then(response => {
            setDoadores(response.data);
        })
    }, [funcionarioEmail]);

    async function handleDeleteDoador(cpf) {
        try {
            await api.delete(`doador/${cpf}`, {

            });
            setDoadores(doadores.filter(doador => doador.cpf != cpf));
        }
        catch (err) {
            alert("Erro ao deletar pessoa")
        }
    }


    function handleLogout() { //remove dados do localstorage
        localStorage.clear();
        history.push('/'); //enviando de volta a raiz

    }
    return (
        <div className="lista-container">
            <header>
                <img src={logoImg} />

                <Link className="botaoo" to="/cadastroDoador">Cadastrar Doador</Link>
                <Link className="voltar" to="/"> Voltar para home</Link>
                <script src="/js/jquery.min.js"></script>

            </header>

            <h1 className="textao">Doadores cadastrados</h1>
            <br></br>

            <Link className="verificarestoquelista" to="/estoque"> Verificar estoque</Link>
            <br></br>

            <table id="tabela" border="1" className="tabelalista">

                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Tipo</th>
                        <th>Email</th>
                        <th>Sexo</th>
                        <th>Ultima Doação</th>
                    </tr>
                </thead>
                <tbody>
                    {doadores.map(doador => (<tr key={doador.cpf}>
                        <td className="alargarnome">{doador.name}</td>
                        <td>{doador.cpf}</td>
                        <td>{doador.tipo}</td>
                        <td className="alargaremail">{doador.email}</td>
                        <td>{doador.sexo}</td>
                        <td className="ultimadoacao">{doador.ultima}</td>
                        <div className="editaapaga"></div>
                        <FiEdit className="editar"></FiEdit>
                        <FiTrash onClick={() => handleDeleteDoador(doador.cpf)} type="button"> </FiTrash>
                    </tr>
                    ))}

                </tbody>

            </table>

            <link rel="stylesheet" href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css"></link>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
                <script src="https://ccdn.datatables.net/1.10.21/js/jquery.dataTables.min.js" type="text/javascript"></script>
           <script>
                $(document).ready(function() {
                    $('#tabela').DataTable({
                        "language": {
                            "lengthMenu": "Mostrando MENU registros por página",
                            "zeroRecords": "Nenhum Registro Encontrado",
                            "info": "Mostrando Página PAGE de _PAGES_",
                            "infoEmpty": "Nenhum registro Disponível",
                            "infoFiltered": "(filtrado de MAX registro no total)"
                        }
                    })
                } );
            </script>

        </div>
    )

}