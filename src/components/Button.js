import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({text, onClick, className}) => {
    return <button onClick = {onClick}
    className = {className} >{text}</button>
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
