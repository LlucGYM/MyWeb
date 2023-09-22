import './App.css'
import { MiProfileContext } from './Context/miProfileContext'
import React, { useEffect, useState } from "react";
import Footer from './footer';
import Header from './Header';
import GitHub from './components/GitHub';
import Video from './components/video';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Social from './components/Social';
import ContactMe from './components/ContactMe';
import Home from './components/Home';

function App () {

  const [active, setActive] = useState(false);

    function isActive(active){
        setActive(active);
    }

  return (
  <MiProfileContext>
    <div className='App'>
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
      <Router>
        <Header active={active}/>
        {/*<Video />*/}
        <div className="overlay"></div>
        <main id='main'>
          <Routes>
            <Route path='/' element={<Home isActive={isActive}/>}/>
            <Route excat path='/AboutMe' element={<AboutMe />}/>
            <Route exact path='/GitHub' element={<GitHub />}/>
            <Route exact path='/Social' element={<Social />}/>
            <Route exact path='/ContactMe' element={<ContactMe />}/>
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  </MiProfileContext>
  )
}

export default App
