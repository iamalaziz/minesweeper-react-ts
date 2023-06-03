import React from 'react';
import Timer from './Timer/Timer';
import Counter from './BombsCount/Counter';

const Header: React.FC = () => {
  return (
    <>
      <Counter />
      <div>😄</div>
      <Timer />
    </>
  );
};

export default Header;
