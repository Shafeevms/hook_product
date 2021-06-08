import React from 'react';
import arrow from './arrow.svg';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <img className="header__img" src={arrow}/>
      <h2 className="header__title">Milk & Cheese</h2>
    </div>
  );
};

export default Header;
