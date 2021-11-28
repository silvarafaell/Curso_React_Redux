import './Context.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../../views/examples/Home'
import About from '../../views/examples/About'
import Param from '../../views/examples/Param'

const Context = props => (
    <main className="Context">
        <Routes>
            <Route exact path="/" caseSensitive={false} element={<Home />} />
            <Route path="/about" caseSensitive={false} element={<About />} />
            <Route path="/param/:id" caseSensitive={false} element={<Param />} />
        </Routes>
    </main>
)

export default Context