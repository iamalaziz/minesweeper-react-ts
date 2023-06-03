import React from 'react';
import Header from '../Header/Header';


const App: React.FC = () => {
  return (
    <>
      <div className="app">
        <div className="app__header">
          <Header />
        </div>
        <div className="app__board">Board</div>
      </div>
    </>
  );
};

export default App;
