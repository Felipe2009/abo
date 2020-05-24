import React, { useState } from 'react';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import sangue from '../../assets/Sangue1.png';
import { Link, useHistory } from 'react-router-dom';



export default function Estoque() {
    return (
        <div className="estoque-container">
            <header>
                <img src={logoImg}></img>
                <feBlend className="botao-estoque" to="/cadastroDoador">Cadastrar Doador</feBlend>
                <Link className="back" to="/">
                    Voltar para home
                    </Link>
            </header>
        </div>
    )
}