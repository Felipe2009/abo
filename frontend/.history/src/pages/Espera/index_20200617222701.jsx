import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import { FiTrash, FiEdit } from 'react-icons/fi';


export default function Espera() {
    const [receptores, setReceptores] = useState([]);

    const history = useHistory();

    useEffect(() => {
        api.get('espera').then(response => {
            setReceptores(response.data);
        })
    });


    return (
        <div className="espera-container">
            <header>
                <img classname="imagem" src={logoImg}></img>
                <Link className="aaa" to="/cadastroDoador">Cadastrar Doador</Link>
                <Link className="volta" to="/"> Voltar para home</Link>
            </header>

            <h1 className="textao">Lista de Receptor</h1>
            <br></br>
            <Link className="verificarestoquelista" to="/estoque"> Verificar estoque</Link>
            <br></br>
            <table border="4" className="tabelalista">

                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>RG</th>
                        <th>Tipo</th>
                        <th>Telefone</th>
                        <th>Sexo</th>
                    </tr>
                </thead>
                <tbody>
                    {receptores.map(precisa => (
                        // valor para identificar
                        <tr key={precisa.rg}>

                            <td>{precisa.name}</td>
                            <td>{precisa.rg}</td>
                            <td>{precisa.telefone}</td>
                            <td>{precisa.sexo}</td>
                            <td>{precisa.tipo}</td>
                            <FiTrash></FiTrash>

                        </tr>
                    ))}
                    <tr >

                        <td>a</td>
                        <td>a</td>
                        <td>a</td>
                        <td>a</td>
                        <td>a</td>
                        <FiTrash></FiTrash>

                    </tr>


                </tbody>

            </table>



        </div>
    )

}

{/* <button onClick={() => handleDeletePrecisa(precisa.rg)} type="button"> */ }
