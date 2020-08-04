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

    const columns = ["name", "dia", "horario", "tipo", "sexo","quantidade"];
    const data = [historicos.map(historico => (<tr key={historico.name}>

        <td>{historico.name}</td>
        <td>{historico.dia}</td>
        <td>{historico.horario}</td>
        <td>{historico.tipo}</td>
        <td>{historico.sexo}</td>
        
    </tr>
    ))]
    const options = {
        filter: true,
        search: true,
    };

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
                <Link className="botaoo" to="/cadastroDoador">Cadastrar Doador</Link>
                <Link className="voltar" to="/"> Voltar para home</Link>

            </header>

            <h1 className="textao">Histórico de Doação</h1>
            <br></br>

            <Link className="verificarestoquehistorico" to="/estoque"> Verificar estoque</Link>
            <br></br>

            <Link className="agendardoacaohistorico" to="/agendar">Agendar Doação</Link>
            <br></br>
            <MUIDataTable
                //data = {data}
                data={agenda}
                columns={columns}
                options={options}

            >

            </MUIDataTable>

        </div>
    )

}