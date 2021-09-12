import React from 'react'
import Project from '../components/Project/Project'
const Portfolio = () => {
    return (
        <div>
            <Project text = "This bot reads in message with the 
            v!mood command followed by a message. 
            After detecting the mood of the message, 
            the bot then sends a corresponding song that matches the mood 
            and produces an emotion score ranging from -1 (sad) to 1 (happy). 
            Your previous emotion scored will be stored 
            and the average is calculated to compare with your current emotion.  
            Achieved 2nd place overall in YR Hacks 2021 
            and the best application of a database!" head = "vibot"
            imgLi = "/ProjectImg/ViBot.JPG" 
            codeLink = "https://github.com/tmaswang03/ViBot-Submission"
            projectLink = "https://devpost.com/software/vibot"
            />

            <Project text = "Worked with a group of peers during Hack The North to develop a 
            website that helps read and identify human emotion. 
            Developed with JavaScript/HTML along with ASP.NET/Blazor for both the front and back-end." head = "emotion net" 
            imgLi = "/ProjectImg/EmotionNet.JPG"
            />

"
        </div>
    )
}

export default Portfolio
