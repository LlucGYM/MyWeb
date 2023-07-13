import logo from './logo.svg';
import './App.css';
import React from 'react';
import Main from './main';
import Footer from './footer';
import Header from './Header';
import Spinner from 'react-bootstrap/Spinner';

function App() {
  
  function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
  }
  async function wait(){
    await sleep(5000);
    
  }
  
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
      {wait}
      <Spinner animation="border" />;
      <Header/>
      <Main/>
      <Footer/>
    
    </div>
  
  );
}

export default App;
