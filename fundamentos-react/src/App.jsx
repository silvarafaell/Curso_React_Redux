import './App.css'
import React from 'react';

import Card from './components/layout/Card';

import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
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
                <Card titulo="#09 - Comunicação Direta" color="#59323C">
                    <DiretaPai></DiretaPai>
                </Card>

                <Card titulo="#08 - Renderização Condicional " color="#982395">
                    <ParOuImpar numero={21}></ParOuImpar>
                    <UsuarioInfo usuario={{ nome: 'Rafael' }} />
                </Card>

                <Card titulo="#07 - Desafio Repetição " color="#3A9AD9">
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo="#06 - Repetição " color="#FF4C65">
                    <ListaAlunos></ListaAlunos>
                </Card>

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