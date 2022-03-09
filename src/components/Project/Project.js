import React from 'react'
import './Project.css'
import Button from '../Button'
const Project = ({text, head, imgLi, codeLink, projectLink}) => {
    return (
        <div className = "projectContainer">
            <div className = "infoContainer">
                <h1 className = "projectHeader">
                    <span style = {{color: "var(--col6)"} }>&lt;</span>
                    {head}
                    <span style = {{color: "var(--col6)"} }>/&gt;</span>
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
            <img className = "imageHolder" src = {imgLi}></img>
        </div>
    )
}

export default Project
