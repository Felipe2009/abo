import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';

export default function Tabela() {
    
    return (
        <div className="tabela-container">
            <header>
                <img src={logoImg} />

                <Link className="botaoo" to="/cadastroDoador">Cadastrar Doador</Link>
                <Link className="voltar" to="/"> Voltar para home</Link>
            </header>

            <h1 className="textao">Tabela de Compatibilidade</h1>
            <br></br>
            
            <Link className="verificarestoque" to="/estoque"> Verificar estoque</Link>
            <br></br>       

            <Link className="agendamento" to="/agendar"> Agendar doação</Link>
            <br></br>       
{/* 

            <table border="4" className="table">
                <thead>
                    <tr>
                        <th>Tipo de Sangue</th>
                        <th>Pode doar para</th>
                        <th>Pode receber de</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>A+</td>
                        <td>AB+ e A+</td>
                        <td>A+, A-, O+ e O-</td>
                    </tr>
                    <tr>
                        <td style={{ width: 85 }}>A-</td>
                        <td style={{ width: 85 }}>A+, A-, AB+ e AB-</td>
                        <td style={{ width: 85 }}>A- e O-</td>
                        
                    </tr>

                    <tr>
                        <td>B+</td>
                        <td>B+ e AB+</td>
                        <td>B+, B-, O+ e O-</td>
                    </tr>

                    <tr>
                        <td>B-</td>
                        <td>B+, B-, AB+ e AB-	</td>
                        <td>B- e O-</td>
                    </tr>

                    <tr>
                        <td>AB+</td>
                        <td>AB+</td>
                        <td>Todos</td>
                    </tr>

                    <tr>
                        <td>AB-</td>
                        <td>AB+ e AB-</td>
                        <td>A-, B-, O- e AB-</td>
                    </tr>

                    <tr>
                        <td>O+</td>
                        <td>A+, B+, O+ e AB+</td>
                        <td>O+ e O-</td>
                    </tr>

                    <tr>
                        <td>O-</td>
                        <td>Todos</td>
                        <td>O-</td>
                    </tr>
                    
                </tbody>
            </table> */}

        </div>
    )

}