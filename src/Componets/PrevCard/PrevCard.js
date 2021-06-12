import React from 'react';
import favorite from '../img/favorites-white.svg';
import contentImg from '../img/eggs.png';
import AddToCart from '../AddToCart/AddtoCart';
import './PrevCard.scss';

const PrevCard = () => {
  return (
    <div className="prev">
      <img className="prev__favorite" src={favorite} />
      <img className="prev__img" src={contentImg} />
      <div className="prev__wrapper">
        <p className="prev__description">Best-in 10 British Big Eggs</p>
        <h3 className="prev__unit_price">1 pc / £1.59</h3>
        <div className="prev__add_to_cart">
          <h3 className="prev__title_price ">£1.59</h3>
          <AddToCart />
        </div>
      </div>
    </div>
  );
};

export default PrevCard;
