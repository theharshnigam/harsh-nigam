import React from 'react'
import '../Education/Education.css'

const Education = () => {
  return (
    <div className="Education_main" id="Education">
        <div className="container">
            <div className='title_heading'>  
                <h1>Qualification</h1>
            </div>
            <div className="qualification_contents">
            <div className="qualification_content">
                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">B.Tech - Computer Science & Engineering</h3>
                        
                        <div className="qualification_subtitle">
                            <i class="uil uil-university"></i>
                            
                            Ajay Kumar Garg Engineering College, Ghaziabad
                        </div>
                        <div className="qualification_calendar">
                            <i className="uil uil-calendar-alt"></i>
                            2018 - 2022
                        </div>
                        <div className="qualification_percentage">
                        <i class="uil uil-lightbulb-alt"></i>
                              8.3 CGPA 
                        </div>
                    </div>

                    <div>
                        <span className="qualification_round"></span>
                        <span className="qualification_line"></span>
                    </div>
                </div>

                <div className="qualification_data">
                    <div></div>
                    <div>
                        <span className="qualification_round"></span>
                        <span className="qualification_line"></span>
                    </div>

                    <div>
                        <h3 className="qualification_title">Intermediate</h3>
                        <div className="qualification_subtitle">
                            <i class="uil uil-university"></i>
                            City Montessory Inter College, Lakhimpur-Kheri
                        </div>
                        <div className="qualification_calendar">
                            <i className="uil uil-calendar-alt"></i>
                            2017
                        </div>
                        <div className="qualification_percentage">
                        <i class="uil uil-lightbulb-alt"></i>
                              87.80%
                        </div>
                    </div>
                </div>

                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">High-School</h3>
                        <div className="qualification_subtitle">
                            <i class="uil uil-university"></i>
                            City Montessory Inter College, Lakhimpur-Kheri
                        </div>
                        <div className="qualification_calendar">
                            <i className="uil uil-calendar-alt"></i>
                            2015
                        </div>
                        <div className="qualification_percentage">
                        <i class="uil uil-lightbulb-alt"></i>
                              86.83% 
                        </div>
                    </div>

                    <div>
                        <span className="qualification_round"></span>
                        <span className="qualification_line"></span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Education