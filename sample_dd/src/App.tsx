import React, { useState } from 'react';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import './App.css';

import { IMAGES } from './characterData';

function App() {
  const [images, updateImages] = useState(IMAGES);
  function handleOnDragEnd(result: any) {
    const items = Array.from(images);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateImages(items);
  }

  return (
    <div className="App">
      <h1>Draggable images</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="images">
          {(provided) => (
            <ul className="images" {...provided.droppableProps} ref={provided.innerRef}>
              { IMAGES.map(({ id, name, thumb }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
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
              { provided.placeholder }
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
