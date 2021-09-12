import React from 'react'
import './Project.css'
import Button from '../Button'
const Project = ({text, head, imgLi, codeLink, projectLink}) => {
    return (
        <div className = "projectContainer">
            <div className = "infoContainer">
                <h1 className = "projectHeader">
                    {head} 
                </h1>
                <h4 className = "projectInfo">
                    {text}
                </h4>
                <button className = "codeBtn">
                    <a href= {codeLink} >View Code</a>
                </button>  
                <button className = "projectBtn">
                    <a href= {projectLink}>View Project</a>
                </button>  
            </div>
            <div className = "imageHolder">
                <img src = {imgLi}></img>
            </div>
        </div>
    )
}

export default Project
