import Header from "../components/Header";
import Card from "../components/CardPiza";
import styleHome from "./Home.module.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Home() {
  const { pizzaCart} = useContext(CartContext);

  return (
    <>
      <Header />
      <div className={styleHome.cards}>
        {pizzaCart.map((pizza) => (
          <div key={pizza.id} className={styleHome.row}>
            <Card
              id={pizza.id}
              img={pizza.img}
              ingredients={pizza.ingredients}
              descripcion={pizza.desc}
              name={pizza.name}
              price={pizza.price}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
