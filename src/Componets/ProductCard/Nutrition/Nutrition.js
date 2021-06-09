import React from 'react';
import './nutrition.scss';

const Nutrition = () => {
  return (
    <div className="product_desription">
      <div className="product_desription__block block">
        <h2 className="block__title ">Nutrition</h2>
        <p className="block__text1 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices at egestas tempus duis egestas semper dolor morbi purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices at egestas tempus duis egestas semper dolor morbi purus.</p>
        <ul className="block__list">
          <li className="block__item">Lorem ipsum dolor sit amet</li>
          <li className="block__item">Consectetur adipiscing elit</li>
          <li className="block__item">Ultrices at egestas tempus</li>
          <li className="block__item">Duis egestas semper dolor morbi purus.</li>
        </ul>
      </div>
      <div className="product_description__composition composition product-desription__block">
        <ul className="composition__list">
          <li className="composition__item"></li>
          <li className="composition__item"></li>
          <li className="composition__item"></li>
          <li className="composition__item"></li>
          <li className="composition__item"></li>
          <li className="composition__item"></li>
          <li className="composition__item"></li>
          <li className="composition__item"></li>
        </ul>
        <button className="composition__btn">Hide</button>
      </div>
      <div className="product-desription__block block">
        <h2 className="block__title ">Ingridients</h2>
        <p className="block__text1-margin0 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices at egestas tempus duis egestas semper dolor morbi purus.</p>
      </div>
    </div>
  );
};

export default Nutrition;
