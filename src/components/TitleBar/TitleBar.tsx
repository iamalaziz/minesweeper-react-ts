import React from 'react';
import Logo from '../../assets/images/logo.png';
import ExitIcon from '../../assets/images/exit-icon.png';
import HideIcon from '../../assets/images/hide-icon.png';
import FullScreenIcon from '../../assets/images/full-screen-icon.png';

const TitleBar: React.FC = () => {
  return (
    <div className="bar">
      <div className="bar__content">
        <div className="bar__logo-icon">
          <img src={Logo} alt="Logo Icon" />
        </div>
        <h1 className="bar__title">Minesweeper</h1>
      </div>
      <div className='bar__navigation nav'>
        <button className="nav__btn--hide">
          <img src={HideIcon} alt="Hide Icon" />
        </button>
        <button className="nav__btn">
          <img src={FullScreenIcon} alt="FullScreenIcon" />
        </button>
        <button className="nav__btn">
          <img src={ExitIcon} alt="Exit Icon" />
        </button>
      </div>
    </div>
  );
};

export default TitleBar;
