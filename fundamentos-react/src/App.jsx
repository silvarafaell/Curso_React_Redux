import './App.css'
import React from 'react';

import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Card from './components/layout/Card';
import Aleatorio from './components/basicos/Aleatorio';
import Fragmento from './components/basicos/Fragmento';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';


export default function App(props) {
    return (
        <div className="App">
            <h1>Fundamentos do React</h1>

            <div className="Cards">

                <Card titulo="#05 -Componente com Filhos" color="#00c8F8">
                    <Familia sobrenome="Silva">
                        <FamiliaMembro nome="Francisco" />
                        <FamiliaMembro nome="Rafael" />
                        <FamiliaMembro nome="Pereira" />
                    </Familia>
                </Card>

                <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Com Parametro" color="E8B71A">
                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="Rafael"
                        nota={10.0}
                    />
                </Card>

                <Card titulo="#01 - Primeiro Componente" color="#588C73">
                    <Primeiro></Primeiro>
                </Card>
            </div>

        </div>
    );
}