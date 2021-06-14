import React from 'react';
import Header from '../Header';
import trash from '../img/trash.svg';
import PromoSuccess from '../success';
import Delivery from '../Delivery/Delivery';

const Cart = () => {
  return (
    <>
      <Header />
      <div className="cart">
        <div className="cart__address">
          <h2 className="cart__address_title cart__title">Delivery address</h2>
          <img src={trash} />
        </div>
        <div className="cart__address_form">
          {/* <CartInput /> */}
          <input className="cart__address_input" />
          <input className="cart__address_input" placeholder="Floor" />
          <input className="cart__address_input" placeholder="Block" />
        </div>
        <div className="cart__product_list product_list">
          <h2 className="cart__title"></h2>
          <ul className="product_list__list">
            <li className="product_list__item"></li>
            <li className="product_list__item"></li>
            <li className="product_list__item"></li>
          </ul>
        </div>
        <div className="cart__payment payment">
          <h2 className="cart__title"></h2>
          <div className="payment__promo">
            <input placeholder="GHYU9007H" />
            <PromoSuccess />
          </div>
          <div className="cart__order">
            <h2 className="cart__order_title"></h2>
            <h2 className="cart__order_title"></h2>
            <h2 className="cart__order_title cart__order_title-red"></h2>
            <h2 className="cart__order_title cart__order_title-big"></h2>
          </div>
        </div>
        <Delivery />
      </div>
    </>
  );
};

export default Cart;
