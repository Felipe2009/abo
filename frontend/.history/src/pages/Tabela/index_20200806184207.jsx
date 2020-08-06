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
        ["AB+", "AB+", "Todos"],
        ["AB-", "AB+ e AB-", "A-, B-, O- e AB-"],
        ["O+", "A+, B+, O+ e AB+", "O+ e O-"],
        ["O-", "Todos", "O-"],

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

            <h1 className="titulo">Tabela de Compatibilidade</h1>
            <br></br>

            <Link className="verificarestoquetabela" to="/estoque"> Verificar estoque</Link>
            <br></br>

            <Link className="agendamentotabela" to="/agendar"> Agendar doação</Link>
            <br></br>
            
            <MUIDataTable 
                title={"Tabela de Compatibilidade"}
                data={data}
                columns={columns}
                options={options}
            />

        </div>
    )

}