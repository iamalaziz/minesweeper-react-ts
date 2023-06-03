import React from 'react';
import Timer from './Timer/Timer';
import Counter from './BombsCount/Counter';

const InfoBar: React.FC = () => {
  return (
    <div className="info-bar">
      <button className="">
        <Counter />
      </button>
      <div>😄</div>
      <button>
        <Timer />
      </button>
    </div>
  );
};

export default InfoBar;
