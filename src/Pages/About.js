import React from 'react'
import { Link } from 'react-router-dom';
import {useState} from 'react'  
import './Pages.css'
import ParticlesBg from 'particles-bg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee, faCalculator, faHeadphones, faGamepad, faLaptop, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faSpotify, faDiscord, faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
const About = () => {
    const myHobbies = ["Welcome to my hobbies section :D. Click on the buttons on the side to discover more about my hobbies. ", 
    "Mathematics has been something I've done since elementary school (although I'm not the best at it). I've participated in a bunch of " +  
    "math contests such as Waterloo's, COMC, and AMC earning honors on some (nothing too crazy though).  In grade 10 I founded my school's" + 
    "math club with some friends. Currently, I try to practice 3 - 5 hours per week but more focused on CS than math.", 
    "Most of the time you might catch me listening to spotify or some youtube songs (lofi in particular). " + 
    "Previously, I played piano, reaching grade 10 before I stopped. Nowadays I've been trying (although there's still school) to learn how"
    + " to play the guitar and fiddled with a little bit of music making using FL Studio 12. If you would like to add me on spotify" 
    + " my account should be on my contacts page. ", 
    "When I'm not doing school work, math or cs I enjoy hanging out with my friends and playing League of Legends, Tetris, Chess and watching Youtube."
    + " I've also previously played CS:GO, Minecraft as well as Slime Ranchers. I'm most proud of my Tetris, reaching the top 20% of Canadian players on Tetr.io" + 
    ". For chess, I mainly play on Lichess.org where I'm at 1660 rating for Rapid and 1861 for puzzles. Sadly I do not have as much time to " +
    "play games now due to university applications ): but I still do occasionally play League and Tetris.",  
    "Computer Science is by far my favourite subject and I first began in grade 10 when my friend introduced me to dmoj.ca." + 
    "This was an online judge used for practicing problems regarding Competitive Programming and I created an account under Tmaswang03. " +
    "Currently, I am the top 100 of all users and reached a masters level rating :D. Soon enough I joined other sites such as Codeforces, "
    + "CSES, leetcode and atcoder.  In 2021 I wrote my first CCC senior, ranking in the top 4%. By grade 12 I founded "
    + "my school's Computer Science club and began participating in Hackathons and 100$+ in awards. Now, I hope to pursue a Computer Science Career at Waterloo. "
    + "If you are seeing this that means that now I have finished my personal site (built with react) :D and thank you for visiting :)"];
    const myHobbieTitles = ["Hobbies :DDD", "Math", "Music", "Video Games", "Computer Science"]
    const [hobbieIndex, setHobbieIndex] = useState(0); 
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
            </div>
            <div className = "contacts">
                <a href = "https://open.spotify.com/user/21j5rrzcvdw7k6wq3yzr4uj7q?si=3e49b5181ecf4f47">
                    <FontAwesomeIcon icon = {faSpotify} className = "ml-4 text-green-600 text-6xl hover:text-white duration-500"/>
                </a>
                <a href = "https://www.instagram.com/tmaswang_69/">
                    <FontAwesomeIcon icon = {faInstagram} className = "text-green-600 text-6xl hover:text-white duration-500"/>
                </a>
                <a href = "https://github.com/tmaswang03">
                    <FontAwesomeIcon icon = {faGithub} className = "text-green-600 text-6xl hover:text-white duration-500"/>
                </a>
                <a href = "mailto:thomaswang003@gmail.com">
                    <FontAwesomeIcon icon = {faEnvelope} className = "text-green-600 text-6xl hover:text-white duration-500"/>
                </a>
                <a href = "https://www.linkedin.com/in/thomas-wang-5044b01b3/">
                    <FontAwesomeIcon icon = {faLinkedin} className = "text-green-600 text-6xl hover:text-white duration-500"/>
                </a>
            </div>
            <img src = "../Personal-Site/ProfileImage.jpg" className = "profilePic"></img>
            <h1 className = "hobbies">Hobbies</h1>
            <div className = "buttonContainer">
                <button className = "hobbieButtons" onClick= {() => setHobbieIndex(1)}>Math 
                    <FontAwesomeIcon icon = {faCalculator} className = "ml-4 mr-4 text-green-500"/>
                </button>
                <button className = "hobbieButtons" onClick= {() => setHobbieIndex(2)}>Music
                    <FontAwesomeIcon icon = {faHeadphones} className = "ml-4 mr-4 text-red-500"/>
                </button>
                <button className = "hobbieButtons" onClick= {() => setHobbieIndex(3)}>Video Games
                    <FontAwesomeIcon icon = {faGamepad} className = "ml-4 mr-4 text-yellow-500"/>
                </button>
                <button className = "hobbieButtons" onClick= {() => setHobbieIndex(4)}>Computer Science 
                    <FontAwesomeIcon icon = {faLaptop} className = "ml-4 mr-4 text-blue-500"/>
                </button>
            </div>
            <div className = "hobbieContainer">
                <div className = "hobbieTitle"> {myHobbieTitles[hobbieIndex]}</div>
                <div className = "hobbieDiv"> {myHobbies[hobbieIndex]} </div>
            </div>
            <ParticlesBg type = "cobweb" bg = {true} color = "#5CDB95"/> 
        </div>
    )
}

export default About
