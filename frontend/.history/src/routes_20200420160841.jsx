import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';


export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Logon} /> 
            {/* o exact é pra mostrar q o caminho deve ser exatamente esse para ir pra essa rota.Pq senão o /register q começa com / ñ vai pegar */}

            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />


        </Switch>
        
        </BrowserRouter>
    )
}