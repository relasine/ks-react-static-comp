import React, { Component } from 'react';
import './author.css'
// Create an Author component

const Author = (props) => {
  console.log(props)

  return (
    <div className='author-info'>
      <img src={props.story.authImg} className='author-image' />
      <div className='author-text'>
        <h4>{props.story.authName}</h4>
        <h4>{props.story.estTime} read</h4>
      </div>
    </div>
  )
}

export default Author;