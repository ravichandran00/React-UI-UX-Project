import React from 'react'
import './articles.css';


const Articles = ({imgURL ,date ,text}) => {
  return (
    <div className='gpt__blog-container_articles'>
      <div className='gpt__blog-container_articles-image'>
        <img src={imgURL} alt='Blog' />
      </div>
      <div className='gpt__blog-container_articles-content'>
       <div> 
        <p>{date}</p>
        <h3>{text}</h3>
       </div>
       <p>Read Full Articles</p>
      </div>
    </div>
  )
}

export default Articles