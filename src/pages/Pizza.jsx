import style from "./pizza.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Pizza () {
  const {id} = useParams();
const [laPizza, setLaPizza] = useState({ingredients: [] });


  async function getPizza() {
    const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
    const data = await res.json();
    setLaPizza((prev)=>({
      ...prev,
      ...data
    }));
  }

  useEffect(() => {
    getPizza();
  }, [id]);



  return (
    <>
      <div className={style.card}>
        <div className={style.cardHeader}>
          <img src={laPizza.img} alt="" />
        </div>

        <div className={style.cardMain}>
          <h1>{laPizza.name}</h1>
          <ul>
            {laPizza.ingredients.map((ides)=>(
              <li key={ides}>{ides}</li>
            ))}
         
          </ul>
          <p>{laPizza.desc}</p>
        </div>

        <div className={style.cardFooter}>
          <p>${laPizza.price}</p>
          <div>
            <button>ver mas</button>
            <button>añadir</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pizza;
