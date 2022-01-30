import React from "react";
import Header from "./shared/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = React.useState(false);

  const showCartHandler = () => {
    setCartIsShown((prevState) => !prevState);
  };

  const hideCartHandler = () => {
    setCartIsShown((prevState) => !prevState);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
