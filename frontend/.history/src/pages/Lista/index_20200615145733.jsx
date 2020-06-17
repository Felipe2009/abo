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

            <ul>
               {doadores.map(doador => (
                    <li key={doador.cpf}>
                        <strong>Nome: </strong>
                        <p>{doador.name}</p>

                        <strong>Cpf</strong>
                        <p>{doador.cpf}</p>

                        

                        
                    </li>
               ))}
            </ul>
        </div>
    );
}
