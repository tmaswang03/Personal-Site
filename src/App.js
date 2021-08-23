import React from 'react';
import Navbar from './components/Navbar/Navbar'; 
import Button from './components/Button'
import {useState} from 'react' 
import './App.css';
import Textbox from './components/Textbox';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import About from './Pages/About'; 
import Home from './Pages/Home'; 

import ParticlesBg from 'particles-bg'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> 
        <Switch>
          <Route path = '/' exact component = {Home}/>
          <Route path = '/about' component = {About}/>
        </Switch>
      </Router>
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
