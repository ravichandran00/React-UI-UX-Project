import React from 'react'
import './footer.css';
import footerlogo from '../../assets/logo.svg'
const Footer = () => {
  return (
   <div className='gpt__footer section__padding'>
    <div className='gpt__footer-heading'>
      <h1 className='gradient__text'> Do you want to step in to the future before others</h1>
    </div>
    <div className='gpt__footer-btn'>
    <p> Request Early Access</p>
    </div>
    <div className='gpt__footer_links'>
      <div className='gpt__footer_links-logo'>
        <img src={footerlogo} alt='logo'/>
        <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
      </div>
      <div className='gpt__footer_links_div'>
        <h4>Quick Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className='gpt__footer_links_div'>
        <h4>Company</h4>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className='gpt__footer_links_div'>
        <h4>Get In Touch</h4>
        <p>City Center, 12th Street, US.</p>
        <p>+1 222-854-685</p>
        <p>info@gmail.com</p>
        
      </div>
    </div>
    <div className='gpt__footer-copyright'>
      <p>Copyrights(c) 2023, Nandhush. All Rights Reserved.</p>
    </div>
   </div>

  )
}

export default Footer