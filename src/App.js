import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/AboutMe/About'
import ParticlesAround from './components/ParticlesAround'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'


const App = () => {
  return (
    <>
      <ParticlesAround/>
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  )
}
  
export default App;
