import { createContext } from "react";

import { useState, useEffect } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [pizzaCart, setPizzaCart] = useState([]);
  const [Cart, setCart] = useState([]);

  async function getPizzas() {
    const res = await fetch("http://localhost:5000/api/pizzas");
    const data = await res.json();
    const pizzasLocas = data.map((pizza) => ({ ...pizza, count: 0 }));
    setPizzaCart(pizzasLocas);
  }

  useEffect(() => {
    getPizzas();
  }, []);

function add(id) {
  setCart((previousCart) => {
    const pizzaExiste = previousCart.find((element) => element.id === id);

    if (pizzaExiste) {
      return previousCart.map((element) => {
        if (element.id === id) {
          return { ...element, count: element.count + 1 };
        }
        return element;
      });
    } else {
      const pizzaTrouvee = pizzaCart.find((element) => element.id === id);
      if (pizzaTrouvee) {
        return [...previousCart, { ...pizzaTrouvee, count: 1 }];
      }
      return previousCart;
    }
  });
}

  function restar(id) {
    setCart((previousCart) => {
      return previousCart
        .map((element) => {
          if (element.id === id) {
            const next = Math.max(0, element.count - 1);
            return { ...element, count: next };
          }
          return element;
        })
        .filter((element) => element.count > 0);
    });
  }

  const total = Cart.reduce(
    (sum, elemento) => sum + elemento.price * elemento.count,
    0
  );

  return (
    <CartContext.Provider value={{ pizzaCart, Cart, add, restar, total }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext };
