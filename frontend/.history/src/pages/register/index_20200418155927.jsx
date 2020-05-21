import React from 'react';
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
                        <FiLogIn
                            size={17}
                            color="#E02041" /> Não tenho cadastro
                    </Link>
                </section>
                <form>

                </form>
            </div>

        </div>

    )

}