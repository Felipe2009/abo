import React,{useState,useEffect} from 'react';
import { Link,useHistory } from 'react-router-dom';
import { FiPower,FiTrash2 } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    const history = useHistory();
    // use effect serve para disparar uma função em um determinado momento do componente
    useEffect(() => {
        api.get('perfil', {
            headers: {
                Authorization: ongId,
            }
            }).then(response => {
                setIncidents(response.data);
            })
    },[ongId]);
    async function handleDeleteIncident(id){
        try {
            await api.delete(`incidents/${id}`,{
            headers:{
                Authorization: ongId,
            }
        })
        setIncidents(incidents.filter(incident => incident !== id))
        }catch(err){
            alert("Erro ao deletar")
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }
    return (
        <div className="profile-container">
            <header>
             <img src={logoImg}></img>
             {/*  <span>Bem vinda, {ongName}</span> */}

                <Link className="button" to="incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041"></FiPower>
                </button>
            </header>
            <h1>Doadores cadastrados</h1>
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
                    <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(incident.value)}</p>
                    <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                        <FiTrash2 size={18} color="#a8a8b3"></FiTrash2>
                    </button>

                </li>
                ))}

                           </ul>
        </div>
    )
}