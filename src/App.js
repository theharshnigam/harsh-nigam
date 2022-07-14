import React, { useState, useEffect } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/AboutMe/About'
import ParticlesAround from './components/ParticlesAround'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'


const App = () => {
  return (
    <>
      <ParticlesAround />
      <Navbar />
      <Header />
      <About />
      <Education />
      <Projects />
      <Contact />
    </>
  )
}

export default App;
