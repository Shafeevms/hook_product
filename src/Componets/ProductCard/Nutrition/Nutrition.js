import React from 'react';
import './nutrition.scss';
import arrow from './img/up.svg';

const Nutrition = () => {
  return (
    <div className="product_description">
      <div className="product_desription__block block">
        <h2 className="block__title ">Nutrition</h2>
        <p className="block__text1 ">Lorem ipsum dolor sit amet, <strong>consectetur adipiscing</strong> elit. Ultrices at egestas tempus duis egestas semper dolor <strong>morbi purus.</strong> Lorem ipsum dolor sit amet, <strong>consectetur adipiscing</strong> elit. Ultrices at egestas tempus duis egestas semper dolor <strong>morbi purus.</strong></p>
        <ul className="block__list">
          <li className="block__item">Lorem ipsum dolor sit amet</li>
          <li className="block__item">Consectetur adipiscing elit</li>
          <li className="block__item">Ultrices at egestas tempus</li>
          <li className="block__item">Duis egestas semper dolor morbi purus.</li>
        </ul>
      </div>
      <div className="product_description__composition composition product-desription__block block">
        <ul className="composition__list">
          <li className="composition__item">
            <h2 className="composition__title">28</h2>
            <h3 className="composition__descr">Kkal.</h3>
            <div className="composition__wrap">
              <div className="composition__card">4%RI</div>
              <div className="composition__card composition__card-green">Low</div>
            </div>
          </li>
          <li className="composition__item">
            <h2 className="composition__title">1.3 g</h2>
            <h3 className="composition__descr">Proteins</h3>
            <div className="composition__wrap">
              <div className="composition__card">10% RI</div>
            </div>
          </li>
          <li className="composition__item">
            <h2 className="composition__title">0 g</h2>
            <h3 className="composition__descr">Fats</h3>
            <div className="composition__wrap">
              <div className="composition__card">12% RI</div>
            </div>
          </li>
          <li className="composition__item">
            <h2 className="composition__title">28</h2>
            <h3 className="composition__descr">Carbs</h3>
            <div className="composition__wrap">
              <div className="composition__card">10% RI</div>
            </div>
          </li>
          <li className="composition__item">
            <h2 className="composition__title">6,4 mg</h2>
            <h3 className="composition__descr">Niacin</h3>
            <div className="composition__wrap">
              <div className="composition__card">40% RI</div>
            </div>
          </li>
          <li className="composition__item">
            <h2 className="composition__title">0,8 g</h2>
            <h3 className="composition__descr">Vitamin B6</h3>
            <div className="composition__wrap">
              <div className="composition__card">57% RI</div>
            </div>
          </li>
          <li className="composition__item">
            <h2 className="composition__title">0 g</h2>
            <h3 className="composition__descr">Fats</h3>
            <div className="composition__wrap">
              <div className="composition__card">12% RI</div>
            </div>
          </li>
          <li className="composition__item">
            <h2 className="composition__title">28</h2>
            <h3 className="composition__descr">Carbs</h3>
            <div className="composition__cards_wrap">
              <div className="composition__card">10% RI</div>
            </div>
          </li>
        </ul>
        <div className="composition__wrapper">
          <button className="composition__btn">Hide</button>
          <img className="composition__arrow" src={arrow} />
        </div>
      </div>
      <div className="product_description__block block">
        <h2 className="block__title ">Ingridients</h2>
        <p className="block__text1-margin0 ">Lorem ipsum dolor sit amet, <strong>consectetur adipiscing</strong> elit. Ultrices at egestas tempus duis egestas semper dolor <strong>morbi purus.</strong></p>
      </div>
      <div className="other">
        <h2 className="other__title">Other</h2>
        <table className="other__table table">
          <tr>
            <td className="table__name">Страна производства</td>
            <td className="table__descr">Россия</td>
          </tr>
          <tr>
            <td className="table__name">Состав</td>
            <td className="table__descr">цельное молоко</td>
          </tr>
          <tr>
            <td className="table__name">Срок годности</td>
            <td className="table__descr">12 дн</td>
          </tr>
          <tr>
            <td className="table__name">Изготовитель</td>
            <td className="table__descr">ОАО Компания &ldquo;Юнимилк&rdquo;</td>
          </tr>
          <tr>
            <td className="table__name">Жирность</td>
            <td className="table__descr">4.5%</td>
          </tr>
          <tr>
            <td className="table__name">Содержание лактозы</td>
            <td className="table__descr">обычное (более 1% лактозы)</td>
          </tr>
          <tr>
            <td className="table__name">Витаминизированное/
обогащенное</td>
            <td className="table__descr">нет</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Nutrition;
