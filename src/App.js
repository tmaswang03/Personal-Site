import React from 'react';
import Navbar from './components/Navbar/Navbar'; 
import Button from './components/Button'
import {useState} from 'react' 
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import About from './Pages/About'; 
import Home from './Pages/Home'; 
import Contact from './Pages/Contact';  
import Portfolio from './Pages/Portfolio'; 

import ParticlesBg from 'particles-bg'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> 
        <Switch>
          <Route path = '/' exact component = {Home}/>
          <Route path = '/about' component = {About}/>
          <Route path = '/Portfolio' component = {Portfolio}/>
          <Route path = '/Contact' component = {Contact} /> 
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
