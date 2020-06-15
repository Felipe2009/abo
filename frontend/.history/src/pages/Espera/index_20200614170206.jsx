import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';

export default function Espera() {
    
    const [telefone, setTelefone] = useState('');
    const [name, setName] = useState(''); //setName-> serve p/ atualizar o valor
    const [rg, setRg] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [tipo, setTipo] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');

    const history = useHistory();

    async function handleCadastroFunc(e) {
        // função responsavel por fazer o cadastro do usuário e quero q ela seja disparada qdo for acionado o submit
        e.preventDefault(); //pra ñ recarregar a pagina(evitar o comportamento padrão)
        const data = {
            telefone,
            name,
            rg,
            quantidade,
            idade,
            tipo,
            sexo,

        }
    }
    return (
        <div className="espera-container">
            <header>
                <img classname="imagem" src={logoImg}></img>
                <Link className="aaa" to="/cadastroDoador">Cadastrar Doador</Link>
                <Link className="volta" to="/"> Voltar para home</Link>
            </header>

            <h1 className="textao">Lista de Receptor</h1>
            <br></br>
            </div>
    )}