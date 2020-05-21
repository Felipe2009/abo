import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/logo.svg'

export default function NewIncident(){
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg}></img>
                    <h1>Cadastrar novo caso</h1>
                    <p>Faça seu cadastro e ajude as pessoas</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft
                            size={14} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>
                <form>
                    <input placeholder="Titulo do caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor" />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>

        </div>


    )
}