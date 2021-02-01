import React from 'react';
import styled from 'styled-components';

import './App.css';

import { IMAGES } from './characterData';

function App() {
  return (
    <div className="App">
      <h1>Draggable images</h1>
      <ul className="images">
        { IMAGES.map(({ id, name, thumb }) => {
          return (
            <li key={ id }>
              <div className="images-thumb">
                <img src={ thumb } alt={ `${ name } Thumb` } />
              </div>
              <p>{ name }</p>
            </li>
          )
        }) }
      </ul>
    </div>
  );
}

export default App;
