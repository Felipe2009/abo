import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import MUIDataTable from "mui-datatables";

export default function Tabela() {

    const columns = ["Tipo de Sangue", "Pode doar para", "Pode receber de"];

    const data = [
        ["A+", "AB+ e A+", "A+, A-, O+ e O-"],
        ["A-", "A+, A-, AB+ e AB-", "A- e O-"],
        ["B+", "B+ e AB+", "B+, B-, O+ e O-"],
        ["B-", "B+, B-, AB+ e AB-", "B- e O-"],
        ["AB+", "Test Corp", "Dallas"],
        ["AB-", "Test Corp", "Dallas"],
        ["O+", "Test Corp", "Dallas"],
        ["O-", "Test Corp", "Dallas"],

    ];

    const options = {
        filterType: 'checkbox',
    };


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
            <MUIDataTable
                title={"Employee List"}
                data={data}
                columns={columns}
                options={options}
            />

        </div>
    )

}