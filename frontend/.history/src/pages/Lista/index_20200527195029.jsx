import React,{useState,useEffect} from 'react';
import { Link,useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import { FiArrowLeft } from 'react-icons/fi';


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
    async function handleDeleteDoador(email){
        try {
            await api.delete(`doador/${email}`,{
            headers:{
                Authorization: funcionarioEmail,
            }
        })
        setDoador(doador.filter(doador => doador.email !== email))
        }catch(err){
            alert("Erro ao deletar")
        }
    }

    // function handleLogout(){
    //     localStorage.clear();
    //     history.push('/');
    // }
    return (
        <div className="perfil-container">
            <header>
             <img src={logoImg}></img>
             <Link className="botao" to="/cadastroDoador">Cadastrar Doador</Link>
             <Link className="voltar" to="/">
                        <FiArrowLeft
                            size={12} color="#E02041" />
                        Voltar para home
                    </Link>
            </header>
        </div>
    )
}