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
    function onlynumber(evt) {
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode( key );
        //var regex = /^[0-9.,]+$/;
        var regex = /^[0-9.]+$/;
        if( !regex.test(key) ) {
           theEvent.returnValue = false;
           if(theEvent.preventDefault) theEvent.preventDefault();
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

                    <input className="idade" type="text" onkeypress="return onlynumber();"
                        placeholder="Idade"
                        style={{ width: 110 }}
                        value={idade}
                        onChange={e => setIdade(e.target.value)}
                    />


                    {/* <FormControl className="sexo" >
                            <InputLabel htmlFor="demo-customized-select-native">Sexo</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                style={{ width: 120 }}
                                value={sexo}
                                onChange={e => setSexo(e.target.value)}        >
                                <MenuItem aria-label="None" value=""></MenuItem>
                                <MenuItem value={10}>F</MenuItem>
                                <MenuItem value={20}>M</MenuItem>

                            </Select>
                        </FormControl> */}

                    {/* <div className="input-group"> */}
                    <select className="opcao" value={sexo} onChange={e => setSexo(e.target.value)}
                        style={{ width: 100 }}>
                        <option value="" disabled selected>Sexo</option>
                        <option value="F">F</option>
                        <option value="M">M</option>

                    </select>

                    <select  className="tipo" value={tipo} onChange={e => setTipo(e.target.value)}
                        style={{ width: 110 }}>
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




                    {/* <FormControl className="controle" >
                            <InputLabel htmlFor="demo-customized-select-native">Tipo</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                style={{ width: 120 }}
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
                        </FormControl> */}

                    {/* </div> */}



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