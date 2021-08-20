import React from 'react'
import './Textbox.css'
const Textbox = ({text}) => {
    return (
        <div className = "textbox">
            <h3 className = "text">{text}</h3>
        </div>
    )
}

export default Textbox
