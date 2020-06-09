import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';

export default function Espera() {
    const [telefone, setTelefone] = useState('');
    const [name, setName] = useState(''); //setName-> serve p/ atualizar o valor
    const [quantidade, setQuantidade] = useState('');
    const [tipo, setTipo] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        // função responsavel por fazer o cadastro do usuário e quero q ela seja disparada qdo for acionado o submit
        e.preventDefault(); //pra ñ recarregar a pagina(evitar o comportamento padrão)
        const data = {
            telefone,
            name,
            quantidade,
            idade,
            tipo,
            sexo,

        }
    }
    }