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
    const imagens = {'A+' : 'figuraa',
                      'A-' : 'figuraaa',
                      'B+' : 'figurab',
                      'B-' : 'figurabb',
                      'AB+' : 'figuraab',
                      'AB-' : 'figuraabab',
                      'O+' : 'figurao',
                      'O-' : 'figuraoo'}
    

    // const [tipoAmais, setTipoAmais] = useState('');
    // const [tipoAmenos, setTipoAmenos] = useState('');
    // const [tipo, setTipo] = useState('');
    // const [quantidade, setQuantidade] = useState('');

    const data = [estoques.map(estoque => (<li className={estoque.tipo}>
    <br></br>
    <strong>Quantidade Mínima:</strong>
    <p>20 bolsas</p>

    <br></br>

    <strong>Quantidade Disponível:</strong>
    <input className="xxx" type="text" value={estoque.quantidade} /> bolsas
        
        <img className={estoque.tipo} src={imagens[estoque.tipo]}></img>
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
                <Link className="aaa" to="/cadastroDoador">Cadastrar Doador</Link>
                <Link className="volta" to="/agendar"> Agendar Doação</Link>
            </header>
            <Link className="listagema" to="/lista">Ver a lista de doadores</Link>

            <h1 className="textao">Estoque</h1>


            <br></br>
            <ul>

                {data}

            </ul>

            <br></br>
            

           
        </div>
        
    )
}