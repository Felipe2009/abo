import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';

export default function CadastroFunc() {
    const [cpf, setCpf] = useState('');
    const [name, setName] = useState(''); //setName atualiza o valor
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [idade, setIdade] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();

    async function handleCadastroFunc(e) {// função responsavel por fazer o cadastro do usuário e ser disparada qdo for acionado o submit

        e.preventDefault(); //pra ñ recarregar a pagina(evitar o comportamento padrão)
        const data = {
            cpf,
            name,
            email,
            whatsapp,
            idade,
            senha,

        }
        try { //verifica se o cadastro foi feito com sucesso
            const response = await api.post('funcionario', data)
            alert(`Seu email de acesso: ${response.data.email}`);
            history.push('/') //envia para a rota de login
        } catch (err) {
            alert('Erro')
        }
    }
    
    return (
        <div className="funcionario-container">
            <div className="content">
                <section>
                    <img className="logoo" src={logoImg}></img>
                    <br></br>
                    <h1>Cadastro de Funcionário</h1>
                    <br></br>
                    <Link className="back-link" to="/">
                        Voltar para home

                        <Link className="tabelacompatibilidade" to="/tabela">

                            Tabela de Compatibilidade</Link>
                    </Link>
                    <br></br>

                </section>
                <form onSubmit={handleCadastroFunc}>
                    <input
                        placeholder="Nome do Funcionario"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <input
                        type="email"
                        placeholder="E-mail do Funcionário"
                        value={email}
                        onChange={e => setEmail(e.target.value)} //e.target.value representa o valor do input -> colocando dentro da variavel name q to colocando dentro do estado
                    />

                    <input classname="cpf"
                        placeholder="CPF"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}
                        style={{ width: 166 }}
                        maxLength='11'


                    ></input>

                    <input
                        placeholder="Data de Aniversário"
                        type="date"
                        value={idade}
                        onChange={e => setIdade(e.target.value)}
                        style={{ width: 152 }}

                    />

                    <input classname="whatsapp"
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                        style={{ width: 168 }}
                        minLength="14"
                        maxLength="14"


                    />
                    <input className="senha"
                        placeholder="Senha"
                        type="password"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        style={{ width: 133 }}
                    />

                    <br></br>
                    <br></br>


                    <button className="buton" type="submit">Cadastrar</button>
                </form>
            </div>

        </div>

    );

}