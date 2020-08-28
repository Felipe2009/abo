import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import MUIDataTable from "mui-datatables";
import FiTrash from 'react-icons/fi';

export default function ListaAgendamento() {
    const [agenda, setAgenda] = useState([]);
    const history = useHistory();
    const $ = require('jquery');
    $.DataTable = require('datatables.net');
  
    const funcionarioEmail = localStorage.getItem('funcionarioEmail');
    const columns = ["name", "dia", "horario", "tipo", "sexo"];

    const data = [agenda.map(agendar => (<tr key={agendar.name}>

        <td>{agendar.name}</td>
        <td>{agendar.dia}</td>
        <td>{agendar.horario}</td>
        <td>{agendar.tipo}</td>
        <td>{agendar.sexo}</td>

        {
        <FiTrash onPress={() => handleDeleteAgendamento(agendar.rg)} type="button"> </FiTrash> }
    </tr>
    ))]
    const options = {
        filter: true,
        search: true,
    };
    // use effect serve para disparar uma função em um determinado momento do componente
    useEffect(() => {
        api.get('listaagendamento').then(response => {
            setAgenda(response.data);
        })
    }, [funcionarioEmail]);

    // async function handleDeleteAgendamento(rg) {
    //     try {
    //         await api.delete(`agendar/${rg}`, {

    //         });
    //         setAgenda(agenda.filter(agendar => agendar.rg != rg));
    //     }
    //     catch (err) {
    //         alert("Erro ao deletar agendamento")
    //     }
    // }

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
            <MUIDataTable className="cell-border"
                //data = {data}
                data={agenda}
                columns={columns}
                options={options}

            >

            </MUIDataTable>


        </div>

    )
}