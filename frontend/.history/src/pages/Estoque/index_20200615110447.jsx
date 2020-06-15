import React, { useState } from 'react';
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
    return (
        <div className="estoque-container">
            <header>
                <img classname="imagem" src={logoImg}></img>
                <Link className="aaa" to="/cadastroDoador">Cadastrar Doador</Link>
                <Link className="volta" to="/"> Voltar para home</Link>
            </header>

            <h1 className="textao">Estoque</h1>
            <br></br>
            <ul>
                <li className="blocoa">
                    <br></br>
                    <strong>Quantidade Mínima:</strong>
                    <p>20 bolsas</p>

                    <br></br>

                    <strong>Quantidade Disponível:</strong>
                    <p>2 bolsas</p>


                    <Link className="listagema" to="/lista">Ver a lista de doadores</Link>
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
                    <p>2 bolsas</p>


                    <Link className="listagem" to="/lista">Ver a lista de doadores</Link>
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
                    <p>2 bolsas</p>
                    <Link className="listagem" to="/lista">Ver a lista de doadores</Link>
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
                    <input className="xxx" type="number"

                    />             bolsas


                    <img className="figurab" src={figurab}></img>
                    <Link className="listagem" to="/lista">Ver a lista de doadores</Link>


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
                    <input className="xxx" type="number"

                    />             bolsas

                   
                    <img className="figurab" src={figuraab}></img>
                    <Link className="listagem" to="/lista">Ver a lista de doadores</Link>
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
                    <input className="xxx" type="number"

                    />             bolsas
                    <img className="figurab" src={figuraabab}></img>
                    <Link className="listagemdoador" to="/lista">Ver a lista de doadores</Link>



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
                    <input className="xxx" type="number"

                    />             bolsas
                    <img className="figurab" src={figurao}></img>
                    <Link className="listagem" to="/lista">Ver a lista de doadores</Link>

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
                    <input className="xxx" type="number"

                    />             bolsas


                    <img className="figurab" src={figuraoo}></img>
                    <Link className="listagem" to="/lista">Ver a lista de doadores</Link>


                </li>

            </ul>
        </div>


    )
}