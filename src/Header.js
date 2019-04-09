
import React, { useContext} from 'react';
import {cartContext} from "./index";

const Header = (props) => {
  const [ cart, updateCart ] = useContext (cartContext);
  return (
    <div className="header">

      <h1> Market</h1>
      <div className="cart">
      <div className="count"> {cart}</div>
      <img src="http://www.logospng.com/images/104/shopping-cart-flat-icon-page-3-104468.png" alt="cart"/>
      </div>
     
    </div>
  );
};

export default Header;
