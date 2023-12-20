import React from 'react'
import './whatgpt.css';
import  Feature  from '../../components/feature/Feature';

const WhatGPT = () => {
  return (
   <div className='gpt__whatgpt section__margin' id='whatgpt'>
    <div className='gpt__whatgpt-feature'>
      <Feature title="What is GPT" text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."/>
    </div>
    <div className='gpt__whatgpt-heading'>
      <h1 className='gradient__text'>The Possibilities are beyond your imagination</h1>
      <p>Explore the library</p>
    </div>
    <div className='gpt__whatgpt-container-feature'>
      <Feature title="Chatbots" text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "/>
      <Feature title="Knowledgebase" text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "/>
      <Feature title="Education" text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "/>
    </div>
    </div>
  )
}

export default WhatGPT