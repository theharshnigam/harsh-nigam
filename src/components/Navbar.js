import React from 'react'
import logo from '../logo.jpg'


const Navbar = () => {
    return (
     <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">
    <a className="navbar-brand" href="#"> <img className="logo" src={logo} /> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Education</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
    
      </ul>
    
    </div>
  </div>
</nav>
    )
}

export default Navbar
