import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = useState({ order: [] });

  function addToCart(dish) {
    const newCart = [...cart, dish];
    setCart({ order: newCart });
    localStorage.setItem("@food-explorer:cart", JSON.stringify(cart));
  }

  function removeFromCart(index) {
    const newCart = cart.filter((_, i) => i !== index);
    setCart({ order: newCart });
    localStorage.setItem("@food-explorer:cart", JSON.stringify(cart));
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