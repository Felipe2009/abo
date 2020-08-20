import React, { Component, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import { FiEdit, FiTrash } from 'react-icons/fi';
//import { BsPlusCircle } from "react-icons/bs";
//import Editable from 'react-x-editable';
import MUIDataTable from "mui-datatables";

export default function Lista() {
    const [doadores, setDoadores] = useState([]);
    const history = useHistory();
    const $ = require('jquery');
    $.DataTable = require('datatables.net');

    const funcionarioEmail = localStorage.getItem('funcionarioEmail');

    const columns = ["name", "cpf", "tipo", "sexo"];
    const data = [doadores.map(doador => (<tr key={doador.cpf}>
<table id="myTable">

        <td>{doador.name}</td>
        <td>{doador.cpf}</td>
        <td>{doador.tipo}</td>
        <td>{doador.sexo}</td>
        </table>

        {/* <FiEdit onClick={() => (doador.cpf)} type="button" className="editar"></FiEdit> */}
        <FiTrash onClick={() => handleDeleteDoador(doador.cpf)} type="button"> </FiTrash>
        {/* <FaPlus type="submit" onClick={() => handleMais(doador.cpf)} className="mais"></FaPlus> */}

    </tr>
    ))]
    const options = {
        filter: true,
        search: true,
        responsive: "standard"
    };

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
    var myTable = $('#myTable').DataTable();

    $('#myTable').on('click', 'tbody td', function () {
        myTable.row(this).delete();
    });
    return (

        <div className="lista-container" >


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

            <MUIDataTable className="cell-border"
                //data = {data}
                data={doadores}
                columns={columns}
                options={options}

            >

            </MUIDataTable>
            {/* <FiTrash onClick={() => handleDeleteDoador(doadores.cpf)} type="button"> </FiTrash> */}
        </div>
    )
}