import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

// eslint-disable-next-line no-template-curly-in-string
const Card = ({
        card,
        feedback,
        onClick
    }) => ( < div className = {
            `card ${feedback}`
        }
        onClick = {
            () => onClick(card)
        } >

        <
        span className = "symbol" >

        { feedback === 'hidden' ? HIDDEN_SYMBOL : card } <
        /span>

        <
        /div> )

        export default Card