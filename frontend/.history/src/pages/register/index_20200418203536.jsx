import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg'

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg}></img>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro</p>
                    <Link className="back-link" to="/register">
                        <FiArrowLeft
                            size={14}
                            color="#E02041" /> Não tenho cadastro
                    </Link>
                </section>
                <form>
                    <input placeholder="Nome da ONG" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="Whatsapp" />

                <div className="input-group">
                    <input placeholder="Cidade"></input>
                    <input placeholder="UF" style={{width: 80}}/>
                </div>
                </form>

                <button className="button" type="submit">Cadastrar</button>
            </div>

        </div>

    )

}