import React from 'react';
import './Author.css';
// Create an Author component
const Author = (props) => {
  return (
<div className='author-info'>
  <img src={props.authImg} className='author-image' alt=''/>
  <div className='author-info-text'>
    <h4 className="author-text">{props.authName}</h4>
    <h4 className="author-text">{props.estTime} read</h4>
  </div>
</div>
)
}

export default Author;