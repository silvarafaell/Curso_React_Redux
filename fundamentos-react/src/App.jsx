import React from 'react';

import Aleatorio from './components/basicos/Aleatorio';
import Fragmento from './components/basicos/Fragmento';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';


export default function App(props) {
    return (
        <div id="app">
        <h1>Fundamentos do React</h1>
        <Aleatorio min={1} max={60} />
        <Fragmento />
        <ComParametro 
        titulo="Situação do Aluno" 
        aluno="Rafael" 
        nota={10.0} 
        />
       <Primeiro></Primeiro>
       </div>
    );
}