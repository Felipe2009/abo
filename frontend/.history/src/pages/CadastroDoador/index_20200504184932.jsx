import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/gots.png';
import api from '../../services/api';
import InputLabel from '@material-ui/core/InputLabel';
import { MenuItem, FormControl, Select, TextField } from '@material-ui/core';




export default function Doador() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [sexo, setSexo] = useState('');
    const [tipo, setTipo] = useState('');
    const [idade, setIdade] = useState('');


    const history = useHistory();
    const ongId = localStorage.getItem('ongId');

    async function handleDoador(e) {
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
        <div className="doador-container">
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
                <form onSubmit={handleDoador}>
                    {/* essa função handleDoador precisa ser chamada no submit do form */}
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
                        <input className="idade"
                            placeholder="Idade"
                            style={{ width: 70 }}
                            value={idade}
                            onChange={e => setIdade(e.target.value)}
                        />



                        {/* <input
                            placeholder="Sexo"
                            style={{ width: 120 }}
                            value={sexo}
                            onChange={e => setSexo(e.target.value)} */}


                        <FormControl className="sexo" >
                            <InputLabel htmlFor="demo-customized-select-native">Sexo</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                style={{ width: 110 }}
                                value={sexo}
                                onChange={e => setSexo(e.target.value)}        >
                                <MenuItem aria-label="None" value=""></MenuItem>
                                <MenuItem value={10}>F</MenuItem>
                                <MenuItem value={20}>M</MenuItem>

                            </Select>
                        </FormControl>

                        {/* <input
                            placeholder="Tipo"
                            style={{ width: 125 }}
                            value={tipo}
                            onChange={e => setTipo(e.target.value)} /> */}


                        <FormControl className="controle" >
                            <InputLabel htmlFor="demo-customized-select-native">Tipo</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                style={{ width: 100 }}
                                value={tipo}
                                onChange={e => setTipo(e.target.value)}        >
                                <MenuItem aria-label="None" value=""></MenuItem>
                                <MenuItem value={10}>A+</MenuItem>
                                <MenuItem value={20}>A-</MenuItem>
                                <MenuItem value={30}>B+</MenuItem>
                                <MenuItem value={40}>B-</MenuItem>
                                <MenuItem value={50}>AB+</MenuItem>
                                <MenuItem value={60}>AB-</MenuItem>
                                <MenuItem value={70}>O+</MenuItem>
                                <MenuItem value={80}>O-</MenuItem>
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



{/* 
                        <input                            id="demo-simple-select-label"
                        select
                        label="Select"
                            value={tipo}
                            onChange={e => setTipo(e.target.value)}
                            style={{ width: 125 }} />
                            <MenuItem value={10}>A</MenuItem>
                            <MenuItem value={20}>B</MenuItem>
                            <MenuItem value={30}>AB</MenuItem> */}


{/* <TextField
                            id="demo-simple-select-label"
                            select
                            label="Select"
                            value={tipo}
                            onChange={e => setTipo(e.target.value)}
                            style={{ width: 125 }}


                        >
                            <MenuItem value={10}>A</MenuItem>
                            <MenuItem value={20}>B</MenuItem>
                            <MenuItem value={30}>AB</MenuItem>
                        </TextField>  */}