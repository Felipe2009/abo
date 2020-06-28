import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import { FiEdit, FiTrash } from 'react-icons/fi';


export default function ListaFuncionario() {
    const [funcionarios, setFuncionarios] = useState([]);
    const history = useHistory();


    const funcionarioEmail = localStorage.getItem('funcionarioEmail');
    const funcionarioName = localStorage.getItem('funcionarioName');
    // use effect serve para disparar uma função em um determinado momento do componente
    useEffect(() => {
        api.get('lista').then(response => {
            setFuncionarios(response.data);
        })
    }, [funcionarioEmail]);

    async function handleDeleteFuncionario(cpf) {
        try {
            await api.delete(`funcionario/${cpf}`, {

            });
            setFuncionarios(funcionarios.filter(funcionario => funcionario.cpf != cpf));
        }
        catch (err) {
            alert("Erro ao deletar pessoa")
        }
    }
    

    return (
        <div className="listafuncionario-container">
            <header>
                <img src={logoImg} />

                <Link className="botaoo" to="/cadastroDoador">Cadastrar Doador</Link>
                <Link className="voltar" to="/"> Voltar para home</Link>
                
            </header>

            <h1 className="textao">Doadores cadastrados</h1>
            <br></br>

            <Link className="verificarestoquelista" to="/estoque"> Verificar estoque</Link>
            <br></br>

            <table id="tabela" border="1" className="tabelalista">

                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {funcionarios.map(funcionario => (<tr key={funcionario.cpf}>
                        <td className="alargarnome">{funcionario.name}</td>
                        <td>{funcionario.cpf}</td>
                        <td>{funcionario.email}</td>
                        <td className="alargaremail">{funcionario.whatsapp}</td>
                      
                        <div className="editaapaga"></div>
                        <FiTrash onClick={() => handleDeleteFuncionario(funcionario.cpf)} type="button"> </FiTrash>
                    </tr>
                    ))}

                </tbody>

            </table>

            

        </div>
    )

}