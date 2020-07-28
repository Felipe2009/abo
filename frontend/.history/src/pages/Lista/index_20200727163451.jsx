import React, { Component, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import { FiEdit, FiTrash } from 'react-icons/fi';
import Editable from 'react-x-editable';
import { FaSearch } from 'react-icons/fa'
import MUIDataTable from "mui-datatables";


export default function Lista() {
    const [doadores, setDoadores] = useState([]);
    const history = useHistory();
    const $ = require('jquery');
    $.DataTable = require('datatables.net');


    const funcionarioEmail = localStorage.getItem('funcionarioEmail');
    const options = {
        filterType: 'checkbox',
      };
    const columns = ["Name", "CPF", "Tipo", "Email", "Sexo", "Ultima"];
    const data = [doadores.map(doador => (<tr key={doador.cpf}>

        <tr>{doador.name}</tr>
        <td> {doador.cpf}</td>
        <td>{doador.tipo}</td>
        <td>{doador.email}</td>
        <td>{doador.sexo}</td>
        <td>{doador.ultima}</td>

        <div className="editaapaga"></div>

        {/* <FiEdit onClick={() => (doador.cpf)} type="button" className="editar"></FiEdit> */}
        <FiTrash onClick={() => handleDeleteDoador(doador.cpf)} type="button"> </FiTrash>
    </tr>
    ))]


    // <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

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

            <MUIDataTable
                title={"Employee List"}
                data={data}
                columns={columns}
                options={options}
            >

            </MUIDataTable>



            {/* <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.css"></link>

            <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.js"></script> */}


        </div>

    )


}