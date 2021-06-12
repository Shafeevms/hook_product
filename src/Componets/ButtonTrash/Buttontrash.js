import React from 'react';
import trash from './trash.svg';
import './ButtonTrash.scss';

const ButtonTrash = () => {
  return (
    <button className="btn-del">
      <img className="img-del" src={trash} />
    </button>
  );
};

export default ButtonTrash;
