import React, { useState, useEffect } from 'react';
import './styles.css';
import logoImg from '../../assets/gots.png'
import figurab from '../../assets/figurab.png'
import figurabb from '../../assets/figurabb.png'
import figurao from '../../assets/figurao.png'
import figuraoo from '../../assets/figuraoo.png'
import figuraab from '../../assets/figuraab.png'
import figuraabab from '../../assets/figuraabab.png'
import figuraa from '../../assets/figuraa.png'
import figuraaa from '../../assets/figuraaa.png'
import api from '../../services/api';
import { Link, useHistory } from 'react-router-dom';


export default function Estoque() {
    const [estoques, setEstoques] = useState([]);
    const [amais, setAmais] = useState('');
    const [amenos, setAmenos] = useState('');
    const [bmais, setBmais] = useState('');
    const [bmenos, setBmenos] = useState('');
    const [abmais, setAbmais] = useState('');
    const [abmenos, setAbmenos] = useState('');
    const [omais, setOmais] = useState('');
    const [omenos, setOmenos] = useState('');


    const funcionarioEmail = localStorage.getItem('funcionarioEmail');

    async function handleEstoque(e) {
        e.preventDefault();
        const data = {
            tipo,
            quantidade
        };
        try {
            await api.get('estoque', data)
        } catch (err) {
            alert("Erro")
        }
    } 

    // useEffect(() => {
    //     api.get('estoque').then(response => {
    //         setEstoques(response.data);
    //     })
    // }, [funcionarioEmail]);


    return (
        <div className="estoque-container">
            <header>
                <img classname="imagem" src={logoImg}></img>
                <Link className="aaa" to="/cadastroDoador">Cadastrar Doador</Link>
                <Link className="volta" to="/"> Voltar para home</Link>
            </header>
            <Link className="listagema" to="/lista">Ver a lista de doadores</Link>

            <h1 className="textao">Estoque</h1>


            <br></br>
            <ul>
                <li className="blocoa">
                    <br></br>
                    <strong>Quantidade Mínima:</strong>
                    <p>20 bolsas</p>

                    <br></br>

                    <strong>Quantidade Disponível:</strong>
                    <input className="xxx" type="text" onSubmit={handleEstoque}
                    value={amais}
                    onChange={e => setAmais(e.target.value)}
                    />             bolsas


                    <img className="figurab" src={figuraa}></img>


                </li>

            </ul>

            <br></br>
            <ul>
                <li className="blocoa-">
                    <br></br>
                    <strong>Quantidade Mínima:</strong>
                    <p>20 bolsas</p>

                    <br></br>

                    <strong>Quantidade Disponível:</strong>
                    <input className="xxx" type="text" value={this.state.value} onChange={this.handleChange}

                    />           bolsas


                    <img className="figurab" src={figuraaa}></img>
                </li>

            </ul>


            <br></br>
            <ul>
                <li className="blocob">
                    <br></br>
                    <strong>Quantidade Mínima:</strong>
                    <p>20 bolsas</p>

                    <br></br>

                    <strong>Quantidade Disponível:</strong>
                    <input className="xxx" type="text"

                    />             bolsas

                    <img className="figurab" src={figurabb}></img>

                </li>

            </ul>


            <br></br>
            <ul>

                <li className="blocob-">

                    <br></br>
                    <strong>Quantidade Mínima:</strong>
                    <p>20 bolsas</p>

                    <br></br>

                    <strong>Quantidade Disponível:</strong>
                    <input className="xxx" type="text"

                    />             bolsas


                    <img className="figurab" src={figurab}></img>

                </li>

            </ul>


            <br></br>
            <ul>
                <li className="blocoab">
                    <br></br>
                    <strong>Quantidade Mínima:</strong>
                    <p>20 bolsas</p>

                    <br></br>

                    <strong>Quantidade Disponível:</strong>
                    <input className="xxx" type="text"

                    />             bolsas


                    <img className="figurab" src={figuraab}></img>
                </li>

            </ul>

            <br></br>
            <ul>
                <li className="blocoab-">
                    <br></br>
                    <strong>Quantidade Mínima:</strong>
                    <p>20 bolsas</p>

                    <br></br>

                    <strong>Quantidade Disponível:</strong>
                    <input className="xxx" type="text"

                    />             bolsas
                    <img className="figurab" src={figuraabab}></img>



                </li>

            </ul>

            <br></br>
            <ul>
                <li className="blocoo">
                    <br></br>
                    <strong>Quantidade Mínima:</strong>
                    <p>20 bolsas</p>

                    <br></br>

                    <strong>Quantidade Disponível:</strong>
                    <input className="xxx" type="text"

                    />             bolsas
                    <img className="figurab" src={figurao}></img>

                </li>

            </ul>

            <br></br>
            <ul>
                <li className="blocoo-">
                    <br></br>
                    <strong>Quantidade Mínima:</strong>
                    <p>20 bolsas</p>

                    <br></br>

                    <strong>Quantidade Disponível:</strong>
                    <input className="xxx" type="text"

                    />             bolsas


                    <img className="figurab" src={figuraoo}></img>


                </li>

            </ul>
        </div>
        //    if (tipo == 'A+'){
        //     instrução1
        //}

        // else if (tipo = 'A-'){
        //     instrução2
        //}

        // else if (tipo = 'B+'){
        //     
        //}

        //else if (tipo = 'B-'){
        //     
        //}

        //else if (tipo = 'AB+'){
        //     
        //}

        //else if (tipo = 'AB-'){
        //     
        //}

        //else if (tipo = 'O+'){
        //     
        //}
        //

    )
}