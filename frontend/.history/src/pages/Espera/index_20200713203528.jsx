import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import { FiTrash } from 'react-icons/fi';


export default function Espera() {
    const [precisas, setPrecisas] = useState([]);

    const history = useHistory();

    useEffect(() => {
        api.get('espera').then(response => {
            setPrecisas(response.data);
        })
    });
    async function handleDeletePrecisa(rg) {
        try {
            await api.delete(`precisa/${rg}`, {

            });
            setPrecisas(precisas.filter(precisa => precisa.rg != rg));
        }
        catch (err) {
            alert("Erro ao deletar pessoa")
        }
    }

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
            <table border="6" className="tabelalista">

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
                    {precisas.map(precisa => (
                        // key é o valor para identificar
                        <tr key={precisa.rg}>

                            <td>{precisa.name}</td>
                            <td>{precisa.rg}</td>
                            <td>{precisa.tipo}</td>
                            <td>{precisa.telefone}</td>
                            <td>{precisa.sexo}</td>
                            <br></br>
                            <FiTrash classname="apagaprecisa" onClick={() => handleDeletePrecisa(precisa.rg)} type="button"></FiTrash>
                        </tr>
                    ))}
                   
                </tbody>

            </table>



        </div>
    )

}

{/* <button onClick={() => handleDeletePrecisa(precisa.rg)} type="button"> */ }
