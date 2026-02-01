import style from "./Cart.module.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {Cart, add, restar, total} = useContext(CartContext);
 
  return (
    <div className={style.cart}>
      <h1>Detalles del pedido</h1>
      <ul>
        {Cart.map((pizzaC) => (
          <li key={pizzaC.id}>
            <img src={pizzaC.img} alt={pizzaC.name} />
            <span>{pizzaC.name}</span>
            <span>${pizzaC.price.toLocaleString("es-CL")}</span>

            <button onClick={() => restar(pizzaC.id)}>-</button>
            <span>{pizzaC.count}</span>
            <button onClick={() => add(pizzaC.id)}>+</button>
          </li>
        ))}
      </ul>

      <p>Total: ${total.toLocaleString("es-CL")}</p>
      <button className={style.boutton}>Pagar</button>
    </div>
  );
}

export default Cart;
