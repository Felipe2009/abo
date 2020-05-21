import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/gots.png';
import api from '../../services/api';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import { MenuItem, FormControl,Select } from '@material-ui/core';




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
                            style={{ width: 125 }}
                            value={idade}
                            onChange={e => setIdade(e.target.value)}
                        />

                         <input
                            placeholder="Sexo"
                            type="option"
                            style={{ width: 120 }}
                            value={sexo}
                            onChange={e => setSexo(e.target.value)} />  

                        {/* <input
                            placeholder="Tipo"
                            style={{ width: 125 }}
                            value={tipo}
                            onChange={e => setTipo(e.target.value)} /> */}
                            <FormControl>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tipo}
          onChange={e => setTipo(e.target.value)}        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
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