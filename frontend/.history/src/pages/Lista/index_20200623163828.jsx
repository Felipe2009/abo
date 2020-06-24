import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import { FiEdit, FiTrash } from 'react-icons/fi';


export default function Lista() {
    const [doadores, setDoadores] = useState([]);
    const history = useHistory();


    const funcionarioEmail = localStorage.getItem('funcionarioEmail');
    const funcionarioName = localStorage.getItem('funcionarioName');
    // use effect serve para disparar uma função em um determinado momento do componente
    useEffect(() => {
        api.get('lista').then(response => {
            setDoadores(response.data);
        })
    }, [funcionarioEmail]);

    async function handleDeleteDoador(cpf) {
        try {
            await api.delete(`doador/${cpf}`, {

            });
            setDoadores(doadores.filter(doador => doador.cpf != cpf));
        }
        catch (err) {
            alert("Erro ao deletar pessoa")
        }
    }


    function handleLogout() { //remove dados do localstorage
        localStorage.clear();
        history.push('/'); //enviando de volta a raiz

    }
    return (
        <div className="lista-container">
            <header>
                <img src={logoImg} />

                <Link className="botaoo" to="/cadastroDoador">Cadastrar Doador</Link>
                <Link className="voltar" to="/"> Voltar para home</Link>
            </header>

            <h1 className="textao">Doadores cadastrados</h1>
            <br></br>

            <Link className="verificarestoquelista" to="/estoque"> Verificar estoque</Link>
            <br></br>

            <table id="tabela" border="1" className="tabelalista">

                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Tipo</th>
                        <th>Email</th>
                        <th>Sexo</th>
                        <th>Ultima Doação</th>
                    </tr>
                </thead>
                <tbody>
                    {doadores.map(doador => (<tr key={doador.cpf}>
                        <td className="alargarnome">{doador.name}</td>
                        <td>{doador.cpf}</td>
                        <td>{doador.tipo}</td>
                        <td className="alargaremail">{doador.email}</td>
                        <td>{doador.sexo}</td>
                        <td className="ultimadoacao">{doador.ultima}</td>
                        <div className="editaapaga"></div>
                        <FiEdit className="editar"></FiEdit>
                        <FiTrash onClick={() => handleDeleteDoador(doador.cpf)} type="button"> </FiTrash>
                    </tr>
                    ))}

                </tbody>

            </table>
            <script>

                $(function(){
                    $("#tabela input").keyup(function () {
                        var index = $(this).parent().index(); //A variável “index” receberá como valor, a coluna que contém o input que invocou o evento. Para recuperar este objeto, foi utilizado o método parent() da biblioteca jQuery.
                        var testando = "#tabela td:testando-child(" + (index + 1).toString() + ")"; //A variável “testando” é apenas um string para ser usado posteriormente na seleção da coluna filtrada em todas as linhas da tabela. Por exemplo, ao filtrar a primeira coluna, seu conteúdo deverá ser “#tabela td:nth-child(1)”, ou seja, um seletor CSS.


                        var valor = $(this).val().toUpperCase(); //A variável “valor” receberá o conteúdo o input que está sendo utilizado para fazer o filtro, convertendo o texto para maiúsculo. Essa conversão é feita para que a consulta seja “case insensitive”, ou seja, não diferencie letras maiúsculas de minúsculas.


                        $("#tabela tbody tr").show(); //Para iniciar o filtro, todas as linhas são exibidas inicialmente para serem ocultadas depois, se for o caso.


                        $(testando).each(function () { //Utilizamos a função each() da jQuery para realizar uma ação para cada coluna filtrada pelo seletor definido anteriormente pela variável “testando”.


                            if ($(this).text().toUpperCase().indexOf(valor) < 0) { //Caso a coluna filtrada contenha o texto digitado, a linha que a contém é ocultada. Para isso usamos novamente a função parent() para recuperar a tag TR que contém a tag TD utilizada para a verificação. A existência ou não do texto digitado na coluna nos é informada pela função indexOf() do Javascript, que retornará -1 se o valor informado não estiver contido no texto alvo. Assim, se a coluna não contém o texto digitado, a linha que a contém é ocultada. Vale notar que convertemos também o conteúdo da célula para maiúsculo, par não haver diferenciação na hora do filtro.


                                $(this).parent().hide();
                            }
                        });
                    }),

    $("#tabela input").blur(function(){ //evento blur dos inputs para que seu conteúdo seja limpo ao perderem o foco

                    $(this).val("");
    })
});



            </script>

        </div>
    )

}