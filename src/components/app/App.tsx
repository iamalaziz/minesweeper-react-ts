import React from 'react';
import Board from '../Board/Board';
import InfoBar from '../InfoBar/InfoBar';
import Menu from '../Menu/Menu';
import TitleBar from '../TitleBar/TitleBar';

const App: React.FC = () => {
  return (
    <>
      <div className="app">
        <TitleBar />
        <Menu />
        <div className="app__board-container">
          <InfoBar />
          <Board />
        </div>
      </div>
    </>
  );
};

export default App;
