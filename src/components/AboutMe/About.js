import React from 'react';
import '../AboutMe/About.css'
import aboutImg from '../../images/mynewImg.jpg'
import CV from '../../images/Harsh_CV.pdf'

const About = () => {
    return (
        <div className='about__main' id="About">
            <div className='container'>
                <div className='row'>
                    <div>
                        <h1 style={{marginTop:0,color:"whitesmoke",textAlign:"center",letterSpacing:"1px"}}>About Me</h1>
                    </div>
                    <div className='col-sm-6 mine'>
                       <img src={aboutImg} alt="" className="img-fluid about__img" />
                    </div>
                    <div className='col-sm-6 mine'>
                        <div className='right_side'>
                        <h1 className='about__heading'>Who I am?</h1>
                        <h3><span style={{color:"red"}}>Hey,</span> I am <span className='name'><strong>Harsh Nigam</strong></span></h3>
                        <p>I am an engineering student & pursuing B.Tech in Computer Scinece Engineering from
                            Ajay Kumar Garg Engineering College, Ghaziabad.<br/> Currently I am working as an <i>Intern</i> at Cognizant Technology Solutions
                            Pvt. Ltd.
                        </p>
                        <a href={CV} target="_blank"><button className='CVViewbtn'>View CV</button></a>
                        <a href={CV} download><button className='CVbtn'>Download CV</button></a>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
