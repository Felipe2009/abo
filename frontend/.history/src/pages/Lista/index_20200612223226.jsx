import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import { FiTrash, FiEdit } from 'react-icons/fi';


export default function Profile() {
    const [doadores, setDoadores] = useState([]);
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
            setDoadores(response.data);
        })
    }, [funcionarioEmail]);
    // async function handleDeleteDoador(cpf) {
    //     try {
    //         await api.delete(`doador/${cpf}`, {
    //             headers: {
    //                 Authorization: funcionarioEmail,
    //             }
    //         })
    //         setDoador(doador.filter(doador => doador.cpf !== cpf)) /*p/ sair da tela qdo deletar
    //     } catch (err) {
    //         alert("Erro ao deletar")
    //     }
    // }

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

            <Link className="verificarestoquelista" to="/estoque"> Verificar estoque</Link>
            <br></br>
            <ul>
            {doador.map(doadores => ( //map-> percorre cada um deles retornando alguma coisa
                <table border="2" className="tabelalista">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Tipo</th>
                            <th>Email</th>
                            <th>Sexo</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
            <td> {doadores.name}</td>
                            <td style={{ width: 135 }}>e</td>
                            <td style={{ width: 44 }}>f</td>
                            <td style={{ width: 100 }}>f</td>
                            <td style={{ width: 44 }}>f</td>


                            <FiEdit className="editar"></FiEdit>
                        </tr>

                        <tr>
                            <td style={{ width: 180 }}>d</td>
                            <td style={{ width: 135 }}>e</td>
                            <td style={{ width: 44 }}>f</td>
                            <td style={{ width: 100 }}>f</td>
                            <td style={{ width: 44 }}>f</td>


                            <FiEdit className="editar"></FiEdit>
                        </tr>

                    </tbody>
                </table>
            ))}
</ul>
        </div>
    )

}