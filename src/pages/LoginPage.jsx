import style from "./LoginPage.module.css";
import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState("");

  const { login } = useUser();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setMensaje("");

    if (!email || !contraseña) {
      setMensaje("Il faut remplir tous les champs");
      return;
    }

    if (contraseña.length < 6) {
      setMensaje("Le mot de passe doit avoir au moins 6 caractères");
      return;
    }

    // 👉 appel réel au backend
    const success = await login(email, contraseña);

    if (success) {
      navigate("/profile");
    } else {
      setMensaje("Email ou mot de passe incorrect");
    }
  }

  return (
    <div className={style.formulario}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="mail">Mail</label>
        <input
          id="mail"
          type="text"
          placeholder="Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default LoginPage;
