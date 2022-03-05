import React from 'react';
import '../AboutMe/About.css'
import aboutImg from '../../images/mypic.png'
import CV from '../../images/Harsh_CV.pdf'
import CVView from '../../images/Harsh_cv.jpg'

const About = () => {
    let time = new Date().getHours();
    const greeting =() =>{
        if(time >= 0 && time < 4){
            return "🙋‍♂️";
        } else if(time >=4 && time < 12){
           return "Good morning";
       } else if(time >= 12 && time < 17){
           return "Good afternoon";
       } else if(time >= 17 && time < 23){
           return "Good evening";
       }
    };

    return (
        <div className='about__main' id="About">
            <div className='container'>
                    <div className='title_heading'>  
                        <h1>About Me</h1>
                    </div>
                <div className='row'>
                    <div className='col-sm-6 pic-container '>
                         <img src={aboutImg} alt="Harsh Nigam" className='img-fluid' />
                    </div>
                    <div className='col-sm-6 about_content '>
                             {/* <h1 className='about__heading'>Who I am?</h1> */}
                            <h3><span style={{color:"red"}}>Hey</span> {greeting()}, I am <span className='name'><strong>Harsh Nigam.</strong></span></h3>
                            <p>I am an engineering student & pursuing B.Tech in Computer Scinece Engineering from
                             Ajay Kumar Garg Engineering College, Ghaziabad.<br/> Currently I am working as an <i>Intern</i> at Cognizant Technology Solutions
                            Pvt. Ltd.
                            </p>
                            <div className='BTNprops'>
                                <a href={CVView} target="_blank"><button className='CVViewbtn'>View CV</button></a>
                                <a href={CV} download><button className='CVbtn'>Download CV</button></a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
