import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import { FiTrash,FiEdit } from 'react-icons/fi';


export default function Espera() {
    const [precisa, setPrecisa] = useState([]);

    const history = useHistory();

    useEffect(() => {
        api.get('espera', {

        }).then(response => {
            setPrecisa(response.data);
        })
    });

    async function handleDeletePrecisa(rg) {
        try {
            await api.delete(`precisa/${rg}`, {

            })

            setPrecisa(precisa.filter(precisa => precisa.rg !== rg))
        } catch (err) {
            alert('Erro ao deletar pessoa. Por favor, tente novamente.')
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
            <table border="4" className="tabelalista">

                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Tipo</th>
                        <th>Email</th>
                        <th>Sexo</th>
                    </tr>
                </thead>
                <tbody>
                    {precisa.map(precisa => (<tr key={precisa.cpf}>
                        <td className="alargarnome">{precisa.name}</td>
                        <td>{precisa.rg}</td>
                        <td>{precisa.quantidade}</td>
                        <td className="alargarnome">{precisa.telefone}</td>
                        <td>{precisa.sexo}</td>
                        <td>{precisa.tipo}</td>
                        <FiEdit className="editar"></FiEdit>
                    </tr>
                    ))}

                </tbody>

            </table>



        </div>
    )

}

{/* <button onClick={() => handleDeletePrecisa(precisa.rg)} type="button"> */ }
