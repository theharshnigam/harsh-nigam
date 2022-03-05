import React from 'react'
import '../Projects/Projects.css'
import project1 from '../../images/Projects/project1.png'

const Projects = () => {
  return (
    <div className='project_main' id='Projects'>
      <div className='container'>
      <div className='title_heading'>
        <h1 >Projects</h1>
      </div>
      <div className='project1'>
        <div className='row'>
          <div className='col-sm-6'>
            <h2 className='heading'>Web Chat Application</h2>
            <p className='content'>In this web app, a user is required to authenticate using Google or Facebook.
              After successful authentication, the user will be redirected to the homepage of the chat app where the user
              can see two options. First to interact with his profile management and second is to create room for messaging.
              Message can be text, image or any valid file and user can also send live recorded voice on the web app.
              <br />
            </p>
            <div className='BTNprops'>
              <a href='https://chat-app-5ed3c.web.app' target="_blank">
                <p><button className='ViewProjectBTN'>View Project</button></p>
              </a>
            </div>
          </div>
          <div className='col-sm-6 projectPicSide'>
            <img className='project1_img' src={project1} />
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects