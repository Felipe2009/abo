import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import {FiTrash } from 'react-icons/fi';


export default function ListaAgendamento() {
    const [agenda, setAgenda] = useState([]);
    const history = useHistory();
    const $ = require('jquery');
    $.DataTable = require('datatables.net');

    const funcionarioEmail = localStorage.getItem('funcionarioEmail');
    const funcionarioName = localStorage.getItem('funcionarioName');

    // use effect serve para disparar uma função em um determinado momento do componente
    useEffect(() => {
        api.get('listaAgendamento').then(response => {
            setAgenda(response.data);
        })
    }, [funcionarioEmail]);

    async function handleDeleteAgendamento(rg) {
        try {
            await api.delete(`agendar/${rg}`, {

            });
            setAgenda(agenda.filter(agendar => agendar.rg != rg));
        }
        catch (err) {
            alert("Erro ao deletar agendamento")
        }
    }
   

    return (
        <div className="lista-container">
            <header>
                <img src={logoImg} />
                <script type="text/javascript" src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
                <script type="text/javascript" src="script.js"></script>
                <Link className="botaoo" to="/cadastroDoador">Cadastrar Doador</Link>
                <Link className="voltar" to="/"> Voltar para home</Link>

            </header>

            <h1 className="textao">Lista de Agendamento</h1>
            <br></br>

            <Link className="verificarestoquelista" to="/estoque"> Verificar estoque</Link>
            <br></br>

            <table id="tabela" border="1" className="tabelalista">

                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>RG</th>
                        <th>Tipo</th>
                        <th>Dia</th>
                        <th>Horario</th>
                    </tr>
                </thead>
                <tbody>
                    {agenda.map(agendar => (<tr key={agendar.rg}>
                        <td className="alargarnome">{agendar.name}</td>
                        <td>{agendar.rg}</td>
                        <td>{agendar.tipo}</td>
                        <td className="alargaremail">{agendar.dia}</td>
                        <td>{agendar.horario}</td>
                        <div className="editaapaga"></div>
                        <FiTrash onClick={() => handleDeleteAgendamento(agendar.rg)} type="button"> </FiTrash>
                    </tr>
                    ))}

                </tbody>

            </table>



        </div>
    )

}