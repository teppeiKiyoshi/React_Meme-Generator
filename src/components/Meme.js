import React from 'react';
import memeItems from '../memesData';

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemeImages, setAllMemeImages] = React.useState(
    memeItems.data.memes
  );

  function getMemeImage() {
    const memeArr = memeItems.data.memes;
    const randomIndex = Math.floor(Math.random() * memeArr.length);
    let randomMemeURL = memeArr[randomIndex].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: randomMemeURL,
    }));
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
        <img src={meme.randomImage} alt='meme' />
      </div>
    </main>
  );
}
