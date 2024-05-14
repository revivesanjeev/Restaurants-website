import { useState } from "react";

import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemToCartHandler = (item) => {
    const updatedItems = [...items, item];
    updateItems(updatedItems);
    console.log("inside addItemToCartHandler", updatedItems);
  };


  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items:items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
