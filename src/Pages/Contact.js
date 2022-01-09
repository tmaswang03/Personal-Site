import React from 'react'
import {useState} from 'react'  
import './Pages.css'
import ParticlesBg from 'particles-bg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"


const Contact = () => {
    return (
        <div className = "flex h-screen">
            <button class = "m-auto">
            <FontAwesomeIcon icon = {faYoutube} className = "ml-4 mr-4 text-blue-500 text-8xl"></FontAwesomeIcon>
            </button>
        </div>
        
    )
}

export default Contact
