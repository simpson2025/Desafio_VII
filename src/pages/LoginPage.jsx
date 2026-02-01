import style from "./LoginPage.module.css";
import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");

  function handleSubmit(e) {
    e.preventDefault()
    if (!email || !contraseña) {
      alert("hay que remplir todo el cuestionario")
      return;
    }

    if (contraseña.length < 6) {
      alert(" debes escribir mas de 6 letras")
      return;
    }
    alert ('usuario logado')
  }

  return (
    <div className={style.formulario}>
      <h2>LoginPage</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mail">Mail</label>
        <input
          id="mail"
          type="text"
          placeholder="Mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />

        <label htmlFor="password">password</label>
        <input
          id="password"
          type="text"
          placeholder="password"
          value={contraseña}
          onChange={(e) => {
            setContraseña(e.target.value)
          }}
        />

        <button>Enviar</button>
      </form>
    </div>
  );
}

export default LoginPage;
