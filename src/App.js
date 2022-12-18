import React from 'react';
import Navbar from './components/Navbar/Navbar'; 
import Button from './components/Button'
import {useState, useEffect} from 'react' 
import './App.css';
import { HashRouter, Router, Switch, Route } from 'react-router-dom'; 
import About from './Pages/About'; 
import Home from './Pages/Home'; 
import Portfolio from './Pages/Portfolio'; 
import Timeline from './Pages/Timeline'; 

import ParticlesBg from 'particles-bg'


function App() {
  useEffect(() => {
    document.title = "Tmaswang04"
  }, [])
  return (
    <div className="App">
      <HashRouter>
        <Navbar /> 
        <Switch>
          <Route path = '/' exact component = {Home}/>
          <Route path = '/About' component = {About}/>
          <Route path = '/Portfolio' component = {Portfolio}/>
          <Route path = '/Timeline' component = {Timeline} /> 
        </Switch>
      </HashRouter>
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
