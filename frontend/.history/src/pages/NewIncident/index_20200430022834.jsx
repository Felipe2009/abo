import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/gots.png';
import api from '../../services/api';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [sexo, setSexo] = useState('');

    const history = useHistory();
    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
            sexo
        };
        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })
            history.push('/profile');
        } catch (err) {
            alert("Erro ao cadastrar caso")
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg}></img>
                    <h1>Cadastrar Doador</h1>
                    <p>Faça o cadastro do doador e ajude as pessoas</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft
                            size={14} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    {/* essa função handleNewIncident precisa ser chamada no submit do form */}
                    <input
                        placeholder="Nome do Doador"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <input
                        placeholder="Email do Doador"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <div className="input-group">
                        <input
                            placeholder="Idade"
                            value={value}
                            onChange={e => setValue(e.target.value)}
                        />

                        <input
                            placeholder="Sexo"
                            style={{ width: 100 }}
                            value={sexo}
                            onChange={e => setSexo(e.target.value)} />
                    </div>



                    {/* <input 
                        placeholder="Idade do Doador"
                        value={value}
                        onChange={e => setValue(e.target.value)}             
                         /> */}

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>

        </div>


    )
}