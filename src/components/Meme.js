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

  const [inputData, setInputData] = React.useState({
    topText: '',
    bottomText: '',
  });

  console.log(inputData);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputData((prevInputData) => ({
      ...prevInputData,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className='meme-form'>
        <input
          type='text'
          className='form__input'
          placeholder='Top text'
          onChange={handleChange}
          name='topText'
          value={inputData.topText}
        />
        <input
          type='text'
          className='form__input'
          placeholder='Bottom text'
          onChange={handleChange}
          name='bottomText'
          value={inputData.bottomText}
        />
        <button className='form__button' onClick={getMemeImage}>
          Get a new Meme image
        </button>
      </div>
      <div className='meme-container'>
        <img src={meme.randomImage} alt='meme' />
        <h2 className='meme--text top'>{inputData.topText}</h2>
        <h2 className='meme--text bottom'>{inputData.bottomText}</h2>
      </div>
    </main>
  );
}
