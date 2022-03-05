import React from 'react'
import instagram from '../../images/insta.png'
import facebook from '../../images/fb.png'
import linkedin from '../../images/linkedin.png'
import '../Contact/Contact.css'

const Contact = () => {
  return (
    <div className='contact_main' id='Contact'>
      <div>
        <div className='title_heading'>
          <h1 >Get in touch with...</h1>
        </div>
        <div className='contact_content'>
          <a href='https://www.linkedin.com/in/imharshnigam' target="_blank"><img className='img-fluid logo' src={linkedin} /></a>
          <h3>Linked In</h3>
        </div>
        <div className='contact_content'>
          <a href='https://www.instagram.com/theharshnigam' target="_blank"><img className='img-fluid logo' src={instagram} /></a>
          <h3>Instagram</h3>
        </div>
        <div className='contact_content'>
          <a href='https://www.facebook.com/iamharshnigam' target="_blank"><img className='img-fluid logo' src={facebook} /></a>
          <h3>Facebook</h3>
        </div>
      </div>
    </div>
  )
}

export default Contact