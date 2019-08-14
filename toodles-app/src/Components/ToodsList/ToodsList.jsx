import React, { useState } from 'react';

import './ToodsList.css';

const ToodsList = ({ toods, toodles, handleNewTood, handleCompleteTood }) => {

  const [ newToodText, setNewToodText ] = useState('');
  const [ newToodDate, setNewToodDate ] = useState('');

  return (
    <div>
      <h1>toods</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleNewTood( newToodText, newToodDate );
        }}
        className='toodslist__form'
      >
        <div
          className='toodslist__container--tood'
        >
          <div className='toodslist__checkbox--tood'></div>
          <input
            className='toodslist__input--tood'
            placeholder='type tood here'
            onChange={ e => {
              setNewToodText(e.target.value);
            }}
          />
          <div className='toodslist__container--date'>
            <label for='toodDate'>due date</label>
            <input
              className='toodslist__input--tood'
              placeholder='MM/DD/YY'
              name='toodDate'
              onChange={ e => {
                setNewToodDate(e.target.value);
              }}
            />
          </div>
        </div>
        <button
          className='toodslist__button--add pointer'
          type='submit'
        >add-a-tood</button>
      </form>
      {toods.map((tood) => {
        return (
          <div
            key={tood.id}
            className='toodslist__container--tood'
          >
            <div
              className='toodslist__checkbox--tood pointer'
              data-id={tood.id}
              onClick={(e) => {
                let toodId = e.target.dataset.id;
                handleCompleteTood(toodId)
              }}
            ></div>
            <p className='toodslist__text--tood'>{tood.text}</p>
          </div>
        )
      })}
      <h1>toodles</h1>
      {toodles.map((toodle) => {
        return (
          <div
            key={toodle.id}
            className='toodslist__container--tood'
          >
            <div className='toodslist__checkbox--tood pointer'>
              <span
                className='toodslist__checkmark--tood'
                role='img'
                aria-label='heavy check mark'
              >✔️</span>
            </div>
            <p className='toodslist__text--tood'>{toodle.text}</p>
          </div>
        )
      })}
    </div>
  );
}

export default ToodsList;