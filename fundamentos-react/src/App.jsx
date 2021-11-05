import React from 'react';

import Card from './components/layout/Card';
import Aleatorio from './components/basicos/Aleatorio';
import Fragmento from './components/basicos/Fragmento';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';


export default function App(props) {
    return (
        <div id="app">
        <h1>Fundamentos do React</h1>

        <Card titulo="#04 - Desafio Aleatorio">
            <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="#03 - Fragmento">
        <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parametro">
        <ComParametro 
        titulo="Situação do Aluno" 
        aluno="Rafael" 
        nota={10.0} 
        />
        </Card>

        <Card titulo="#01 - Primeiro Componente">
        <Primeiro></Primeiro>
        </Card>
       </div>
    );
}