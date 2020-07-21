import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';


export default function HistoricoDoacao() {
    const [historicos, setHistoricos] = useState([]);
    const history = useHistory();
    const $ = require('jquery');
    $.DataTable = require('datatables.net');


    const funcionarioEmail = localStorage.getItem('funcionarioEmail');


    // use effect serve para disparar uma função em um determinado momento do componente
    useEffect(() => {
        api.get('historico').then(response => {
            setHistoricos(response.data);
        })
    }, [funcionarioEmail]);

       
    return (
        <div className="lista-container">
            <header>
                <img src={logoImg} />
                <script type="text/javascript" src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
                <script type="text/javascript" src="script.js"></script>
                <Link className="botaoo" to="/cadastroDoador">Cadastrar Doador</Link>
                <Link className="voltar" to="/"> Voltar para home</Link>

            </header>

            <h1 className="textao">Histórico de Doação</h1>
            <br></br>

            <Link className="verificarestoquelista" to="/estoque"> Verificar estoque</Link>
            <br></br>

            <table id="tabela" border="4" className="tabelalista">

                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>RG</th>

                    </tr>
                </thead>
                <tbody>
                    {historicos.map(agendar => (<tr key={agendar.rg}>
                        <td classname="esticar">{agendar.name}</td>
                       <td>{agendar.tipo}</td>
                       <td>{agendar.rg}</td>

                    </tr>
                    ))}

                </tbody>

            </table>



        </div>
    )

}