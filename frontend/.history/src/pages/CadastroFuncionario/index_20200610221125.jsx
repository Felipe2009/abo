import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';

export default function Register() {
    const [cpf, setCpf] = useState('');
    const [name, setName] = useState(''); //setName-> serve p/ atualizar o valor
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [idade, setIdade] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        // função responsavel por fazer o cadastro do usuário e quero q ela seja disparada qdo for acionado o submit
        e.preventDefault(); //pra ñ recarregar a pagina(evitar o comportamento padrão)
        const data = {
            cpf,
            name,
            email,
            whatsapp,
            idade,
            senha,

        }
        try {
            const response = await api.post('funcionario', data)
            alert(`Seu email de acesso: ${response.data.email}`);
            history.push('/') //enviando para a rota de login
        } catch (err) {
            alert('Erro')
        }
    }
    function mascara(whatsapp) {
        const textoAtual = whatsapp.value;
        const isCelular = textoAtual.length === 9;
        let textoAjustado;
        const parte1 = textoAtual.slice(0, 5);
        const parte2 = textoAtual.slice(5, 9);
        textoAjustado = `${parte1}-${parte2}`
        whatsapp.value = textoAjustado;
    }

    function tiraHifen(telefone) {
        const textoAtual = telefone.value;
        const textoAjustado = textoAtual.replace(/\-/g, '');

        telefone.value = textoAjustado;
    }

    return (
        <div className="funcionario-container">
            <div className="content">
                <section>
                    <img src={logoImg}></img>
                    <br></br>
                    <h1>Cadastro de Funcionário</h1>
                    <br></br>
                    <Link className="back-link" to="/">
                        Voltar para home

                        <Link className="atualizar" to="/lista">

                            Atualizar o cadastro</Link>
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
                        onChange={e => setEmail(e.target.value)} //e.target.value representa o valor do input e to colocando dentro da variavel name q to colocando dentro do estado
                    />

                    <input classname="cpf"
                        placeholder="CPF"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}
                    ></input>

                    <input classname="whatsapp"
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                        style={{ width: 166 }}

                    />

                    <input
                        placeholder="Data de Aniversário"
                        type="date"
                        value={idade}
                        onChange={e => setIdade(e.target.value)}
                    />

                    <input className="senha"
                        placeholder="Senha"
                        type="password"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
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