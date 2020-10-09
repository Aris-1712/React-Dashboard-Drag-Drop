import React from 'react';

import './App.css';
import PlaceHolder from './Components/PlaceHolder';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
      <PlaceHolder></PlaceHolder>
      </DndProvider>
    </div>
  );
}

export default App;
