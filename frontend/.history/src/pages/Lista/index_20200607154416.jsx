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
            <br></br>
            <br></br>

            <table border="2" className="tabela">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><p>{doador.name}</p></td>
                        <td><p>{doador.telefone}</p></td>
                        <td><p>{doador.tipo}</p></td>
                    </tr>
                    <tr>
                        <td style={{ width: 180 }}>d</td>
                        <td>e</td>
                        <td>f</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )

}