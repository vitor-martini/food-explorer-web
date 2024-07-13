import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./auth";

export const CartContext = createContext({});

function CartProvider({ children }) {
  const { user } = useAuth();
  const [cart, setCart] = useState({ order: [] });

  function addToCart(dish) {
    const newCart = { order: [...cart.order, dish] };
    setCart(newCart);
    localStorage.setItem(`@food-explorer:cart-${user.id}`, JSON.stringify(newCart));
  }

  function removeFromCart(index) {
    const newCart = { order: cart.filter((_, i) => i !== index) };
    setCart(newCart);
    localStorage.setItem(`@food-explorer:cart-${user.id}`, JSON.stringify(newCart));
  }

  useEffect(() => {
    if(!user || !user.id) {
      return;
    }

    const localStorageCart = localStorage.getItem(`@food-explorer:cart-${user.id}`);
    if(localStorageCart) {
      setCart(JSON.parse(localStorageCart));
    } else {
      setCart({ order: [] });
    }
  }, [user]);

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