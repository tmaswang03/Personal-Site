import React from 'react'
import './Textbox.css'
const Textbox = ({text, color, size, className}) => {
    return (
        <div className = {className}>
            <h4 style= {{fontSize: size}}>{text}</h4>
        </div>
    )
}

export default Textbox
