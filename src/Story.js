
import React from 'react';
import Button from './Button';
import './Story.css';
import Author from './Author';

const Story = (props) => {
  console.log(props)
  return (
    <div className='Story'>
      <img src={props.story.img} />
      <div className='story-info'>
        <div>
          <h3>{props.story.title}</h3>
          <p>{props.story.desc}</p>
        </div>
        <Author key={props.authName} story={props.story}/>
      </div>
    </div>
  )
}

export default Story;
