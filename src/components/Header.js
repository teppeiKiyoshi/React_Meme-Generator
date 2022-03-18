import React from 'react';
import logo from '../images/troll-face.png';

export default function Header() {
  return (
    <header className='header-main'>
      <div className='header-wrapper'>
        <div className='header-content'>
          <img src={logo} alt='troll-face' />
          <h2>Meme Generator</h2>
        </div>
        <div className='sub-header'>
          <h3>React Course - Project 3</h3>
        </div>
      </div>
    </header>
  );
}
