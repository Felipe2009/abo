import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import { FiTrash } from 'react-icons/fi';


export default function Espera() {
    const [precisas, setPrecisas] = useState([]);

    const history = useHistory();
    const columns = ["name","rg","tipo","sexo"];
    const data = [precisas.map(precisa => (<tr key={precisa.name}>

            <td>{precisa.name}</td>
            <td>{precisa.rg}</td>
            <td>{precisa.tipo}</td>
            <td>{precisa.sexo}</td>

        {/* <FiEdit onClick={() => (doador.cpf)} type="button" className="editar"></FiEdit> */}
        <FiTrash onClick={() => handleDeletePrecisa(precisa.cpf)} type="button"> </FiTrash>
    </tr>
    ))]
    const options = {
        filter: true,
        search: true,
    };


    useEffect(() => {
        api.get('espera').then(response => {
            setPrecisas(response.data);
        })
    });
    async function handleDeletePrecisa(rg) {
        try {
            await api.delete(`precisa/${rg}`, {

            });
            setPrecisas(precisas.filter(precisa => precisa.rg != rg));
        }
        catch (err) {
            alert("Erro ao deletar pessoa")
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
            <Link className="verificarestoqueespera" to="/estoque"> Verificar estoque</Link>
            <br></br>
            <Link className="agendar" to="/agendar"> Verificar estoque</Link>
            <br></br>

            <MUIDataTable
                //data = {data}
                data={agenda}
                columns={columns}
                options={options}

            >

            </MUIDataTable>  
      
        </div>
    )

}

