import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FiPower,FiTrash2 } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/logo.svg'
import api from '../../services/api';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    // use effect serve para disparar uma função em um determinado momento do componente
    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
            }).then(response => {
                setIncidents(response.data);
            })
    },[ongId]);
    return (
        <div className="profile-container">
            <header>
             <img src={logoImg}></img>
             <span>Bem vinda, {ongName}</span>

                <Link className="button" to="incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041"></FiPower>
                </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map(incident => (
                    // map serve para repetição
   /* chaves pq é um código javascipt  e depois da => se fosse chaves teria q ter um return, com os () não precisa*/
                    <li key={incidents.id}>
                        {/* esse key serve p/ o react encontrar qual item é qual na hora de precisar deletaar um item da interface,
                        modificar,trocar de posição. Por na key qual é o valor único pra identificar cacda um desses incidentes. Nesse caso é o id já q ele nunca vai se repetir */}
                    <strong>CASO:</strong>
                    <p>{incident.title}</p>

                    <strong>Descrição</strong>
                    <p>{incident.descrption}</p>

                    <strong>Valor</strong>
                    <p>{incident.value}</p>
                    <button type="button">
                        <FiTrash2 size={18} color="#a8a8b3"></FiTrash2>
                    </button>

                </li>
                ))}

                           </ul>
        </div>
    )
}