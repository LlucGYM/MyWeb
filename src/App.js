import './App.css'
import { MiProfileContext } from './Context/miProfileContext'
import React, { useState } from "react";
import {motion} from 'framer-motion/dist/framer-motion';
import Footer from './footer';
import Header from './Header';
import GitHub from './components/GitHub';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Social from './components/Social';
import ContactMe from './components/ContactMe';
import Home from './components/Home';
import img from './assets/fondo_campaña.png';
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
      <motion.div
        className='backImage'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
      <a href='http://localhost:3000'><img src={img}></img></a>
     </motion.div>
      <Router>
        <Header active={active}/>
        {/*<Video />*/}
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
