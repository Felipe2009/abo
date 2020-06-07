import React,{useState,useEffect} from 'react';
import { Link,useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import { FiArrowLeft,FiTrash2, FiPower } from 'react-icons/fi';


export default function Profile() {
    const [doador, setDoador] = useState([]);
    const funcionarioEmail = localStorage.getItem('funcionarioEmail');
    const funcionarioName = localStorage.getItem('funcionarioName');
    const history = useHistory();
    // use effect serve para disparar uma função em um determinado momento do componente
    useEffect(() => {
        api.get('lista', {
            headers: { //pra mostrar qual funcionario está logado
                Authorization: funcionarioEmail,
            }
            }).then(response => {
                setDoador(response.data);
            })
    },[funcionarioEmail]);
    async function handleDeleteDoador(cpf){
        try {
            await api.delete(`doador/${cpf}`,{
            headers:{
                Authorization: funcionarioEmail,
            }
        })
        setDoador(doador.filter(doador => doador.cpf !== cpf))
        }catch(err){
            alert("Erro ao deletar")
        }
    }

     function handleLogout(){ //remove dados do localstorage
         localStorage.clear();
         history.push('/'); //enviando de volta a raiz
     
     }
return (
<div className="perfil-container">
    <header>
        <img src={logoImg}/>

        <Link className="button" to="/cadastroDoador">Cadastrar Doador</Link>
        <button type="button">
            <FiPower size={16} color="E02041"/>

        </button>
    </header>
    <h1>Doadores cadastrados</h1>
    <ul>
        <li>
            <strong>Nome:</strong>
            <p>{doador.name}</p>

            <strong>Email</strong>
                    <p>{doador.email}</p>

                    <strong>Tipo</strong>
                    <p>{doador.tipo}</p>

                    <Link className="back" to="/"> Voltar para home</Link>
        </li>
        
    </ul>
</div>
          )
     
     }