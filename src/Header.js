import React from 'react';
import './Header.css';
import Button from './Button.js';

const Header = (props) => {
  return (
    <div className='Header'>
      <Button buttonType='light'
              buttonText='Write A Story'/>
      <h1>{props.pageTitle}</h1>
      <Button buttonType='light'
              buttonText='Sign In/Sign Up' />
    </div>
  )
}

export default Header;
