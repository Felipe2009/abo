import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import CadastroFuncionario from './pages/CadastroFuncionario';
import Perfil from './pages/Perfil';
import CadastroDoador from './pages/cadastroDoador';


export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Logon} /> 
            {/* o exact é pra mostrar q o caminho deve ser exatamente esse para ir pra essa rota.Pq senão o /register q começa com / ñ vai pegar */}

            <Route path="/CadastroFuncionario" component={CadastroFuncionario} />
            <Route path="/perfil" component={Perfil} />
            <Route path="/cadastroDoador" component={CadastroDoador} />



        </Switch>
        
        </BrowserRouter>
    )
}