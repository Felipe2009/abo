import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import './styles.css';
import logoImg from '../../assets/gots.png';
import sangue from '../../assets/Sangue1.png';
import api from '../../services/api';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();


    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await api.post('/login', { email });
            localStorage.setItem('funcionarioEmail', email); //salvando o email no storage do navegador
            localStorage.setItem('funcionarioSenha', response.data.senha);
            history.push('/cadastroDoador');
        }
        catch (err) {
            console.log(err);
            //alert('Falha no login');
            alert(err.message);
        }
    }
    return (
        <div className="logon-container" >
            <section className="form" >
                <img className="logo" src={logoImg} />
                <form className="arrumar" onSubmit={handleLogin}>
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
                    />
                    <br></br>
                    {/* <button type="button" onClick="mostrarSenha()">Mostrar a senha</button> */}

                    <button className="button" type="submit" > Entrar </button>
                    {/* com o link a pagina nao tem q recarregar */}
                    <Link className="back-voltar" to="/cadastroFuncionario">
                        Ainda não possui cadastro?
             </Link>
                </form >

            </section>
            <img className="teste" src={sangue} />

        </div >


    )
}