import React from 'react';
import Navbar from '../components/Navbar/Navbar'; 
import Button from '../components/Button'
import {useState} from 'react'  
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import './Pages.css';
import ParticlesBg from 'particles-bg'


function Home() {
  const interest = ["Coding", "Contest Math", "Music", "Playing Games",  "Sophia", "Eating", "TV"];
  const [interestIndex, setIndex] = useState(0); 
  return (
    <div className="Home">
      <div className = "container1">
        <h2 className = "name" data-text = "Thomas">Thomas</h2>
        <h3 className = "headerStyle" data-text = "Enjoys">Enjoys </h3>
        <Button className = "aboutBtn" onClick= {() => setIndex((interestIndex + 1) % interest.length)} text = {interest[interestIndex]}/>
        {/* <Textbox className = "textbox" text = "About Me" size = "4.5vw"/>  */}
        <ParticlesBg type = "cobweb" bg = {true} color = "#01fe87"/> 
      </div>
    </div>  
  );
}

/* "color"
"ball"
"lines"
"thick"
"circle"
"cobweb"
"polygon"
"square"
"tadpole"
"fountain"
"random"
"custom"
*/ 

export default Home;
