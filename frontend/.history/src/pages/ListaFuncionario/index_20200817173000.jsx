import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import { FiTrash } from 'react-icons/fi';
import MUIDataTable from "mui-datatables";


export default function ListaFuncionario() {
    const [funcionarios, setFuncionarios] = useState([]);
    const history = useHistory();


    const funcionarioEmail = localStorage.getItem('funcionarioEmail');
    const funcionarioName = localStorage.getItem('funcionarioName');
    // use effect serve para disparar uma função em um determinado momento do componente
    useEffect(() => {
        api.get('listaFuncionario').then(response => {
            setFuncionarios(response.data);
        })
    }, [funcionarioEmail]);

    const columns = ["name", "cpf", "email"];
    const data = [funcionarios.map(funcionario => (<tr key={funcionario.name}>

        <td>{funcionario.name}</td>
        <td>{funcionario.rg}</td>
        <td>{funcionario.tipo}</td>
        <td>{funcionario.sexo}</td>

        {/* <FiEdit onClick={() => (doador.cpf)} type="button" className="editar"></FiEdit> */}
        <FiTrash onClick={() => handleDeleteFuncionario(funcionario.cpf)} type="button"> </FiTrash>
    </tr>
    ))]
    const options = {
        filter: true,
        search: true,
    };


    async function handleDeleteFuncionario(cpf) {
        try {
            await api.delete(`funcionario/${cpf}`, {

            });
            setFuncionarios(funcionarios.filter(funcionario => funcionario.cpf != cpf));
        }
        catch (err) {
            alert("Erro ao deletar pessoa")
        }
    }


    return (
        <div className="listafuncionario-container">
            <header>
                <img src={logoImg} />

                <Link className="botaoo" to="/cadastroDoador">Cadastrar Doador</Link>
                <Link className="voltar" to="/"> Voltar para home</Link>

            </header>

            <h1 className="textao">Lista de Funcionarios</h1>
            <br></br>

            <Link className="verificarestoquelistafunc" to="/estoque"> Verificar estoque</Link>
            <br></br>

            <Link className="agendarlistafunc" to="/agendar"> Agendar Doação</Link>
            <br></br>

            <MUIDataTable className="cell-border"
                //data = {data}
                data={funcionarios}
                columns={columns}
                options={options}

            >

            </MUIDataTable>

        </div>
    )

}