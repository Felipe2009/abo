import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import { FiEdit } from 'react-icons/fi';


export default function Lista() {
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
    //         setDoadores(doador.filter(doador => doador.cpf !== cpf)) //p/ sair da tela qdo deletar
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
                {doadores.map(doador =>(
                <tbody>
                    <tr>
                        <td>{doadores.name}</td>
                        <td>{doadores.telefone}</td>
                        <td>{doadores.tipo}</td>
                        <td>{doadores.email}</td>
                        <td>{doadores.sexo}</td>
                        <FiEdit className="editar"></FiEdit>

                    </tr>

                </tbody>
                ))}
            </table>

                

        </div>
    )

}