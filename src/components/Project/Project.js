import React from 'react'
import './Project.css'
import Button from '../Button'
const Project = ({text, head, imgLi}) => {
    return (
        <div className = "projectContainer">
            <div className = "infoContainer">
                <h1 className = "projectHeader">
                    {head} 
                </h1>
                <h4 className = "projectInfo">
                    {text}
                </h4>
                <Button className = "codeBtn" text = "view code" width = "8vw"/>
                <Button className = "projectBtn" text = "view project" width = "" /> 
            </div>
            <div className = "imageHolder">
                <img src = {imgLi}></img>
            </div>
        </div>
    )
}

export default Project
