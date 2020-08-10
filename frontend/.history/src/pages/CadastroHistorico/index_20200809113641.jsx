import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png';
import api from '../../services/api';

export default function CadastroHistorico() {
    const [cpf, setCpf] = useState('');
    const [name, setName] = useState('');
    const [sexo, setSexo] = useState('');
    const [tipo, setTipo] = useState('');
    const [condicao, setCondicao] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [dia, setDia] = useState('');
    const [horario, setHorario] = useState('');

    const history = useHistory();
    const funcionarioEmail = localStorage.getItem('funcionarioEmail');

    async function handleCadastroHistorico(e) {
        e.preventDefault();

        const data = {
            cpf,
            name,
            sexo,
            tipo,
            condicao,
            quantidade,            
            dia,
            horario
        };
        try {
            await api.post('cadastroHistorico', data)
            // history.push('/lista');
        } catch (err) {
            alert("Erro ao cadastrar")
        }
    }

    return (

        <div className="doador-container">
            <div className="content">
                <section>
                    <img className="logoo" src={logoImg} ></img>
                    <h1>Cadastrar Historico de Doação</h1>
                    <br></br>
                    <Link className="back-link" to="/">

                        Voltar para home
                        <Link className="atualizar" to="/lista">


                            Ver a Lista de Doadores
                            </Link>
                    </Link>

                    <br></br>

                </section>
               <form onSubmit={handleCadastroHistorico}>
                    {/* essa função  precisa ser chamada no submit do form */}
                    
                    <input
                        placeholder="Nome da Pessoa"
                        value={name}
                        onChange={e => setName(e.target.value)} required
                    />

                    <input
                        id="cpf"
                        minLength='11'
                        maxLength='11'
                        placeholder="Cpf da Pessoa"
                        style={{ width: 190 }}
                        value={cpf}

                        onChange={e => setCpf(e.target.value)} required
                    />

                    <select className="tipo" value={tipo} onChange={e => setTipo(e.target.value)}
                        style={{ width: 97 }}>
                        <option value="" disabled selected>Tipo</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O+">O-</option>

                    </select>

                    <input

                        placeholder="Dia da Doação"
                        value={dia}
                        style={{ width: 165 }}

                        onChange={e => setDia(e.target.value)} required

                    />

                    <input
                        placeholder="Horário"
                        className="hora"
                        style={{ width: 119 }}
                        value={horario}
                        minLength="14"
                        maxLength="14"
                        onChange={e => setHorario(e.target.value)} required
                    />
                    <input  type="text" 
                        placeholder="Doador ou Receptor"
                        style={{ width: 303 }}
                        value={condicao}
                        onChange={e => setCondicao(e.target.value)} required
                        id="placeholder-text"
                    />


                    <input  type="number" 
                        placeholder="Quantidade de Bolsas"
                        style={{ width: 225 }}
                        value={quantidade}
                        onChange={e => setQuantidade(e.target.value)} required
                    />
                    <select className="sexo" value={sexo} onChange={e => setSexo(e.target.value)} required
                        style={{ width: 70 }}>
                        <option value="" disabled selected>Sexo</option>
                        <option value="F">F</option>
                        <option value="M">M</option>

                    </select>

                    <button className="cadastrar" type="submit" style={{ width: 315 }}>Cadastrar</button>

                </form>
            </div>

        </div>


    )
}
