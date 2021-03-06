import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import CadastroFuncionario from './pages/CadastroFuncionario';
import Lista from './pages/Lista';
import CadastroDoador from './pages/CadastroDoador';
import Estoque from './pages/Estoque';
import Precisa from './pages/Precisa';
import Espera from './pages/Espera';
import Tabela from './pages/Tabela'
import ListaFuncionario from './pages/ListaFuncionario'
import Agendar from './pages/Agendar'
import listaAgendamento from './pages/ListaAgendamento'
import historicoDoacao from './pages/HistoricoDoacao'
import cadastroHistorico from './pages/CadastroHistorico'



export default function Routes(){
    return(
        <BrowserRouter> 
        <Switch>
            <Route path="/" exact component={Logon} />{/* o exact é pra mostrar q o caminho deve ser exatamente esse para ir pra essa rota.Pq senão o /register q começa com / ñ vai pegar */}
            <Route path="/CadastroFuncionario" component={CadastroFuncionario} />
            <Route path="/CadastroDoador" component={CadastroDoador} /> 
            <Route path="/lista" component={Lista} /> 
            <Route path="/estoque" component={Estoque} />
            <Route path="/precisa" component={Precisa} />
            <Route path="/espera" component={Espera} />
            <Route path="/tabela" component={Tabela} />
            <Route path="/listaFuncionario" component={ListaFuncionario} />
            <Route path="/agendar" component={Agendar} />
            <Route path="/listaAgendamento" component={listaAgendamento} /> 
            <Route path="/historicoDoacao" component={historicoDoacao} /> 
            <Route path="/cadastroHistorico" component={cadastroHistorico} /> 

        </Switch>
        
        </BrowserRouter>
    )
}