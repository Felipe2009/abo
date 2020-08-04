import React, { Component, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import { FiEdit, FiTrash } from 'react-icons/fi';
//import { BsPlusCircle } from "react-icons/bs";
//import Editable from 'react-x-editable';
import { FaPlus } from 'react-icons/fa'
import MUIDataTable from "mui-datatables";

export default function Lista() {
    const [doadores, setDoadores] = useState([]);
    const history = useHistory();
    const $ = require('jquery');
    $.DataTable = require('datatables.net');


    const funcionarioEmail = localStorage.getItem('funcionarioEmail');

    const columns = ["name", "cpf", "tipo", "sexo", "ultima"];
    const data = [doadores.map(doador => (<tr key={doador.cpf}>
        <FiTrash onClick={() => handleDeleteDoador(doadores.cpf)} type="button"> </FiTrash>

        <td>{doador.name}</td>
        <td>{doador.cpf}</td>
        <td>{doador.tipo}</td>
        <td>{doador.sexo}</td>
        <td>{doador.ultima}</td>
        <FaPlus></FaPlus>

        {/* <FiEdit onClick={() => (doador.cpf)} type="button" className="editar"></FiEdit> */}
    </tr>
    ))]

    const options = {
        filter: true,
        search: true,
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
                //data = {data}
                data={doadores}
                columns={columns}
                options={options}

            >

            </MUIDataTable>

        </div>
    )
}