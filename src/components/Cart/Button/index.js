import React from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Icon";
import CartContext from "../../../store/cart-context";

const CartButton = ({ onClick }) => {
  const [bump, setBump] = React.useState(false);
  const cartCtx = React.useContext(CartContext);

  const totalItems = cartCtx.items.reduce((currIndex, item) => {
    return currIndex + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${bump ? classes.bump : ""}`;

  React.useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBump(true);

    const timer = setTimeout(() => {
      setBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items.length]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
