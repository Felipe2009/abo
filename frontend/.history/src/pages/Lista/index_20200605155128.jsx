import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import { FiArrowLeft, FiTrash2, FiPower } from 'react-icons/fi';


export default function Profile() {
    const [doador, setDoador] = useState([]);
    const funcionarioEmail = localStorage.getItem('funcionarioEmail');
    const funcionarioName = localStorage.getItem('funcionarioName');
    const history = useHistory();
    // use effect serve para disparar uma função em um determinado momento do componente
    useEffect(() => {
        api.get('lista', {
            headers: { //pra mostrar qual funcionario está logado
                Authorization: funcionarioEmail,
            }
        }).then(response => {
            setDoador(response.data);
        })
    }, [funcionarioEmail]);
    async function handleDeleteDoador(cpf) {
        try {
            await api.delete(`doador/${cpf}`, {
                headers: {
                    Authorization: funcionarioEmail,
                }
            })
            setDoador(doador.filter(doador => doador.cpf !== cpf))
        } catch (err) {
            alert("Erro ao deletar")
        }
    }

    function handleLogout() { //remove dados do localstorage
        localStorage.clear();
        history.push('/'); //enviando de volta a raiz

    }
    return (
        <div className="lista-container">
            <header>
                <img src={logoImg} />

                <Link className="botaoo" to="/cadastroDoador">Cadastrar Doador</Link>
                <Link className="voltar" to="/"> Voltar para home</Link>
            </header>
            <h1 className="textao">Doadores cadastrados</h1>

            <div class="wrapper wrapper-content animated fadeInRight">
<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <div class="ibox float-e-margins">
                <div class="ibox-content">
                    <div class="title">
                        <h3>Grau de Curso</h3>
                    </div>
                    <br />
                    <table class="table table-striped table-bordered table-hover dataTables-example" id="myTable">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Ativo</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach (var item in Model)
                            {
                                <tr class="clickable-row" style="cursor: pointer">
                                    <td >@item.GrauId</td>
                                    <td>@item.Nome</td>
                                    <td>@item.Ativo</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                   
                </div>
            </div>
        </div>
    </div>
</div>

        </div>
        </div>
    )

}
