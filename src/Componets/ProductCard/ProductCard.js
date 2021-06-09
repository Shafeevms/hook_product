import React from 'react';
import Nutrition from './Nutrition/Nutrition';
import des1 from './img/1.svg';
import des2 from './img/2.svg';
import des3 from './img/3.svg';
import contentImg from './img/bottle.png';
import plus from './img/plus_.svg';
import trash from './img/trash.svg';
import favorite from './img/favorites.svg';
import './ProductCard.scss';

const ProductCard = () => {
  return (
    <>
      <div className="card">
        <img className="card__favorite" src={favorite} />
        <div className="card__head head">
          <ul className="head__list">
            <li className="head__item"><img src={des3} /></li>
            <li className="head__item"><img src={des2} /></li>
            <li className="head__item"><img src={des1} /></li>
          </ul>
          <button className="head__btn">+3</button>
        </div>
        <img className="card__img" src={contentImg} />
        <div className="card__wrapper">
          <p className="card__description ">Just Milk Semi-Skimmed 6 x 1L (Case of 2)</p>
          <h3 className="card__unit_price ">1 pc / £1.59</h3>
          <div className="card__add_to_cart">
            <h3 className="card__title_price ">£1.59</h3>
            <button className="card__btn_del"><img className="card__img_del" src={trash} /></button>
            <span className="card__units_quantity">2</span>
            <button className="card__add_unit"><img src={plus} /></button>
          </div>
          <nav className="card__navigation nav">
            <ul className="nav__list">
              <li className="nav__item">Nutrition</li>
              <li className="nav__item">Ingredients</li>
              <li className="nav__item">Other</li>
            </ul>
          </nav>
        </div>
      </div>
      {/* <BuyMore /> */}
      <Nutrition />
      {/* <Ingredients />
      <Other /> */}
    </>
  );
};

export default ProductCard;
