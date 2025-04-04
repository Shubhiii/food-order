import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/img/meals.jpg";
import CartButton from "../../components/Cart/Button";

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton onClick={onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
