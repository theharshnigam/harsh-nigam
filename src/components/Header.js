import React from 'react'
import Typed from 'react-typed'

const Header = () => {
    return (
        <>

            <div className="bg-image">
                <div className="bg-text center">
                    <h1> Harsh Nigam </h1>
                    <Typed
                        className="typed-text"
                        strings={[ "Software Engineer", "Programmer Analyst","Data Engineer", "Web Developer"]}
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
