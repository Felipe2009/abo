import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import { FiCheck, FiTrash } from 'react-icons/fi';
import Editable from 'react-x-editable';


export default function ListaAgendamento() {
    const [agenda, setAgenda] = useState([]);
    const history = useHistory();
    const $ = require('jquery');
    $.DataTable = require('datatables.net');


    const funcionarioEmail = localStorage.getItem('funcionarioEmail');


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
                <Link className="botaoo" to="/cadastroDoador">Cadastrar Doador</Link>
                <Link className="voltar" to="/"> Voltar para home</Link>


            </header>

            <h1 className="textao">Lista de Agendamento</h1>
            <br></br>

            <Link className="verificarestoquelistaagendamento" to="/estoque"> Verificar estoque</Link>
            <br></br>

            <Link className="agendamentodoacao" to="/agendar"> Agendar doação</Link>
            <br></br>
             <form>
                <input className="filtro"
                    type="text"></input>
            </form>

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
                        <td><Editable
                        name="username"
                        dataType="text"
                        title="Enter username"
                        showButtons={true}
                        value={agendar.dia}
                        validate={(value) => {
                            if (!value) {
                                return 'Required';
                            }
                        }}
                    ></Editable></td>
                        <td><Editable
                        name="username"
                        dataType="text"
                        title="Enter username"
                        showButtons={true}
                        value={agendar.horario}
                        validate={(value) => {
                            if (!value) {
                                return 'Required';
                            }
                        }}
                    ></Editable></td>
                        <td>{agendar.tipo}</td>
                        <div className="okapaga"></div>
                        
                        <FiCheck className="ok" type="button"> </FiCheck>
                        <FiTrash className="apaga" onClick={() => handleDeleteAgendamento(agendar.rg)} type="button"> </FiTrash>
                    </tr>
                    ))}


                </tbody>

            </table>

        </div>
    )

}
