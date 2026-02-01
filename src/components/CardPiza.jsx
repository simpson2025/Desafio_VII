import styleCard from "./CardPiza.module.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const Card = ({ id, img, name, ingredients, price,descripcion}) => {
  const {add} = useContext(CartContext)
  const dinerin= Number(price).toLocaleString("es-CL");
  return (
    <>
      <div className={styleCard.carta}>
        <div className={styleCard.imageWrapper}>
          <img src={img} alt="" />
        </div>

        <div className={styleCard.cuerpo}>
          <h1> {name} </h1>
          <ul>
            {ingredients.map((ides)=>(
              <li key={ides}>{ides}</li>
            ))}
          </ul>

          <p>{descripcion}</p>
        </div>

        <div>
          <p>${dinerin}</p>
          <div className={styleCard.botones}>
          <button>ver mas</button>
          <button onClick={() => add(id)}>añadir</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;



