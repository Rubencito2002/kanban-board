import React from 'react';
import './styles/App.css';
import Board from './components/Board/Board';

function App() {
  return (
    <div className="container">
      <h1 className="text-center my-4">Tablero Kanban</h1>
      <Board />
    </div>
  );
}

export default App;
