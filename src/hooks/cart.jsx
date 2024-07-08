import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = useState({ order: [] });

  function addToCart(dish) {
    const newCart = { order: [...cart.order, dish] };
    setCart(newCart);
    localStorage.setItem("@food-explorer:cart", JSON.stringify(newCart));
  }

  function removeFromCart(index) {
    const newCart = { order: cart.filter((_, i) => i !== index) };
    setCart(newCart);
    localStorage.setItem("@food-explorer:cart", JSON.stringify(newCart));
  }

  useEffect(() => {
    const localStorageCart = localStorage.getItem("@food-explorer:cart");
    if(localStorageCart) {
      setCart(JSON.parse(localStorageCart));
    }
  }, []);

  return (
    <CartContext.Provider value={{ addToCart, removeFromCart, cart }}>
      { children }
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  return context;
}

export { CartProvider, useCart };