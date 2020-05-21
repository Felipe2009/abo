import React from 'react';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    return ( <
        div className = "logon-container" >

        <
        section className = "form" >
        <
        img src = { logoImg }
        /> <
        form >

        <
        h1 > Faça seu logon < /h1> <
        input placeholder = "Sua ID" > < /input> <
        button type = "submit" > Entrar < /button>

        <
        a href = "/register" > Não tenho cadastro < /a> <
        /form>

        <
        /section>


        <
        img src = { heroesImg }
        /> < /
        div >


    )
}