import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUF] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        // função responsavel por fazer o cadastro do usuário e quero q ela seja disparada qdo for acionado o submit
        e.preventDefault(); //pra ñ recarregar a pagina(evitar o comportamento padrão)
        const data ={
            name,
            email,
            whatsapp,
            city,
            uf,
        }
        try{
       const response = await api.post('ongs', data)
       alert(`Seu ID de acesso: ${response.data.id}`);
       history.push('/')
        } catch(err){
            alert('Erro')
        }
    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg}></img>
                    <h1>Cadastro de Funcionário</h1>
                    <p>Faça o cadastro do funcionário</p>
                    <Link className="back-link" to="/">
                       
                    </Link>
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
                    placeholder="Whatsapp"
                    value={whatsapp}
                    onChange ={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input
                        placeholder="Cidade"
                        value={city}
                        onChange ={e => setCity(e.target.value)}
                        />

                        <input
                        placeholder="UF"
                        style={{ width: 100 }}
                        value ={uf}
                        onChange={e => setUF(e.target.value)} />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>

        </div>

    );

}