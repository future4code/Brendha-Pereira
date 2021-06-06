import React from 'react'
import './CardPequeno.css'

function CardPequeno (props) {
    return (
        <div className="page-section-email">
            <div>
                <h2>{ props.email }</h2>
                <p>{ props.Rua }</p>
            </div>
        </div>
    )
}

export default CardPequeno;
    
