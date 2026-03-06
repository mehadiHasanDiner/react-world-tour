import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <img style={{ width: "100px" }} src={cart.flags?.png} alt="" />
      <p>Country name: {cart?.name?.common}</p>
      <button onClick={() => handleRemoveFromCart(cart.cca3)}>
        Remove Country
      </button>
    </div>
  );
};

export default Cart;
