import React from 'react';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import './App.css';

import { IMAGES } from './characterData';

function App() {
  return (
    <div className="App">
      <h1>Draggable images</h1>
      <DragDropContext>
        <Droppable droppableId="images">
          {(provided) => (
            <ul className="images" {...provided.droppableProps} ref={provided.innerRef}>
              { IMAGES.map(({ id, name, thumb }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <li
                      key={ id }
                      ref="{provided.innerRef}"
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className="images-thumb">
                        <img src={ thumb } alt={ `${ name } Thumb` } />
                      </div>
                      <p>{ name }</p>
                    </li>
                  )}
                  </Draggable>
                )
              }) }
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
