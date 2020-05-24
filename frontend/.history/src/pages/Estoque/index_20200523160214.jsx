import React, { useState } from 'react';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import sangue from '../../assets/Sangue1.png';
import { Link,useHistory } from 'react-router-dom';



export default function Estoque() {
    return (
        <div className="estoque-container">
            <div className="content">
                <header>
                    <img src={logoImg}></img>
                    <button className="botao-estoque" to="/cadastroDoador">Cadastrar Doador</button>
                    {/* <Link className="back-estoque" to="/">
                        Voltar para home
                    </Link> */}
                </header>
            </div>
        </div>
    )
}