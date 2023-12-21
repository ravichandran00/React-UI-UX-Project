import React from 'react'
import Possibilityimage from '../../assets/possibility.png';
import './possibility.css';
const Possibility = () => {
  return (
   <div className='gpt__possibility section__padding' id='possibility'>
    <div className='gpt__possibility-image' >
      <img src={Possibilityimage} alt='Possibility Image' />
    </div>
    <div className='gpt__possibility-content'>
     <h4>About Possibilities</h4>
     <h1 className='gradient__text'>The Possibility are beyond your imagination</h1>
     <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
     <h4>Request Early Access to Get Started</h4>
    </div>
   </div>
  )
}

export default Possibility