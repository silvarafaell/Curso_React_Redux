import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default props => {
    return (
        <div>
            <FamiliaMembro nome="Francisco" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Rafael" sobrenome={props.sobrenome} /> 
            <FamiliaMembro nome="Pereira" sobrenome={props.sobrenome} /> 
        </div>
    )
}