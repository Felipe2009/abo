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
    const imagens = {
        'A+': figuraa,
        'A-': figuraaa,
        'B+': figurabb,
        'B-': figurab,
        'AB+': figuraab,
        'AB-': figuraabab,
        'O+': figuraoo,
        'O-': figurao
    }


    const data = [estoques.map(estoque => (<li className={estoque.tipo}>
        <ul className="imagem">
            <strong>Quantidade Mínima:</strong>
            <p>20 bolsas</p>

            <strong>Quantidade Disponível em Bolsas:</strong>

            <input className="xxx" type="text" value={estoque.quantidade}></input>
            <p><img className={estoque.tipo} src={imagens[estoque.tipo]}></img></p>

        </ul>

    </li>


    ))]
    console.log(data);

    const funcionarioEmail = localStorage.getItem('funcionarioEmail');


    useEffect(() => {
        api.get('estoque').then(response => {
            setEstoques(response.data);
        })
    }, [funcionarioEmail]);


    return (
        <div className="estoque-container">
            <header>
                <img classname="imagem" src={logoImg}></img>
                <Link className="aaa" to="/cadastroHistorico">Cadastrar Doação</Link>
                <Link className="volta" to="/agendar"> Agendar Doação</Link>
            </header>
            <Link className="listagema" to="/lista">Ver a lista de doadores</Link>

            <h1 className="textao">Estoque</h1>


            {/* <br></br> */}
            <ul >
                {data}

            </ul>

            {/* <br></br> */}



        </div>

    )
}