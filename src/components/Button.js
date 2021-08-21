import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({text, onClick, t, l}) => {
    return <button onClick = {onClick}
    className = 'btn' style = {{top: t, left: l}}>{text}</button>
}


Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
