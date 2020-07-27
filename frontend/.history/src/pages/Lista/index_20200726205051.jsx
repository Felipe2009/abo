import React, { Component, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import { FiTrash } from 'react-icons/fi';
import Editable from 'react-x-editable';
import {FaSearch} from 'react-icons/fa'

  export default function Lista() {
    const [doadores, setDoadores] = useState([]);
    const history = useHistory();
    const $ = require('jquery');
    $.DataTable = require('datatables.net');
    const funcionarioEmail = localStorage.getItem('funcionarioEmail');

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
    function searching(term) {
        return function(x){
            return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
        }
    }
       class App extends Component {
        constructor(props){
            super(props);

            this.state = {
                doadores: doadores ,
                term: '',
            }

            this.searchHandler = this.searchHandler.bind(this);
        }
        searchHandler(event) {
            this.setState({ term: event.target.value })
        }
        
        render() {
            const { term, doador } = this.state;
            return (
                <div className="lista-container" >
                    <form>
                        <input className="filtro"
                            type="text"
                            onChange={this.searchHandler}
                            value={term}
                            />
                    </form>
                    <FaSearch type="button" classname="lupa"></FaSearch>


                    <header>
                        <img src={logoImg} />
                        <script type="text/javascript" src="edit.jsx"></script>

                        <Link className="botaoo" to="/cadastroDoador">Cadastrar Doador</Link>
                        <Link className="voltar" to="/"> Voltar para home</Link>

                    </header>

                    <h1 className="textao">Doadores cadastrados</h1>
                    <br></br>


                    <Link className="verificarestoquelista" to="/estoque"> Verificar estoque</Link>
                    <br></br>
                    <Link className="agendalista" to="/agendar"> Agendar doação</Link>
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

                            {this.state.doadores.filter(searching(this.state.term)).map
                            (doadores => (<tr key={doadores.cpf}>
                                <td> <Editable
                                    name="username"
                                    dataType="text"
                                    title="Enter username"
                                    showButtons={true}
                                    value={doadores.name}
                                    validate={(value) => {
                                        if (!value) {
                                            return 'Required';
                                        }
                                    }}
                                /></td>
                                <td>{doadores.cpf}</td>

                                <td>{doadores.tipo}</td>
                                <td> <Editable
                                    //name="username"
                                    dataType="text"
                                    //title="Enter username"
                                    showButtons={false}
                                    value={doadores.email}
                                    validate={(value) => {
                                        if (!value) {
                                            return 'Required';
                                        }
                                    }}
                                /></td>
                                <td>{doadores.sexo}</td>
                                <td> <Editable
                                    name="ultima"
                                    dataType="text"
                                    title="Enter username"
                                    showButtons={false}
                                    value={doadores.ultima}
                                    validate={(value) => {
                                        if (!value) {
                                            return 'Required';
                                        }
                                    }}

                                /></td>
                                <div className="editaapaga"></div>

                                {/* <FiEdit onClick={() => (doador.cpf)} type="button" className="editar"></FiEdit> */}
                                <FiTrash onClick={() => handleDeleteDoador(doadores.cpf)} type="button"> </FiTrash>
                            </tr>
                            ))}

                        </tbody>
                    </table>

                </div>
            )
        }
    }
}

