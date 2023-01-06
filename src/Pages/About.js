import React from 'react'
import { Link } from 'react-router-dom';
import {useState} from 'react'  
import './Pages.css'
import ParticlesBg from 'particles-bg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee, faCalculator, faHeadphones, faGamepad, faLaptop, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faSpotify, faDiscord, faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
import Snowfall from 'react-snowfall'
const About = () => {
    const myHobbies = ["Welcome to my hobbies section :D. Click on the buttons on the side to discover more about my interests. ", 
    "Mathematics has been something I've done since elementary school (although I'm not the best at it). I've participated in a bunch of " +  
    "math contests such as Waterloo's, COMC, and AMC earning honors on some (nothing too crazy though).  In grade 10 I founded my school's" + 
    " math club with some friends. Currently, I try to practice 3 - 5 hours per week but more focused on CS than math.", 
    "Most of the time you might catch me listening to spotify or some youtube songs (lofi in particular). " + 
    "Previously, I played piano, reaching grade 10 before I stopped. Nowadays I've been trying (although there's still school) to learn how"
    + " to play the guitar and fiddled with a little bit of music making using FL Studio 12. If you would like to add me on spotify" 
    + " my account should be on my contacts part. ", 
    "When I'm not doing school work, math or cs I enjoy hanging out with my friends and playing League of Legends, Tetris, Chess and watching Youtube."
    + " I've also previously played CS:GO, Minecraft as well as Slime Ranchers. I'm most proud of my Tetris, reaching the top 20% of Canadian players on Tetr.io" + 
    ". For chess, I mainly play on Lichess.org where I'm at 1660 rating for Rapid and 1861 for puzzles. Sadly, I do not have as much time to " +
    "play games now due to university applications ): but I still do occasionally play League and Tetris.",  
    "Computer Science is by far my favourite subject and I first began in grade 10 when my friend introduced me to dmoj.ca." + 
    "This was an online judge used for practicing problems regarding Competitive Programming and I created an account under Tmaswang03. " +
    "Currently, I am the top 100 of all users and reached a masters level rating :D. Soon enough I joined other sites such as Codeforces, "
    + "CSES, leetcode and atcoder.  In 2021 I wrote my first CCC senior, ranking in the top 4%. By grade 12 I founded "
    + "my school's Computer Science club and began participating in Hackathons and 100$+ in awards. "
    + "If you are seeing this that means that now I have finished my personal site (built with react) :D and thank you for visiting :)"];
    const myHobbieTitles = ["Info", "Math", "Music", "Video Games", "Computer Science"]
    const [hobbieIndex, setHobbieIndex] = useState(0); 
    return (
        <div className = "container2">
            <Snowfall color = "#666666" style={{height: "175vh", opacity: "0.15"}} />
            {/* include: education, interests,fpm description */}
            <div className = "aboutHeader">
                <span style = {{color: "var(--col6)"}}>&lt;</span>
                <span style = {{color: "var(--col10)"}}>About</span>
                <span style = {{color: "var(--col6)"} }>/&gt;</span>
            </div>
            <div className = "aboutText">
                Hey! I am Thomas Wang, a Software Engineering student at the University of Waterloo, and one of my greatest joys lies in creating things. My programming journey first began when I was introduced to Competitive Programming in 2020.
                Since then, I have explored many other fields of Computer Science and have begun working towards becoming a full-stack developer. My current goal is to gain an understanding of Machine Learning.  
            </div>
            <div className = "contacts">
                <a href = "https://open.spotify.com/user/21j5rrzcvdw7k6wq3yzr4uj7q?si=3e49b5181ecf4f47">
                    <FontAwesomeIcon icon = {faSpotify} className = "icons" style = {{ height: "60px" }}/>
                </a>
                <a href = "https://www.instagram.com/tmaswang_69/">
                    <FontAwesomeIcon icon = {faInstagram} className = "icons" style = {{ height: "60px" }}/>
                </a>
                <a href = "https://github.com/tmaswang03">
                    <FontAwesomeIcon icon = {faGithub} className = "icons" style = {{ height: "60px" }}/>
                </a>
                <a href = "mailto:thomaswang003@gmail.com">
                    <FontAwesomeIcon icon = {faEnvelope} className = "icons" style = {{ height: "60px" }}/>
                </a>
                <a href = "https://www.linkedin.com/in/thomas-wang-5044b01b3/">
                    <FontAwesomeIcon icon = {faLinkedin} className = "icons" style = {{ height: "60px" }}/>
                </a>
            </div>
            <img src = "../ProfileImage.jpg" className = "profilePic"></img>
            <h1 className = "hobbies">
                <span style = {{color: "var(--col6)"}}>&lt;</span>
                Hobbies
                <span style = {{color: "var(--col6)"} }>/&gt;</span>
            </h1>
            <div className = "buttonContainer">
                <button className = "hobbieButtons" onClick= {() => setHobbieIndex(1)}>Math 
                    <FontAwesomeIcon icon = {faCalculator} className = "ml-4 mr-4" style = {{color: "var(--col6)"}}/>
                </button>
                <button className = "hobbieButtons" onClick= {() => setHobbieIndex(2)}>Music
                    <FontAwesomeIcon icon = {faHeadphones} className = "ml-4 mr-4" style = {{color: "var(--col6)"}}/>
                </button>
                <button className = "hobbieButtons" onClick= {() => setHobbieIndex(3)}>Video Games
                    <FontAwesomeIcon icon = {faGamepad} className = "ml-4 mr-4" style = {{color: "var(--col6)"}}/>
                </button>
                <button className = "hobbieButtons" onClick= {() => setHobbieIndex(4)}>Computer Science 
                    <FontAwesomeIcon icon = {faLaptop} className = "ml-4 mr-4" style = {{color: "var(--col6)"}}/>
                </button>
            </div>
            <div className = "hobbieContainer">
                <div className = "hobbieTitle"> &lt;{myHobbieTitles[hobbieIndex]}/&gt; </div>
                <div className = "hobbieDiv"> {myHobbies[hobbieIndex]} </div>
            </div> 
        </div>
    )
}

export default About
