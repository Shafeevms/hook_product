import React from 'react';
import cart from './cart.svg';

const styles =  {
  padding: '0',
  width: '38px',
  height: '38px',
  border: 'none',
  backgroundColor: 'transparent'
};

const AddtoCart = () => {
  return (
    <button style={styles}>
      <img src={cart}/>
    </button>
  );
};

export default AddtoCart;
