import React from 'react'
import './Pages.css'
import ParticlesBg from 'particles-bg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee, faCalculator, faHeadphones, faGamepad, faLaptop } from "@fortawesome/free-solid-svg-icons"
const About = () => {
    return (
        <div className = "container2">
            {/* include: education, interests,fpm description */}
            <div className = "aboutHeader">
                About Me 🤗
            </div>
            <div className = "aboutText">
                Hey guys, as you probably know my name is Thomas Wang.
                I'm currently a grade 12 student attending the IB program at Milliken Mills High School. 
                Some subjects that I am most passionate about are Mathematics, Computer Science (web dev + competitive programming), 
                as well as Music. 
                Throughout my high school career I've enjoyed learning about new things through my own explorations.
            </div>
            <img src = "/ProfileImage.JPG" className = "profilePic"></img>
            <h1 className = "hobbies">Hobbies</h1>
            <div className = "buttonContainer">
                <button className = "hobbieButtons">Math 
                    <FontAwesomeIcon icon = {faCalculator} className = "ml-4 mr-4 text-green-500"></FontAwesomeIcon>
                </button>
                <button className = "hobbieButtons">Music
                    <FontAwesomeIcon icon = {faHeadphones} className = "ml-4 mr-4 text-red-500"></FontAwesomeIcon>
                </button>
                <button className = "hobbieButtons">Video Games
                    <FontAwesomeIcon icon = {faGamepad} className = "ml-4 mr-4 text-yellow-500"></FontAwesomeIcon>
                </button>
                <button className = "hobbieButtons">Computer Science 
                    <FontAwesomeIcon icon = {faLaptop} className = "ml-4 mr-4 text-blue-500"></FontAwesomeIcon>
                </button>
            </div>
            <ParticlesBg type = "cobweb" bg = {true} color = "#5CDB95"/> 
        </div>
    )
}

export default About
