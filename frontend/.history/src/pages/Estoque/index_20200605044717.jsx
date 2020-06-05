import React, { useState } from 'react';
import './styles.css';
import logoImg from '../../assets/gots.png'
import figurab from '../../assets/figurab.png'
import figurabb from '../../assets/figurabb.png'
import api from '../../services/api';
import { Link, useHistory } from 'react-router-dom';


export default function Estoque() {
    return (
        <div className="estoque-container">
            <header>
                <img classname="imagem" src={logoImg}></img>
                <Link className="aaa" to="/cadastroDoador">Cadastrar Doador</Link>
                <Link className="volta" to="/"> Voltar para home</Link>
            </header>

            <h1 className="textao">Estoque</h1>
            <br></br>
            <ul>
                <li>
                    <br></br>
                    <strong>Quantidade Necessária:</strong>
                    {/* <p>{doador.name}</p> */}
                    <br></br>

                    <strong>Quantidade Disponível:</strong>
                    {/* <p>{doador.telefone}</p> */}
                    
                    
                    <img className="figurab" src={figurab}></img>
                    
                </li>

            </ul>

            <br></br>
            <ul>
                <li>
                    <br></br>
                    <strong>Quantidade Necessária:</strong>
                    {/* <p>{doador.name}</p> */}
                    <br></br>

                    <strong>Quantidade Disponível:</strong>
                    {/* <p>{doador.telefone}</p> */}
                    
                    
                    <img className="figurabb" src={figurabb}></img>
                    
                </li>

            </ul>

        </div>
    )
}