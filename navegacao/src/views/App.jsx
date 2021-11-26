import './App.css'
import React from 'react'
import Menu from '../components/layout/Menu'
import Context from '../components/layout/Context'

const App = props => (
    <div className="App">
        <Menu />
        <Context />
    </div>
)

export default App