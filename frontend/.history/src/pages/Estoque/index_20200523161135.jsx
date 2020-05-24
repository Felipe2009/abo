import React, { useState } from 'react';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import sangue from '../../assets/Sangue1.png';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';



export default function Estoque() {
    return (
        <div className="estoque-container">
            <header>
                <img src={logoImg}></img>
                <Link className="botao-estoque" to="/cadastroDoador">Cadastrar Doador</Link>
                <Link className="voltar" to="/">
                    <FiArrowLeft
                        size={12} color="#E02041" />Voltar para home
                    </Link>
            </header>
        </div>
    )
}