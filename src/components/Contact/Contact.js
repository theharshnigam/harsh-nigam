import React from 'react'
import '../Contact/Contact.css'

const Contact = () => {
  return (
    <div className='contact_main' id='Contact'>
      <div className='container'>
        <div className='title_heading'>
          <h1 >Get in Touch</h1>
        </div>
        <div className="d-flex justify-content-center" >
          <div className='contact_link' title="Linkedin">
            <a href='https://www.linkedin.com/in/imharshnigam' target="_blank" rel="noreferrer" ><i class="fa-brands fa-linkedin"></i></a>
          </div>
          <div className='contact_link ' title="Instagram">
            <a href='https://www.instagram.com/theharshnigam' target="_blank" rel="noreferrer" ><i class="fa-brands fa-instagram-square"></i></a>
          </div>
          <div className='contact_link' title="Facebook">
            <a href='https://www.facebook.com/iamharshnigam' target="_blank" rel="noreferrer" ><i class="fa-brands fa-facebook-square"></i></a>
          </div>
          <div className='contact_link' title="Github">
            <a href='https://www.github.com/theharshnigam' target="_blank" rel="noreferrer" ><i class="fa-brands fa-github-square"></i></a>
          </div>
          <div className='contact_link' title="Email">
            <a href='mailto:iharshnigam@gmail.com' target="_blank" rel="noreferrer" ><i class="fa-solid fa-square-envelope"></i></a>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Contact