import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { SubdirectoryArrowRight } from '@material-ui/core'
import './styles.css';
import logoImg from '../../assets/gots.png';
import sangue from '../../assets/Sangue1.png';
import api from '../../services/api';

export default function Logon() {
    const [id, setId] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();


    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await api.post('sessions', { id });
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        }
        catch (err) {
            alert('Falha no login');
        }
    }
    return (
        <div className="logon-container" >
            <section className="form" >
                <img src={logoImg} />
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <input
                        placeholder="Insira seu email"
                        value={id}
                        onChange={e => setId(e.target.value)} />


                    <input
                        type="password"
                        placeholder="Insira a senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}

                    // value={id} comentado pq tava dando a msm coisa q o email
                    //onChange={e => setId(e.target.value)}
                    />

                    {/* <button type="button" onClick="mostrarSenha()">Mostrar a senha</button> */}

                    <button className="button" type="submit" > Entrar </button>

                    <Link className="back-link" to="/cadastroFuncionario">
                        <link rel="import" href="../bower_components/iron-icon/iron-icon.html"></link>
                            <link rel="import" href="../bower_components/iron-iconset-svg/iron-iconset-svg.html"><link>

                                <iron-iconset-svg size="24" name="myicons">
                                    <svg><defs>
                                        <g id="subdirectory-arrow-right"><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path></g>
                                    </defs></svg>
                                </iron-iconset-svg>
                            size={12}
                            color="#E02041" /> Não tenho cadastro
             </Link>
                </form >

            </section>
                    <img className="teste" src={sangue} />

        </div >


    )
}