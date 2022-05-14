import React from 'react'
import Typed from 'react-typed'

const Header = () => {
    return (
        <>
        
        <div className="bg-image"> 
        
            <div className="bg-text center">
                <h1> Harsh Nigam</h1> 
                <Typed
                    className="typed-text"
                    strings = {["CS Engineer","Software Developer", "Python Enthusiast","Web Developer"]}
                    typeSpeed={60}
                    backSpeed={50}
                    loop
                 />
                
            </div>
            </div> 
    
        </>
    )
}

export default Header
