import React, { useState } from 'react';
// import { Router } from '@reach/router';

import ToodsList from './Components/ToodsList/ToodsList';
import Login from './Components/Login/Login';
import Settings from './Components/Settings/Settings';

import './App.css';


const App = () => {

  const [ idCount, setIdCount ] = useState(1006);
  const [ toods, setToods ] = useState([
    {
      id: 1001,
      text: 'walk dog, even if he is not real',
      status: 'incomplete',
      dueDate: '09/25/19',
    },
    {
      id: 1003,
      text: 'water plants, they are your friends',
      status: 'incomplete',
      dueDate: '09/04/19',
    },
    {
      id: 1005,
      text: 'clip toenails',
      status: 'incomplete',
      dueDate: '08/15/19',
    },
  ]);

  const [ toodles, setToodles ] = useState([
    {
      id: 1002,
      text: 'pad cat bc she is good girl',
      status: 'complete',
      dueDate: '08/12/19',
    },
    {
      id: 1004,
      text: 'disappear for a while',
      status: 'complete',
      dueDate: '08/11/19',
    },
  ]);

  const handleNewTood = ( text, date ) => {
    return setToods([
      ...toods, {
        id: ( () => {
          let id =  idCount;
          setIdCount(idCount+1);
          return id;
        }),
        text: text,
        status: 'incomplete',
        dueDate: date,
      }
    ])
  };

  const handleCompleteTood = (id) => {
    const toodIndex = toods.findIndex( tood => tood.id.toString() === id);
    console.log(toodIndex);
    const newToodList = toods.splice(toodIndex, 1);
    console.log(newToodList);
    return setToods(newToodList);
  }

  return (
    <section className="App">
      <ToodsList
        toods={toods}
        toodles={toodles}
        handleNewTood={handleNewTood}
        handleCompleteTood={handleCompleteTood}
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
