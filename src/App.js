import logo from './assets/logo.svg';
import './App.css';
import React from 'react';
import Main from './main';
import Footer from './footer';
import Header from './Header';

import Spinner from 'react-bootstrap/Spinner';

function App() {
  
 
  
  return (
    <div className="App">
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}
      <Header/>
      <Main/>
      <Footer/>
    
    </div>
  
  );
}

export default App;
