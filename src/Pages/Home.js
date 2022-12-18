import React from 'react';
import Navbar from '../components/Navbar/Navbar'; 
import Button from '../components/Button'
import {useState} from 'react'  
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import './Pages.css';
import ParticlesBg from 'particles-bg'
import {TypeAnimation} from 'react-type-animation';


function Home() {
  const interest = ["Waterloo", "Coding", "Contest Math", "Music", "Playing Games",  "Sophia", "Eating", "TV"];
  const [interestIndex, setIndex] = useState(0); 
  return (
    <div className="Home">
      <div className = "container1">
        <h2 className = "heading" data-text = "I am">I am</h2>
        <TypeAnimation className = "typeWrite" sequence={[ 'Thomas', 2000, 'A Coder', 2000, 'A Creator', 2000,]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '8rem' }}
    />
        {/* <Textbox className = "textbox" text = "About Me" size = "4.5vw"/>  */}
        <ParticlesBg type = "cobweb" bg = {true} color = "#141313"/> 

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
