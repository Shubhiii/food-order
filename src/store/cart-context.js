import React from "react";

const ctx = {
  items: [],
  totalAmount: 0,
  addItem: (item) => null,
  removeItem: (id) => null,
};

const CartContext = React.createContext(ctx);

export default CartContext;
