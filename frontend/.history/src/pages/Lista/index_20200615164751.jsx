import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import { FiEdit } from 'react-icons/fi';


export default function Lista() {
    const [doadores, setDoadores] = useState([]);
    const history = useHistory();


    const funcionarioEmail = localStorage.getItem('funcionarioEmail');
    const funcionarioName = localStorage.getItem('funcionarioName');
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

            <table border="3" className="tabelalista">

                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Tipo</th>
                        <th>Email</th>
                        <th>Sexo</th>
                    </tr>
                </thead>
                <tbody>
                {doadores.map(doador => (  <tr key={doador.cpf}>
                            <td>{doador.name}</td>
                            <td>{doador.cpf}</td>
                            <td>{doador.tipo}</td>
                            <td>{doador.email}</td>
                            <td>{doador.sexo}</td>
                            <FiEdit className="editar"></FiEdit>
                            </tr>
                        ))}
                   
                    <tr>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                        <td>e</td>
                        <FiEdit className="editar"></FiEdit>

                    </tr>

                    <tr>
                        <td>f</td>
                        <td>g</td>
                        <td>h</td>
                        <td>i</td>
                        <td>j</td>
                        <FiEdit className="editar"></FiEdit>

                    </tr>

                </tbody>

            </table>



        </div>
    )

}