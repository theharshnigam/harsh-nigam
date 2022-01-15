import React from 'react';
import '../AboutMe/About.css'
import aboutImg from '../../images/about_img.jpg'

const About = () => {
    return (
        <div className='about__main' id="About">
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                       <img src={aboutImg} alt="" className="img-fluid about__img" />
                    </div>
                    <div className='col-6'>
                        <h1 className='about__heading'>About Me</h1>
                        <h3>Hey, I am Harsh Nigam</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
