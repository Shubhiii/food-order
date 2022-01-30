import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "../Form";
import CartContext from "../../../store/cart-context";

const MealItem = ({ price, name, description, id }) => {
  const ctx = React.useContext(CartContext);

  const handleAdd = (amount) => {
    ctx.addItem({
      id: id,
      name: name,
      price: price,
      amount: amount,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>$ {price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm onAdd={handleAdd} id={id} />
      </div>
    </li>
  );
};

export default MealItem;
