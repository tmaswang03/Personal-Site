import React from 'react';
import Navbar from './components/Navbar/Navbar'; 
import Textbox from './components/Textbox';
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar /> 
      <h2 data-text = "Thomas">
        Thomas 
      </h2>
      <h3 data-text = "Thomas">
        Thomas 
      </h3>
    </div>
  );
}

export default App;
