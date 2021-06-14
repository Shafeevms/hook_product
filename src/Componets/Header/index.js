import React from 'react';
import arrow from './arrow.svg';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header__top">
        <img className="header__img" src={arrow} />
        <h2 className="header__title">Milk & Cheese</h2>
      </div>
      <div className="header__bottom"></div>
    </div>
  );
};

export default Header;
