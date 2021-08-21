import React from 'react';
import Navbar from './components/Navbar/Navbar'; 
import Button from './components/Button'
import {useState} from 'react' 
import './App.css';
function App() {
  const interest = ["Playing Games", "Coding", "Music"];
  const [interestIndex, setIndex] = useState(0); 
  return (
    <div className="App">
      <Navbar /> 
      <h2 data-text = "Thomas">
        Thomas 
      </h2>
      <li> 
        <h3 data-text = "Enjoys">Enjoys </h3>
        <Button onClick= {() => setIndex((interestIndex + 1) % interest.length)} text = {interest[interestIndex]}/>
      </li>
    </div>  
  );
}

export default App;
