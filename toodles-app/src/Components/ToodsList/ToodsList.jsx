import React from 'react';

import './ToodsList.css';

const ToodsList = ({ toods, toodles }) => {
  return (
    <div>
      <h1>toods</h1>
      {toods.map((tood) => {
        return (
          <div
            key={tood.id}
            className='toodslist__tood--container'
          >
            <div className='toodslist__tood--checkbox'></div>
            <p className='toodslist__tood--text'>{tood.text}</p>
          </div>
        )
      })}
      <h1>toodles</h1>
      {toodles.map((toodle) => {
        return (
          <div
            key={toodle.id}
            className='toodslist__toodles--container'
          >
            <div className='toodslist__tood--checkbox'></div>
            <p className='toodslist__tood--text'>{toodle.text}</p>
          </div>
        )
      })}
    </div>
  );
}

export default ToodsList;