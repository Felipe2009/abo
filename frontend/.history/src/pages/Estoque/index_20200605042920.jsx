import React, { useState } from 'react';
import './styles.css';
import logoImg from '../../assets/gots.png'
import figurab from '../../assets/figurab.png'
import api from '../../services/api';
import { Link, useHistory } from 'react-router-dom';



export default function Estoque() {
    return (
        <div className="estoque-container">
            <header>
                <img src={logoImg}></img>
                <Link className="aaa" to="/cadastroDoador">Cadastrar Doador</Link>
                <Link className="volta" to="/"> Voltar para home</Link>
            </header>

            <h1 className="textao">Doadores cadastrados</h1>
    <ul>
        <li>
            <strong>A+</strong>
            {/* <p>{doador.name}</p> */}

            <strong>A+:</strong>
                    {/* <p>{doador.telefone}</p> */}

                    <strong>A+:</strong>
                    {/* <p>{doador.tipo}</p> */}

                    <img className="figurab" src={figurab}></img>
        </li>
        
    </ul>

        </div>
    )
}