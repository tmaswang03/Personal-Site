import React from 'react';
import Navbar from './components/Navbar/Navbar'; 
import Button from './components/Button'
import {useState} from 'react' 
import './App.css';
import Textbox from './components/Textbox';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import About from './Pages/About'; 

import ParticlesBg from 'particles-bg'


function App() {
  const interest = ["Coding", "Contest Math", "Music", "Playing Games",  "Sophia", "Eating", "TV"];
  const [interestIndex, setIndex] = useState(0); 
  return (
    <div className="App">
      <Router>
        <Navbar /> 
        <Switch>
          <Route path = '/' exact component = {About} /> 
        </Switch>
      </Router> 
      <div className = "container">
        <h2 data-text = "Thomas">Thomas</h2>
        <h3 data-text = "Enjoys" style = {{display:'inline-block'}}>Enjoys </h3>
        <Button className = "aboutBtn" onClick= {() => setIndex((interestIndex + 1) % interest.length)} text = {interest[interestIndex]}/>
        {/* <Textbox className = "textbox" text = "About Me" size = "4.5vw"/>  */}
        <ParticlesBg type = "tadpole" bg = {true} color = "#27a102"/> 
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

export default App;
