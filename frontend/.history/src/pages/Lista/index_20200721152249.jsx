import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import { FiEdit, FiTrash } from 'react-icons/fi';
import Editar, { TextArea } from './edit.jsx'


export default function Lista() {
    const [doadores, setDoadores] = useState([]);
    const history = useHistory();
    const $ = require('jquery');
    $.DataTable = require('datatables.net');



    const funcionarioEmail = localStorage.getItem('funcionarioEmail');
    const funcionarioName = localStorage.getItem('funcionarioName');

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

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

        return(
        <div className = "lista-container" >
                        <header>
                            <img src={logoImg} />

                            {/* <script type="text/javascript" src="http://code.jquery.com/jquery-1.8.3.min.js"></script> */}
                            <script type="text/javascript" src="edit.jsx"></script>
                            <Link className="botaoo" to="/cadastroDoador">Cadastrar Doador</Link>
                            <Link className="voltar" to="/"> Voltar para home</Link>

                        </header>

                        <h1 className="textao">Doadores cadastrados</h1>
                        <br></br>

                        <Link className="verificarestoquelista" to="/estoque"> Verificar estoque</Link>
                        <br></br>

                        <table id="tabela" border="6" className="tabelalista">

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
                                    <FiEdit type="button" className="editar"></FiEdit>
                                    <FiTrash onClick={() => handleDeleteDoador(doador.cpf)} type="button"> </FiTrash>
                                </tr>
                                ))}


                            </tbody>

                        </table>
                

        </div>
    )

        }