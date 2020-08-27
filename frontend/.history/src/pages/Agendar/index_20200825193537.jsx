import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png';
import api from '../../services/api';


export default function Agendar() {
    const [rg, setRg] = useState('');
    const [name, setName] = useState('');
    const [dia, setDia] = useState('');
    const [horario, setHorario] = useState('');
    const [telefone, setTelefone] = useState('');
    const [sexo, setSexo] = useState('');
    const [tipo, setTipo] = useState('');

    const history = useHistory();

    async function handleAgendar(e) {
        e.preventDefault();

        const data = {
            rg,
            name,
            dia,
            horario,
            telefone,
            sexo,
            tipo
                
              };
              try {
                await api.post('agendar', data)
                history.push('/listaAgendamento');
            } catch (err) {
                alert("Erro ao agendar doador")
            }
        

    }

    return (

        <div className="agendamento-container">
            <div className="content">
                <section>
                    <img className="logoo" src={logoImg} ></img>
                    <h1>Agendar doação</h1>
                    <br></br>
                    <Link className="back-link" to="/">

                        Voltar para home
                        <Link className="atualizar" to="/lista">


                            Ver a Lista de Doadores
                            </Link>
                    </Link>

                    <br></br>

                </section>
                <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.min.js"></script>
                <form onSubmit={handleAgendar}>
                    {/* essa função  precisa ser chamada no submit do form */}
                    <script>
                        $("#rg").mask("99.999.999-9");
                    </script>
                    <input
                        placeholder="Nome do Doador"
                        value={name}
                        onChange={e => setName(e.target.value)} required
                    />

                    <input
                        id="rg"
                        minLength='9'
                        maxLength='9'
                        placeholder="Rg do Doador"
                        style={{ width: 190 }}
                        value={rg}

                        onChange={e => setRg(e.target.value)} required
                    />

                    <select className="tipo" value={tipo} onChange={e => setTipo(e.target.value)}
                        style={{ width: 97 }}>
                        <option value="" disabled selected>Tipo</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O+">O-</option>

                    </select>
                    <input

                        placeholder="Dia da Doação"
                        value={dia}
                        style={{ width: 127 }}
                        type="text"

                        onChange={e => setDia(e.target.value)} required

                    />
                    <input className="horario"
                        placeholder="Horário"
                        value={horario}
                        style={{ width: 113 }}
                        type="time"
                        onChange={e => setHorario(e.target.value)} required

                    />

                    <input
                        placeholder="Telefone"
                        style={{ width: 170 }}
                        value={telefone}
                        minLength='14'
                        maxLength='14'
                        onChange={e => setTelefone(e.target.value)} required
                    />


                    <select className="sexoo" value={sexo} onChange={e => setSexo(e.target.value)} required
                        style={{ width: 100 }}>
                        <option value="" disabled selected>Sexo</option>
                        <option value="F">F</option>
                        <option value="M">M</option>

                    </select>

                    <button className="cadastrar" type="submit" style={{ width: 315 }}>Agendar</button>

                </form>
            </div>

        </div>


    )
}
