import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  useEffect(() => {}, []);
  const [cart, setCart] = useState([]);
  const [reloadKey, setReloadKey] = useState(1);

  const addToCart = (item, qty, price) => {
    let newCart = cart;
    for (let index = 0; index < qty; index++) {
      newCart.push([, price]);
    }
    setCart(newCart);
    setReloadKey(Math.random());
  };
  const removeFromCart = (item, qty) => {
    let newCart = cart;
    let index = newCart.indexOf(item);
    newCart.splice(index);
    setCart(newCart);
  };
  const clearCart = (item) => {
    setCart([]);
  };

  return (
    <>
      <Navbar key={reloadKey} cart={cart} />
      <Component
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        {...pageProps}
      />
      <Footer />
    </>
  );
}

export default MyApp;
