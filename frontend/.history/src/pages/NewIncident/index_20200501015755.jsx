import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/gots.png';
import api from '../../services/api';
import { FormControl,FormControlLabel } from '@material-ui/core';

export default function NewIncident() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [sexo, setSexo] = useState('');
    const [tipo, setTipo] = useState('');
    const [idade, setIdade] = useState('');


    const history = useHistory();
    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            nome,
            email,
            whatsapp,
            sexo,
            tipo,
            idade
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
                    {/* <p>Faça o cadastro do doador e ajude as pessoas</p> */}
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
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <input
                        placeholder="Email do Doador"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="Telefone do Doador"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input
                            placeholder="Idade"
                            style={{ width: 100 }}
                            value={idade}
                            onChange={e => setIdade(e.target.value)}
                        />
                        {/* 
                        <input
                            placeholder="Sexo"
                            style={{ width: 100 }}
                            value={sexo}
                            onChange={e => setSexo(e.target.value)} /> */}
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                                <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                            </RadioGroup>
                        </FormControl>

                        <input
                            placeholder="Tipo"
                            style={{ width: 100 }}
                            value={tipo}
                            onChange={e => setTipo(e.target.value)} />
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