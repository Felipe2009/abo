import React, { useState } from 'react';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import sangue from '../../assets/Sangue1.png';


export default function Estoque() {
    return (
        <div className="estoque-container">
            <div className="content">
                <header>
                    <img src={logoImg}></img>
                    <Link className="voltar" to="/">
                        Voltar para home
                    </Link>
                </header>
            </div>
        </div>
    )
}