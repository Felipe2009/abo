import React,{useState,useEffect} from 'react';
import { Link,useHistory } from 'react-router-dom';
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

    // function handleLogout(){
    //     localStorage.clear();
    //     history.push('/');
    // }
    return (
        <div className="profile-container">
            <header>
             <img src={logoImg}></img>
             <Link className="button" to="doador/new">Cadastrar Doador</Link>
             <Link className="back-link" to="/">
                        <FiArrowLeft
                            size={14} color="#E02041" />
                        Voltar para home
                    </Link>
            </header>
            

                
                

                           
        </div>
    )
}