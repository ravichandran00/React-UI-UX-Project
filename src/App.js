import React from 'react'
import { Footer, Blog, Header, Feature, WhatGPT, Possibility } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <>
      <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT />
        <Feature />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </>

  )
}

export default App