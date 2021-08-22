import React from 'react';
import Navbar from './components/Navbar/Navbar'; 
import Button from './components/Button'
import {useState} from 'react' 
import './App.css';
import Textbox from './components/Textbox';

function App() {
  const interest = ["Coding", "Contest Math", "Music", "Playing Games",  "Sophia", "Eating", "TV"];
  const [interestIndex, setIndex] = useState(0); 
  return (
    <div className="App">
      <Navbar /> 
      <div className = "container">
        <h2 data-text = "Thomas">Thomas</h2>
        <h3 data-text = "Enjoys" style = {{display:'inline-block'}}>Enjoys </h3>
        <Button className = "aboutBtn" onClick= {() => setIndex((interestIndex + 1) % interest.length)} text = {interest[interestIndex]}/>
        {/* <Textbox className = "textbox" text = "About Me" size = "4.5vw"/>  */}
      </div>
    </div>  
  );
}

export default App;
