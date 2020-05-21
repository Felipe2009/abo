import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    //const [senha, setSenha] = useState('');
    const [idade, setIdade] = useState('');
    const [cpf, setCpf] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        // função responsavel por fazer o cadastro do usuário e quero q ela seja disparada qdo for acionado o submit
        e.preventDefault(); //pra ñ recarregar a pagina(evitar o comportamento padrão)
        const data = {
            name,
            email,
            whatsapp,
            //senha,
            cpf,
            idade,
        }
        try {
            const response = await api.post('funcionario', data)
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/')
        } catch (err) {
            alert('Erro')
        }
    }
    function mascara(whatsapp){
        const textoAtual = whatsapp.value;
        const isCelular = textoAtual.length === 9;
        let textoAjustado;
        whatsapp.value = textoAjustado;
    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg}></img>
                    <br></br>
                    <h1>Cadastro de Funcionário</h1>
                    <Link className="back-link" to="/">
                        <FiArrowLeft
                            size={14} color="#E02041" />
                        Voltar para home
                    </Link>
                    <br></br>
                    {/* <p>Faça o cadastro do funcionário</p> */}

                </section>
                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Nome do Funcionario"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <input
                        type="email"
                        placeholder="E-mail do Funcionário"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input
                        placeholder="CPF"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}
                    ></input>

                    <input onblur="mascara(this)"
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <input
                        placeholder="Data de Aniversário"
                        type="date"
                        value={idade}
                        onChange={e => setIdade(e.target.value)}
                    />

                    

                    {/* <div className="input-group">

                    </div> */}
                    <br></br>

                    <button className="buton" type="submit">Cadastrar</button>
                </form>
            </div>

        </div>

    );

}