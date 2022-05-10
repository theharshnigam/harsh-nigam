import React from 'react'
import instagram from '../../images/insta.png'
import facebook from '../../images/fb.png'
import linkedin from '../../images/linkedin.png'
import '../Contact/Contact.css'

const Contact = () => {
  return (
    <div className='contact_main' id='Contact'>
      <div className='container'>
        <div className='title_heading'>
          <h1 >Contacts</h1>
        </div>
        <div className="row justify-content-end">
          <div className='col-3'>
          <a href='https://www.linkedin.com/in/imharshnigam' target="_blank"><img className='img-fluid' src={linkedin} /></a>
        </div>
        <div className='col-3 '>
          <a href='https://www.instagram.com/theharshnigam' target="_blank"><img className='img-fluid' src={instagram} /></a>
        </div>
        <div className='col-3'>
          <a href='https://www.facebook.com/iamharshnigam' target="_blank"><img className='img-fluid' src={facebook} /></a>
        </div>
        </div>
          </div>
        </div>
       
  
  )
}

export default Contact