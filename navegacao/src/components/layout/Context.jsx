import './Context.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../../views/examples/Home'
import About from '../../views/examples/About'

const Context = props => (
    <main className="Context">
        <Routes>
            <Route path="/" caseSensitive={false} element={<Home />} />
            <Route path="/about" caseSensitive={false} element={<About />} />
        </Routes>
    </main>
)

export default Context