import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/gots.png';
import api from '../../services/api';


export default function Doador() {
    const [cpf, setCpf] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [sexo, setSexo] = useState('');
    const [tipo, setTipo] = useState('');
    const [idade, setIdade] = useState('');
    const [ultima, setUltima] = useState('');


    const history = useHistory();
    const funcionarioId = localStorage.getItem('funcionarioId');

    async function handleDoador(e) {
        e.preventDefault();

        const data = {
            cpf,
            name,
            email,
            telefone,
            sexo,
            tipo,
            idade,
            ultima
        };
        try {
            await api.post('doador', data, {
                headers: {
                    Authorization: funcionarioId,
                }
            })
            history.push('/lista');
        } catch (err) {
            alert("Erro ao cadastrar caso")
        }
    }
    // function checkIdade(field, rules, i, options){
    //     if (field.val() < 18) {
    //        // this allows the use of i18 for the error msgs
    //        return options.allrules.validate2fields.alertText;
    // //        <input class="validate[required,funcCall[checkIdade]]" 
    // //    type="text" 
    // //    id="idade" 
    // //    name="idade" /> por lá no input da idade
    //     }
    //   }

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
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <input
                        placeholder="Cpf do Doador"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}
                    />


                    <input
                        placeholder="Email do Doador"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    
                    <input 
                        placeholder="Telefone"
                        style={{ width: 160 }}
                        value={telefone}
                        onChange={e => setTelefone(e.target.value)}
                    />
                    <input className="ultima" type="text" //talvez esse number não seja totalmente aceito e normatizado nos navegadores, além de permitir o caracter “e” entre os números. Ao usar “number” você pode ter problemas ao selecionar o valor via jQuery com: jQuery( ‘.input_type_number’ ).val(); .
                        placeholder="Ultima Doação"
                       style={{ width: 131 }}
                        value={ultima}
                        onChange={e => setUltima(e.target.value)}
                    />
                    
        
                    <input className="idade" type="date" //talvez esse number não seja totalmente aceito e normatizado nos navegadores, além de permitir o caracter “e” entre os números. Ao usar “number” você pode ter problemas ao selecionar o valor via jQuery com: jQuery( ‘.input_type_number’ ).val(); .
                        placeholder="Data de Nascimento"
                        style={{ width: 190 }}
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
                        style={{ width: 54}}>
                        <option value="" disabled selected>Sexo</option>
                        <option value="F">F</option>
                        <option value="M">M</option>

                    </select>

                    <select className="tipo" value={tipo} onChange={e => setTipo(e.target.value)}
                        style={{ width: 54 }}>
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


                    <button className="cadastrar"  type="submit" style={{ width:315 }}>Cadastrar</button>

                </form>
            </div>

        </div>


    )
}
