import React, { useState } from 'react';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import { Link, useHistory } from 'react-router-dom';



export default function Estoque() {
    return (
        <div className="estoque-container">
            <header>
                <img src={logoImg}></img>
                <Link className="botao" to="/cadastroDoador">Cadastrar Doador</Link>
                <Link className="voltar" to="/"> Voltar para home</Link>
            </header>

        </div>
    )
}