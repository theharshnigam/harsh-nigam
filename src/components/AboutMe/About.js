import React from 'react';
import '../AboutMe/About.css'
import aboutImg from '../../images/mypic.png'
import CV from '../../images/Harsh_CV.pdf'
import CVView from '../../images/Harsh_cv.jpg'

const About = () => {
    let time = new Date().getHours();
    const greeting = () => {
        if (time >= 0 && time < 4) {
            return "🙋‍♂️";
        } else if (time >= 4 && time < 12) {
            return "good morning";
        } else if (time >= 12 && time < 17) {
            return "good afternoon";
        } else if (time >= 17 && time < 23) {
            return "good evening";
        }
    };

    return (
        <div className='about__main' id="About">
            <div className='container'>
                <div className='title_heading'>
                    <h1>About Me</h1>
                </div>
                <div className='row'>
                    <div className='col-sm-6 pic-container ' data-aos="zoom-in" data-aos-easing="ease-in-out-sine" data-aos-duration="1500">
                        <img src={aboutImg} alt="Harsh Nigam" className='img-fluid' />
                    </div>
                    <div className='col-sm-6 about_content ' data-aos="slide-up" data-aos-easing="ease-in-out-sine" data-aos-duration="1200">
                        {/* <h1 className='about__heading'>Who I am?</h1> */}
                        <h3><span style={{ color: "#f9ab00" }}>Hey</span> {greeting()}, I am <span className='name'>Harsh Nigam</span></h3>
                        <p>
                            I am currently working as a Programmer Analyst Trainee in <i>Cognizant Technology Solutions</i>. I have completed my engineering in 2022 from Ajay Kumar Garg Engineering College, Ghaziabad. I believe in consistent learning because <strong>Slow and Steady wins the race</strong>.
                        </p>
                        <div className='BTNprops'>
                            <a href={CVView} target="_blank" rel="noreferrer" ><button className='CVViewbtn' >View CV</button></a>
                            <a href={CV} download><button className='CVbtn'>Download CV</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
