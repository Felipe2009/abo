import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import CadastroFuncionario from './pages/CadastroFuncionario';
import Lista from './pages/Lista';
import CadastroDoador from './pages/CadastroDoador';
import Estoque from './pages/Estoque';
import Precisa from './pages/Precisa';
import ListaEspera from './pages/ListaEspera';

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Logon} /> 
            {/* o exact é pra mostrar q o caminho deve ser exatamente esse para ir pra essa rota.Pq senão o /register q começa com / ñ vai pegar */}

            <Route path="/CadastroFuncionario" component={CadastroFuncionario} />
            <Route path="/lista" component={Lista} />
            <Route path="/CadastroDoador" component={CadastroDoador} />
            <Route path="/estoque" component={Estoque} />
            <Route path="/precisa" component={Precisa} />
            <Route path="/listaEspera" component={ListaEspera} />

        </Switch>
        
        </BrowserRouter>
    )
}