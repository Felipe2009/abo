import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import {FiCheck,FiTrash } from 'react-icons/fi';


export default function ListaAgendamento() {
    const [rg, setRg] = useState('');
    const [name, setName] = useState('');
    const [dia, setDia] = useState('');
    const [telefone, setTelefone] = useState('');
    const [sexo, setSexo] = useState('');
    const [tipo, setTipo] = useState('');
    const [horario, setHorario] = useState('');


    const [agenda, setAgenda] = useState([]);
    const history = useHistory();
    const $ = require('jquery');
    $.DataTable = require('datatables.net');
    

    const funcionarioEmail = localStorage.getItem('funcionarioEmail');


    async function handleLista(e) {
        e.preventDefault();

        const data = {
            rg,
            name,
            telefone,
            sexo,
            tipo,
            dia,
            horario
        };
        try {
            await api.post('agendar', data)
            history.push('/historicodoacao');
        } catch (err) {
            alert("Erro ao cadastrar doador")
        }
    }

    // use effect serve para disparar uma função em um determinado momento do componente
    useEffect(() => {
        api.get('listaagendamento').then(response => {
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

            <table id="tabela" border="6" className="tabelalistaagendamento">

                <thead >
                    <tr >
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Dia</th>
                        <th>Horario</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {agenda.map(agendar => (<tr key={agendar.telefone}>
                        <td classname="esticar">{agendar.name}</td>
                        <td>{agendar.telefone}</td>
                        <td>{agendar.dia}</td>
                        <td className="alargardia">{agendar.horario}</td>
                        <td>{agendar.tipo}</td>
                        <div className="okapaga"></div>
                        <FiCheck className="ok" onClick={() => handleLista(agendar.rg)} type="button"> </FiCheck>
                        <FiTrash className="apaga" onClick={() => handleDeleteAgendamento(agendar.rg)} type="button"> </FiTrash>
                    </tr>
                    ))}

                </tbody>

            </table>



        </div>
    )

}