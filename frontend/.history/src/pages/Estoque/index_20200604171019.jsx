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
                <div className="eee">
                <Link className="button" to="/cadastroDoador">Cadastrar Doador</Link>
                <Link className="volta" to="/"> Voltar para home</Link>
                </div>
            </header>

        </div>
    )
}