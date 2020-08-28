import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png';
import api from '../../services/api';


export default function Precisa() {
    const [name, setName] = useState('');
    const [rg, setRg] = useState('');
    const [telefone, setTelefone] = useState('');
    const [sexo, setSexo] = useState('');
    const [tipo, setTipo] = useState('');
    const [idade, setIdade] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const history = useHistory();
    const funcionarioEmail = localStorage.getItem('funcionarioEmail');

    async function handlePrecisa(e) {
        e.preventDefault();

        const data = {
            name,
            rg,
            telefone,
            sexo,
            tipo,
            idade,
            quantidade
        };
        try {
            await api.post('precisa', data)
                history.push('/espera');
            }
            
         catch (err) {
            alert("Erro ao cadastrar pessoa")
        }
    }


    return (
        <div className="precisa-container">
            <div className="content">
                <section>
                    <img src={logoImg}></img>
                  
                    <h1>Cadastrar Pessoa</h1>
                    <br></br>
                    <Link className="back-link" to="/">

                        Voltar para home
                        </Link>
                        <Link className="atualizar" to="/espera">

                            Lista Receptores</Link>
                    

                    <br></br>

                </section>
                <form onSubmit={handlePrecisa}>
                    {/* essa função handlePrecisa precisa ser chamada no submit do form */}
                    <input
                        placeholder="Nome do indivíduo"
                        value={name}
                        onChange={e => setName(e.target.value)} required
                    />

                    <input
                        placeholder="RG"
                        style={{ width: 150 }}
                        value={rg}
                        onChange={e => setRg(e.target.value)} required
                        maxLength='9'
                        id="placeholder-text"

                    />
                    <input
                        type="number"
                        placeholder="Quantidade"
                        style={{ width: 155 }}
                        value={quantidade}
                        onChange={e => setQuantidade(e.target.value)} required

                    />
                    <input className="telefone"
                        placeholder="Telefone"
                        style={{ width: 174 }}
                        value={telefone}
                        onChange={e => setTelefone(e.target.value)} required
                    />


                    <select className="type" value={tipo} onChange={e => setTipo(e.target.value)}
                        style={{ width: 100 }}>
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

                    <input className="idade" type="date" 
                        placeholder="Data de Nascimento"
                        style={{ width: 203 }}
                        value={idade}
                        onChange={e => setIdade(e.target.value)} required
                    />
                    <select className="opcao" value={sexo} onChange={e => setSexo(e.target.value)} required
                        style={{ width: 87 }}>
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
