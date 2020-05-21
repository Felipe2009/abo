import React,{useState,useEffect} from 'react';
import { Link,useHistory } from 'react-router-dom';
import { FiPower,FiTrash2 } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import { FiPower,FiTrash2 } from 'react-icons/fi';


export default function Profile() {
    const [doador, setDoador] = useState([]);
    const funcionarioId = localStorage.getItem('funcionarioId');
    const funcionarioName = localStorage.getItem('funcionarioName');
    const history = useHistory();
    // use effect serve para disparar uma função em um determinado momento do componente
    useEffect(() => {
        api.get('perfil', {
            headers: {
                Authorization: funcionarioId,
            }
            }).then(response => {
                setDoador(response.data);
            })
    },[funcionarioId]);
    async function handleDeleteDoador(id){
        try {
            await api.delete(`doador/${id}`,{
            headers:{
                Authorization: funcionarioId,
            }
        })
        setDoador(doador.filter(doador => doador !== id))
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

                <Link className="button" to="doador/new">Cadastrar Doador</Link>
                {/* <button onClick={handleLogout} type="button">
                    <FiPower size={14} color="#E02041"></FiPower>
                </button> */}
                <Link className="back-link" to="/">
                        <FiArrowLeft
                            size={14} color="#E02041" />
                        Voltar para home
                    </Link>
            </header>
            <h1>Doadores cadastrados</h1>
            <ul>
                {doador.map(doador => (
                    // map serve para repetição
   /* chaves pq é um código javascipt  e depois da => se fosse chaves teria q ter um return, com os () não precisa*/
                    <li key={doador.id}>
                        {/* esse key serve p/ o react encontrar qual item é qual na hora de precisar deletaar um item da interface,
                        modificar,trocar de posição. Por na key qual é o valor único pra identificar cacda um desses doadores. Nesse caso é o id já q ele nunca vai se repetir */}
                    <strong>CASO:</strong>
                    <p>{doador.title}</p>

                    <strong>Descrição</strong>
                    <p>{doador.descrption}</p>

                    <strong>Valor</strong>
                    <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(doador.value)}</p>
                    <button onClick={() => handleDeleteDoador(doador.id)} type="button">
                        <FiTrash2 size={18} color="#a8a8b3"></FiTrash2>
                    </button>

                </li>
                ))}

                           </ul>
        </div>
    )
}