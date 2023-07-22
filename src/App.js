import './App.css'
import { MiProfileContext } from './Context/miProfileContext'
import React from 'react';
import Footer from './footer';
import Header from './Header';
import GitHub from './components/GitHub';
import Video from './components/video';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';

function App () {
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
        <Header />
        <Video />
        <div className="overlay"></div>
        <main id='main'>
          <Routes>
            <Route path='/' element={<AboutMe />}/>
            <Route exact path='/GitHub' element={<GitHub />}/>
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  </MiProfileContext>
  )
}

export default App
