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
            await api.post('precisa', data, {
                headers: {
                    Authorization: funcionarioEmail,
                }
            })
            history.push('/lista');
        } catch (err) {
            alert("Erro ao cadastrar caso")
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
                        <a className="atualizar" to="/lista">

                            Atualizar o cadastro</a>
                    </Link>

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
                        placeholder="Número do RG"
                        style={{ width: 180 }}
                        value={rg}
                        onChange={e => setRg(e.target.value)} required
                    />
                    <input
                        placeholder="Telefone"
                        style={{ width: 180 }}
                        value={telefone}
                        onChange={e => setTelefone(e.target.value)} required
                    />
                    <input
                        type="number"
                        placeholder="Quantidade"
                        style={{ width: 180 }}
                        value={quantidade}
                        onChange={e => setQuantidade(e.target.value)} required

                    />

                    <select className="type" value={tipo} onChange={e => setTipo(e.target.value)}
                        style={{ width: 100 }}>
                        <option value="" disabled selected>Tipo</option>
                        <option value={10}>A+</option>
                        <option value={20}>A-</option>
                        <option value={30}>B+</option>
                        <option value={40}>B-</option>
                        <option value={50}>AB+</option>
                        <option value={60}>AB-</option>
                        <option value={70}>O+</option>
                        <option value={80}>O-</option>

                    </select>

                    <input className="idade" type="date" //talvez esse number não seja totalmente aceito e normatizado nos navegadores, além de permitir o caracter “e” entre os números. Ao usar “number” você pode ter problemas ao selecionar o valor via jQuery com: jQuery( ‘.input_type_number’ ).val(); .
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
