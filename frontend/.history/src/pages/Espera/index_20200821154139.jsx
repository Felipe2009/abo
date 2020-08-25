import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import { FiTrash } from 'react-icons/fi';
import MUIDataTable from "mui-datatables";
import { FaPlus } from 'react-icons/fa'


export default function Espera() {
    const [precisas, setPrecisas] = useState([]);

    const history = useHistory();
    const $ = require('jquery');
    $.DataTable = require('datatables.net');

    const funcionarioEmail = localStorage.getItem('funcionarioEmail');

    const columns = ["name", "rg", "tipo", "sexo", "quantidade"];
    const data = [precisas.map(precisa => (<tr key={precisa.name}>
        <FaPlus></FaPlus>
        <table id="tabela">
            <td>{precisa.name}</td>
            <td>{precisa.rg}</td>
            <td>{precisa.tipo}</td>
            <td>{precisa.sexo}</td>
            <td>{precisa.quantidade}</td>
        </table>
        {/* <FiEdit onClick={() => (doador.cpf)} type="button" className="editar"></FiEdit> */}
        {/* <FiTrash onClick={() => handleDeletePrecisa(precisa.rg)} type="button"> </FiTrash> */}
    </tr>
    ))]
    const options = {
        filter: true,
        search: true,
        responsive: "standard"
    };


    useEffect(() => {
        api.get('espera').then(response => {
            setPrecisas(response.data);
        })
    }, [funcionarioEmail]);
    // async function handleDeletePrecisa(rg) {
    //     try {
    //         await api.delete(`precisa/${rg}`, {

    //         });
    //         setPrecisas(precisas.filter(precisa => precisa.rg != rg));
    //     }
    //     catch (err) {
    //         alert("Erro ao deletar pessoa")
    //     }
    // }

    $('#tabela').DataTable({
        buttons: [
            {
                extend: 'pdf',
                text: 'Save current page',
                exportOptions: {
                    modifier: {
                        page: 'current'
                    }
                }
            }
        ]
    });

    return (
        <div className="espera-container">
            <header>
                <img classname="imagem" src={logoImg}></img>
                <Link className="aaa" to="/cadastroDoador">Cadastrar Doador</Link>
                <Link className="volta" to="/"> Voltar para home</Link>
            </header>

            <h1 className="textao">Lista de Receptor</h1>
            <br></br>
            <Link className="verificarestoqueespera" to="/estoque"> Verificar estoque</Link>
            <br></br>
            <Link className="agendar" to="/agendar"> Agendar Doação</Link>
            <br></br>

            <MUIDataTable
                //data = {data}
                data={precisas}
                columns={columns}
                options={options}

            >

            </MUIDataTable>

        </div>
    )

}

