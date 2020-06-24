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

    // async function handleDeletePrecisa(rg) {
    //     try {
    //         await api.delete(`precisa/${rg}`, {

    //         })

    //         setPrecisa(precisa.filter(precisa => precisa.rg !== rg))
    //     } catch (err) {
    //         alert('Erro ao deletar pessoa. Por favor, tente novamente.')
    //     }
    // }
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
                        <th>Email</th>
                        <th>Sexo</th>
                    </tr>
                </thead>
                <tbody>
                    {receptores.map(precisa => (<tr key={receptores.rg}>
                        <td className="alargarnome">{receptores.name}</td>
                        <td>{receptores.rg}</td>
                        <td>{receptores.tipo}</td>
                        <td className="alargarnome">{receptores.email}</td>
                        <td>{receptores.sexo}</td>
                        <FiTrash></FiTrash>
                    </tr>
                    ))}

                </tbody>

            </table>



        </div>
    )

}

{/* <button onClick={() => handleDeletePrecisa(precisa.rg)} type="button"> */ }