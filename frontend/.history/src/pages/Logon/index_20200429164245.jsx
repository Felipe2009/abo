import React,{ useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import './styles.css';
import logoImg from '../../assets/gots.png';
import sangue from '../../assets/Sangue1.png';
import api from '../../services/api';

export default function Logon() {
    const [id,setId] = useState('');
    const history = useHistory();


    async function handleLogin(e){
        e.preventDefault();
        try{
            const response = await api.post('sessions',{id});
    localStorage.setItem('ongId',id);
    localStorage.setItem('ongName',response.data.name);
    history.push('/profile');
       }
        catch(err){
            alert('Falha no login');
        }
    }   
    return (
        <div className="logon-container" >
            <section className="form" >
                <img src={logoImg} />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input
                    placeholder="Sua ID"
                    value={id}
                    onChange={e => setId(e.target.value)} />
                    <button className="button" type="submit" > Entrar </button>

                    <Link className="back-link" to="/register">
                        <FiLogIn
                            size={17}
                            color="#E02041" /> Não tenho cadastro
             </Link>
                </form >
            </section>
            <img className="teste" src={sangue} />

        </div >


    )
}