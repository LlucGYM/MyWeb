import './App.css'
import { MiProfileContext } from './Context/miProfileContext'
import React from 'react'
import Footer from './footer'
import Header from './Header'
import GitHub from './components/GitHub'
import Video from './components/video'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
        <Header />
        <Video />
        <div className="overlay"></div>
        <main id='main'>
          <Router>
            <Routes>
              <Route path="/" Component={GitHub}/>
            </Routes>
          </Router>
        </main>
        
        <Footer />
      </div>
    </MiProfileContext>
  )
}

export default App
