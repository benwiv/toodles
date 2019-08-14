import React, { useState } from 'react';
// import { Router } from '@reach/router';

import ToodsList from './Components/ToodsList/ToodsList';
import Login from './Components/Login/Login';
import Settings from './Components/Settings/Settings';

import './App.css';


const App = () => {

  const [ toods, setToods ] = useState([
    {
      id: 1001,
      text: 'walk dog, even if he is not real',
      status: 'incomplete',
    },
    {
      id: 1003,
      text: 'water plants, they are your friends',
      status: 'incomplete',
    },
    {
      id: 1005,
      text: 'clip toenails',
      status: 'incomplete',
    },
  ]);

  const [ toodles, setToodles ] = useState([
    {
      id: 1002,
      text: 'pad cat bc she is good girl',
      status: 'complete',
    },
    {
      id: 1004,
      text: 'disappear for a while',
      status: 'complete',
    },
  ]);

  return (
    <section className="App">
      <ToodsList
        toods={toods}
        toodles={toodles}
      />
      <section className='app__container--right'>
        <Settings
        />
        <Login
        />
      </section>
    </section>
  );
}

export default App;
