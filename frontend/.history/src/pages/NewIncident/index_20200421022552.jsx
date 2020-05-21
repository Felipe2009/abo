import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/logo.svg'

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    async function handleNewIncident(){}

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg}></img>
                    <h1>Cadastrar novo caso</h1>
                    <p>Faça seu cadastro e ajude as pessoas</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft
                            size={14} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    {/* essa função handleNewIncident precisa ser chamada no submit do form */}
                    <input
                        placeholder="Titulo do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Titulo do caso"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Titulo do caso"
                        value={value}
                        onChange={e => setValue(e.target.value)}             
                         />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>

        </div>


    )
}