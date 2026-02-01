import style from "./NotFound.module.css"

function NotFound () {
    return(
      <div className={style.notFound}>
        <div>
        <h1>Pagina no encontrada</h1>
        <h2>Lo siento Amigo pero esta Pagina no existe Mas</h2>

        </div >
        <div className={style.border}>
            <button>Ir a pizzas.com</button>
        </div>
      </div>  
    );

};

export default NotFound;