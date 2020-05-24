import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import './styles.css';
import logoImg from '../../assets/gots.png';
import sangue from '../../assets/Sangue1.png';
import api from '../../services/api';

export default function Logon() {
    //const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();


    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await api.post('sessions', { email });
            localStorage.setItem('funcionarioEmail', email);
            localStorage.setItem('funcionarioName', response.data.name);
            history.push('/perfil');
        }
        catch (err) {
            alert('Falha no login');
        }
    }
    return (
        <div className="logon-container" >
            <section className="form" >
                <img className="logo" src={logoImg} />
                <background-image></background-image>
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <input
                        placeholder="Insira seu email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
<br></br>

                    <input
                        type="password"
                        placeholder="Insira sua senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        

                    // value={id} comentado pq tava dando a msm coisa q o email
                    //onChange={e => setId(e.target.value)}
                    />
                    <br></br>
                    {/* <button type="button" onClick="mostrarSenha()">Mostrar a senha</button> */}

                    <button className="button" type="submit" > Entrar </button>

                    <Link className="back-link" to="/cadastroFuncionario">
                        Ainda não possui cadastro?
             </Link>
                </form >

            </section>
            <img className="teste" src={sangue} />

        </div >


    )
}