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
        img src = { logoImg } > < /img>

        <
        /section>

        <
        img src = { heroesImg }
        / > < /
        div >

    )
}