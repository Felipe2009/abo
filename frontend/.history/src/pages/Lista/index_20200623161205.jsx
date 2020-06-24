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
            <head>
                <header>
                    <img src={logoImg} />
                    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css" />

                    <Link className="botaoo" to="/cadastroDoador">Cadastrar Doador</Link>
                    <Link className="voltar" to="/"> Voltar para home</Link>

                </header>
            </head>

            <h1 className="textao">Doadores cadastrados</h1>
            <br></br>

            <Link className="verificarestoquelista" to="/estoque"> Verificar estoque</Link>
            <br></br>

            <table border="1" className="tabelalista" id="tabelatabela">

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
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script type="text/javascript" src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"></script>

            <script>
                $("tabelatabela").DataTable()
            </script>
        </div>

    )

}



// $(document).ready(function() {
//     $('#tabelatabela').DataTable({
//         "language": {
//             "lengthMenu": "Display _MENU_ records per page",
//             "zeroRecords": "Nothing found - sorry",
//             "info": "Showing page _PAGE_ of _PAGES_",
//             "infoEmpty": "No records available",
//             "infoFiltered": "(filtered from _MAX_ total records)"
//         }
//     })
// });