import React from 'react';
import plus from './plus_.svg';
import './ButtonPlus.scss';

const ButtonPlus = () => {
  return (
    <button className="add-unit">
      <img src={plus} />
    </button>
  );
};

export default ButtonPlus;
