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

     function handleLogout(){ //remove dados do localstorage
         localStorage.clear();
         history.push('/'); //enviando de volta a raiz



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
                    <strong>Nome:</strong>
                    <p>{doador.name}</p>

                    <strong>Email</strong>
                    <p>{doador.email}</p>

                    <strong>Tipo</strong>
                    <p>{doador.tipo}</p>

                    <button onClick={() => handleDeleteDoador(doador.cpf)} type="button">
                        <FiTrash2 size={18} color="#a8a8b3"></FiTrash2>
                    </button>

                </li>
                ))}

                           </ul>
        </div>



     }
    }
//     return (
//         <div className="perfil-container">
//             <header>
//              <img src={logoImg}></img>
//              <Link className="botao" to="/cadastroDoador">Cadastrar Doador</Link>
//              <Link className="voltar" to="/">
//                         <FiArrowLeft
//                             size={12} color="#E02041" />
//                         Voltar para home
//                     </Link>
//             </header>
//         </div>
//     )
// }