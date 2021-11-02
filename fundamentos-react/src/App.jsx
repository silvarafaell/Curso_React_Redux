import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

export default function App(props) {
    return (
        <div id="app">
        <h1>Fundamentos do React</h1>
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