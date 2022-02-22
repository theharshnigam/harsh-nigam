import React from 'react';
import '../AboutMe/About.css'
import aboutImg from '../../images/myImg.jpg'

const About = () => {
    return (
        <div className='about__main' id="About">
            <div className='container'>
                <div className='row'>
                    <div>
                        <h1 style={{marginTop:0,color:"whitesmoke",textAlign:"center", textDecoration:"underline",letterSpacing:"1px"}}>About Me</h1>
                    </div>
                    <div className='col-sm-6'>
                       <img src={aboutImg} alt="" className="img-fluid about__img" />
                    </div>
                    <div className='col-sm-6'>
                        <div className='right_side'>
                        <h1 className='about__heading'>Who I am?</h1>
                        <h3><span style={{color:"red"}}>Hey,</span> I am <span className='name'><strong>Harsh Nigam</strong></span></h3>
                        <p>I am an engineering student & pursuing B.Tech in Computer Scinece Engineering from
                            Ajay Kumar Garg Engineering College, Ghaziabad.<br/> Currently I am an Intern at Cognizant Technology Solutions
                            Pvt. Ltd.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
