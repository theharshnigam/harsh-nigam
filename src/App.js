import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Particles from 'react-particles-js'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/AboutMe/About'


const App = () => {
  return (
    <>
      <Particles
        params={{
          particles:{
            number:{
              value:30,
              density:{
                enable:true,
                value_area:500
              }
            },
              shape:{
                type: "circle",
                stroke:{
                  width:6,
                  color: "#ff8c00"
                }
              }
          }
        }}
      />
      <Navbar/>
      <Header/>
      <About/>
    </>
  )
}
  
export default App;
