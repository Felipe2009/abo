import React, { useState } from 'react';
import './styles.css';
import logoImg from '../../assets/gots.png'
import api from '../../services/api';
import sangue from '../../assets/Sangue1.png';


export default function Estoque(){
return (
    <div className="estoque-container">
        <div className="content">
            <section>
                <img src={logoImg}></img>
            </section>
        </div>
    </div>
)
}