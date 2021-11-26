import './App.css'
import React from 'react'
import Menu from '../components/layout/Menu'
import Context from '../components/layout/Context'
import { BrowserRouter as Router } from 'react-router-dom'

const App = props => (
    <div className="App">
        <Router>
            <Menu />
            <Context />
        </Router>
    </div>
)

export default App