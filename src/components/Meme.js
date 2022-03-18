import React from 'react';
import memeItems from '../memesData';

export default function Meme() {
  const [image, setImage] = React.useState(memeItems.data.memes[0].url);

  function getMemeImage() {
    const memeArr = memeItems.data.memes;
    const randomIndex = Math.floor(Math.random() * memeArr.length);
    let randomMemeURL = memeArr[randomIndex].url;
    setImage(randomMemeURL);
  }

  return (
    <main>
      <div className='meme-form'>
        <input type='text' className='form__input' placeholder='Top text' />
        <input type='text' className='form__input' placeholder='Bottom text' />
        <button className='form__button' onClick={getMemeImage}>
          Get a new Meme image
        </button>
      </div>
      <div className='meme-container'>
        <img src={image} alt='meme' />
      </div>
    </main>
  );
}
